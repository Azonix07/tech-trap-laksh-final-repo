# ========================================
# TECH TRAP CLIENT - AUTO LAUNCH (PowerShell)
# Run this on each client PC
# ========================================

# IMPORTANT: Replace with your actual server IP
$SERVER_IP = "YOUR_SERVER_IP_HERE"
$PORT = 3000
$URL = "http://${SERVER_IP}:${PORT}"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  TECH TRAP CLIENT - AUTO LAUNCH" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Connecting to: $URL" -ForegroundColor Yellow
Write-Host ""

# Wait for network to be ready
Start-Sleep -Seconds 3

# Kill existing browser processes for clean start
Write-Host "Closing existing browsers..." -ForegroundColor Gray
Get-Process -Name chrome -ErrorAction SilentlyContinue | Stop-Process -Force
Get-Process -Name msedge -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2

# Launch Chrome in kiosk mode (fullscreen)
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (Test-Path $chromePath) {
    Write-Host "Launching Chrome in fullscreen..." -ForegroundColor Green
    Start-Process $chromePath -ArgumentList "--kiosk","--app=$URL"
} else {
    # Try Edge if Chrome not found
    $edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    if (Test-Path $edgePath) {
        Write-Host "Launching Edge in fullscreen..." -ForegroundColor Green
        Start-Process $edgePath -ArgumentList "--kiosk","--app=$URL"
    } else {
        Write-Host "Error: No browser found!" -ForegroundColor Red
        Write-Host "Please install Chrome or Edge" -ForegroundColor Red
        pause
    }
}

Write-Host ""
Write-Host "Browser launched successfully!" -ForegroundColor Green
