// Network-first cache: always serves the latest version when online,
// and still opens the demo if the classroom Wi-Fi drops.
const CACHE = 'gskgo-v2';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png', './gsk-logo.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(CORE.map(u => new Request(u, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const cdn = /(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(url.hostname) || url.hostname === 'cdnjs.cloudflare.com';
  if (!sameOrigin && !cdn) return;
  // same-origin files revalidate every time, so a redeploy shows up immediately instead of after the host's cache expiry
  const net = sameOrigin ? fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : fetch(req);
  e.respondWith(
    net
      .then(res => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: sameOrigin })
        .then(hit => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
