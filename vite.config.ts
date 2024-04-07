import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  eslint: {
    // Lint on save
    cache: false,
    include: ['src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
  },
})
