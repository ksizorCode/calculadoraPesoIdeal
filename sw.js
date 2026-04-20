/**
 * 🛠️ Service Worker - Vitality PWA
 * Gestiona el cacheo y el funcionamiento offline.
 */

const CACHE_NAME = 'vitality-cache-v1';
const ASSETS = [
    './',
    './index.html',
    './resultado.html',
    './css/styles.css',
    './js/calculator.js',
    './js/main.js',
    './js/display-results.js',
    './manifest.json',
    'https://cdn.tailwindcss.com?plugins=forms,container-queries',
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap'
];

// 📦 Instalación y Cacheo
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache abierto 📦');
                return cache.addAll(ASSETS);
            })
    );
});

// 🔄 Activación y Limpieza
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// 📡 Estrategia Fetch (Cache falling back to network)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Si está en cache, devolver. Si no, ir a la red.
                return response || fetch(event.request);
            })
    );
});
