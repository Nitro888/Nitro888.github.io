importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2e318099d603c1fb99e9.js",
    "revision": "0c3cd0d919c515f5cbbf29db74a8342f"
  },
  {
    "url": "/_nuxt/4fd9fb4af3b1fc997465.js",
    "revision": "4c97e88cdd8e61a4217e1df0b6cf53b8"
  },
  {
    "url": "/_nuxt/686ad222593461c7b3cf.js",
    "revision": "6173a82bbd405200d98292ad5e356af8"
  },
  {
    "url": "/_nuxt/9f6b52eb4e66dab596e7.js",
    "revision": "a33fe4d67dca4f580f14d552e23e739e"
  },
  {
    "url": "/_nuxt/a4e687db87a6c35cfd34.js",
    "revision": "a811c62bf17348a00d297302dbbb44a7"
  },
  {
    "url": "/_nuxt/bf1fd6d6c3e4002369a8.js",
    "revision": "18ec33ebe4bacbfb212026df8867a457"
  }
], {
  "cacheId": "daoauth",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
