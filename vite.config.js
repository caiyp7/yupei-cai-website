import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || (process.env.NODE_ENV === 'production' ? '/yupei-cai-website/' : '/'),
})

