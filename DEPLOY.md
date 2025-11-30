# GitHub Pages 部署指南

## 快速开始

### 步骤 1: 安装 gh-pages

首先安装部署工具：

```bash
npm install --save-dev gh-pages
```

**注意**：如果已经运行过 `npm install`，这个包可能已经安装了。可以跳过此步骤。

## 步骤 2: 创建 GitHub 仓库

1. 登录 GitHub
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称建议使用：`yupei-cai-website`（如果使用其他名称，需要修改 `vite.config.js` 中的 `base` 路径）
4. 设置为 Public（GitHub Pages 免费版需要公开仓库）
5. 不要初始化 README、.gitignore 或 license（因为项目已有这些文件）

## 步骤 3: 初始化 Git 并推送代码

在项目根目录执行：

```bash
# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库（将 YOUR_USERNAME 替换为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/yupei-cai-website.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

## 步骤 4: 部署到 GitHub Pages

运行部署命令：

```bash
npm run deploy
```

这个命令会：
1. 构建生产版本（`npm run build`）
2. 将 `dist` 文件夹部署到 GitHub Pages 的 `gh-pages` 分支

## 步骤 5: 配置 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 部分：
   - 选择 "Deploy from a branch"
   - Branch 选择 `gh-pages`
   - Folder 选择 `/ (root)`
   - 点击 "Save"

## 步骤 6: 访问网站

等待几分钟后，你的网站将在以下地址可用：

```
https://YOUR_USERNAME.github.io/yupei-cai-website/
```

## 更新网站

每次修改代码后，重新部署：

```bash
# 提交更改
git add .
git commit -m "Update website"
git push

# 部署
npm run deploy
```

## 注意事项

1. **仓库名称**：如果仓库名称不是 `yupei-cai-website`，需要修改：
   - `vite.config.js` 中的 `base: '/yupei-cai-website/'` 改为你的仓库名
   - `src/main.jsx` 中的 `'/yupei-cai-website'` 改为你的仓库名

2. **自定义域名**（可选）：
   - 在仓库 Settings > Pages 中可以设置自定义域名
   - 需要在域名 DNS 中添加 CNAME 记录

3. **404 页面**：已创建 `public/404.html` 文件，用于支持 GitHub Pages 的 SPA 路由。Vite 会自动将其复制到 `dist` 目录。

## 故障排除

- **页面空白**：检查 `vite.config.js` 中的 `base` 路径是否正确
- **路由不工作**：确保 `src/main.jsx` 中的 `basename` 配置正确
- **资源加载失败**：检查所有资源路径是否使用相对路径

