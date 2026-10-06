const CACHE_NAME = "bodystyle-docs-v1";
const APP_SHELL = [
    "./",
    "./index.html",
    "./404.html",
    "./css/bodystyle.min.css",
    "./css/index.css",
    "./css/docs.css",
    "./css/show-dark.min.css",
    "./js/docs-body.js",
    "./js/index.js",
    "./js/pwa.js",
    "./images/logo.png",
    "./images/logo_bodystyle.svg",
    "./favicon.ico"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => cachedResponse || fetch(event.request)
                .then(networkResponse => {
                    if (!networkResponse.ok || new URL(event.request.url).origin !== self.location.origin) {
                        return networkResponse;
                    }

                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
                    return networkResponse;
                })
            )
            .catch(() => caches.match("./index.html"))
    );
});
