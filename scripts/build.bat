@echo off

cd ../backend

echo Building auth...
call npm run build auth

cd ../frontend

echo Building frontend...
call npm run build
