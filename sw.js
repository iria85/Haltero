// Haltero · service worker: guarda la app para que funcione sin conexión en el box.
// Cuando cambies la app, sube el número de VERSION para que el iPhone descargue la nueva.
const VERSION = "haltero-v4";
const FILES = ["./", "index.html", "programs/halterofilia.js", "manifest.webmanifest",
  "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-512-maskable.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// La página y los programas: primero internet (máx. 3 s) para ver siempre la última versión;
// si no hay conexión o tarda, la copia guardada. Iconos y demás: primero la copia guardada.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const fresh = e.request.mode === "navigate" || /\.(html|js)$/.test(url.pathname) || url.pathname.endsWith("/");
  e.respondWith(caches.open(VERSION).then(async c => {
    const hit = await c.match(e.request, {ignoreSearch: true});
    const net = fetch(e.request, {cache: "no-cache"}).then(r => { if (r && r.ok) c.put(e.request, r.clone()); return r; });
    if (!fresh) return hit || net;
    const slow = new Promise(res => setTimeout(() => res(hit), 3000));
    try { return (await Promise.race([net, hit ? slow : net])) || hit || await net; }
    catch (_) { return hit || Response.error(); }
  }));
});
