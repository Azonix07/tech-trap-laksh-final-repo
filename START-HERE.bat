@echo off
color 0B
title Tech Trap - Main Launcher
cls

:MENU
echo.
echo     ═══════════════════════════════════════════════════════
echo                        TECH TRAP NIT
echo              32-Monitor Network Deployment System
echo     ═══════════════════════════════════════════════════════
echo.
echo     What do you want to do?
echo.
echo     [1] START SERVER (Main Computer)
echo         ^> Run this on the computer that will be the server
echo.
echo     [2] LAUNCH CLIENT (Individual Monitor)
echo         ^> Run this on each of the 32 client monitors
echo.
echo     [3] DEPLOY TO ALL CLIENTS (Remote - Advanced)
echo         ^> Deploy to all 32 PCs automatically via network
echo.
echo     [4] VIEW NETWORK DIAGRAM
echo         ^> See how the network is set up
echo.
echo     [5] OPEN DOCUMENTATION
echo         ^> Read setup guides and instructions
echo.
echo     [6] TEST CONNECTION
echo         ^> Check if clients can reach server
echo.
echo     [7] TROUBLESHOOTING
echo         ^> Common issues and solutions
echo.
echo     [0] EXIT
echo.
echo     ═══════════════════════════════════════════════════════
echo.
set /p choice="     Enter your choice (0-7): "

if "%choice%"=="1" goto SERVER
if "%choice%"=="2" goto CLIENT
if "%choice%"=="3" goto DEPLOY
if "%choice%"=="4" goto DIAGRAM
if "%choice%"=="5" goto DOCS
if "%choice%"=="6" goto TEST
if "%choice%"=="7" goto TROUBLESHOOT
if "%choice%"=="0" goto EXIT
goto MENU

:SERVER
cls
echo.
echo     ═══════════════════════════════════════════════════════
echo                       STARTING SERVER
echo     ═══════════════════════════════════════════════════════
echo.
echo     This will:
echo       1. Start the Node.js server
echo       2. Display your server IP address
echo       3. Open port 3000 for client connections
echo.
echo     IMPORTANT:
echo       - Keep this window open during the event
echo       - Note down the IP address displayed
echo       - Share this IP with all client PCs
echo.
pause
echo.
echo     Launching server...
echo.
start-server.bat
goto MENU

:CLIENT
cls
echo.
echo     ═══════════════════════════════════════════════════════
echo                       LAUNCHING CLIENT
echo     ═══════════════════════════════════════════════════════
echo.
echo     BEFORE RUNNING THIS:
echo       1. Make sure you know the SERVER IP address
echo       2. Edit client-auto-launch.bat
echo       3. Set SERVER_IP to your actual server IP
echo.
echo     This will:
echo       - Open browser in fullscreen kiosk mode
echo       - Connect to the server automatically
echo       - Display the game interface
echo.
pause
echo.
echo     Do you want to:
echo       [1] Edit the client script first
echo       [2] Launch the client now
echo       [0] Go back
echo.
set /p clientchoice="     Enter choice: "

if "%clientchoice%"=="1" (
    notepad client-auto-launch.bat
    goto CLIENT
)
if "%clientchoice%"=="2" (
    echo.
    echo     Launching client...
    echo.
    start client-auto-launch.bat
    goto MENU
)
if "%clientchoice%"=="0" goto MENU
goto CLIENT

:DEPLOY
cls
echo.
echo     ═══════════════════════════════════════════════════════
echo                    REMOTE DEPLOYMENT
echo     ═══════════════════════════════════════════════════════
echo.
echo     This is for ADVANCED users who want to deploy to all
echo     32 PCs remotely via PowerShell.
echo.
echo     REQUIREMENTS:
echo       - PowerShell remoting enabled on all client PCs
echo       - Admin credentials for all PCs
echo       - All PCs reachable over network
echo.
echo     BEFORE RUNNING:
echo       1. Edit deploy-to-all-clients.ps1
echo       2. Set SERVER_IP to your IP address
echo       3. Update CLIENT_PCS list with your PC names/IPs
echo.
pause
echo.
echo     Do you want to:
echo       [1] Edit deployment script first
echo       [2] Run deployment now
echo       [0] Go back
echo.
set /p deploychoice="     Enter choice: "

