const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Admin password (change this for security)
const ADMIN_PASSWORD = 'admin123';

// Per-room durations (ms)
const roomDurations = {
  1: 300000, // 5 min
  2: 600000, // 10 min (Room 2 puzzle + maze)
  3: 600000, // 10 min for Code Mirror Room
  4: 300000, // 5 min
  5: 600000  // 10 min for Final Coding Vault
};

function getRoomDuration(room) {
  return roomDurations[room] || 300000;
}

// Game state
let gameState = {
  isRunning: false,
  startTime: null,
  currentRoom: 1,
  totalRooms: 5,
  roomDuration: getRoomDuration(1),
  participants: {},
  roomStartTimes: {}
};

// Event history storage
let eventHistory = [];

let roomTimerId = null;

// Serve static files with no cache
app.use(express.static('public', {
  setHeaders: (res, path) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Socket.io connection
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Send current game state to new connection
  socket.emit('gameState', gameState);

  // Admin authentication
  socket.on('adminAuth', (password) => {
    if (password === ADMIN_PASSWORD) {
      socket.emit('authSuccess');
      socket.join('admins');
    } else {
      socket.emit('authFailed');
    }
  });

  // Start event
  socket.on('startEvent', () => {
    gameState.isRunning = true;
    gameState.startTime = Date.now();
    gameState.currentRoom = 1;
    gameState.roomStartTimes[1] = Date.now();
      gameState.roomDuration = getRoomDuration(1);
    
    // Broadcast to all clients
    io.emit('eventStarted', {
      startTime: gameState.startTime,
      currentRoom: 1,
      roomStartTime: gameState.roomStartTimes[1]
    });
    
    console.log('Event started at:', new Date(gameState.startTime));
    
    // Auto-advance rooms every 5 minutes
    startRoomTimer();
  });

  // Stop event
  socket.on('stopEvent', () => {
    if (roomTimerId) {
      clearTimeout(roomTimerId);
      roomTimerId = null;
    }
    gameState.isRunning = false;
    gameState.startTime = null;
    gameState.currentRoom = 1;
    gameState.roomStartTimes = {};
    io.emit('eventStopped');
    console.log('Event stopped');
  });

  // Reset event
  socket.on('resetEvent', () => {
    if (roomTimerId) {
      clearTimeout(roomTimerId);
      roomTimerId = null;
    }
    gameState = {
      isRunning: false,
      startTime: null,
      currentRoom: 1,
      totalRooms: 5,
      roomDuration: 300000, // 5 minutes
      participants: {},
      roomStartTimes: {}
    };
    io.emit('eventReset');
    console.log('Event reset');
  });

  // Force next room (Admin only)
  socket.on('forceNextRoom', () => {
    if (gameState.isRunning && gameState.currentRoom < gameState.totalRooms) {
      // Clear existing timer
      if (roomTimerId) {
        clearTimeout(roomTimerId);
        roomTimerId = null;
      }
      
      gameState.currentRoom++;
      gameState.roomStartTimes[gameState.currentRoom] = Date.now();
      gameState.roomDuration = getRoomDuration(gameState.currentRoom);
      
      io.emit('roomChanged', {
        currentRoom: gameState.currentRoom,
        roomStartTime: gameState.roomStartTimes[gameState.currentRoom]
      });
      
      console.log(`Force advanced to room ${gameState.currentRoom}`);
      startRoomTimer(); // Schedule next room
    } else if (gameState.isRunning && gameState.currentRoom >= gameState.totalRooms) {
      // Force finish
      if (roomTimerId) {
        clearTimeout(roomTimerId);
        roomTimerId = null;
      }
      io.emit('eventCompleted');
      gameState.isRunning = false;
      console.log('Force event completed');
    }
  });

  // Get game state for admin
  socket.on('getGameState', () => {
    socket.emit('gameState', gameState);
  });

  // Participant registration
  socket.on('registerParticipant', (data) => {
    gameState.participants[socket.id] = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      currentRoom: gameState.currentRoom,
      roomProgress: {},
      unlockedKeys: [],
      connectedAt: Date.now()
    };
    socket.emit('registered', {
      participantId: socket.id,
      gameState: gameState
    });
  });

  // Submit answer
  socket.on('submitAnswer', (data) => {
    const participant = gameState.participants[socket.id];
    if (participant) {
      if (!participant.roomProgress[data.room]) {
        participant.roomProgress[data.room] = [];
      }
      participant.roomProgress[data.room].push({
        question: data.questionId,
        answer: data.answer,
        correct: data.correct || false,
        timestamp: Date.now()
      });
      
      // Broadcast progress to admins
      io.to('admins').emit('participantProgress', {
        participantId: socket.id,
        participantName: participant.name,
        room: data.room,
        progress: participant.roomProgress[data.room].length
      });
    }
  });

  // Unlock special key
  socket.on('unlockKey', (data) => {
    const participant = gameState.participants[socket.id];
    if (participant) {
      if (!participant.unlockedKeys) participant.unlockedKeys = [];
      participant.unlockedKeys.push({
        key: data.key,
        room: data.room,
        score: data.score,
        unlockedAt: Date.now()
      });
      
      console.log(`${participant.name} unlocked key: ${data.key} (Room ${data.room}, Score: ${data.score})`);
      
      // Broadcast to admins
      io.to('admins').emit('keyUnlocked', {
        participantId: socket.id,
        participantName: participant.name,
        key: data.key,
        room: data.room,
        score: data.score
      });
    }
  });

  // Get time remaining
  socket.on('getTimeRemaining', () => {
    if (gameState.isRunning && gameState.roomStartTimes[gameState.currentRoom]) {
      const roomStartTime = gameState.roomStartTimes[gameState.currentRoom];
      const elapsed = Date.now() - roomStartTime;
      const remaining = Math.max(0, getRoomDuration(gameState.currentRoom) - elapsed);
      socket.emit('timeRemaining', {
        remaining: remaining,
        currentRoom: gameState.currentRoom
      });
    }
  });

  // Save current event snapshot to history
  socket.on('saveEventHistory', () => {
    const snapshot = buildEventSnapshot();
    eventHistory.push(snapshot);
    io.to('admins').emit('eventHistoryUpdated', eventHistory);
    console.log('Event snapshot saved to history');
  });

  // Get event history
  socket.on('getEventHistory', () => {
    socket.emit('eventHistoryData', eventHistory);
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    // Don't delete participants on disconnect so history is preserved
  });
});

