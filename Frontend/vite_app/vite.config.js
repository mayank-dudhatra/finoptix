import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    server: {
       allowedHosts: [
        '503b-2409-40c1-5004-8229-5d00-a9d1-5b42-609c.ngrok-free.app'
       ]
    }
})