if "%deploychoice%"=="1" (
    notepad deploy-to-all-clients.ps1
    goto DEPLOY
)
if "%deploychoice%"=="2" (
    echo.
    echo     Starting deployment...
    echo.
    start deploy-to-all-clients.bat
    goto MENU
)
if "%deploychoice%"=="0" goto MENU
goto DEPLOY

:DIAGRAM
cls
SHOW-NETWORK-DIAGRAM.bat
goto MENU

:DOCS
cls
echo.
echo     ═══════════════════════════════════════════════════════
echo                       DOCUMENTATION
echo     ═══════════════════════════════════════════════════════
echo.
echo     Available guides:
echo.
echo     [1] README.md
echo         Main overview and quick reference
echo.
echo     [2] QUICK-START-32PC.md
echo         Fast overview for 32-PC setup (5 min read)
echo.
echo     [3] 32-MONITOR-COMPLETE-GUIDE.md
echo         Detailed step-by-step complete guide
echo.
echo     [4] DEPLOYMENT-GUIDE.md
echo         Original deployment documentation
echo.
echo     [0] Go back
echo.
set /p docchoice="     Which guide do you want to open? "

if "%docchoice%"=="1" start README.md
if "%docchoice%"=="2" start QUICK-START-32PC.md
if "%docchoice%"=="3" start 32-MONITOR-COMPLETE-GUIDE.md
if "%docchoice%"=="4" start DEPLOYMENT-GUIDE.md
if "%docchoice%"=="0" goto MENU
goto DOCS

:TEST
cls
echo.
echo     ═══════════════════════════════════════════════════════
echo                    CONNECTION TEST
echo     ═══════════════════════════════════════════════════════
echo.
echo     This will help you test if clients can reach the server.
echo.
set /p serverip="     Enter SERVER IP address: "
echo.
echo     Testing connection to %serverip%...
echo.
ping %serverip% -n 4
echo.
echo     ═══════════════════════════════════════════════════════
echo.
echo     If you see replies, the connection is good!
echo     If you see timeouts, check:
echo       - Network cables/WiFi
echo       - Firewall settings
echo       - IP address is correct
echo.
pause
goto MENU

:TROUBLESHOOT
cls
echo.
echo     ═══════════════════════════════════════════════════════
echo                      TROUBLESHOOTING
echo     ═══════════════════════════════════════════════════════
echo.
echo     COMMON ISSUES:
echo.
echo     1. Clients can't connect to server
echo        ^> Check server IP in client-auto-launch.bat
echo        ^> Verify server is running (start-server.bat)
echo        ^> Check firewall allows port 3000
echo        ^> Test with: ping [SERVER_IP]
echo.
echo     2. Browser doesn't open
echo        ^> Check Chrome/Edge is installed
echo        ^> Verify browser path in client-auto-launch.bat
echo        ^> Try running as administrator
echo.
echo     3. Shows "Can't reach this page"
echo        ^> Server might not be running
echo        ^> Wrong IP address in client script
echo        ^> Firewall blocking port 3000
echo.
echo     4. Browser opens but not fullscreen
echo        ^> Browser path might be wrong
echo        ^> Check --kiosk flag in script
echo.
echo     5. Remote deployment fails
echo        ^> Enable PowerShell remoting on clients
echo        ^> Check WinRM service is running
echo        ^> Verify network connectivity
echo.
echo     ═══════════════════════════════════════════════════════
echo.
echo     For complete troubleshooting guide, see:
echo       32-MONITOR-COMPLETE-GUIDE.md
echo.
echo     [1] Open complete troubleshooting guide
echo     [2] Test connection now
echo     [0] Go back
echo.
set /p troublechoice="     Enter choice: "

if "%troublechoice%"=="1" start 32-MONITOR-COMPLETE-GUIDE.md
if "%troublechoice%"=="2" goto TEST
if "%troublechoice%"=="0" goto MENU
goto TROUBLESHOOT

:EXIT
cls
echo.
echo     ═══════════════════════════════════════════════════════
echo                    Thanks for using
echo                     TECH TRAP NIT
echo     ═══════════════════════════════════════════════════════
echo.
echo     Good luck with your event!
echo.
timeout /t 2 /nobreak >nul
exit

