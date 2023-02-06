'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a0132d907940fa4c20d6bae905f42ca1",
".git/config": "97e30d1803d36e739d01818160338f59",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c3b49607cf038a181133ae09461def2c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "58476b57d178743525d6a2a88a54652a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ffaa879b2589574241a8d85c6d3167d3",
".git/logs/refs/heads/develop": "22458803a127be3de6ac72e966702198",
".git/logs/refs/heads/master": "e116aa3d9cad31a4890ed9f44a59f60c",
".git/logs/refs/remotes/origin/develop": "d392bf610765ade56f979d40d6de9b39",
".git/logs/refs/remotes/origin/HEAD": "38b19f7d2ed102a40026d60476cd6524",
".git/objects/07/f226cf1ed3db42c7b2a4aeb970cf12ebe0e98e": "491c1981a178e3f6407d0b14f5496b7f",
".git/objects/0a/00f02137909bceea3dfb827243826944ccf39e": "86cac82aad5c0152b313605917e0db0f",
".git/objects/1c/8b9946da31d13ca236004b5535c336857d79c4": "a49d25e6453e74cd322c631a41cc9771",
".git/objects/1e/6bc9923edb19cbf151eedca8f0ecd89854326f": "27a876fe57f1d824e3f14529388d4112",
".git/objects/21/e0f8fa06f989d50b0f370994fcb5c52ed14086": "61166b52d755e62a1ec97f581bb0864f",
".git/objects/23/19896123b1674958fffce25f5f1a3a5ec9b77c": "4768af1c28238bb92ffc9a1db7ca990a",
".git/objects/24/d9907475a4b91bf4d3e469f18a533801fdb115": "f4f112b5110ff0eb1085f7f88b5c067f",
".git/objects/28/dea51db30c82bc643641c2011e15b507086b25": "a189bf1f7458c2c85f0e90e69eaea74d",
".git/objects/2a/f6a2f3ec132bf2f25a021f2bec483927382793": "d49ff14c141fd588f6f1d7d16543685f",
".git/objects/30/ea6c14b00a376565a9c991bcd35feab7dca080": "71ce0e0e69c698650b96da17d5e0b419",
".git/objects/33/942052df508b20cd5b981e781e7d6d06fce520": "c3ddf3009e68d0ab80d38c8f7cf131e7",
".git/objects/39/a632c7f8bbec3c6d480e788ac6a051a5867f1d": "9150c62e3ad3bddb5e9b5ebf21619caa",
".git/objects/3b/7ad9ad60dfc7d7da465c86c18fed1b4c7a0f4c": "a8d196dabab84428d029cf42e37aa8f7",
".git/objects/3c/80380ef244df8500009fcc6084c283a1e45a73": "bffe065a3b7411c8ff371af05b18127d",
".git/objects/3c/e1afb76e93502eb8bd0bb59da020870363011d": "beb2a4c08833dd27b05fd15841cfcdf7",
".git/objects/3d/2349e685e6c6db7f489cc6257fb3be8752363b": "c31dde1e47254e6063fe5915ce2a1d17",
".git/objects/44/4d058862edf3a644ceea894f02c63e20f5e382": "06e48d5a4832ae41aaa32f444f30e7c5",
".git/objects/48/69974e81c6f3c1f83735bd91fdf2c9793a54aa": "5ea27fef67315159e483c95cb4f3827e",
".git/objects/4a/3093beac3501ee79666daee757e54770b1b5c1": "1938b08a21d364fbac97d6868826dc56",
".git/objects/54/1171c1b563b6c3cf47bcf418fd68e964964b49": "996b13e5aa6265456a720fd3142bb0ca",
".git/objects/57/64b0ab987d294399e9b5336b48cdc70056d4a0": "e6b59b59c64ac948a695ac5165f037fa",
".git/objects/61/98e520c27b959f65cf55b66d7c6ef9eba156a2": "dbf95fd13a767eddf06e56f5ef04d58b",
".git/objects/61/afbc45c0871ce130f6f3b65c81542af11fc5a3": "cc534ce2f9740e407b9d85465b53a837",
".git/objects/67/2735f1bf4d8d0961fbef451e7c5af2554e83ec": "764712b9a96666648ada33d94a63baea",
".git/objects/67/a19a8ff730d342d6d37472d2f44ac1b96cbbf7": "16bc1d2e950ca142d5db285c10383617",
".git/objects/69/18673c5315ea6d8217e1b1fcde4c23e0cd640c": "d9fcab5e973a62e0af765aecefd00e30",
".git/objects/6c/a819a19d512ae59a117b7f581e48868755f906": "230301cf1a78203ef7298801903f1da4",
".git/objects/82/be23ef2a942ff49e615618aecc40d12f4f73a4": "ca7d49d41f350f3c0e5d608f31480df8",
".git/objects/8e/abe35e63f68e0bd5ce55978134243307309e9c": "d9ebb14b805204950f597e9508616119",
".git/objects/93/5632130a322d649200be2ec93c3ba7a3a5566f": "617db12908df33a646c0fc420163909a",
".git/objects/94/2f57dd813182378e36036a08001a9ebaf5c5d3": "c8cbc123c99cea7526ca5c130a8a3bdc",
".git/objects/9e/a3ca7387fda04aba253a38e8db8ecc3127dc66": "13e1ceaac96f7c1b8d1157f91d94e8b9",
".git/objects/a6/426c663db2cd70c826ac8d3be9965270a11123": "8fe99b4f3598c4ff7f2bd30d37061fe3",
".git/objects/ad/9648e9cfa7c770d1d7f7a0b9df6be8ac5a7dd2": "4d35445c0592dc9e996302f04953fe38",
".git/objects/b4/17685de9efa2f20e84eebd76ed4ac50a3dd192": "22014e3d73755a48aba162b23d1f4871",
".git/objects/ba/ebf95f9f6a6d69323b570a7807576ed888ea91": "b4da1d45cd099d8c32b0d5789dfa3d7b",
".git/objects/c1/ec14a51927dce86c7c9acb6a4d03b874f343b7": "800d222025ae9e91f200854f8112c0e1",
".git/objects/d9/8444c811cfd6df3b0dd5e93caf12494dff912d": "576188a91bd2eb2f28b44ce1018886cb",
".git/objects/d9/b5eb83057e07a8067d0195972526207fae5348": "b5dfe3e7360209de39a3ecd95aafd3be",
".git/objects/dd/78acc716549358a99b67384318669e9ae462b8": "174ece2ec59fe6a570c59892e5107200",
".git/objects/e2/54ede9e8a77902bac1c1f3b0221433056f704f": "7ac35e73d498539822eba089c304ebc6",
".git/objects/e8/e5d1e72ac0e29113a220b9fa3328f982f57c56": "186599c1018f9010f9409a75e218869c",
".git/objects/f7/fa0762b488dc651e59cd7ab8ce96e28676d57a": "36900515dd86030a1d85b991c35bba23",
".git/objects/f8/89cba3a7fa0a1c9b87aacc84b5ee3472bb1b9b": "416577e64efec08f3d52a7c08495def5",
".git/objects/fa/e4ffc035dbf1344169f07066ec65cc194dcad4": "3d79015a7e0e2b4ee2535f3072aa2086",
".git/objects/fb/5c94327125a52bf79e0c10dec12072a3b9a241": "0090c9f7961871cf12fa5cdd7e7839fe",
".git/objects/pack/pack-576301cc78a876188f5e884dce1bddc8028d6dfe.idx": "669bc577a10c93ec60635dd66b7b7f49",
".git/objects/pack/pack-576301cc78a876188f5e884dce1bddc8028d6dfe.pack": "6dfb8b218b43e47f90b7f72014a55838",
".git/ORIG_HEAD": "c05c333dea58700f43d1fef19aa5aa54",
".git/packed-refs": "f491d48c38c9ecd672fa1c6224be74b2",
".git/refs/heads/develop": "c05c333dea58700f43d1fef19aa5aa54",
".git/refs/heads/master": "91de4bd9681723b3ed4de56996e3b1fc",
".git/refs/remotes/origin/develop": "c05c333dea58700f43d1fef19aa5aa54",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"assets/AssetManifest.json": "38908d7dc81eb3fef4e2a8d8ae60e892",
"assets/assets/fonts/ValeSans-Bold.ttf": "310af1f2c959a2aa8edc163e59a3b298",
"assets/assets/fonts/ValeSans-Italic.ttf": "a09457541157a8a5609cdf71e88de5aa",
"assets/assets/fonts/ValeSans-Medium.ttf": "9f1c194c5257e51e8571e3e8e56a2836",
"assets/assets/fonts/ValeSans-Regular.ttf": "bf7fd46aef2db9ecf37d972a412eaf01",
"assets/assets/fonts/ValeSans-Semibold.ttf": "431cbb30510a8162f2a8d14e35963bd7",
"assets/assets/images/avancar.png": "f454a6c917038109dd235f60bfb3bd88",
"assets/assets/images/background.png": "a6c8499b50f1b219721b94dab45a5f4b",
"assets/assets/images/background_menu.png": "f4d447465e8d1783185f5b69fcbb9f56",
"assets/assets/images/CommentIcon.png": "c538cec2eacb2145ad3e846feef63b2d",
"assets/assets/images/Doc.png": "1d76635e417938f500d1982930030cd5",
"assets/assets/images/Especificacao-Tecnica.png": "6048a8569fc01d2efa5b2cebe57878c8",
"assets/assets/images/ficha_de_EPI.png": "8608140f85417d7f41da021129988899",
"assets/assets/images/IconeExcel.svg": "2c2c2c2ca006f43964df40b291cca721",
"assets/assets/images/IconePowerPoint.svg": "1f9ad79156e7c6b0e0ad5bd3bf7dfac9",
"assets/assets/images/IconeWord.svg": "996e1a3fd928c07a0993af119ac6bd70",
"assets/assets/images/IGC_Icon.png": "acc4c6886c8b21ab657dbf551bbd9dfc",
"assets/assets/images/Lock.png": "c349e8840523ca38c39ae2a16b8ee02d",
"assets/assets/images/logo_speleo.png": "1dd5752cbab2b74be1f9b5bbc7a9ec1f",
"assets/assets/images/logo_speleo_2.png": "7d72e3e0669eb09c44e8298306daf871",
"assets/assets/images/logo_vale.png": "0dfd0809bdc8d5b8df1f140cc9de4226",
"assets/assets/images/logo_xrlab.png": "e17f86df70a052e1f13e7f8489b872da",
"assets/assets/images/Mapa_de_risco.png": "c5e5fe5997a79db0426b4a8593c8a43f",
"assets/assets/images/Nav_Guiada.png": "69628f627249bf28587e032bd5764085",
"assets/assets/images/pause.png": "af7706606b5e2916b7e44182aae7ab89",
"assets/assets/images/play.png": "398f5de16eafa0753e3e51564a36b989",
"assets/assets/images/retroceder.png": "e9bd6ca74425621c5db6205dca4e17ae",
"assets/assets/images/Tour_virtual.png": "6553e296c2adb2dd995212573f0fcf95",
"assets/assets/images/Unlock.png": "c1350eb26f8209699dbb8393140ae08e",
"assets/FontManifest.json": "711b69325b61c485a91eb4276e825a7d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a78f27fff3eeb09f1915f3c1bb5ef92b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/shaders/ink_sparkle.frag": "bb2f09705eebff3cafaaedd9ff45c211",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "2a85d1df63748f703ffbe0006c698b41",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "9ea7417aca5e3c71f6f8ced82aa704b6",
"icons/Icon-512.png": "a65927486aa2fa71b7d9ea76eca05bd4",
"icons/Icon-maskable-192.png": "9ea7417aca5e3c71f6f8ced82aa704b6",
"icons/Icon-maskable-512.png": "a65927486aa2fa71b7d9ea76eca05bd4",
"icons/logoSpeleo.png": "d9fbce1aed4f34422a1b88abc3df8247",
"index.html": "2b9843ebac1ea0b07ce0ec5d1a9fcc94",
"/": "37165121504e94590077aae2b88889a9",
"main.dart.js": "7374b6134cde65c898c2fed7b7d46ded",
"manifest.json": "7e82df8778eb664dda27b66ea1d2f412",
"UnityLibrary/Build/UnityLibrary.data": "0ca96ed06f4a49a778dd9871696f34c7",
"UnityLibrary/Build/UnityLibrary.framework.js": "6ed348c15d3c43497675bd9c8a35703f",
"UnityLibrary/Build/UnityLibrary.loader.js": "fb71d028619e714657010c1a83ad1355",
"UnityLibrary/Build/UnityLibrary.wasm": "90156c17cd7282dd1d878121239f5ad2",
"UnityLibrary/index.html": "37165121504e94590077aae2b88889a9",
"UnityLibrary/StreamingAssets/aa/AddressablesLink/link.xml": "a6c9c3be3bb98aeedbfb9e06d2f2dfa6",
"UnityLibrary/StreamingAssets/aa/catalog.json": "b3a46aab724d8c317162933a5042c10e",
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
