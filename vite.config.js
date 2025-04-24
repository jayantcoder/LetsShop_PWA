import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // Enable service worker in development
        type: 'module', // Ensure ES module support for dev-sw.js
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      injectManifest: {
        injectionPoint: 'self.__WB_MANIFEST', // Match sw.js precache injection
      },
      srcDir: 'src',
      filename: 'sw.js',
      strategies: 'injectManifest',
      manifest: {
        name: 'ShopNow',
        short_name: 'ShopNow',
        description: 'A Progressive Web App for shopping premium products',
        start_url: '/',
        display: 'standalone',
        background_color: '#f3f4f6',
        theme_color: '#1e40af',
        icons: [
          { src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),
  ],
});