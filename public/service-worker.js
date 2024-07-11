const CACHE_NAME = 'object-detection-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/index.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache)
          .catch((error) => {
            console.error('Failed to cache:', error);
            logCORSIssues(urlsToCache);
          });
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).catch((error) => {
          console.error('Fetch failed:', error);
        });
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png'
  };

  event.waitUntil(
    self.registration.showNotification('Object Detection & Counting', options)
  );
});

function logCORSIssues(urls) {
  urls.forEach(url => {
    fetch(url, { mode: 'cors' })
      .then(response => {
        if (!response.ok) {
          console.error(`CORS issue with URL: ${url}`);
        }
      })
      .catch(error => {
        console.error(`CORS issue with URL: ${url}`, error);
      });
  });
}