@echo off
echo Installing Backend Dependencies...
cd backend
call npm install
cd ..

echo.
echo Installing Frontend Dependencies...
cd frontend
call npm install
cd ..

echo.
echo Installation Complete!
echo You can now run start.bat to launch both servers.
pause
