import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/router': {
        target: 'https://restaurant-agkl.vercel.app', // ✅ Your new target
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
