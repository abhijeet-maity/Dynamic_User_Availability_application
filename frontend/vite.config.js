import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Your backend URL
        changeOrigin: true, // Necessary if the backend is running on a different domain/port
        secure: false, // Set to false if you're using an insecure (HTTP) connection
      },
    },
  },
})

