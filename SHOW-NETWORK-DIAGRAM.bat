@echo off
color 0A
cls

echo.
echo     ========================================
echo                TECH TRAP NIT
echo           32-Monitor Network Setup
echo     ========================================
echo.
echo.
echo     NETWORK TOPOLOGY:
echo.
echo        ┌─────────────────────┐
echo        │    SERVER PC        │
echo        │  (Your Computer)    │
echo        │                     │
echo        │  IP: 192.168.1.100  │ ◄── Run start-server.bat here
echo        │  Port: 3000         │
echo        │                     │
echo        │  Admin Panel:       │
echo        │  /admin (admin123)  │
echo        └──────────┬──────────┘
echo                   │
echo        ┌──────────┴──────────┐
echo        │   NETWORK SWITCH    │
echo        │   or WiFi Router    │
echo        └──────────┬──────────┘
echo                   │
echo      ┌────────────┼────────────┐
echo      │            │            │
echo  ┌───▼──┐    ┌───▼──┐    ┌───▼──┐
echo  │ PC 1 │    │ PC 2 │... │ PC32 │
echo  └──────┘    └──────┘    └──────┘
echo   Monitor     Monitor     Monitor
echo   Fullscreen  Fullscreen  Fullscreen
echo   Kiosk Mode  Kiosk Mode  Kiosk Mode
echo.
echo     ========================================
echo.
echo     QUICK START:
echo.
echo     1. SERVER SETUP:
echo        ^> Double-click: start-server.bat
echo        ^> Note the IP address shown
echo        ^> Keep window open
echo.
echo     2. CLIENT SETUP:
echo        ^> Edit: client-auto-launch.bat
echo        ^> Set your server IP
echo        ^> Copy to all 32 PCs
echo        ^> Run on each PC
echo.
echo     3. ADMIN CONTROL:
echo        ^> Open: http://[YOUR-IP]:3000/admin
echo        ^> Password: admin123
echo        ^> Start event for all clients
echo.
echo     ========================================
echo.
echo     FILES YOU NEED:
echo.
echo     [SERVER] start-server.bat
echo     [CLIENT] client-auto-launch.bat
echo     [CLIENT] setup-auto-startup.bat (optional)
echo     [REMOTE] deploy-to-all-clients.ps1 (advanced)
echo.
echo     ========================================
echo.
echo     GUIDES AVAILABLE:
echo.
echo     • QUICK-START-32PC.md          - Quick overview
echo     • 32-MONITOR-COMPLETE-GUIDE.md - Full detailed guide
echo     • DEPLOYMENT-GUIDE.md          - Original deployment doc
echo.
echo     ========================================
echo.
pause
