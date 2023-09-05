@echo off

cd ../backend

echo Building auth...
call npm run build auth

echo Building wiki...
call npm run build wiki

cd ../frontend

echo Building frontend...
call npm run build
