@echo off
REM ========================================
REM TECH TRAP CLIENT - AUTO LAUNCH
REM Run this on each client PC
REM ========================================

REM IMPORTANT: Replace SERVER_IP with your actual server IP
REM Example: set SERVER_IP=192.168.1.100
set SERVER_IP=YOUR_SERVER_IP_HERE
set PORT=3000

REM Wait a moment for network to be ready
timeout /t 3 /nobreak >nul

REM Kill any existing browser processes (optional, for clean start)
taskkill /F /IM chrome.exe >nul 2>&1
taskkill /F /IM msedge.exe >nul 2>&1
timeout /t 2 /nobreak >nul

REM Launch Chrome in fullscreen kiosk mode (preferred)
start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --app=http://%SERVER_IP%:%PORT%

REM Alternative: Launch Edge in fullscreen kiosk mode
REM start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --kiosk --app=http://%SERVER_IP%:%PORT%

exit
