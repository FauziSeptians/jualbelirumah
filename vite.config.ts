import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	eslint: {
		include: ['src/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
	},
})
