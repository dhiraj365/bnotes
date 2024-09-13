'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8a78492290a0029660805dff9e17a468",
"assets/AssetManifest.bin.json": "831ec7baa3998a6f5ad95924cab6e8bd",
"assets/AssetManifest.json": "b18fba0a0bb9899a73c334729719a314",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/icons/account.svg": "be61da1d6af873d51c01701e68540159",
"assets/assets/icons/cart.svg": "40fa47e7f04acd012c0b3e7ff290de80",
"assets/assets/icons/explore.svg": "f8ba26d9347a3f09da2769efc0f87a5f",
"assets/assets/icons/favorite.svg": "34bfb6b8c1fd6833e4d6b1835ef38ad2",
"assets/assets/icons/search.svg": "0eeb1ef28e8ca82d9c279a569b63b7c5",
"assets/assets/icons/shop.svg": "ce01a2186d66c9f61f3d9e6c6e31e24f",
"assets/assets/images/add.png": "4b8ebc68ee745cbecb7d64a29e0400ea",
"assets/assets/images/all.png": "be3ff5cedaf45aef6520abace5ff110e",
"assets/assets/images/avatar.jpg": "19c7f0bbf81c7001222a0bdc995cd710",
"assets/assets/images/check.png": "326f98017d1db348aa9a53464cfbedb2",
"assets/assets/images/company_logo.png": "32b83dcee0fb29a34854678cd82e78d7",
"assets/assets/images/company_logo_transparent.png": "3d1a7f0af2d34f2e4cb65d33305b97b7",
"assets/assets/images/default.png": "7944b394dd01fd090e883a9838e21601",
"assets/assets/images/email.png": "17c50ab59f96a3117b3ed3f6468d4077",
"assets/assets/images/empty-img.jpg": "33f2c94149baa62dd02d6fd51016e6bb",
"assets/assets/images/empty.png": "98f71224eabce3d7cd99994e97e14c04",
"assets/assets/images/facebook.png": "7907c081a87bc6707f519c9427e4a02c",
"assets/assets/images/forgot_password.png": "2a3b476963f0821ed22ab2a5352ce0ba",
"assets/assets/images/gmap.png": "52647aaa63b8402956bcf33964ab7532",
"assets/assets/images/google.png": "f6b7d0aa1e3cdd9ffc93acb194cb1153",
"assets/assets/images/log.png": "2f1688f61121417d54c4ad5ec1570191",
"assets/assets/images/love.gif": "8e2768589e45d808d10cbe455efbb9ef",
"assets/assets/images/ops.png": "a48af09a85d6a3fdc19a3206381da1b1",
"assets/assets/images/payment.png": "6da3fdc5909fb7bcce4ee2cf21858a83",
"assets/assets/images/placeholder-img.jpg": "9e3f64ea883c30a596a31cc5f4d98510",
"assets/assets/images/sign_up.png": "f96388dc83ffbee700b402f415de884a",
"assets/assets/images/sp1.png": "abbf2f3a444994d78c9cd2f1d15cb1b6",
"assets/assets/images/sp2.png": "86ce790a549a8a977b7443607b4b3ad1",
"assets/assets/images/sp3.png": "21493ec9690fe564492fed3e7142da3c",
"assets/assets/images/warning.png": "97183737ecc03edaa8a36a98f9b15494",
"assets/FontManifest.json": "dd4aa1c2f40623e4b9eb67f7da74e0e6",
"assets/fonts/MaterialIcons-Regular.otf": "9ddf50ca433bb80034392664c7769dc7",
"assets/NOTICES": "00dcfca39e359582947cf260df32bc90",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/country_state_city_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/android-chrome-192x192.png": "a2e2c78031e24c7c99e9832f9512d90f",
"icons/android-chrome-512x512.png": "0d485987aa07d6bf735306e098986570",
"icons/apple-touch-icon.png": "882f5713624c3e3438b08156b45a0453",
"icons/logo.png": "a2e2c78031e24c7c99e9832f9512d90f",
"index.html": "207334c7b3fafacecadce8be608ab86e",
"/": "207334c7b3fafacecadce8be608ab86e",
"main.dart.js": "2c77c9b8e72d55a2d8f85a58d9bf88a1",
"manifest.json": "5783867cc790ba85d76d270374a8bea5",
"version.json": "81c477e216c5532615168cc7db9f5a46"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
