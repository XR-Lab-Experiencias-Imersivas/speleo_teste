'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f3e4f9644e120e442092a04b1c591d98",
".git/config": "371ca37164991e5527e0af967717c60f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ccd9462ad4190cea751808a4dee46eec",
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
".git/index": "6557c89f0f91fd3ad8bb2cd637c66013",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "492bd98633bda6b486547b6c06f522e8",
".git/logs/refs/heads/develop": "d4072a65311849adf7f84b84a2524fb0",
".git/logs/refs/heads/master": "999839acb3b3bfefd1715cdbea007916",
".git/logs/refs/remotes/origin/develop": "1e1b7cd01bc58994c0945f41ca18a90e",
".git/logs/refs/remotes/origin/HEAD": "98afda5a9587761d056248cc2922b0aa",
".git/logs/refs/remotes/origin/master": "f2263c8f11f99c8d5998d850610fd31a",
".git/objects/03/816e56916b4d09cd182a82113e2a53c070b85c": "cddadacbad60eb41cb88a17394096d3b",
".git/objects/04/703caaabdfdb953355fd2171a9a8b406c1d2b7": "958d46845894276730109694a0a5d631",
".git/objects/05/63a341ad8f6fce390bcab8ed0e76cd2ebd60f3": "f5f105a8bbff061a74f621620c505a9f",
".git/objects/05/8aa976e0dfd1dddd9b5b17f9024bd50e7fa789": "4a3bb99f740cf51f91bb4838eacf3c82",
".git/objects/06/222e11004df9b4ded862705984e560634b3fa3": "ac0d4c474f278d3f0b221ff683418f6e",
".git/objects/0a/1b8aab01ea166ad4816d5d699f8c9e11377e00": "819b6a97645776fb23520e80511bc95a",
".git/objects/10/b2cc6f2589485355ef8e2f6c8e71e2cffc1fd6": "5f8d1b89643f093268484fa5bd21c03a",
".git/objects/18/41c089335b8bf89bc2ccc507c2db7aefd6ae2f": "ead2d220b836950b594453dc64d78dcb",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/23/f2f04ad5b5e177131369aa3164adeade80d6d4": "c205a41e466d659a81876c078e31943f",
".git/objects/29/990405adb54e331c8be6cf6fd8e718daf4023f": "b6cfbd0b3096e128a3ac18838ec1cc05",
".git/objects/2b/13efac88b1a8b0d833dd3e3122f6643096e920": "d33e2af871acef1976ea0227660eb878",
".git/objects/2c/1839365b4ea2b18b61bad8d994c23bc26abf84": "282e3f10358c022e859c78270ef93593",
".git/objects/2f/0784d083015b26d6dd030b09884d71d7af9bf5": "fd8984be5c79746ba54d39e9430f9c4a",
".git/objects/30/fa130e12731e2e40f1a0a290f2844fdd961c69": "a64ab7cfbd2df340d9fcdf4bf3ae3f34",
".git/objects/31/f736f6657f82505c7189c0619ee10393e6f663": "d6d70e3e5533d2b456f3f1d66aa5b7e1",
".git/objects/32/e5d0461ec641ca5af7a5fe41c9570a7ecc1bf2": "7a62cff9f4401ef9086256a482ff69d2",
".git/objects/34/698dbc595939b7e9ba790f745f5d7afa70ff00": "306027d848318331fd723898e18ddf05",
".git/objects/3a/f2c4ac1043b6df1968f434e2248d25fe3c5a1e": "8977f4d81ba1139c5557d669d7093b28",
".git/objects/3f/9ad01f09a84ed07046ca10f40290064c58503f": "6b8473557824a524f7f4c242787b29bc",
".git/objects/41/d843e756ec482ac91497474669c7779979fdd2": "197209e93290d33a1a3fc983fa209c6b",
".git/objects/4d/ae970b341fb0610cec9fdb73d2b47f8a2d2372": "6da4fc8dcdb59a237a547074b9e14d32",
".git/objects/4d/fe2906c1d94ccbc86967cfd7dec2f44e842d73": "058cb510cf05d512ac87060858b3720f",
".git/objects/4e/ab6f7eb42889fdcced1cec3f8393fff2e6c67c": "462fe768a53016d7bd9bfa1644a2f028",
".git/objects/4f/102cf29ed0177878a9fc52def06cfe2073e881": "7d5fc03d0ef59d25138c042e19527bdf",
".git/objects/52/8bc192d4c8288b169538c02c1abade813f5f92": "64a16c4f4b673cbf29eeb1693c07af06",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/62/34b7a5479f67cd049086c1f66693e243b915d0": "8af708a0f90197ae860261efbf173573",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/66/542e1b681ee08f16fe6f07e57f379305691140": "7d1b67c2c65b8ebe5291493373fcc52f",
".git/objects/67/8056810e1eae22ad06d10016dbe678f1767d83": "b77bb3f593eafca079ecc4784cb49ae7",
".git/objects/69/f88016e79af08d0d2f6804bc5cae90b7a9ae77": "31f47e660acd1ae6c3a6fef584956cb5",
".git/objects/6b/2c664bcabcdc1a8e10785a9d584863d209627a": "25ca616a39ec8abe100e9cf098e6c10a",
".git/objects/7b/f414e1e1c2e072542ff83f652be685eccddd1c": "3cc4ced229df5c75ee7573ccbdf61e16",
".git/objects/80/928f4c60210c6baa98f2ff1cc42155d5a9b398": "5cf4b143d5c88ff831ac96976d750af4",
".git/objects/83/c1ea624cbd6b837fe0ee1a8324be9714a3ddbb": "42b0a09744408340fcaa35c7eaaf70e7",
".git/objects/8b/02a89aa454f4de05f5e0100ac8b524d4d7d331": "260cd9f5730f7edd9102dc3148471aed",
".git/objects/8e/1c33c90bd2097f6f5211b3daa4e01accde8822": "7d6fc8cbaf34808932272d4cde95fefe",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/ef9b27145d0f3475d0118b9b5676a200491722": "ab6b6bb75182e88398ee4a96062b2d27",
".git/objects/9a/0873c5ccf2acb7a58cdcff96e2b6b6da4b4026": "a44b12b23b80c684d66f5ac6674c6e86",
".git/objects/9c/ccc3c02cc23aafc609944e314129e79601d0c8": "477e2e4b80f5b5cd838a74f9dd03c7b0",
".git/objects/a0/c1c20d92a5fe4debeb040737ded4547a8d55b8": "f61593abda627bf7c1f8d4183c68ec20",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/c7/639bb2bca8b2cd2355ee4f9c0844c0e7818997": "fdc568759b045d13e4284efbf5d01376",
".git/objects/ce/0adc362a7cb039435942997a1cf3e6ffe41cdd": "32285e46c4831df51db4e909534d9810",
".git/objects/d2/0ab9c3a5771a144a0410764acc8ea7bac3625d": "776e3b0fd9b16ab219de7b4de6e1b12c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dc/84bcb53afe70070bce4c39091add339805e9a3": "b09e4a5f336aa8399c7b72b31b97b4c3",
".git/objects/e5/0a5ee6cdeb1d4b688ac0fcc93ea50856d81e2b": "6a193c7a8f32550cd48650cb7b115c06",
".git/objects/eb/7f93f70a48987208cabebc593aa1d4746f6fe8": "124132d963492806b8f6649910509be1",
".git/objects/ee/46d4ee976bea2896f98e541781b26f79bb6859": "ae3f7bfac7358a47a4213296495da201",
".git/objects/ee/cc2b9bc1053b8eb76d31d1517776a11bebc06e": "48de619690fc8602fe4211e3c6717276",
".git/objects/ef/27f2b84cecdda27c70ff3de50db58b9b326686": "5b242aacbf67caa65c5ea18daf3d527c",
".git/objects/fa/4658d48b9a49922fa162eb9c9af3b7c1c7dcba": "22cbb48b3bfa95604d45bc31b2e9aecb",
".git/objects/fe/dc55bc00fd21e50ea4c128c11a2f1e177e85e4": "fa49d5e2b59fdc6ca10ee4743d342fba",
".git/objects/ff/bf73925ec389f88c272ae53dcfd85d51c7be78": "cf6ca956e2d7403354eb12947377791a",
".git/objects/pack/pack-4f5dbf2f8259a098dfb19eeb4f6c01f6babbf36e.idx": "11579381c6814df6dbe50da713b02eee",
".git/objects/pack/pack-4f5dbf2f8259a098dfb19eeb4f6c01f6babbf36e.pack": "091cdc7418911a1c163dbdfa66841a7b",
".git/packed-refs": "fe74b324c67f721ea937b39b3e08048b",
".git/refs/heads/develop": "e5b081828ccfcdf03e838957590ceeb3",
".git/refs/heads/master": "4def1cead0b5fb3b79ea7b06330df195",
".git/refs/remotes/origin/develop": "e5b081828ccfcdf03e838957590ceeb3",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4def1cead0b5fb3b79ea7b06330df195",
"assets/AssetManifest.bin": "bae189cf86fe7cb448e6234ff37710f5",
"assets/AssetManifest.json": "ce92718b0b08c7ed241b5e802d49d839",
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
"assets/assets/mapa_risco/abaixar.png": "c5ac6f78aab2103264dfcea08dc6e888",
"assets/assets/mapa_risco/afastamento.png": "a819cb49f6112d075cd631cf028ac1ea",
"assets/assets/mapa_risco/animaisPericulosos.png": "7d87eb835a19a2106cf22468203c358a",
"assets/assets/mapa_risco/condicaoRuim.png": "024a06312c692de21f5bffe8f8104de5",
"assets/assets/mapa_risco/fatalidade.png": "3b32c7dda501a52273a6ac734d52ceaf",
"assets/assets/mapa_risco/incapacitacao.png": "36570f5ecc3c0467057a333f1fffbb90",
"assets/assets/mapa_risco/MRCM.png": "3c906ec40383cb27c42bc9b9d0c220e8",
"assets/assets/mapa_risco/MRCV.png": "1488fe57dcc3efa1634d722f957f353c",
"assets/assets/mapa_risco/N4E_0023/RiscoCaminhamento.csv": "4bcb13607f4b268c09336a5d4c26c7e5",
"assets/assets/mapa_risco/N4E_0023/RiscoCavidade.csv": "740d18c1f84d59b4f8449a19060bd040",
"assets/assets/mapa_risco/perdido.png": "015db3ea5b1d162097c53ab5eeb2c261",
"assets/assets/mapa_risco/primeiro_socorro.png": "5c3f8a46464fc4076f6c15f3a8a23b50",
"assets/assets/mapa_risco/queda.png": "43d191d4538d9cdc6a9311275feda737",
"assets/assets/mapa_risco/radioativo.png": "a8649351d6e9b2782e5441ef12c3d16d",
"assets/FontManifest.json": "711b69325b61c485a91eb4276e825a7d",
"assets/fonts/MaterialIcons-Regular.otf": "25e76db6dd32c21b98bc017fcf9d78fe",
"assets/NOTICES": "cde3dd8e9af48e78c53c83c58e5947dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
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
"index.html": "ed6120c46922dc152d4b62c3a607fe59",
"/": "507a628bd3a7bc9af13184d47df52e7b",
"main.dart.js": "4d54f98eeb4df0064e07ed3246ba2d47",
"manifest.json": "7e82df8778eb664dda27b66ea1d2f412",
"UnityLibrary/Build/UnityLibrary.data": "ba5935361d3fc44bb1e021ffd1005711",
"UnityLibrary/Build/UnityLibrary.framework.js": "41876fbf1978a190108af654bffc4ede",
"UnityLibrary/Build/UnityLibrary.loader.js": "fb71d028619e714657010c1a83ad1355",
"UnityLibrary/Build/UnityLibrary.wasm": "2e2b333b2abd2a0ed2d35c1aaf9b4394",
"UnityLibrary/index.html": "507a628bd3a7bc9af13184d47df52e7b",
"UnityLibrary/StreamingAssets/aa/AddressablesLink/link.xml": "a8eb81bdc0252b94ce6c3d49260772ae",
"UnityLibrary/StreamingAssets/aa/catalog.json": "0e4f85d94c6a8a02d55c37e3f18260e6",
"UnityLibrary/StreamingAssets/aa/settings.json": "91a3ce3ded6fed6f07812110bcb7f784",
"UnityLibrary/StreamingAssets/UnityServicesProjectConfiguration.json": "b225a14f3d6d0971fcc8cd013b701f51",
"version.json": "182e6987562462c4b5612a1926cf9739"};
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
