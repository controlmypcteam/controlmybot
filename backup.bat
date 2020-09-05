@echo off
goto loop

:loop
node bot.js
echo Bot stopped, Restarting.
goto loop
