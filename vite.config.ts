import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    // Dodano konfigurację portu, aby uruchomić na 5174 gdy 5173 jest zajęty
    server: {
      port: 5174,
    },
  base: '/',
  plugins: [react()],
})
