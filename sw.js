const CACHE_NAME = "purpose-here-v1";

const ASSETS = [
    "/",
    "/index.html",
    "/bazaar.html",
    "/privacy.html",
    "/terms.html",

    "/manifest.json",

    "/assets/css/styles.css",
    "/assets/css/home.css",
    "/assets/css/bazaar.css",

    "/assets/js/main.js",
    "/assets/js/home.js",
    "/assets/js/bazaar.js",

    "/assets/images/ph-icon.png",
    "/assets/images/ph-icon-192.png",
    "/assets/images/ph-icon-512.png",
    "/assets/images/hero-dev.png",
    "/assets/images/bazaar-shop.png"
];

/* ---------- Install ---------- */

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );

    self.skipWaiting();
});

/* ---------- Activate ---------- */

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );

    self.clients.claim();
});

/* ---------- Fetch ---------- */

self.addEventListener("fetch", event => {

    event.respondWith(
        caches.match(event.request).then(cacheResponse => {

            if (cacheResponse) {
                return cacheResponse;
            }

            return fetch(event.request)
                .then(networkResponse => {

                    return caches.open(CACHE_NAME).then(cache => {

                        cache.put(event.request, networkResponse.clone());

                        return networkResponse;

                    });

                })
                .catch(() => caches.match("/index.html"));

        })
    );

});
