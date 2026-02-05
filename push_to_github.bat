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

echo Initializing repository...
%GIT_PATH% init

echo Adding files...
%GIT_PATH% add .

echo Committing changes...
%GIT_PATH% commit -m "Final Sci-Fi Update: Mega logos, Animations, and Admin controls"

echo Setting branch to main...
%GIT_PATH% branch -M main

echo Adding remote origin...
%GIT_PATH% remote remove origin 2>nul
%GIT_PATH% remote add origin https://github.com/Azonix07/tech-trap-laksh-final-repo.git

echo Pushing to GitHub...
echo.
echo NOTE: If asked for credentials, please sign in.
echo If you get a 403 error, ensure you are logged in as correctly.
echo.
%GIT_PATH% push -u origin main

echo ==========================================
echo Process Complete.
echo ==========================================
pause
