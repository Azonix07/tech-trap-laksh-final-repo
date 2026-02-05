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
%GIT_PATH% commit -m "Final Sci-Fi Update: Mega logos, Animations, and Admin controls"

echo Setting branch to main...
%GIT_PATH% branch -M main

echo Adding remote origin...
%GIT_PATH% remote remove origin 2>nul
REM Adding username to URL to force correct account login
%GIT_PATH% remote add origin https://Azonix07@github.com/Azonix07/tech-trap-laksh-final-repo.git

echo Pushing to GitHub...
echo.
echo ========================================================
echo IMPORTANT: You will be asked for a Password or Token.
echo Please enter your Personal Access Token (or password).
echo ========================================================
echo.
%GIT_PATH% push -u origin main

echo ==========================================
echo Process Complete.
echo ==========================================
pause
