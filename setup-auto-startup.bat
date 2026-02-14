@echo off
REM ========================================
REM SETUP AUTO-STARTUP ON CLIENT PCs
REM This will make the client launch on Windows startup
REM ========================================

echo ========================================
echo   TECH TRAP CLIENT - SETUP AUTO-STARTUP
echo ========================================
echo.
echo This will configure the client to launch automatically
echo when Windows starts.
echo.
pause

REM Get the current directory
set SCRIPT_DIR=%~dp0

REM Create shortcut in Startup folder
set STARTUP_FOLDER=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup

REM Copy the launch script to a permanent location
if not exist "C:\TechTrap" mkdir "C:\TechTrap"
copy "%SCRIPT_DIR%client-auto-launch.bat" "C:\TechTrap\client-auto-launch.bat" /Y

REM Create a shortcut in the Startup folder
echo Set oWS = WScript.CreateObject("WScript.Shell") > CreateShortcut.vbs
echo sLinkFile = "%STARTUP_FOLDER%\TechTrap-Client.lnk" >> CreateShortcut.vbs
echo Set oLink = oWS.CreateShortcut(sLinkFile) >> CreateShortcut.vbs
echo oLink.TargetPath = "C:\TechTrap\client-auto-launch.bat" >> CreateShortcut.vbs
echo oLink.WorkingDirectory = "C:\TechTrap" >> CreateShortcut.vbs
echo oLink.Description = "Tech Trap Client Auto Launch" >> CreateShortcut.vbs
echo oLink.WindowStyle = 7 >> CreateShortcut.vbs
echo oLink.Save >> CreateShortcut.vbs

cscript CreateShortcut.vbs
del CreateShortcut.vbs

echo.
echo ========================================
echo   SETUP COMPLETE!
echo ========================================
echo.
echo The client will now launch automatically on startup.
echo.
echo IMPORTANT: Edit C:\TechTrap\client-auto-launch.bat
echo and set the correct SERVER_IP address!
echo.
pause
