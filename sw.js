importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f14e87330200d3cae36.js",
    "revision": "dac2345a1d4cfe4d897962b0fa766b31"
  },
  {
    "url": "/_nuxt/3afca32546da9667533c.js",
    "revision": "bfadfb0edeabd1560faac83813dfd926"
  },
  {
    "url": "/_nuxt/4a0e54590a1f74cd1989.js",
    "revision": "a589bb46b91fe538582886c8dd88927c"
  },
  {
    "url": "/_nuxt/4bdfaf82ff71cad2ae31.js",
    "revision": "343fc28dcbb04d9c27888b3bf3a5a890"
  },
  {
    "url": "/_nuxt/6d0f7f3b6b4fc8e0b008.js",
    "revision": "a0c5e82e5d96ce570f9c135a42f8d26f"
  },
  {
    "url": "/_nuxt/f0399b1a46f77d1e9bbb.js",
    "revision": "92f5ea30a873cab02c7472a1b293055c"
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
