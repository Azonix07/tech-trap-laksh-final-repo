@echo off
echo ==========================================
echo Pushing Tech Trap NIT to GitHub
echo ==========================================

REM Check if git is available
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: Git is not found in your PATH. 
    echo Please install Git from https://git-scm.com/downloads
    echo and try again.
    pause
    exit /b
)

echo Initializing repository...
git init

echo Adding files...
git add .

echo Committing changes...
git commit -m "Final Sci-Fi Update: Mega logos, Animations, and Admin controls"

echo Setting branch to main...
git branch -M main

echo Adding remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/Azonix07/tech-trap-nit.git

echo Pushing to GitHub...
git push -u origin main

echo ==========================================
echo Process Complete.
echo ==========================================
pause
