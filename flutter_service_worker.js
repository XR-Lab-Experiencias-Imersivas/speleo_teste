'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "83454e53b4c20334a1a2f116a6d00ded",
".git/config": "87cf10a27f44237470cf628dcfd2aca2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6d36de6a7275cba24d05be4a9eebce11",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "5c54ed775d0c87653c0344974c4e2400",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20d5f22cd0bde0e84f7e8cb121fb806f",
".git/logs/refs/heads/develop": "2ec4a483f25a7721cd0aeb024929a09a",
".git/logs/refs/heads/master": "8f2a88967fa7ba37a4e594564a1a8334",
".git/logs/refs/remotes/origin/develop": "e5d50a2c49db4464e06c238f6a69e627",
".git/logs/refs/remotes/origin/HEAD": "d4fdbe5fb1f8a02cd9e4eb307dad25c0",
".git/logs/refs/remotes/origin/master": "33c37999ee79e814c986d63f5b26b65a",
".git/objects/01/64e124f810400339a73484f6edf348393cb627": "7f2db2504347f453879093f239914c26",
".git/objects/0a/e6b497dc0d65a54d73cc16e2df7a7462c2f174": "4118dc753b8d21f4f9ed523b30c7aab7",
".git/objects/0c/4ed75146954d7c8713351872c4e564906fdcdc": "3c9e4c059a7e6530e610bdcb790a9fb0",
".git/objects/0f/d128814827b27e6b80338662b4f104d63e5bdf": "6f8150f16871e789d470a2d40bce389b",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/6434400856eb53e2fb4afe0a43fe27f08ad37e": "2ca7006319d525394cdb48fd1dc5117a",
".git/objects/19/d25ced77ca39e9de8d47d8d1947ff2ac9de08b": "4ef0965d6d588453825436e70f5ff87e",
".git/objects/1a/4c0199ec12dfa8f3a0af39033a146c7133d971": "239b0c0948bf6c573b2e3783b7e6593a",
".git/objects/1a/c485c69e20a80d841838869a4759a002d10134": "09b1cc0d81c109ae3592cfb22414479a",
".git/objects/1e/065ad6bc4ac0d868ebd9875752c0caa0bf6a45": "4d84d7f0ed27d39f2530186df39a8d61",
".git/objects/25/1486371ba9418b8430363872bb99cbe1318d6e": "58f0d77d1eb1e507da021c20157d466b",
".git/objects/26/59b227f876e7c87ac9d301f8b0cf341372fc06": "61275c99c47d29e6650d975ff543edcd",
".git/objects/28/418e8001cea611f90daedf764fa0d80ff018ea": "ec14b4d6c976634ca348bd82ac561a55",
".git/objects/30/03241c58682aa37e7bf1669713858fce31b9f7": "3368355cb1d744ce41dc6dbb879f244d",
".git/objects/33/a2250f32c5079890488164f0113df07c9e3e89": "8dc49be89e8ee345af201267e1004b6b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/96a6eaa3e180501f31b838f8239f8553b94a20": "73e29ae29c0797b216174ef98fb6b252",
".git/objects/55/2f8688bc3646a268842a6b5d64af5dd12523a5": "c8e5ff669fde738dd1284d79615708d3",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/4f5ac1acdb51b3257f5afb4dcaf56b708696dc": "edd9c219c6f92d8bc1d9f9444df65b2a",
".git/objects/5b/788c582f2e8fa39bf8be61c3a203fb363edfe4": "9c1114e05c7b21b856746cbe386162a9",
".git/objects/5d/832e7102ac2cafc2561bc29dad9ae8408eeb6b": "1948a49009a0c1f34d7e4277d5c85d0f",
".git/objects/66/be598ab7f2ec68060026061d025e12b82b80df": "148f430c9f394d8dfa35521391b37f7a",
".git/objects/68/3aa22e7840b3207c4b64678f6dbea13d84ad60": "c9d2f5f784ebc537ed96171bbbfc2a5d",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/75/2c023ab01335e82cbd4d67e72fbdb3d1954bcf": "db00f0ac5d9fb5199d43439477625e7c",
".git/objects/7d/e0c97141d6c2c81615994f240e7d0adf9c8e65": "a02efc6c1e4b3eb51e84f43feeb6710e",
".git/objects/80/3bff3202d955652cb4e074c70eb84e7bd3b874": "0558ee87d6ea23f8e98ac96a82532c91",
".git/objects/80/511ff4986c4c0003fc05444bc865ed34bd45cb": "b52b299f24038b882619bf945a145db2",
".git/objects/8b/d5c0349e4b13c1a3a9d82195b8963b01ff6f19": "76b186566c363319fa8042cf7bf8cc01",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/127ad47f756620e3b9df90b879aaf6354bf415": "5614fd61439c3e027f27f1f61ea208b4",
".git/objects/93/1bd5e3ff58af12b5c2dd979d0dbbed149c9c81": "bf2973303eccd02529bd363e4153bbca",
".git/objects/97/284e883c8839a5870b6c4703251c53bca4b636": "ee6ff616d7ddcf1b5b059fa593d72d10",
".git/objects/a1/4bd20129810fa8670aa82587fa0ed47c1d71aa": "0f0f5cd4022dda25a93ff8c635df1045",
".git/objects/a1/69b3a4fbd0bfd59cc8ecdb19ab966b421b890c": "73b5e5dd6a1fdd38547d86dd8e730e75",
".git/objects/a2/1a70c5a127a34edb06fd2303f3afcbfc78c276": "1e33f1db31e53d4acfe0c0b6a33584cb",
".git/objects/a3/0c87edfd62a95f2c4723b16a1255ebd9c214a7": "37985d09ef294bb58cf45769082803af",
".git/objects/a5/8fdff3f1490bf1e6267371aaebd34ab18c404d": "8d77cf07d4cc1821d60c5a2a4f577be2",
".git/objects/a6/65b26cea3f5346f5239c44ddfec1a4caeafe17": "1e5465d942ca439d87bc161d1ef9bc9d",
".git/objects/a8/a75eefca546c67d4bdc5fe4f27f46bfca68d2e": "69c153f2444a41fd94de7d1836d3e5d3",
".git/objects/b0/5d0c21c318bc9730c3b397e40b13079988ad1e": "491440d592b8e6b1665fe036901e3a71",
".git/objects/b2/0615e8b19bce402c194574289c6039d0dd1f01": "dba21a95783ad599fc80de56d71a4260",
".git/objects/ba/dd714a4a8f8611e598c238a03719c0be32ac51": "d81b96daac19ccb3e241cda6ad5ba2f5",
".git/objects/bb/c5de51def5e1f28597003588279e79ec3a6cbb": "26f225e0e88e65a5c7304b523e095149",
".git/objects/bd/3802fbfea9353b10876f4fa3a8b76f3b6e6871": "c9a3f7556577802ad2fea4bbfef63f89",
".git/objects/c0/c5ddf8f4513e03219aec9485cc2ce709d1b976": "32528c59a94eb652e7a53560e7f7f1b3",
".git/objects/c1/624bdcaa8e4163b46670ba5aeb53094278efe1": "915d9136e2c2a4a211546f9b1d5010d8",
".git/objects/c5/b513cf41e3b756398a9b2239d2107235fd5be2": "7788615f2121407978ec5513cda6f242",
".git/objects/c6/75df6e0a59c03ed52a4050663e8dfe1ceed320": "81875fe8d2ae576cd44bfc93e84d1372",
".git/objects/c8/ac0956cf24f39dbeb8c45a0fed776bc586edc2": "e8eeaf1be85ef26f83d8dfcd83a29b28",
".git/objects/ca/cc7577575fcfda3655ed5028eff90498cce85a": "ba49c65f938b14186268d219b0646491",
".git/objects/cb/f318e7edd02b455d5eeeaaf03eb12757dd4674": "f92ad96365d810f24d361101b9087d11",
".git/objects/cd/63844f626bd53db51c12a2af897175c207ff7e": "960edcbdc226298b29c27ce5a815a87c",
".git/objects/d1/ed2175a4fd55cadaec5320d809cd3209fc9da6": "254a64ea279a35e6a1dc62ff8129905f",
".git/objects/d4/1305b73281606eb8135e0f29ca3e7175b07cba": "2b7ccd97d799d3d105c7e3b434788a1a",
".git/objects/db/4251bee5641121d67bb3586235563e292b25c9": "aa932f576dc69fb0b36e5b1bc6e9aa2f",
".git/objects/e5/300f5c9801c9c14c79f5bc1a929d8ddaab36b2": "afa00d5b6ae87cb7707f9486ba046d25",
".git/objects/e6/f91f973ac46ac16535f7c2c2b77541d75c5ff8": "761426265f3a13d04930ece9f79245b2",
".git/objects/e7/92fde642c445c22ad99d658302c14f19c08ac1": "82e6abf19f781814992f77ba7aa8cd30",
".git/objects/f4/a7894eb84769084a6dd694217d81c4421a8ac4": "94491c1c9bf46e0f73460cbe2f5963ef",
".git/objects/f8/d73febbf9dd41afa8bf5cd107dda9ca671ae2f": "307dd6a690ba2f8aa8a78f672574b135",
".git/objects/f9/0d814c3c73f17e54b0b542d50caf373218f420": "65dfb95b1b2d001f130e61e40abbdee8",
".git/objects/pack/pack-347eb9427e545b8abbb78b0e910f282cdb2d8613.idx": "4feebe663450acca8cdd6b342e790d58",
".git/objects/pack/pack-347eb9427e545b8abbb78b0e910f282cdb2d8613.pack": "62954b9ec2f62a174b8017c9de60c07e",
".git/ORIG_HEAD": "01e8d69425132d72ac6b4966119d1d58",
".git/packed-refs": "452ad6550c99aa0eea93d5e46e9bf868",
".git/refs/heads/develop": "e01aa5c7bf49a972c57a852a70f94074",
".git/refs/heads/master": "4038e447607f767bb9215bc673c223a2",
".git/refs/remotes/origin/develop": "e01aa5c7bf49a972c57a852a70f94074",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4038e447607f767bb9215bc673c223a2",
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
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "60c4a36ff43599f5cbe214032358919e",
"flutter.js": "79fd1b5f4b9ed5c1eb55814813698372",
"icons/Icon-192.png": "3329515440a471439be85760364245fd",
"icons/Icon-512.png": "21bd0f1711e5524113af81118293ea4e",
"icons/Icon-maskable-192.png": "1c192f2e109b060b2d79ed82ef16b43e",
"icons/Icon-maskable-512.png": "939d01a1929f2deec8f85f59168a3f4e",
"icons/logoSpeleo.png": "d9fbce1aed4f34422a1b88abc3df8247",
"index.html": "5c0c6ca78ab7a8fbf60f24b05fece931",
"/": "37165121504e94590077aae2b88889a9",
"main.dart.js": "876136d1185f68252d27be9e6557ed83",
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
