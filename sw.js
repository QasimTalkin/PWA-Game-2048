var cacheList = ["index.html","js/html_actuator.js","js/grid.js","js/tile.js","js/local_storage_manager.js","js/game_manager.js", "js/keyboard_input_manager.js", "style/main.css"];

self.addEventListener("install", function (event) {
    console.log("Installing Service Worker!");
    caches.open("PRECACHE")
    .then(function (cache) {cache.addAll(cacheList)});
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            if (response){return response;}
        return fetch(event.request);
    })
    );
});

