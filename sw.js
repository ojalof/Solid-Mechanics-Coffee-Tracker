self.addEventListener("install", (event) => self.skipWaiting());
self.addEventListener("activate", (event) => self.clients.claim());

// Minimal fetch handler (you can add caching later)
self.addEventListener("fetch", (event) => {});
