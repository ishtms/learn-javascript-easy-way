/**
 * ========================================================
 * Service Workers
 * ========================================================
 * Service Workers enable various powerful features like offline caching, background sync, and push notifications.
 * They run in the background and act as a proxy between web applications and the network.
 */

/**
 * ========================================================
 * 1. Registering a Service Worker
 * ========================================================
 * To register a Service Worker, you use `navigator.serviceWorker.register`.
 * This returns a promise that resolves with the ServiceWorkerRegistration object when the worker gets registered successfully.
 */
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
            console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
            console.log("Service Worker registration failed:", error);
        });
}

/**
 * ========================================================
 * 2. The Install Event
 * ========================================================
 * The `install` event is fired when the Service Worker is being installed.
 * This is an opportunity to cache assets for offline use using the Cache API.
 */
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("my-cache").then((cache) => {
            return cache.addAll(["/", "/index.html", "/styles.css", "/script.js"]);
        })
    );
});

/**
 * ========================================================
 * 3. The Activate Event
 * ========================================================
 * The `activate` event fires when the Service Worker becomes active.
 * This is a good place to manage old caches.
 */
self.addEventListener("activate", (event) => {
    console.log("Service Worker activated");
});

/**
 * ========================================================
 * 4. The Fetch Event
 * ========================================================
 * The `fetch` event can be used to intercept network requests.
 * You can respond to this event by fetching a resource from the cache or network.
 */
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

/**
 * ========================================================
 * Nuances and Advanced Techniques
 * ========================================================
 */

/**
 * 1. Skip Waiting
 * ---------------
 * The `skipWaiting` method allows a service worker to skip the 'waiting' lifecycle phase and move to 'active'.
 */
self.skipWaiting();

/**
 * 2. Clients Claim
 * ----------------
 * Using `clients.claim`, a newly activated Service Worker can immediately control all pages under its scope.
 */
self.clients.claim();

/**
 * 3. Background Sync
 * ------------------
 * The 'sync' event enables deferred actions to be retried when the user has network connectivity.
 */
self.addEventListener("sync", (event) => {
    if (event.tag === "myBackgroundSync") {
        // Your background sync logic here
    }
});

/**
 * 4. Push Notifications
 * ----------------------
 * Service Workers can receive push messages and show local notifications to the user.
 */
self.addEventListener("push", (event) => {
    const title = "New Notification";
    const options = {
        body: "This is a sample push notification!",
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

/**
 * 5. Cache Versioning
 * -------------------
 * Multiple versions of cached assets can be managed by maintaining a cache version identifier.
 */
const cacheName = "my-cache-v1";
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== cacheName) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});
