import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api':
        'https://rapidapi.com/restocked-gAGxip8a_/api/twitter-api47/playground/apiendpoint_d9a2ab0a-aaad-45e1-a9fe-8d6db286f0b4',
    },
  },
})
