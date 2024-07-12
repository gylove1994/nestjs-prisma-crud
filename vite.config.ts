import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: 'APP_', // 环境变量前缀
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
