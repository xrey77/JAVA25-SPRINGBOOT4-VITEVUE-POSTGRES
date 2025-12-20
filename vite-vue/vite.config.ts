import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    origin: 'http://localhost:5173',
    port: 5173,
    proxy: {
      // Catch all routes that aren't for the index or static assets
      '^(?!/index.html|/api|/assets|/src).*': {
        target: 'http://localhost:5173', // Your dev server address
        rewrite: () => '/index.html',
      },
    },
  },
})
