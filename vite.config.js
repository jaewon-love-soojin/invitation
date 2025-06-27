import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/wed/',
  define: {
    'process.env': {
      X_NCP_APIGW_API_KEY_ID: process.env.X_NCP_APIGW_API_KEY_ID || '',
    },
  }
})
