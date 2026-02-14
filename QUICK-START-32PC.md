# Quick Start Guide - 32 Monitor Setup

## 🎯 Quick Overview
This setup allows you to run the Tech Trap game on 1 main server with 32 client monitors automatically connecting to it.

---

## 📋 Prerequisites

### Server Computer (1 PC)
- ✅ Node.js installed
- ✅ Connected to same network as client PCs
- ✅ Firewall allows port 3000

### Client Computers (32 PCs)
- ✅ Chrome or Edge browser installed
- ✅ Connected to same network as server
- ✅ Can reach server IP address

---

## 🚀 Setup in 3 Steps

### STEP 1: Start the Server (Main Computer)

1. **Double-click** `start-server.bat`
2. **Note the IP address** displayed (e.g., `192.168.1.100`)
3. **Keep the window open**

```
========================================
  Server IP: 192.168.1.100
  URL: http://192.168.1.100:3000
========================================
```

---

### STEP 2: Configure Client Script

1. **Open** `client-auto-launch.bat` in Notepad
2. **Find this line:**
   ```bat
   set SERVER_IP=YOUR_SERVER_IP_HERE
   ```
3. **Replace with your server IP:**
   ```bat
   set SERVER_IP=192.168.1.100
   ```
4. **Save and close**

---

### STEP 3: Launch on All 32 Clients

**Option A: Manual Launch (Fastest)**
1. Copy `client-auto-launch.bat` to USB drive
2. Go to each PC and run it
3. Browser opens in fullscreen automatically

**Option B: Auto-Startup (Best for Events)**
1. Copy `client-auto-launch.bat` + `setup-auto-startup.bat` to each PC
2. Run `setup-auto-startup.bat` on each PC
3. PCs will auto-launch on every boot

**Option C: Remote Deployment (Advanced)**
1. Use `deploy-to-all-clients.ps1`
2. Edit the PC names/IPs in the script
3. Run once to deploy to all 32 PCs

---

## 🎮 During the Event

### Server Controls
- Open admin panel: `http://192.168.1.100:3000/admin`
- Password: `admin123`
- Control all clients from here

### Client Behavior
- Auto-launches in fullscreen (kiosk mode)
- No URL bar, no tabs
- Press `F11` to exit fullscreen if needed
- Press `Alt+F4` to close browser if needed

---

## 🔧 Troubleshooting

### Clients can't connect?
1. Check server IP is correct in `client-auto-launch.bat`
2. Ping server from client: `ping 192.168.1.100`
3. Check Windows Firewall on server (port 3000)

### Browser not installed?
- Chrome: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- Edge: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
- Edit `client-auto-launch.bat` to use correct path

### Need to restart all clients?
- Use admin panel to reset event
- Or create script to close browsers remotely

---

## 📁 Files You Need

```
SERVER (1 PC):
├── start-server.bat          ← Run this on main computer
└── server.js                 ← Automatically used

CLIENTS (32 PCs):
├── client-auto-launch.bat    ← Copy & run on each PC
└── setup-auto-startup.bat    ← (Optional) For auto-boot

OPTIONAL:
└── deploy-to-all-clients.ps1 ← Remote deployment
```

---

## ⚡ Network Requirements

- All PCs on same network (LAN/Wi-Fi)
- Server IP must be reachable from clients
- Port 3000 open on server firewall
- Stable network connection (game is real-time)

---

## 🎯 Best Practices

1. **Test First**: Run on 2-3 PCs before deploying to all 32
2. **Document IPs**: Keep a list of PC names and IPs
3. **Have Backup**: Keep USB with client script ready
4. **Admin Access**: Keep admin panel open during event
5. **Network Check**: Verify all PCs can reach server before event

---

## 📞 Quick Commands

### Check Server IP
```cmd
ipconfig | findstr IPv4
```

### Test Connection from Client
```cmd
ping 192.168.1.100
curl http://192.168.1.100:3000
```

### Open Firewall Port (Server)
```powershell
New-NetFirewallRule -DisplayName "Tech Trap" -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow
```

### Close All Client Browsers (Remote)
```powershell
Invoke-Command -ComputerName PC01,PC02,PC03 -ScriptBlock { taskkill /F /IM chrome.exe }
```

---

## ✅ Pre-Event Checklist

Server Setup:
- [ ] Node.js installed
- [ ] Server running (`start-server.bat`)
- [ ] IP address noted
- [ ] Firewall port 3000 open
- [ ] Admin panel accessible

Client Setup:
- [ ] `client-auto-launch.bat` configured with server IP
- [ ] Tested on 1 client PC
- [ ] Copied to all 32 PCs
- [ ] Browser opens in fullscreen
- [ ] Can see game interface

Network:
- [ ] All PCs on same network
- [ ] Clients can ping server
- [ ] Stable connection verified

---

## 🎉 You're Ready!

Once setup is complete:
1. Clients will automatically connect to server
2. All see the same startup screen
3. Use admin panel to start event
4. Monitor progress from admin dashboard
5. All clients advance together through rooms

**Good luck with your event!** 🚀
