self.addEventListener('install', (event) => {
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
  });
  
  // Precache manifest injection point for vite-plugin-pwa
  self.__WB_MANIFEST;
  
  self.addEventListener('push', (event) => {
    let data = {};
    try {
      data = event.data.json();
    } catch (error) {
      console.error('Invalid push data:', error);
      return;
    }
  
    const title = data.notification?.title || 'ShopNow Notification';
    const options = {
      body: data.notification?.body || 'Check out the latest products in ShopNow.',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-192x192.png',
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });
  
  self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
      self.clients.openWindow('/')
    );
  });