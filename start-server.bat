@echo off
echo ========================================
echo   TECH TRAP SERVER - STARTING
echo ========================================
echo.

REM Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set IP=%%a
    goto :found
)
:found
set IP=%IP:~1%

echo Server will be accessible at:
echo.
echo   http://%IP%:3000
echo   http://localhost:3000
echo.
echo ========================================
echo Share this URL with all client PCs:
echo   http://%IP%:3000
echo ========================================
echo.
echo Starting server...
echo.

node server.js

pause
