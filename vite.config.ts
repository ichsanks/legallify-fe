import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/core/presentation/components'),
      '@routes': path.resolve(__dirname, './src/core/routes'),
      '@context': path.resolve(__dirname, './src/core/context'),
    },
  },
});
