importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4f3d33bdae1a8fb68a34.js",
    "revision": "8dfe31616e87297d7753dac33202c74a"
  },
  {
    "url": "/_nuxt/541c10134d52f47cbde3.js",
    "revision": "91ea9f53f863a27ec1412b83ee93fce5"
  },
  {
    "url": "/_nuxt/c74bf94161b9a5a00b51.js",
    "revision": "8dbe32edcfdcf34e5b1a1a9a1fe45cc9"
  },
  {
    "url": "/_nuxt/f38e35863008e3bbc3ae.js",
    "revision": "f23fc20eea55255533036fe6604362ad"
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
