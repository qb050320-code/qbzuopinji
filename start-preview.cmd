@echo off
cd /d "%~dp0"
if not exist "node_modules\vite\bin\vite.js" (
  echo Please install dependencies with npm install or pnpm install first.
  pause
  exit /b 1
)
node node_modules\vite\bin\vite.js --host 127.0.0.1 --port 5173
pause
