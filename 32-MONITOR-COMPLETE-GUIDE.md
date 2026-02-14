# 32-Monitor Network Setup - Complete Guide

## 🎯 What You're Building

```
┌─────────────────┐
│  SERVER PC      │ ← Main computer running node server.js
│  192.168.1.100  │    Admin controls event from here
└────────┬────────┘
         │
    ┌────┴────────────────────────────────────┐
    │         LOCAL NETWORK (LAN/WiFi)        │
    └────┬────────────────────────────────┬───┘
         │                                 │
    ┌────▼─────┐    ┌────────┐       ┌────▼─────┐
    │ CLIENT 1 │    │ ...    │       │ CLIENT32 │
    │ Monitor  │    │        │       │ Monitor  │
    └──────────┘    └────────┘       └──────────┘
       Auto-launch fullscreen         Auto-launch fullscreen
```

---

## 📋 Complete Setup Process

### Phase 1: Server Setup (5 minutes)

#### 1.1 Prepare the Server Computer

**Requirements:**
- Windows PC with Node.js installed
- Connected to network
- Known IP address on the network

**Steps:**
1. Open Command Prompt
2. Check your IP address:
   ```cmd
   ipconfig
   ```
3. Note down IPv4 Address (e.g., `192.168.1.100`)

#### 1.2 Configure Firewall

**Option A: Quick (Command)**
```cmd
netsh advfirewall firewall add rule name="Tech Trap" dir=in action=allow protocol=TCP localport=3000
```

**Option B: Manual (Windows Settings)**
1. Windows Settings → Windows Security → Firewall
2. Advanced Settings → Inbound Rules → New Rule
3. Port → TCP → 3000 → Allow → All profiles → Name: "Tech Trap"

#### 1.3 Start the Server

1. Double-click `start-server.bat`
2. Verify you see:
   ```
   ========================================
     Server IP: 192.168.1.100
     URL: http://192.168.1.100:3000
   ========================================
   Server running on port 3000
   ```
3. **Keep this window open!**
4. Test by opening browser: `http://192.168.1.100:3000`

---

### Phase 2: Client Setup (Choose One Method)

## Method A: MANUAL DEPLOYMENT ⚡ (Fastest for testing)

**Best for:** Quick setup, testing, or if PCs aren't on domain

**Time:** ~15-30 minutes for 32 PCs

**Steps:**

1. **Configure the client script:**
   ```bat
   1. Open client-auto-launch.bat in Notepad
   2. Find: set SERVER_IP=YOUR_SERVER_IP_HERE
   3. Change to: set SERVER_IP=192.168.1.100
   4. Save file
   ```

2. **Test on one PC first:**
   ```bat
   1. Copy client-auto-launch.bat to USB drive
   2. Go to one client PC
   3. Double-click the file
   4. Verify browser opens fullscreen with game
   ```

3. **Deploy to all 32 PCs:**
   ```bat
   1. Walk to each PC with USB drive
   2. Copy and run client-auto-launch.bat
   3. Verify each opens correctly
   ```

**Pros:** Simple, no network config needed
**Cons:** Must physically visit each PC

---

## Method B: REMOTE DEPLOYMENT 🚀 (Best for domain/network)

**Best for:** Domain-joined PCs, network-accessible machines

**Time:** ~5 minutes for all 32 PCs

**Requirements:**
- PowerShell remoting enabled on all PCs
- Admin credentials for remote PCs
- PCs are reachable over network

**Steps:**

1. **Enable PowerShell remoting on all clients (one-time):**
   
   On each client PC, run as administrator:
   ```powershell
   Enable-PSRemoting -Force
   ```
   
   Or remotely from server (if you have admin access):
   ```powershell
   Invoke-Command -ComputerName PC01,PC02,PC03 -ScriptBlock { Enable-PSRemoting -Force }
   ```

2. **Configure the deployment script:**
   
   Open `deploy-to-all-clients.ps1` in Notepad:
   ```powershell
   # Change this to your server IP
   $SERVER_IP = "192.168.1.100"
   
   # Update with your PC names or IPs
   $CLIENT_PCS = @(
       "PC01", "PC02", "PC03", ..., "PC32"
       # Or use IP addresses:
       # "192.168.1.101", "192.168.1.102", ...
   )
   ```

3. **Run the deployment:**
   ```bat
   1. Double-click deploy-to-all-clients.bat
   2. Confirm when prompted
   3. Watch as it deploys to all PCs
   4. Check summary for any failures
   ```

**Pros:** Deploy to all PCs in minutes, can re-run easily
**Cons:** Requires PowerShell remoting setup

---

## Method C: AUTO-STARTUP ON BOOT 🔄 (Best for events)

