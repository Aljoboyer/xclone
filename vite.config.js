import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
///<reference types="vitest"/>
///<reference types="vite/client"/>

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.ts']
  }
})
//npm i vitest jsdom @testing-library/react @testing-library/jest-dom -D