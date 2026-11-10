// Minimaler Service-Worker: nur für die Installierbarkeit. Speichert nichts.
// Seitenaufrufe fragen immer beim Server nach (no-cache), damit die installierte App nach einem Push sofort die neue Version lädt.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request.url, { cache: 'no-cache', credentials: 'same-origin' }).catch(() => fetch(e.request)));
  }
});
