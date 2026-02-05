@echo off
echo ==========================================
echo Pushing Tech Trap NIT to GitHub
echo ==========================================

REM Set path to git
set GIT_PATH="C:\Program Files\Git\cmd\git.exe"

REM Check if git is available at specific path
if not exist %GIT_PATH% (
    echo Git not found at standard location. Checking PATH...
    where git >nul 2>nul
    if %errorlevel% neq 0 (
        echo Error: Git is not found. 
        echo Please install Git from https://git-scm.com/downloads
        pause
        exit /b
    )
    set GIT_PATH=git
)

echo Using Git at: %GIT_PATH%

echo Fixing embedded repository issues...
if exist "tech-trap-new-laksh\.git" (
    echo Removing nested .git folder to fix conflict...
    rmdir /s /q "tech-trap-new-laksh\.git"
    %GIT_PATH% rm --cached tech-trap-new-laksh 2>nul
)

echo Initializing repository...
%GIT_PATH% init

echo Configuring local settings...
REM Force git to forget the wrong user for this folder
%GIT_PATH% config --local credential.helper ""
%GIT_PATH% config --local user.name "Azonix07"

echo Adding files...
%GIT_PATH% add .

echo Committing changes...
%GIT_PATH% commit -m "Final Sci-Fi Update: Mega logos, Animations, and Admin controls" 2>nul

echo Setting branch to main...
%GIT_PATH% branch -M main

echo Adding remote origin...
%GIT_PATH% remote remove origin 2>nul
REM Adding username to URL to force correct account login
%GIT_PATH% remote add origin https://Azonix07@github.com/Azonix07/tech-trap-laksh-final-repo.git

echo Pushing to GitHub...
echo.
echo ========================================================
echo CRITICAL: GitHub does NOT support passwords anymore.
echo You MUST use a "Personal Access Token".
echo.
echo I am opening the GitHub Token page for you now...
start https://github.com/settings/tokens/new?scopes=repo^&description=TechTrapPush
echo.
echo INSTRUCTIONS:
echo 1. In the browser window that opened:
echo    - Scroll down and click green "Generate token" button
echo 2. COPY the long string starting with "ghp_..."
echo 3. Come back to this black window.
echo 4. When asked for "Password", PASTE that token.
echo    (Note: You won't see the cursor move when you paste!)
echo ========================================================
echo.
%GIT_PATH% push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Push failed. 
    echo Ensure you are entering the password for 'Azonix07', not 'Escanor360'.
) else (
    echo.
    echo [SUCCESS] Code pushed to GitHub!
)

echo ==========================================
echo Process Complete.
echo ==========================================
pause
