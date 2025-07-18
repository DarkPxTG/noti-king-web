importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyB1PfOc9lMM1ZAXSQpHpDNDINw9EaIIfKY",
  authDomain: "noti-king.firebaseapp.com",
  projectId: "noti-king",
  storageBucket: "noti-king.firebasestorage.app",
  messagingSenderId: "453245140777",
  appId: "1:453245140777:web:a5acde8da69d325d3f0138",
  measurementId: "G-T0ZG929L5V"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// دریافت پیام‌ها وقتی تب مرورگر بسته است یا در پس‌زمینه است
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/Baner.png' // آیکون اختیاری
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
