# ========================================
# REMOTE DEPLOYMENT TO ALL 32 CLIENT PCs
# ========================================
# This script deploys and launches the client on all PCs remotely
# Run this from the SERVER computer with admin privileges

# ========================================
# CONFIGURATION
# ========================================

# YOUR SERVER IP (the PC running this script)
$SERVER_IP = "192.168.1.100"  # CHANGE THIS to your actual server IP

# LIST OF ALL CLIENT PCs (Computer Names or IP Addresses)
$CLIENT_PCS = @(
    "PC01", "PC02", "PC03", "PC04", "PC05",
    "PC06", "PC07", "PC08", "PC09", "PC10",
    "PC11", "PC12", "PC13", "PC14", "PC15",
    "PC16", "PC17", "PC18", "PC19", "PC20",
    "PC21", "PC22", "PC23", "PC24", "PC25",
    "PC26", "PC27", "PC28", "PC29", "PC30",
    "PC31", "PC32"
    # Or use IP addresses:
    # "192.168.1.101", "192.168.1.102", etc.
)

# Browser to use (chrome or edge)
$BROWSER = "chrome"  # Options: "chrome" or "edge"

# ========================================
# SCRIPT START
# ========================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  TECH TRAP - REMOTE DEPLOYMENT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Server IP: $SERVER_IP" -ForegroundColor Yellow
Write-Host "Total PCs: $($CLIENT_PCS.Count)" -ForegroundColor Yellow
Write-Host "Browser: $BROWSER" -ForegroundColor Yellow
Write-Host ""

# Confirm before proceeding
$confirm = Read-Host "Deploy to all $($CLIENT_PCS.Count) PCs? (Y/N)"
if ($confirm -ne "Y" -and $confirm -ne "y") {
    Write-Host "Deployment cancelled." -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "Starting deployment..." -ForegroundColor Green
Write-Host ""

# Track results
$successful = @()
$failed = @()
$counter = 0

foreach ($pc in $CLIENT_PCS) {
    $counter++
    Write-Host "[$counter/$($CLIENT_PCS.Count)] Deploying to $pc..." -ForegroundColor Cyan
    
    try {
        # Test connection first
        if (-not (Test-Connection -ComputerName $pc -Count 1 -Quiet)) {
            Write-Host "  ✗ Cannot reach $pc (offline or unreachable)" -ForegroundColor Red
            $failed += $pc
            continue
        }
        
        # Create script content with correct server IP
        $scriptContent = @"
@echo off
REM Auto-generated client launch script
set SERVER_IP=$SERVER_IP
set PORT=3000

REM Wait for network
timeout /t 2 /nobreak >nul

REM Kill existing browsers
taskkill /F /IM chrome.exe >nul 2>&1
taskkill /F /IM msedge.exe >nul 2>&1
timeout /t 1 /nobreak >nul

REM Launch browser in kiosk mode
"@
        
        if ($BROWSER -eq "chrome") {
            $scriptContent += @"

start "" "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk --app=http://%SERVER_IP%:%PORT%
"@
        } else {
            $scriptContent += @"

start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --kiosk --app=http://%SERVER_IP%:%PORT%
"@
        }
        
        $scriptContent += @"

exit
"@
        
        # Create directory on remote PC
        Invoke-Command -ComputerName $pc -ScriptBlock {
            if (-not (Test-Path "C:\TechTrap")) {
                New-Item -Path "C:\TechTrap" -ItemType Directory -Force | Out-Null
            }
        } -ErrorAction Stop
        
        # Write script to remote PC
        $scriptContent | Out-File "\\$pc\C$\TechTrap\launch-client.bat" -Encoding ASCII -Force
        
        # Launch the client
        Invoke-Command -ComputerName $pc -ScriptBlock {
            Start-Process "C:\TechTrap\launch-client.bat"
        } -ErrorAction Stop
        
        Write-Host "  ✓ Successfully deployed and launched on $pc" -ForegroundColor Green
        $successful += $pc
        
    } catch {
        Write-Host "  ✗ Failed to deploy to $pc" -ForegroundColor Red
        Write-Host "    Error: $($_.Exception.Message)" -ForegroundColor DarkRed
        $failed += $pc
    }
    
    # Small delay between deployments
    Start-Sleep -Milliseconds 500
}

# ========================================
# SUMMARY
# ========================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOYMENT COMPLETE" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✓ Successful: $($successful.Count)/$($CLIENT_PCS.Count)" -ForegroundColor Green
Write-Host "✗ Failed: $($failed.Count)/$($CLIENT_PCS.Count)" -ForegroundColor Red
Write-Host ""

if ($successful.Count -gt 0) {
    Write-Host "Successful deployments:" -ForegroundColor Green
    $successful | ForEach-Object { Write-Host "  - $_" -ForegroundColor Gray }
    Write-Host ""
}

if ($failed.Count -gt 0) {
    Write-Host "Failed deployments:" -ForegroundColor Red
    $failed | ForEach-Object { Write-Host "  - $_" -ForegroundColor Gray }
    Write-Host ""
    Write-Host "Troubleshooting tips:" -ForegroundColor Yellow
    Write-Host "  1. Check if PC is online and reachable" -ForegroundColor Gray
    Write-Host "  2. Verify PowerShell remoting is enabled" -ForegroundColor Gray
    Write-Host "  3. Check network firewall settings" -ForegroundColor Gray
    Write-Host "  4. Ensure you have admin rights on remote PCs" -ForegroundColor Gray
    Write-Host ""
}

# ========================================
# ADDITIONAL COMMANDS
# ========================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ADDITIONAL COMMANDS" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Close all client browsers:" -ForegroundColor Yellow
Write-Host "  Invoke-Command -ComputerName `$CLIENT_PCS -ScriptBlock { taskkill /F /IM chrome.exe }" -ForegroundColor Gray
Write-Host ""
Write-Host "Restart all clients:" -ForegroundColor Yellow
Write-Host "  Invoke-Command -ComputerName `$CLIENT_PCS -ScriptBlock { Restart-Computer -Force }" -ForegroundColor Gray
Write-Host ""
Write-Host "Check status of all clients:" -ForegroundColor Yellow
Write-Host "  Test-Connection -ComputerName `$CLIENT_PCS -Count 1" -ForegroundColor Gray
Write-Host ""

Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
