import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: process.env.BASE_URL || '/EAE/app/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'vite-entry.html'),
    },
  },
  server: {
    // React dev server entry — visit /vite-entry.html in the browser
    open: '/vite-entry.html',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.pdf'],
});
