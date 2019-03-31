importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/14a0cc0b031220978e17.js",
    "revision": "5108c9cae2e1695223af629a13755b83"
  },
  {
    "url": "/_nuxt/772d933113dba04644b9.js",
    "revision": "219bac420274dec4ee2acd935efc20fc"
  },
  {
    "url": "/_nuxt/bbea79ebeee572d9ddf4.js",
    "revision": "dc75632212490012e2937b8cdc65e191"
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
