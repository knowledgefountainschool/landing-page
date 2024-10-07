import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Unfonts from 'unplugin-fonts/vite';

export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      custom: {
        families: [
          {
            name: 'Geist',
            src: './src/assets/fonts/*.woff2',
          },
          {
            name: 'SF-Pro-Text',
            src: './src/assets/fonts/san-francisco/*.otf',
          },
          {
            name: 'BerlingskeSerif',
            src: './src/assets/fonts/berlingske-serif/*.woff2',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
