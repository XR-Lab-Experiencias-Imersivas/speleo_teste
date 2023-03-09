'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "87cf10a27f44237470cf628dcfd2aca2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cdc6e77564d392632d1d3162ecd18e1f",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c66c43586f99ad50f708f516929b66db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8eda6118cb24ad64b36a4e9dec8817d8",
".git/logs/refs/heads/develop": "9747748dfc9e638086032f3bd0bff836",
".git/logs/refs/heads/master": "104eb45ba66c40e08843fcca2d4ea028",
".git/logs/refs/remotes/origin/HEAD": "104eb45ba66c40e08843fcca2d4ea028",
".git/objects/pack/pack-347eb9427e545b8abbb78b0e910f282cdb2d8613.idx": "4feebe663450acca8cdd6b342e790d58",
".git/objects/pack/pack-347eb9427e545b8abbb78b0e910f282cdb2d8613.pack": "62954b9ec2f62a174b8017c9de60c07e",
".git/packed-refs": "452ad6550c99aa0eea93d5e46e9bf868",
".git/refs/heads/develop": "153ada23f1dd916956f146afed161be2",
".git/refs/heads/master": "01e8d69425132d72ac6b4966119d1d58",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"assets/AssetManifest.json": "2a94471f8e58e897ef17be6d272ea326",
"assets/assets/csv/FichaTecnicaCavidade.csv": "4aad53cf30c31712fc1aca7000ecda7f",
"assets/assets/fonts/ValeSans-Bold.ttf": "310af1f2c959a2aa8edc163e59a3b298",
"assets/assets/fonts/ValeSans-Italic.ttf": "a09457541157a8a5609cdf71e88de5aa",
"assets/assets/fonts/ValeSans-Medium.ttf": "9f1c194c5257e51e8571e3e8e56a2836",
"assets/assets/fonts/ValeSans-Regular.ttf": "bf7fd46aef2db9ecf37d972a412eaf01",
"assets/assets/fonts/ValeSans-Semibold.ttf": "431cbb30510a8162f2a8d14e35963bd7",
"assets/assets/images/apito.png": "9d7c6eb4fa3658aba0a918c53fa38393",
"assets/assets/images/avancar.png": "f454a6c917038109dd235f60bfb3bd88",
"assets/assets/images/background.png": "a6c8499b50f1b219721b94dab45a5f4b",
"assets/assets/images/background_menu.png": "f4d447465e8d1783185f5b69fcbb9f56",
"assets/assets/images/bota.png": "eccbd17c442c36a894ba274f49c7a69f",
"assets/assets/images/camisa.png": "d96ebdb00212d8000ad2d85aca31a8d6",
"assets/assets/images/capacete.png": "525a6d9241f3f9752cfe0f8cd8e06ccb",
"assets/assets/images/colete.png": "41b32dbb15209c92901cd502fea1dad3",
"assets/assets/images/CommentIcon.png": "c538cec2eacb2145ad3e846feef63b2d",
"assets/assets/images/Doc.png": "1d76635e417938f500d1982930030cd5",
"assets/assets/images/equipamento_de_rastreio.png": "359382a203a868f5d8bba96c2c6af805",
"assets/assets/images/Especificacao-Tecnica.png": "6048a8569fc01d2efa5b2cebe57878c8",
"assets/assets/images/ficha_de_EPI.png": "8608140f85417d7f41da021129988899",
"assets/assets/images/IconeExcel.svg": "2c2c2c2ca006f43964df40b291cca721",
"assets/assets/images/IconePowerPoint.svg": "1f9ad79156e7c6b0e0ad5bd3bf7dfac9",
"assets/assets/images/IconeWord.svg": "996e1a3fd928c07a0993af119ac6bd70",
"assets/assets/images/IGC_Icon.png": "acc4c6886c8b21ab657dbf551bbd9dfc",
"assets/assets/images/lanterna.png": "86084e7d7ca3ff135201a82805114ddb",
"assets/assets/images/Lock.png": "c349e8840523ca38c39ae2a16b8ee02d",
"assets/assets/images/logo_speleo.png": "1dd5752cbab2b74be1f9b5bbc7a9ec1f",
"assets/assets/images/logo_speleo_2.png": "7d72e3e0669eb09c44e8298306daf871",
"assets/assets/images/logo_speleo_simples.png": "d9fbce1aed4f34422a1b88abc3df8247",
"assets/assets/images/logo_vale.png": "0dfd0809bdc8d5b8df1f140cc9de4226",
"assets/assets/images/logo_xrlab.png": "e17f86df70a052e1f13e7f8489b872da",
"assets/assets/images/luvas.png": "74242ccd38765f12c9958c652ba8a902",
"assets/assets/images/Mapa_de_risco.png": "c5e5fe5997a79db0426b4a8593c8a43f",
"assets/assets/images/Nav_Guiada.png": "69628f627249bf28587e032bd5764085",
"assets/assets/images/oculos.png": "ff60d945a90dff91b3c87ee90e08b374",
"assets/assets/images/pause.png": "af7706606b5e2916b7e44182aae7ab89",
"assets/assets/images/perneira.png": "49adcf5958e588df3f9bd2caaa123176",
"assets/assets/images/play.png": "398f5de16eafa0753e3e51564a36b989",
"assets/assets/images/protecaoabelha.png": "7a69de6d4567766653e32a40c766c16f",
"assets/assets/images/respirador.png": "57627f145311f910d136b81ddd12cf70",
"assets/assets/images/retroceder.png": "e9bd6ca74425621c5db6205dca4e17ae",
"assets/assets/images/telefone.png": "d62975cf5c41fa38294c6687cb6755de",
"assets/assets/images/Tour_virtual.png": "6553e296c2adb2dd995212573f0fcf95",
"assets/assets/images/Unlock.png": "c1350eb26f8209699dbb8393140ae08e",
"assets/FontManifest.json": "711b69325b61c485a91eb4276e825a7d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "afbc1ee77f488ce165d399798485a744",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/shaders/ink_sparkle.frag": "bb2f09705eebff3cafaaedd9ff45c211",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "60c4a36ff43599f5cbe214032358919e",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "3329515440a471439be85760364245fd",
"icons/Icon-512.png": "21bd0f1711e5524113af81118293ea4e",
"icons/Icon-maskable-192.png": "1c192f2e109b060b2d79ed82ef16b43e",
"icons/Icon-maskable-512.png": "939d01a1929f2deec8f85f59168a3f4e",
"icons/logoSpeleo.png": "d9fbce1aed4f34422a1b88abc3df8247",
"index.html": "c0d3e5a50a301be58b9eab7b5ad00aa3",
"/": "37165121504e94590077aae2b88889a9",
"main.dart.js": "d424244579e8ef92b5a08407f970eb69",
"manifest.json": "7e82df8778eb664dda27b66ea1d2f412",
"UnityLibrary/Build/UnityLibrary.data": "7378242a9213c63f6ff78c1bd41af40c",
"UnityLibrary/Build/UnityLibrary.framework.js": "9c9c517bf7dc6a02dcc18f2e8d9b8598",
"UnityLibrary/Build/UnityLibrary.loader.js": "fb71d028619e714657010c1a83ad1355",
"UnityLibrary/Build/UnityLibrary.wasm": "791a319f4ed18d50cd4daecf8d97bf9c",
"UnityLibrary/index.html": "37165121504e94590077aae2b88889a9",
"UnityLibrary/StreamingAssets/aa/AddressablesLink/link.xml": "a8eb81bdc0252b94ce6c3d49260772ae",
"UnityLibrary/StreamingAssets/aa/catalog.json": "a942baa4056bf4b30e524b117e09e85d",
"UnityLibrary/StreamingAssets/aa/settings.json": "91a3ce3ded6fed6f07812110bcb7f784",
"UnityLibrary/StreamingAssets/UnityServicesProjectConfiguration.json": "b225a14f3d6d0971fcc8cd013b701f51",
"version.json": "182e6987562462c4b5612a1926cf9739"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
