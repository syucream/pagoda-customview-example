import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pagoda-core': path.resolve(__dirname, 'node_modules/@syucream/pagoda-core/frontend/src')
    }
  }
});