**Best for:** Multi-day events, automatic recovery from restarts

**Time:** Add 2 minutes per PC to Method A or B

**Steps:**

1. **After deploying with Method A or B:**
   ```bat
   1. Copy setup-auto-startup.bat to each PC
   2. Run it once on each PC
   3. Client will auto-launch on every boot
   ```

2. **Or combine with remote deployment:**
   
   Add to `deploy-to-all-clients.ps1`:
   ```powershell
   # Copy setup script
   Copy-Item ".\setup-auto-startup.bat" "\\$pc\C$\TechTrap\"
   
   # Run setup
   Invoke-Command -ComputerName $pc -ScriptBlock {
       Start-Process "C:\TechTrap\setup-auto-startup.bat"
   }
   ```

**Pros:** Automatic launch on restart, set-and-forget
**Cons:** Persists after event (need to remove manually)

---

## Phase 3: Testing & Verification

### 3.1 Single PC Test

Before deploying to all 32 PCs:

1. **From server, ping a client:**
   ```cmd
   ping 192.168.1.101
   ```

2. **Deploy to just that one PC**

3. **Verify:**
   - Browser opens in fullscreen
   - Game interface loads
   - Can enter name and phone
   - Responsive to admin controls

### 3.2 Multi-PC Test

Deploy to 3-5 PCs and verify:

1. All PCs show same startup screen
2. Admin panel shows all connected clients
3. Starting event affects all clients
4. Room advancement works synchronized
5. Timer synchronizes across all screens

### 3.3 Full Deployment

Once testing passes:

1. Deploy to all 32 PCs
2. Check admin panel shows 32 connected clients
3. Do a quick visual check of all monitors
4. Test admin controls (start, stop, advance)

---

## 🎮 During the Event

### Admin Controls

**Access:** `http://192.168.1.100:3000/admin`
**Password:** `admin123`

**Key Functions:**
- **Start Event** - All clients begin simultaneously
- **Stop Event** - Pause all clients
- **Reset Event** - Clear all progress
- **Force Advance** - Move all to next room
- **Monitor Participants** - See progress of all teams

### If a Client Disconnects

**Quick Fix:**
1. Go to that PC
2. Close browser (Alt+F4)
3. Re-run `client-auto-launch.bat`
4. Client reconnects automatically

**Remote Fix (if PowerShell enabled):**
```powershell
# Restart just that client
Invoke-Command -ComputerName PC15 -ScriptBlock {
    taskkill /F /IM chrome.exe
    Start-Sleep 2
    Start-Process "C:\TechTrap\launch-client.bat"
}
```

### Emergency Commands

**Stop all clients:**
```powershell
Invoke-Command -ComputerName $CLIENT_PCS -ScriptBlock { 
    taskkill /F /IM chrome.exe 
}
```

**Restart all clients:**
```powershell
foreach ($pc in $CLIENT_PCS) {
    Invoke-Command -ComputerName $pc -ScriptBlock {
        Start-Process "C:\TechTrap\launch-client.bat"
    }
}
```

**Reboot all clients:**
```powershell
Invoke-Command -ComputerName $CLIENT_PCS -ScriptBlock { 
    Restart-Computer -Force 
}
```

---

## 🔧 Troubleshooting

### Issue: Clients can't connect to server

**Symptoms:** Browser opens but shows "Can't reach this page"

**Solutions:**
1. Verify server IP is correct in client script
2. Ping server from client: `ping 192.168.1.100`
3. Check firewall on server (port 3000)
4. Verify server is running (`start-server.bat`)
5. Test URL manually in browser

**Command to test:**
```cmd
curl http://192.168.1.100:3000
```

### Issue: Browser doesn't open in fullscreen

**Symptoms:** Browser opens normally, not kiosk mode

**Solutions:**
1. Check browser path in `client-auto-launch.bat`
2. Common Chrome path: `C:\Program Files\Google\Chrome\Application\chrome.exe`
3. Common Edge path: `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`
4. Try alternative browser in script

### Issue: Some PCs work, others don't

**Symptoms:** Inconsistent behavior across PCs

**Solutions:**
1. Check network connectivity: `ping 192.168.1.100`
2. Verify same script version on all PCs
3. Check browser is installed on all PCs
4. Verify no local firewall blocking on clients
5. Check all PCs on same network/VLAN

### Issue: PowerShell remoting fails

**Symptoms:** Remote deployment doesn't work

**Solutions:**
1. Enable PowerShell remoting on clients:
   ```powershell
   Enable-PSRemoting -Force
   ```
2. Check WinRM service is running:
   ```powershell
   Get-Service WinRM
   ```
