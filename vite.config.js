import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/* sadasd */
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: true
  }
})
