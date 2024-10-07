/* eslint-disable no-undef */
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
            name: 'SF-Pro-Text',
            local: 'SF-Pro-Text',
            src: './src/assets/fonts/san-francisco/*.otf',
            display: 'auto',
            preload: true,
          },
          {
            name: 'Geist',
            local: 'Geist',
            src: './src/assets/fonts/geist/*.woff2',
            display: 'auto',
            preload: true,
          },
          {
            name: 'BerlingskeSerif',
            local: 'BerlingskeSerif',
            src: './src/assets/fonts/berlingske-serif/*.woff2',
            display: 'auto',
            preload: true,
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
