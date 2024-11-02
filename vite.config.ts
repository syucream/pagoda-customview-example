import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@syucream/pagoda-core': path.resolve(__dirname, 'node_modules/@syucream/pagoda-core'),
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    },
    dedupe: ['react', 'react-dom']
  },
  esbuild: {
    logOverride: {
      'ts6133': 'silent'
    }
  },
});