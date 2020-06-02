/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c6c9437e187fa2f3bad35edf7114a060"
  },
  {
    "url": "annotations.html",
    "revision": "b4e856c82157fc125f0918abba12ec76"
  },
  {
    "url": "assets/css/0.styles.a325861f.css",
    "revision": "b039d31404100ac11700bdd8f352875b"
  },
  {
    "url": "assets/img/err-422-swui.abcf1054.png",
    "revision": "abcf1054db171750b85d94d57a232aff"
  },
  {
    "url": "assets/img/errors-client.8c545526.png",
    "revision": "8c54552649e7349065bb8839351529d2"
  },
  {
    "url": "assets/img/errors-json-client.281534f3.png",
    "revision": "281534f3154c83e9673738f942eb454c"
  },
  {
    "url": "assets/img/errors-json-server.8d28ca48.png",
    "revision": "8d28ca48e78c7a8383b770ea1aa57774"
  },
  {
    "url": "assets/img/errors-server.c923a910.png",
    "revision": "c923a91036ddede850666c665b20cd7d"
  },
  {
    "url": "assets/img/jsdoc-method.9bfd2316.png",
    "revision": "9bfd2316c02dc6e8a92a536c362db346"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/SwaggerUI.faac8e72.png",
    "revision": "faac8e72ce413b51c78465adb9e6382b"
  },
  {
    "url": "assets/img/swui-alias.50b1bde7.png",
    "revision": "50b1bde755ca1bca4d14035e2deec587"
  },
  {
    "url": "assets/img/swui-endpoint-description.f12d2880.png",
    "revision": "f12d2880700088f56e11d0ef8525bb5c"
  },
  {
    "url": "assets/img/SwUi-Response.59b451a9.png",
    "revision": "59b451a91dcdb0ac2fc2c1d8ee6fdc51"
  },
  {
    "url": "assets/js/10.2f313838.js",
    "revision": "7ac0500cf1b88c03d7b02ed74cccbc29"
  },
  {
    "url": "assets/js/11.9cc15914.js",
    "revision": "7e732fbad8b811ee673e673c4ade321b"
  },
  {
    "url": "assets/js/12.451ee731.js",
    "revision": "e5caeacd542357e1a6dd132031792457"
  },
  {
    "url": "assets/js/13.01a75465.js",
    "revision": "c9ad047329e01d0b3c1518f91e300d28"
  },
  {
    "url": "assets/js/14.d6672a08.js",
    "revision": "cd91d28d83b8374fb54976652783624f"
  },
  {
    "url": "assets/js/15.502dc0ed.js",
    "revision": "2b35a77d7b9e41c624a54ea0926f2f1a"
  },
  {
    "url": "assets/js/16.e6f71bec.js",
    "revision": "45d7f6d435b9963fbf273532cd5519a7"
  },
  {
    "url": "assets/js/17.6fad83a0.js",
    "revision": "60ac281f2d2ed95b04803ae5c5111a17"
  },
  {
    "url": "assets/js/18.34cb7ccb.js",
    "revision": "f889011efe56fdbc29418e91835c3ccd"
  },
  {
    "url": "assets/js/19.d1da5c58.js",
    "revision": "c73190e0b5bd02438084051ac246f483"
  },
  {
    "url": "assets/js/2.4a7f1085.js",
    "revision": "fc4faad8bbfd16f7c4d07b7295718640"
  },
  {
    "url": "assets/js/20.71ddaf2a.js",
    "revision": "ace70d2ec765dfa7d80969b9024f4e72"
  },
  {
    "url": "assets/js/21.afed0d8f.js",
    "revision": "5d341906280251310caaabe6d6abff3f"
  },
  {
    "url": "assets/js/22.d8736a8f.js",
    "revision": "95e2204560263cab13d90b8b22bec6bf"
  },
  {
    "url": "assets/js/23.f19318f1.js",
    "revision": "d87b5def87a4a51f499f850fdef500fa"
  },
  {
    "url": "assets/js/24.83cf2032.js",
    "revision": "0a32512f8212e8b5592548a85f7e9219"
  },
  {
    "url": "assets/js/25.ca2126eb.js",
    "revision": "f4cd49e65fb20fb5c71825c526c4b58b"
  },
  {
    "url": "assets/js/3.4cd21af3.js",
    "revision": "954f74fafa446689d4bbc169d638f92a"
  },
  {
    "url": "assets/js/4.aabeda1c.js",
    "revision": "8133ae75e86b29fd1a50aee70853d441"
  },
  {
    "url": "assets/js/5.f574af08.js",
    "revision": "22a2ac135087ca9fd1e689a0306f5340"
  },
  {
    "url": "assets/js/6.027b84f5.js",
    "revision": "d4b24a595c4c30ac49ed3525c9727a20"
  },
  {
    "url": "assets/js/7.91067c59.js",
    "revision": "5c7f1244b1edd9891c3fc33d70cbdaa3"
  },
  {
    "url": "assets/js/8.2e2c1755.js",
    "revision": "daf0ca9bb8261e5452431e5431700a6c"
  },
  {
    "url": "assets/js/9.ad4e0b2e.js",
    "revision": "ef5e56b8a7b486fefed625cd82d9b51c"
  },
  {
    "url": "assets/js/app.4bf1ddd9.js",
    "revision": "305709ce0afe9e52ee09aad5f6eee0b0"
  },
  {
    "url": "authentication.html",
    "revision": "e6639d908c8cbeb9378609b0749428ea"
  },
  {
    "url": "decorators.html",
    "revision": "1f61d4067ff64eca0458a384ce9c89ea"
  },
  {
    "url": "descriptions.html",
    "revision": "feedbc0c789ddb923bf17cc14f065b02"
  },
  {
    "url": "di.html",
    "revision": "1cf41f5a11a4cc6f9587195cf0851862"
  },
  {
    "url": "error-handling.html",
    "revision": "d71cfd3cba6443f54fbefe4edc31f9a5"
  },
  {
    "url": "examples.html",
    "revision": "e67db7d54c0b1304cc5a4d570a7ec4ad"
  },
  {
    "url": "faq.html",
    "revision": "0f5020b949f76f7718c9b74bd083993d"
  },
  {
    "url": "file-upload.html",
    "revision": "1a297c2f2a9cd435bd2a0a62ed820efc"
  },
  {
    "url": "generating.html",
    "revision": "75eeb517fd7ab519fe3b9b13dcf13fe9"
  },
  {
    "url": "getting-started.html",
    "revision": "2382711ff03dccd41bcc8deac60a9496"
  },
  {
    "url": "index.html",
    "revision": "f6dafb846aefb1475905f43b4741b5b9"
  },
  {
    "url": "introduction.html",
    "revision": "2c22e6ba6af02e20c0c0177880411825"
  },
  {
    "url": "live-reloading.html",
    "revision": "1ff70bb09064f2806143156b15f8face"
  },
  {
    "url": "path-mapping.html",
    "revision": "c03fa7dd0113429efa5095f40c9d6c1e"
  },
  {
    "url": "routes.html",
    "revision": "2bbf6dd0226c9ab2e72a590c5d18ed30"
  },
  {
    "url": "templates.html",
    "revision": "5671e62e9d6720332012288862a3d1e7"
  },
  {
    "url": "upgrading.html",
    "revision": "98522739a686df776fcdd2ce333f4e28"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
