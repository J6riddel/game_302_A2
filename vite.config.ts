import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
  base: './', // Ensures relative paths work on GitHub Pages
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
  define: {
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || '')
  }
});
