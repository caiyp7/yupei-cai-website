# 解决 PowerShell 执行策略问题

## 方法 1: 临时允许执行脚本（推荐）

在 PowerShell 中运行以下命令（以管理员身份运行）：

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

然后再次尝试：
```bash
npm install --save-dev gh-pages
```

## 方法 2: 使用 CMD 而不是 PowerShell

1. 按 `Win + R`，输入 `cmd`，回车
2. 切换到项目目录：
```bash
cd D:\download\yupei-cai-website
```
3. 运行安装命令：
```bash
npm install --save-dev gh-pages
```

## 方法 3: 临时绕过（仅当前会话）

在 PowerShell 中运行：
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

然后运行 npm 命令。

## 方法 4: 使用 npx（如果 npm 已安装但无法直接运行）

```bash
npx --yes gh-pages --version
```

如果这个可以运行，说明 gh-pages 可能已经安装了，可以直接使用 `npm run deploy`

## 推荐方案

**最简单的方法**：使用 CMD（方法 2），因为 CMD 不受执行策略限制。