// Room timer function
function startRoomTimer() {
  if (!gameState.isRunning) return;
  
  if (roomTimerId) clearTimeout(roomTimerId);

  roomTimerId = setTimeout(() => {
    if (gameState.isRunning && gameState.currentRoom < gameState.totalRooms) {
      gameState.currentRoom++;
      gameState.roomStartTimes[gameState.currentRoom] = Date.now();
      gameState.roomDuration = getRoomDuration(gameState.currentRoom);
      
      io.emit('roomChanged', {
        currentRoom: gameState.currentRoom,
        roomStartTime: gameState.roomStartTimes[gameState.currentRoom]
      });
      
      console.log(`Advanced to room ${gameState.currentRoom}`);
      startRoomTimer(); // Schedule next room
    } else if (gameState.isRunning && gameState.currentRoom >= gameState.totalRooms) {
      // Event completed
      io.emit('eventCompleted');
      gameState.isRunning = false;
      console.log('Event completed');
    }
  }, getRoomDuration(gameState.currentRoom));
}

// Sync timer broadcast (every second)
setInterval(() => {
  if (gameState.isRunning && gameState.roomStartTimes[gameState.currentRoom]) {
    const roomStartTime = gameState.roomStartTimes[gameState.currentRoom];
    const elapsed = Date.now() - roomStartTime;
    const remaining = Math.max(0, getRoomDuration(gameState.currentRoom) - elapsed);
    
    io.emit('timerSync', {
      currentRoom: gameState.currentRoom,
      remaining: remaining,
      elapsed: elapsed
    });
  }
}, 1000);

// Build a snapshot of the current event for history
function buildEventSnapshot() {
  const participants = Object.values(gameState.participants);
  // Calculate scores
  const scored = participants.map(p => {
    let totalCorrect = 0;
    let totalAnswered = 0;
    const roomDetails = {};
    if (p.roomProgress) {
      Object.entries(p.roomProgress).forEach(([room, answers]) => {
        roomDetails[room] = answers;
        answers.forEach(a => {
          totalAnswered++;
          if (a.correct) totalCorrect++;
        });
      });
    }
    return {
      name: p.name,
      phone: p.phone || 'N/A',
      totalCorrect,
      totalAnswered,
      accuracy: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
      unlockedKeys: p.unlockedKeys || [],
      roomProgress: roomDetails
    };
  });
  scored.sort((a, b) => b.totalCorrect - a.totalCorrect || b.accuracy - a.accuracy);
  return {
    id: Date.now(),
    date: new Date().toISOString(),
    totalParticipants: participants.length,
    winner: scored[0] || null,
    runnerUp: scored[1] || null,
    participants: scored
  };
}

// Start server
server.listen(PORT, () => {
  console.log(`===========================================`);
  console.log(`Tech Trap NIT Escape Room Server`);
  console.log(`===========================================`);
  console.log(`Server running on port ${PORT}`);
  console.log(`Participant URL: http://localhost:${PORT}`);
  console.log(`Admin URL: http://localhost:${PORT}/admin`);
  console.log(`Admin Password: ${ADMIN_PASSWORD}`);
  console.log(`===========================================`);
});
