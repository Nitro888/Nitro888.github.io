importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1402946040d28ed483bb.js",
    "revision": "7c649171c53dcdefa97595b1ca7b2344"
  },
  {
    "url": "/_nuxt/84c2473539fe22ac4ed4.js",
    "revision": "dfb410d1c9140fc156f589cdfaff7e09"
  },
  {
    "url": "/_nuxt/8e6faefa2b39bab0583b.js",
    "revision": "80a95535a9d578d744aee5d8000e42a0"
  },
  {
    "url": "/_nuxt/c74bf94161b9a5a00b51.js",
    "revision": "8dbe32edcfdcf34e5b1a1a9a1fe45cc9"
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
