@echo off
chcp 65001 >nul
echo ====================================
echo 正在检查 Node.js 安装...
echo ====================================
echo.

node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未检测到 Node.js！
    echo.
    echo 请先安装 Node.js：
    echo 1. 访问 https://nodejs.org/
    echo 2. 下载并安装 LTS 版本
    echo 3. 安装完成后重启此脚本
    echo.
    pause
    exit
)

echo [成功] 已检测到 Node.js
node --version
echo.

echo ====================================
echo 正在检查依赖包...
echo ====================================
echo.

if not exist "node_modules" (
    echo 首次运行，正在安装依赖包...
    echo 这可能需要几分钟，请耐心等待...
    echo.
    npm install
    if %errorlevel% neq 0 (
        echo [错误] 依赖安装失败！
        pause
        exit
    )
    echo.
) else (
    echo [成功] 依赖包已存在
    echo.
)

echo ====================================
echo 正在启动开发服务器...
echo ====================================
echo.
echo 网站将在浏览器中自动打开...
echo 如果未自动打开，请手动访问: http://localhost:5173
echo.
echo 按 Ctrl+C 可以停止服务器
echo.

npm run dev


