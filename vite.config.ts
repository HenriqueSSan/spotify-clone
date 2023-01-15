import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: './postcss.config.js',
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        style: 'compressed',
      },
    },
    devSourcemap: true,
  },
});
