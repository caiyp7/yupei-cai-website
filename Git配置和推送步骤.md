# Git 配置和推送步骤

## 步骤 1: 配置 Git 用户信息

在 PowerShell 或 CMD 中运行以下命令（将邮箱和姓名替换为你的信息）：

```bash
git config --global user.email "yc4363@columbia.edu"
git config --global user.name "Yupei Cai"
```

或者如果只想为这个仓库设置（不使用 --global）：

```bash
git config user.email "yc4363@columbia.edu"
git config user.name "Yupei Cai"
```

## 步骤 2: 更新远程仓库地址

**重要**：将 `YOUR_USERNAME` 替换为你的实际 GitHub 用户名！

```bash
# 先删除旧的远程地址（如果存在）
git remote remove origin

# 添加正确的远程地址（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/yupei-cai-website.git
```

例如，如果你的 GitHub 用户名是 `yupeicai`，则运行：
```bash
git remote add origin https://github.com/yupeicai/yupei-cai-website.git
```

## 步骤 3: 重新提交

```bash
git add .
git commit -m "Initial commit"
```

## 步骤 4: 推送到 GitHub

```bash
git branch -M main
git push -u origin main
```

## 如果遇到认证问题

如果推送时要求输入用户名和密码，GitHub 现在使用 Personal Access Token 而不是密码：

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token" > "Generate new token (classic)"
3. 设置权限：勾选 `repo` 权限
4. 生成后复制 token（只显示一次！）
5. 推送时：
   - Username: 你的 GitHub 用户名
   - Password: 粘贴刚才复制的 token

## 完整命令序列（示例）

假设你的 GitHub 用户名是 `yupeicai`：

```bash
# 1. 配置 Git
git config --global user.email "yc4363@columbia.edu"
git config --global user.name "Yupei Cai"

# 2. 设置远程仓库
git remote remove origin
git remote add origin https://github.com/yupeicai/yupei-cai-website.git

# 3. 提交
git add .
git commit -m "Initial commit"

# 4. 推送
git branch -M main
git push -u origin main
```

