'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "66c13fee225b612ae69f6954cb14d74e",
".git/config": "5cd69a1ac2f0d8defba98f4fbaa93ef3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "db28aff8ffc5d37552d6e5a678801c56",
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
".git/index": "68c579df099b844a93615645c8ba2745",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac585f029010c6bcd05477b90783ed1c",
".git/logs/refs/heads/master": "ac585f029010c6bcd05477b90783ed1c",
".git/logs/refs/remotes/origin/HEAD": "422da5461cd7c4f1459361acfd925a91",
".git/logs/refs/remotes/origin/master": "3f1f4ff8e5029306b4d6e88c345ed5e8",
".git/objects/03/7528ee8d9b8e3b481a8ea68e47fc36fd99ef66": "b72988b287fa9f01d11de7e0054237db",
".git/objects/04/40e47a6eabf4e730aada29eeb0a7aaaaa6fd46": "d18a19a1bef45b497410ffe0fc9c85fd",
".git/objects/05/b99a5896b4acc4febeacedda51bb8cfe605339": "7ed8d1dbd91d0264657a48588ed88d19",
".git/objects/0a/4879131de2eaf677b2f3f3a4ec26f1c012327b": "5a3192389840318dc663dbd9ff4402e7",
".git/objects/0c/b63f49ddb73f03985dc0fb15458d773383ceda": "53d5185b0b1a164789969eb5d3762c26",
".git/objects/0e/6b32c861f13dac0c1622613d34795fdebeaf16": "e43d9380e880f3903611e29eb5e03cc4",
".git/objects/0f/1ff69e8c7d43d19ab3f24cb89a5f90284e0289": "e5045d3c57a77403a63dc2bb9955872c",
".git/objects/13/03543fa81fd88aba15c76b08346df1db929e06": "40a34803cd63db95ad6620bb6ca7e483",
".git/objects/13/241598100fd50ac14c8e7fee0dc1336b9c1a53": "c0ed8223e8ab6549f195eb27999d0541",
".git/objects/13/648a6e48a69821256e060d0b96a7e4315dc7b5": "20a80849808571db7ed43d2b04ff9112",
".git/objects/14/0f4a816aaf5b250355174090c50c1ce06512d6": "8c7fb15e2c96feceefb819714bc66fe2",
".git/objects/14/438a1aac931f7fe828303fd2fa8b64bb739fce": "994deda396bef08ddf74d14ba81e5d0c",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/75c6b2804262172c1a3cae0d5607c809a3de8a": "6909479f9fc93fe601187015d6f2754a",
".git/objects/1e/77b6f55e8b4d98ba00406bb44ed605952d1fe1": "76f0d7b01a43bed05cfda4aadb5701bd",
".git/objects/22/c1b330d6d27bfa7063ebf4c19cd1d188f4287f": "ad4582c5b15ab663ffa9d70ad9e04ffc",
".git/objects/23/cca149be4f93e5f3baa968c82b80c255a7bebe": "5074979e8ae36677f81839686ee86a61",
".git/objects/23/d0a43dd9fee170c4fbfd50b761e107b35f65d0": "d8351e5b8614dc7c431b2aa2afe9b0a3",
".git/objects/25/0a2e9ce27379a4b692b953094433af0be847e2": "73379006fcb0773d4ee0a5c8c75da585",
".git/objects/26/96f16c966b6666d6aba6176f9a1dbf510df0d1": "723e443f8e7bb7cf57e0b1c8aae5fceb",
".git/objects/27/8118e4c3da0b682f58d14fda384ce37d3a82b2": "b6ab59c24495e2bbd565cab551d0fb5b",
".git/objects/29/56429fcf646f1841a2619db39a802b912b26ac": "177ea6a6dc81776f432bf62f0f73bad7",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/3b/d297bce6752dc378200b003986bc4ab923c1f5": "511aaec678a7f8881ce18133d0452486",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/3a603a7be357052cf100b510e0a6ef09e66e58": "81739332f2905c1f38cfe468b824e46c",
".git/objects/47/6916f51c46b560429fca8543807b052c42284d": "95039369ed0a7fa691b2cd44b6de3f8b",
".git/objects/48/bd56c7bf8d90e65542afd259250e9f3bf3a189": "86cdaa6655b404ad97d4a2e668207761",
".git/objects/4c/2406f83b4313b2c35601c4738f789cd6dc6c13": "b3d5121db56f9ec4496bc528e3e6c1b5",
".git/objects/51/18b6c0afc1ec49206d477c94ade134023c0419": "9483847233b8e04875c89a4930a8f096",
".git/objects/5b/a9d7d28763437431cf685c009342146c224b6a": "a51ba98d5d42e02580c3331f59d442b3",
".git/objects/5c/e437ade702baa7f56f116e251d87ee4c291e3f": "f575adbec86f6bafec15c702ae3b2db9",
".git/objects/5d/93360dd29ec40a95057a130855f006dadcc2da": "946159537ae48592dd2632d1aba17aa3",
".git/objects/63/14113992a654fd8365d8f29babff4efaff8162": "2ef978e815cacbe8f1a118000b17eac9",
".git/objects/70/a6379793f222c505552405a40b1542d81aa227": "24f7637da6cd85073197cc68ad52a116",
".git/objects/74/23fad11082da9916e5c249ef8882f4cc51d477": "38f54a644da7c16f7711de2f8ed17669",
".git/objects/75/51210d3509627eae8ab9c253e5ee78ee31688c": "204b3face5e5deec78714e857affa843",
".git/objects/75/e063bec51fb1716f2602c3f0fd91a04de188b1": "6715145c15a241315d12d91befee96a3",
".git/objects/78/fd87c43d3055108f603148912237407178b8b8": "7e7af3619bb4925e7ae03b0859aa4c80",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/bd7a8d3c88f8e1a773bbbae82cf0fb440094b7": "a6de48013a54f81d6c49e11d1689c1fa",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/82/d569e2a37c30fde23cd46efeeb7f137cab8694": "43f9c93b340e53a9cd8e2952e7ae9385",
".git/objects/82/fcdf61f390b5e27fb9953a8f70af5978abc4b4": "3edbb359a8a5494ce72cd4be090b7253",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/44aba797f403ef8dd45befb88af831246ab6f5": "b830edbec6d354efd15f890c0913a631",
".git/objects/94/4d4c193cdd5f1a387ebb0cd7dfbf91607e276a": "a25149c38eb3f1dd1150f6ca25f9094b",
".git/objects/95/f703f722aff8de2f87109444b638898b828da2": "d6d347734cf538b23f3ddbfcc4f61e0b",
".git/objects/97/46c7b5d3cc369d7bb6c670d0322640b9df8e56": "90c6f54d983fdce2dd82f5406bc36b43",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/999d39e92959a66c580d39e2032bb85b0b13f8": "19abc7a53f043bf2e3d1decbb813e995",
".git/objects/99/08ea83ad70bcb4efc5841dcd018111122cecee": "fb9981c3aafa6ace27cae4d73e61d6d5",
".git/objects/9a/206ee116ef01744a6063cdb3291b0b2118169b": "28d141f3526237bcfff3e91c7c675416",
".git/objects/9e/ead3b70918e222777bc411b91eefe406fb4925": "752f915e25d72db81da56307ef945f67",
".git/objects/9f/03cf0985e89eaacb2dd5a84d51e89d1d3ecb12": "3404cb3c9d4dc9b598c95d10f964ab46",
".git/objects/9f/75c97d7c381f88285ad7b2473c14db0897afe8": "e2419821eb7edac3fdfee3163c967e39",
".git/objects/9f/990831f032cb96ef4e4e1eeb6910d29993b963": "bc51ed027808f0907e30f433cc88f40b",
".git/objects/a1/079ddb8c4a8c96823bc9964bf6143642244c79": "d8760049377d5650c7b2703563e41b03",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/3bc1ca34e0051b639aa491bd5a9676bc18b794": "523168e2f08bfd9b0d2eb01cf31b473f",
".git/objects/a4/5754a59ae94af605a102577421e6c9f35210e4": "b43f680053f952bdddca3df8af7411ef",
".git/objects/a5/b2383c7b858e0a847e54b6ba4c3ab72c69a03a": "372fb6e80a198b7337cd87d679ee5a84",
".git/objects/aa/b284b10e737dcc19e143726a44f216620012c8": "875782f8a87998c8d505efbcc21abba3",
".git/objects/b0/74948174a6551218c60a8d99a70413061ebc93": "2443e346abead757a2c7da4ff3f158ae",
".git/objects/b3/b4ba536930cb7171d718a36ea91adb5cfa9b54": "fd29e580acad94289e8ba4afa61fe04c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/f02406624144ef4b4c6565b5b4740dd968da44": "d8cb25208d41817231780694f57a0a02",
".git/objects/bf/4bcf7de7fde7f36ddec5ab688e9e4bb166701d": "6ad76a3c9b4c21708ac7da73f86bddab",
".git/objects/bf/a222a3ebf9f5c55dc557f77bcf4f2a821cf6e9": "475b678d7727b3fed92984a0f360c1e0",
".git/objects/c0/e08d7ce7c11fef88b9b3da6d27b07ba4be33c9": "d11ee1c4a693bcd1dc1cd59705c37ee4",
".git/objects/c3/58dde0207121194263bcedc3eea53963d2fce0": "7e2eee366e931b95097e4db7b8d0e225",
".git/objects/c6/557a4c66cbb2078b6544f3cb762fe83f4f2c33": "826a2df91d43699581b56c66e6791c6a",
".git/objects/c6/e18d22f715f474c17763bbfe94136034696397": "dec9aec5ca62963496d0848a372958e3",
".git/objects/c8/5de367342bfebf1bb522ce07d3ce4d18509c40": "fd6c261c6312c1dbfd1edbfe58237edc",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8bef7c36e8533ad16435f9e83457efc601af80": "3a71483a5fc591cfc894dabc705c218e",
".git/objects/d8/d69037eadca2932fe3dd2e00c3e04bb3c33a58": "51a60b18db9073dc900130928432fe4c",
".git/objects/dc/669423317c3a16562c69eedf8f83e0ac1ac59b": "47f228d5e84e229b5cf1aaf5d4db55eb",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/ebc351a0c62d599c6938ca88ee3426725a49db": "2d705204eb2865be12d26e0c9e800ef2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0b642cc580d19db95be0578289199dab0eb264": "8e928d6c6394a406f7e3d076b183ef3a",
".git/objects/ec/445319be793e626af3ab606511744ef8e798c4": "0fd89c955fdbd859a3ebdd86d99c1bb3",
".git/objects/ef/d2c9404ec0f9078d11b78915299721de7c165b": "0c6ea280ac679faafb1ddb864ba1904f",
".git/objects/f0/30907dcfb7c24c35dcaa2bf96946cfba09b3f6": "2fe5ab3c2a032df82a343dfada16b3c7",
".git/objects/f2/dbc1e27bb2a0d5579fe51efb5b45d95d578b65": "fef15ca48e471e68588e229343dfbd01",
".git/objects/f3/a3713f68b9627c6c83c28e5598059365094d89": "18532aaae04276fe5b33510bbfcdb53d",
".git/objects/f7/f625b4267be99f35bd4439be004c1b42798a1f": "74d5fe20106c095b27e47ea3fc582218",
".git/objects/f8/8612dd0b676f0dfb6100ca1c031d8a3cd80015": "6f525b5469a7316d68e478237a0ab62b",
".git/objects/fa/00dddffeb90ca474082486ee0d2ede214cda61": "ae7b3df74a117d00e8787600cabb4477",
".git/refs/heads/master": "bb2ff53b62165cefed42fefa0aaa16be",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "bb2ff53b62165cefed42fefa0aaa16be",
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
"assets/shaders/ink_sparkle.frag": "06336dec8b8af0db9c73c8c6560c6cf2",
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
"index.html": "443d4b13cfcbd706685536002bb8e90d",
"/": "37165121504e94590077aae2b88889a9",
"main.dart.js": "19750c649cd9951083a1a64dd2ed6a3c",
"manifest.json": "7e82df8778eb664dda27b66ea1d2f412",
"UnityLibrary/Build/UnityLibrary.data": "0ca96ed06f4a49a778dd9871696f34c7",
"UnityLibrary/Build/UnityLibrary.framework.js": "4900d140c9eae8064ccee0ed7ea1d001",
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
