# 在 GitHub 上创建新仓库的详细步骤

## 步骤 1: 登录 GitHub

1. 打开浏览器，访问 https://github.com
2. 如果没有账号，点击 "Sign up" 注册
3. 如果已有账号，点击 "Sign in" 登录

## 步骤 2: 创建新仓库

1. 登录后，点击右上角的 **"+"** 号（加号图标）
2. 在下拉菜单中选择 **"New repository"**（新建仓库）

## 步骤 3: 填写仓库信息

在创建仓库页面填写以下信息：

### Repository name（仓库名称）
- 输入：`yupei-cai-website`
- 或者使用其他名称（如果使用其他名称，需要修改配置文件）

### Description（描述，可选）
- 可以填写：`Personal academic website`
- 或者留空

### Visibility（可见性）
- **选择：Public（公开）** ⚠️ 重要：GitHub Pages 免费版需要公开仓库
- 如果选择 Private，需要 GitHub Pro 才能使用 Pages

### 其他选项
- ❌ **不要勾选** "Add a README file"（项目已有 README）
- ❌ **不要勾选** "Add .gitignore"（项目已有 .gitignore）
- ❌ **不要勾选** "Choose a license"（可选，但建议先不选）

## 步骤 4: 创建仓库

点击页面底部的 **"Create repository"**（创建仓库）按钮

## 步骤 5: 复制仓库地址

创建成功后，GitHub 会显示仓库页面。你会看到类似这样的地址：
```
https://github.com/YOUR_USERNAME/yupei-cai-website.git
```

**重要**：复制这个地址，稍后在推送代码时会用到。

## 下一步

创建仓库后，按照 `DEPLOY.md` 中的步骤推送代码和部署。

## 注意事项

1. **仓库名称**：如果使用其他名称（不是 `yupei-cai-website`），需要修改：
   - `vite.config.js` 中的 `base: '/yupei-cai-website/'` 改为你的仓库名
   - `src/main.jsx` 中的 `'/yupei-cai-website'` 改为你的仓库名

2. **用户名**：记住你的 GitHub 用户名，网站地址会是：
   ```
   https://YOUR_USERNAME.github.io/yupei-cai-website/
   ```

