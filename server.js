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

// Game state
let gameState = {
  isRunning: false,
  startTime: null,
  currentRoom: 1,
  totalRooms: 5,  // 5 rooms: Knowledge Lobby, Logic Chamber, Code Mirror Room, Bug Fixing Lab, Final Coding Vault
  roomDuration: 300000, // 5 minutes in milliseconds (5 * 60 * 1000)
  participants: {},
  roomStartTimes: {}
};

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
      totalRooms: 3,
      roomDuration: 600000,
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
      email: data.email,
      currentRoom: gameState.currentRoom,
      roomProgress: {},
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

  // Get time remaining
  socket.on('getTimeRemaining', () => {
    if (gameState.isRunning && gameState.roomStartTimes[gameState.currentRoom]) {
      const roomStartTime = gameState.roomStartTimes[gameState.currentRoom];
      const elapsed = Date.now() - roomStartTime;
      const remaining = Math.max(0, gameState.roomDuration - elapsed);
      socket.emit('timeRemaining', {
        remaining: remaining,
        currentRoom: gameState.currentRoom
      });
    }
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
    if (gameState.participants[socket.id]) {
      delete gameState.participants[socket.id];
    }
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
  }, gameState.roomDuration);
}

// Sync timer broadcast (every second)
setInterval(() => {
  if (gameState.isRunning && gameState.roomStartTimes[gameState.currentRoom]) {
    const roomStartTime = gameState.roomStartTimes[gameState.currentRoom];
    const elapsed = Date.now() - roomStartTime;
    const remaining = Math.max(0, gameState.roomDuration - elapsed);
    
    io.emit('timerSync', {
      currentRoom: gameState.currentRoom,
      remaining: remaining,
      elapsed: elapsed
    });
  }
}, 1000);

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
