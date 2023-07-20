‘use strict’;
importScripts(‘sw-toolbox.js’); 
toolbox.precache([“offline.html”]); 
toolbox.router.get(‘/images/*’, toolbox.cacheFirst); toolbox.router.get(‘/*’, toolbox.networkFirst, { networkTimeoutSeconds: 5});