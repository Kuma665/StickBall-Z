// Minimaler Service-Worker: nur für die Installierbarkeit. Speichert nichts, alles kommt frisch aus dem Netz.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
