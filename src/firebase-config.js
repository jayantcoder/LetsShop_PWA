import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBAI7XlSTyRB0a-Po5wqQs4jBjtQ-254fo",
    authDomain: "letsshoppwa.firebaseapp.com",
    projectId: "letsshoppwa",
    storageBucket: "letsshoppwa.firebasestorage.app",
    messagingSenderId: "1016828513342",
    appId: "1:1016828513342:web:8dd39c758c3ba2da9e556f",
    measurementId: "G-2SSFWT80MT"
  };

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);