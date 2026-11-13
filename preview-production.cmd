@echo off
cd /d "%~dp0"
call node node_modules\vite\bin\vite.js build
if errorlevel 1 exit /b 1
node node_modules\vite\bin\vite.js preview --host 127.0.0.1 --port 4173
