# 使用 GitHub Actions 自动部署

## ✅ 已完成
1. ✅ 已创建 GitHub Actions 工作流文件
2. ✅ 已推送到 GitHub

## 下一步操作

### 步骤 1: 启用 GitHub Pages

1. 访问你的仓库：https://github.com/caiyp7/yupei-cai-website
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 部分：
   - 选择 **GitHub Actions**（不是 "Deploy from a branch"）
   - 如果看不到这个选项，先完成步骤2

### 步骤 2: 触发工作流

工作流会在以下情况自动运行：
- 当你推送代码到 `main` 分支时（已自动触发）
- 或者手动触发：
  1. 在仓库页面点击 **Actions** 标签
  2. 选择 "Deploy to GitHub Pages" 工作流
  3. 点击 **Run workflow**

### 步骤 3: 查看部署状态

1. 点击仓库顶部的 **Actions** 标签
2. 查看 "Deploy to GitHub Pages" 工作流是否正在运行
3. 等待完成（通常需要 2-5 分钟）

### 步骤 4: 访问网站

部署完成后，网站将在以下地址可用：

```
https://caiyp7.github.io/yupei-cai-website/
```

## 优势

使用 GitHub Actions 的好处：
- ✅ 自动部署：每次推送代码到 main 分支时自动部署
- ✅ 不需要手动运行命令
- ✅ 不需要 gh-pages 分支
- ✅ 更可靠，不会遇到推送问题

## 注意事项

- 首次部署可能需要 5-10 分钟
- 如果部署失败，在 Actions 页面查看错误信息
- 以后每次修改代码并推送到 main 分支，网站会自动更新


