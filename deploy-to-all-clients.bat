@echo off
REM ========================================
REM DEPLOY TO ALL 32 CLIENTS - LAUNCHER
REM ========================================

echo.
echo ========================================
echo   TECH TRAP - REMOTE DEPLOYMENT
echo ========================================
echo.
echo This will deploy the client to all 32 PCs
echo.
echo BEFORE RUNNING:
echo   1. Edit deploy-to-all-clients.ps1
echo   2. Set your SERVER_IP
echo   3. Update CLIENT_PCS list with your PC names/IPs
echo.
echo ========================================
echo.

pause

echo.
echo Starting PowerShell deployment script...
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0deploy-to-all-clients.ps1"

pause
