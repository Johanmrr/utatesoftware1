@echo off
python build_local.py
if %errorlevel% neq 0 (
    echo Error: Asegúrate de tener Python instalado.
    pause
) else (
    start index_LOCAL.html
)