3. Configure TrustedHosts if not on domain:
   ```powershell
   Set-Item WSMan:\localhost\Client\TrustedHosts -Value "*" -Force
   ```
4. Verify network profile is Private (not Public)

### Issue: Script runs but nothing happens

**Symptoms:** Double-click script, window flashes, nothing opens

**Solutions:**
1. Edit script, check for syntax errors
2. Run from command prompt to see error messages
3. Check browser path exists
4. Verify SERVER_IP is set correctly
5. Test manually: 
   ```cmd
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --app=http://192.168.1.100:3000
   ```

---

## 📊 Pre-Event Checklist

### Server Setup ✅
- [ ] Node.js installed
- [ ] IP address noted: __________________
- [ ] Firewall port 3000 open
- [ ] Server running (`start-server.bat`)
- [ ] Can access game in browser
- [ ] Admin panel accessible
- [ ] Admin password works

### Client Setup ✅
- [ ] Client script configured with server IP
- [ ] Browser installed on all PCs (Chrome/Edge)
- [ ] Tested on 1 PC successfully
- [ ] Tested on 3-5 PCs successfully
- [ ] Deployed to all 32 PCs
- [ ] All 32 PCs show in admin panel
- [ ] Visual check of all monitors completed

### Network Setup ✅
- [ ] All PCs on same network
- [ ] Can ping server from clients
- [ ] Can ping clients from server
- [ ] Network is stable (no drops)
- [ ] Bandwidth sufficient for 32+ connections

### Event Setup ✅
- [ ] Admin credentials ready
- [ ] Backup USB with client script ready
- [ ] Have access to server PC during event
- [ ] Know how to restart clients if needed
- [ ] Emergency contacts available
- [ ] Tested start/stop/reset functions

---

## 💾 Backup & Recovery

### Save Your Configuration

Create a deployment package:
```
TechTrap-Deployment/
├── start-server.bat (configured)
├── client-auto-launch.bat (configured with your IP)
├── setup-auto-startup.bat
├── deploy-to-all-clients.ps1 (configured with your PCs)
└── NETWORK-INFO.txt (your IPs and PC names)
```

### Create Recovery USB

1. Copy all files above to USB drive
2. Label it clearly
3. Keep it with you during event

### Document Your Setup

Create `NETWORK-INFO.txt`:
```
Server IP: 192.168.1.100
Admin URL: http://192.168.1.100:3000/admin
Admin Password: admin123

Client PCs:
- PC01: 192.168.1.101
- PC02: 192.168.1.102
... (list all 32)

Browser: Chrome
Network: LAN via Switch
Setup Date: [DATE]
Event Date: [DATE]
Contact: [PHONE]
```

---

## 🎓 Tips for Success

1. **Test Early:** Set up 1 week before event, not day-of
2. **Have Spares:** Extra USB, backup scripts, alternate browser
3. **Document Everything:** IPs, PC names, any custom changes
4. **Know Your Network:** Switch ports, WiFi access, VLAN config
5. **Monitor During Event:** Keep admin panel open, watch for disconnects
6. **Plan for Failures:** Know how to restart server, clients, network
7. **Communication:** Have walkies or chat for multi-person setup
8. **Physical Access:** Keep server and a few clients easily accessible

---

## 📞 Quick Reference Card

Print and keep this handy:

```
┌─────────────────────────────────────────────┐
│         TECH TRAP - QUICK REFERENCE         │
├─────────────────────────────────────────────┤
│ Server IP: ________________                 │
│ Admin URL: http://[IP]:3000/admin          │
│ Admin Password: admin123                    │
│                                             │
│ START SERVER:                               │
│   Double-click: start-server.bat            │
│                                             │
│ LAUNCH CLIENT:                              │
│   Double-click: client-auto-launch.bat      │
│                                             │
│ RESTART CLIENT (at PC):                     │
│   Alt+F4 → Re-run client-auto-launch.bat   │
│                                             │
│ EMERGENCY STOP ALL:                         │
│   Admin panel → Stop Event                  │
│                                             │
│ TROUBLESHOOTING:                            │
│   1. Check server is running                │
│   2. Verify IP address                      │
│   3. Ping test: ping [SERVER_IP]           │
│   4. Check firewall                         │
│   5. Restart server/client                  │
└─────────────────────────────────────────────┘
```

---

## ✅ You're Ready for 32 Monitors!

This setup gives you:
- ✅ Centralized control from admin panel
- ✅ Synchronized gameplay across all screens
- ✅ Easy deployment and recovery
- ✅ Professional fullscreen kiosk mode
- ✅ Real-time monitoring of all participants

**Next:** Follow Phase 1 → Phase 2 → Phase 3 above, then run your event!

Good luck! 🚀
