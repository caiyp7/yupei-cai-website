# 快速启动指南

## 第一步：安装依赖

确保你已经安装了 Node.js (版本 16 或更高)。

在项目根目录运行：

```bash
npm install
```

如果 npm 不可用，可以尝试使用 yarn：

```bash
yarn install
```

## 第二步：启动开发服务器

```bash
npm run dev
```

或者使用 yarn：

```bash
yarn dev
```

网站将在浏览器中自动打开，通常地址是 `http://localhost:5173`

## 第三步：自定义内容

### 更新个人信息

1. **联系方式** - 编辑 `src/pages/Contact.jsx`，更新邮箱、LinkedIn、GitHub等链接
2. **教育背景** - 编辑 `src/pages/About.jsx`，添加你的GPA信息
3. **简历文件** - 将你的CV PDF文件复制到 `public/` 文件夹，文件名改为 `CV_Yupei_Cai.pdf`

### 添加论文

编辑 `src/pages/Publications.jsx`，在 `publications` 数组中添加新论文：

```javascript
{
  title: "你的论文标题",
  authors: "作者1, Yupei Cai, 作者2, et al.",
  venue: "期刊/会议名称",
  year: "2024",
  status: "Published", // 或 "Under Review", "Accepted"
  description: "论文简要描述",
  links: {
    pdf: "PDF链接或路径",
    arxiv: "arXiv链接（可选）",
    doi: "DOI链接（可选）"
  }
}
```

### 添加项目

编辑 `src/pages/Projects.jsx`，在相应的项目分类中添加新项目。

### 更新研究方向

编辑 `src/pages/Research.jsx` 和 `src/pages/Home.jsx` 来更新你的研究方向描述。

## 第四步：构建生产版本

当你准备好部署网站时：

```bash
npm run build
```

构建的文件将在 `dist/` 文件夹中。

## 部署选项

### 方法1：GitHub Pages

1. 安装 gh-pages：
```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 的 `scripts` 部分添加：
```json
"deploy": "npm run build && gh-pages -d dist"
```

3. 运行部署：
```bash
npm run deploy
```

### 方法2：Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测并部署

### 方法3：Netlify

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 导入项目
3. 构建命令：`npm run build`
4. 发布目录：`dist`

## 常见问题

**Q: 页面样式显示不正常？**
A: 确保所有 CSS 文件都已正确导入，检查浏览器控制台是否有错误。

**Q: 路由不工作？**
A: 如果部署到 GitHub Pages，需要配置 base path。在 `vite.config.js` 中添加：
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

**Q: 如何更改网站颜色主题？**
A: 编辑 `src/styles/index.css` 中的 CSS 变量：
```css
:root {
  --primary-color: #2563eb; /* 主色调 */
  --primary-dark: #1e40af;   /* 深色主调 */
  /* 等等... */
}
```

## 需要帮助？

查看完整的 `README.md` 文件获取更多详细信息。

