ShopNow PWA
A Progressive Web App (PWA) built with React and Vite, featuring a product catalog, product details, contact page, and dashboard. The app includes offline support via vite-plugin-pwa and push notifications powered by Firebase Cloud Messaging.
Features

Browse products with a carousel and grid view
View detailed product information
Contact form for user inquiries
Dashboard for user preferences
Offline support via service worker
Push notifications for updates
Installable as a PWA on mobile and desktop

Setup Instructions
Prerequisites

Node.js (>= 14.x)
npm or yarn
A modern browser supporting PWAs (e.g., Chrome, Edge, Safari)
A Firebase project for push notifications

Installation

Clone the repository:git clone https://github.com/your-username/shopnow-pwa.git
cd shopnow-pwa


Install dependencies:npm install


Start the development server:npm run dev



Configuring Firebase for Push Notifications

Create a Firebase project in the Firebase Console.
Add a web app and copy the Firebase configuration to src/firebase-config.js.
In Project Settings > Cloud Messaging > Web Push certificates, click Generate key pair.
Copy the Public VAPID Key and paste it into src/push-notifications.js under vapidKey.
Test push notifications by subscribing in the browser and sending a test notification via Firebase Console or a backend.

Example firebase-config.js:
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

Configuring Vite PWA Plugin
The vite-plugin-pwa is configured in vite.config.js. Steps to customize:

Ensure manifest in vite.config.js matches your app’s branding (name, icons, colors).
Verify icons exist in public/icons/ (icon-192x192.png, icon-512x512.png).
Update workbox.globPatterns to cache additional assets if needed.
Test offline support using Chrome DevTools (Network > Offline).

Example vite.config.js:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
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

Mobile Installation
To install the PWA on a mobile device:

Open the app in a supported browser (e.g., Chrome on Android, Safari on iOS).
Look for the "Add to Home Screen" prompt or manually add via the browser menu.
Tap "Add" to install the app.
The app will appear on your home screen and run in standalone mode.

Screenshots

Home Screen: Displays the product carousel and grid.
Product Details: Shows detailed product information.
Add to Home Screen Prompt: Browser prompt for installation.
Installed PWA: App icon on the home screen.

Note: Replace screenshots/ with actual screenshot files in your repository.
Deployment

Build the app for production:npm run build


Preview the build:npm run preview


Deploy to a platform like Netlify, Vercel, or GitHub Pages.
Update the GitHub repository URL in your assignment sheet:https://github.com/your-username/shopnow-pwa



Notes

Ensure HTTPS is enabled for PWA features in production.
Test the PWA using Lighthouse in Chrome DevTools for performance and PWA compliance.
The Firebase backend is optional; use Firebase Console to send test notifications or set up a server with Firebase Admin SDK.

