import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // Włącz plugin react compiler
      babel: {
        plugins: ['babel-plugin-react-compiler']
      }
    })
  ]
})