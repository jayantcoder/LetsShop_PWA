LetsShop PWA
A Progressive Web App built with React and Vite, featuring a product catalog, detailed product views, a contact page, and a user dashboard. LetsShop offers offline support through vite-plugin-pwa and push notifications via Firebase Cloud Messaging, supporting both foreground and background notifications.
Features

Product browsing with carousel and grid layouts
Detailed product information
Contact form for user inquiries
User dashboard for preferences
Offline access via service worker
Push notifications for updates
Installable as a PWA on mobile and desktop

Setup Instructions
Prerequisites

Node.js (>= 14.x)
npm or yarn
Modern browser (Chrome, Edge, Safari)
Firebase project with Cloud Messaging enabled

Installation

Clone the repository:git clone https://github.com/jayantcoder/LetsShop_PWA.git
cd letsshop-pwa


Install dependencies:npm install


Start the development server:npm run dev



Configuring Firebase for Push Notifications

Set up a Firebase project in the Firebase Console.
Add a web app and copy the Firebase configuration to src/firebase-config.js.
In Project Settings > Cloud Messaging > Web Push certificates, generate a key pair.
Copy the Public VAPID Key to src/push-notifications.js under vapidKey.
Test notifications by running the app, allowing notifications, and sending a test message via Firebase Console (Cloud Messaging > Send your first message).

Configuring Vite PWA Plugin
The vite-plugin-pwa is configured in vite.config.js with a custom service worker (src/sw.js) for background notifications. To customize:

Update manifest.json in /public for branding (name, icons, colors).
Verify icons in /public/icons/ (icon-192x192.png, icon-512x512.png).
Adjust workbox.globPatterns in vite.config.js for additional asset caching.
Test offline support using Chrome DevTools (Network > Offline).
Test background notifications by closing the app tab and sending a notification via Firebase Console.

Testing Push Notifications

Run the app:npm run dev


Open in Chrome, allow notifications, and verify the FCM token in the console.
In Firebase Console, go to Cloud Messaging > Send your first message.
Enter a title (e.g., "New Product Alert!") and body (e.g., "Explore new products in LetsShop.").
Select the web app and send the test notification.
Verify notifications:
Foreground: App open.
Background: App tab closed, browser running.


Clicking a notification opens the app at /.

Mobile Installation

Open the app in a supported browser (Chrome on Android, Safari on iOS).
Use the "Add to Home Screen" prompt or browser menu to add.
Tap "Add" to install.
The app appears on the home screen in standalone mode.

Screenshots

Home Screen: Product carousel and grid.
Product Details: Detailed product view.
Add to Home Screen Prompt: Browser installation prompt.
Installed PWA: App icon on home screen.

Deployment

Build for production:npm run build


Preview the build:npm run preview


Deploy to Netlify, Vercel, or GitHub Pages.
Update the GitHub repository URL in your assignment:https://github.com/jayantcoder/LetsShop_PWA.git



Notes

Use HTTPS in production for PWA features (localhost or ngrok for local testing).
Test with Lighthouse in Chrome DevTools for PWA compliance.
Notifications are sent via Firebase Console; background notifications are handled by src/sw.js.
Ensure /public/icons/icon-192x192.png and /public/icons/icon-512x512.png exist.

