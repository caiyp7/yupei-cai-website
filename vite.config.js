import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Always use base path for GitHub Pages
  base: '/yupei-cai-website/',
})

