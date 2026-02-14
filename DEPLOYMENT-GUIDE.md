# Tech Trap - Deployment Guide for 32 PCs

## Overview
This guide will help you run Tech Trap on a main server and automatically open it in fullscreen on all 32 client PCs.

---

## Step 1: Setup Server (Main Computer)

### 1.1 Start the Server
1. On the main computer, double-click `start-server.bat`
2. Note down the IP address displayed (example: `192.168.1.100`)
3. The server will be accessible at `http://YOUR_IP:3000`

### 1.2 Configure Firewall
Make sure port 3000 is open on the server:
```powershell
# Run as Administrator
New-NetFirewallRule -DisplayName "Tech Trap Server" -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow
```

### 1.3 Keep Server Running
- Keep the command window open while the event is running
- Don't close or minimize it

---

## Step 2: Setup Client PCs (All 32 PCs)

### Method A: Manual Launch (Quick Test)

1. **Edit the client script:**
   - Open `client-auto-launch.bat` in Notepad
   - Replace `YOUR_SERVER_IP_HERE` with your actual server IP
   - Example: `set SERVER_IP=192.168.1.100`
   - Save the file

2. **Test on one PC:**
   - Double-click `client-auto-launch.bat`
   - Browser should open in fullscreen
   - Verify the site loads correctly

3. **Deploy to all PCs:**
   - Copy `client-auto-launch.bat` to all 32 PCs
   - Run it on each PC

### Method B: Auto-Startup on Boot (Recommended)

1. **Configure the script (on server):**
   - Edit `client-auto-launch.bat`
   - Set the correct `SERVER_IP`
   - Save the file

2. **Deploy to each client PC:**
   - Copy both files to each PC:
     - `client-auto-launch.bat`
     - `setup-auto-startup.bat`

3. **Run setup on each PC:**
   - Double-click `setup-auto-startup.bat`
   - This creates an auto-startup entry
   - Client will launch on every Windows boot

### Method C: Remote Deployment (Advanced)

Use PowerShell to deploy to all PCs remotely:

```powershell
# Edit this list with your PC names/IPs
$computers = @(
    "PC01", "PC02", "PC03", "PC04", "PC05",
    "PC06", "PC07", "PC08", "PC09", "PC10",
    # ... add all 32 PCs
)

$serverIP = "192.168.1.100"  # Your server IP

foreach ($pc in $computers) {
    Write-Host "Deploying to $pc..."
    
    # Create remote directory
    Invoke-Command -ComputerName $pc -ScriptBlock {
        if (-not (Test-Path "C:\TechTrap")) {
            New-Item -Path "C:\TechTrap" -ItemType Directory
        }
    }
    
    # Copy launch script
    Copy-Item ".\client-auto-launch.bat" "\\$pc\C$\TechTrap\" -Force
    
    # Launch the client
    Invoke-Command -ComputerName $pc -ScriptBlock {
        param($ip)
        $content = Get-Content "C:\TechTrap\client-auto-launch.bat"
        $content = $content -replace "YOUR_SERVER_IP_HERE", $ip
        Set-Content "C:\TechTrap\client-auto-launch.bat" $content
        
        Start-Process "C:\TechTrap\client-auto-launch.bat"
    } -ArgumentList $serverIP
}
```

---

## Step 3: Admin Control

### Access Admin Panel
- Open admin at: `http://YOUR_SERVER_IP:3000/admin.html`
- Password: `admin123` (change in server.js)

### Start Event
1. Wait for all 32 participants to register
2. Click "Start Event" in admin panel
3. All PCs will begin simultaneously

---

## Troubleshooting

### Browser not opening?
- Check Chrome is installed: `C:\Program Files\Google\Chrome\Application\chrome.exe`
- Or use Edge alternative in the script

### Can't connect to server?
- Verify server IP: Run `ipconfig` on server
- Check firewall allows port 3000
- Ensure all PCs are on same network

### Exit fullscreen on client?
- Press `Alt + F4` to close browser
- Press `F11` to toggle fullscreen
- Or use Task Manager (`Ctrl + Shift + Esc`)

### Auto-startup not working?
- Check startup folder: `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`
- Verify shortcut exists
- Test script manually first

---

## Quick Reference

### Server Commands
- Start: `start-server.bat`
- Stop: Press `Ctrl + C`
- Check IP: `ipconfig`

### Client Commands
- Launch: `client-auto-launch.bat`
- Setup auto-start: `setup-auto-startup.bat`
- Manual URL: `http://SERVER_IP:3000`

### Kiosk Mode Features
- ✅ Fullscreen (no address bar)
- ✅ No bookmarks/favorites
- ✅ No settings menu
- ✅ Clean presentation mode
- ❌ Cannot exit easily (by design)

---

## Network Requirements

- **Server:** Static IP recommended
- **Clients:** Must be on same LAN
- **Firewall:** Port 3000 open
- **Bandwidth:** ~100KB per client
- **Latency:** <100ms recommended

---

## Best Practices

1. **Test First:** Try on 2-3 PCs before deploying to all 32
2. **Backup:** Keep original scripts in safe location
3. **Documentation:** Label which PC is which participant
4. **Timing:** Start clients 5 mins before event
5. **Support:** Have one person monitor admin panel

---

## Security Notes

- Change admin password in `server.js`
- Only accessible on local network
- No internet connection required
- Data stored in server memory only

---

## Support

If you encounter issues:
1. Check server is running (`start-server.bat`)
2. Verify IP address is correct
3. Test from one client first
4. Check firewall settings
5. Ensure all PCs on same network subnet
