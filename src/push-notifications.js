import { messaging } from './firebase-config';
import { getToken } from 'firebase/messaging';

export const subscribeToPush = async () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    try {
      const registration = await navigator.serviceWorker.ready;
      const token = await getToken(messaging, {
        vapidKey: 'BBFSwbmBnAs9CkECgtjWBHBzXAmWmvtjE6Fgg5cpCw2qTQBrBDC1Wlbal3ZpjKWb9ddcUfGU5Ved_pqaSBR9vZs',
        serviceWorkerRegistration: registration,
      });
      console.log('FCM Token:', token);
    } catch (error) {
      console.error('Push subscription failed:', error);
    }
  }
};
