# Yupei Cai - Personal Academic Website

Personal academic website showcasing research, projects, publications, and teaching experience.

## Features

- 🏠 **Home** - Hero section, research & projects overview
- 👤 **About** - Personal introduction, education background, research interests, and skills
- 🔬 **Research Directions** - Detailed research projects and outcomes
- 📄 **Publications** - Published papers with PDF links and video demos
- 💼 **Projects** - Robotics and UAV projects with video demonstrations
- 📚 **TA** - Teaching assistant experience

## Tech Stack

- React 18
- React Router DOM 6
- Vite
- CSS3 (Responsive Design)

## Installation & Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Build files will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
yupei-cai-website/
├── public/           # Static assets (PDFs, images)
├── src/
│   ├── components/   # React components
│   │   └── Navbar.jsx
│   ├── pages/        # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Research.jsx
│   │   ├── Publications.jsx
│   │   ├── Projects.jsx
│   │   └── Teaching.jsx
│   ├── styles/       # CSS style files
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customization

### Update Personal Information

1. **About Page** (`src/pages/About.jsx`) - Modify education background, GPA, skills, etc.
2. **Home Page** (`src/pages/Home.jsx`) - Update hero section introduction text

### Add Publications

Edit `src/pages/Publications.jsx`, add new publication objects to the `publications` array.

### Add Projects

Edit `src/pages/Projects.jsx`, add new projects to the `projects` array.

### Update CV

Place CV PDF file in the `public/` folder and update the link in `About.jsx` and `Home.jsx`.

## Deployment

### GitHub Pages

This project is automatically deployed to GitHub Pages via GitHub Actions.

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy to the `gh-pages` branch
3. The website will be available at `https://caiyp7.github.io/yupei-cai-website`

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
npx gh-pages -d dist
```

## Notes

- All external links (GitHub, LinkedIn, etc.) should be updated with actual links
- CV file should be placed in the `public/` folder
- Publication PDF links should point to actual files or URLs
- Video demos use YouTube embeds for better performance
- Color theme can be adjusted by modifying CSS variables in `src/styles/index.css`

## License

MIT License
