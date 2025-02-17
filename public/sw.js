self.addEventListener("install", (event) => {
    console.log("Service Worker Installed");
    event.waitUntil(
      caches.open("mignot-portfolio-v1").then((cache) => {
        return cache.addAll(["/", "/manifest.json"]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  
  self.addEventListener("activate", (event) => {
    console.log("Service Worker Activated");
  });
  