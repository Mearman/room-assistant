if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return i[s]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=s,document.head.appendChild(i),i.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!i[s])throw new Error(`Module ${s} didn’t register its module`);return i[s]}))},e=(e,i)=>{Promise.all(e.map(s)).then((s=>i(1===s.length?s[0]:s)))},i={require:Promise.resolve(e)};self.define=(e,r,l)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+e.slice(1)};return Promise.all(r.map((e=>{switch(e){case"exports":return i;case"module":return n;default:return s(e)}}))).then((s=>{const e=l(...s);return i.default||(i.default=e),i}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"d193719ff288f707e4e2fa16a7f4c91d"},{url:"android-chrome-192x192.png",revision:"01bafd5cc06880d98f79eb014521b310"},{url:"android-chrome-384x384.png",revision:"f2d43f64b33b3aeeca99f27c463d2aad"},{url:"apple-touch-icon.png",revision:"f88235df4c68f647bcf9eff7df846cc0"},{url:"assets/css/styles.9454c94a.css",revision:null},{url:"assets/img/app-store-badge.8c4986ee.svg",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/compilation-msgs.f118553e.png",revision:null},{url:"assets/img/mijia-bind-key.3f1bc260.png",revision:null},{url:"assets/js/205.7c264b76.js",revision:null},{url:"assets/js/443.ddd4be0c.js",revision:null},{url:"assets/js/599.de0bb5d4.js",revision:null},{url:"assets/js/616.e5d415c0.js",revision:null},{url:"assets/js/app.596760ea.js",revision:null},{url:"assets/js/runtime~app.413d7188.js",revision:null},{url:"assets/js/v-0808a66d.c4d28647.js",revision:null},{url:"assets/js/v-08eb506c.49f35dc5.js",revision:null},{url:"assets/js/v-100dc897.e215774f.js",revision:null},{url:"assets/js/v-32874d30.a03e71c8.js",revision:null},{url:"assets/js/v-3706649a.61fb02f5.js",revision:null},{url:"assets/js/v-387c00a5.fe2b589b.js",revision:null},{url:"assets/js/v-3a697504.0c7d10ae.js",revision:null},{url:"assets/js/v-3c5293eb.06ccf9f5.js",revision:null},{url:"assets/js/v-4a7cd8b8.6f132ac1.js",revision:null},{url:"assets/js/v-4bcfdd1c.69dd5adc.js",revision:null},{url:"assets/js/v-4f4ccb8f.cd528793.js",revision:null},{url:"assets/js/v-5056dbea.bc123470.js",revision:null},{url:"assets/js/v-51bf504c.b40ccc65.js",revision:null},{url:"assets/js/v-5f375b25.16695170.js",revision:null},{url:"assets/js/v-5fc1b602.01ef5800.js",revision:null},{url:"assets/js/v-6024a082.5be48c4c.js",revision:null},{url:"assets/js/v-69bf6d9d.fd9d62c9.js",revision:null},{url:"assets/js/v-6ac49b02.5d8c24b3.js",revision:null},{url:"assets/js/v-789f6926.f622f2e8.js",revision:null},{url:"assets/js/v-8daa1a0e.4a42110e.js",revision:null},{url:"assets/js/v-9a3a909a.7d9f2069.js",revision:null},{url:"assets/js/v-b14866e8.cbc831ca.js",revision:null},{url:"assets/js/v-b9bf0f00.a41726cb.js",revision:null},{url:"assets/js/v-d7be191a.71152e23.js",revision:null},{url:"assets/js/v-dd65b598.3aa4e02e.js",revision:null},{url:"assets/js/v-fffb8e28.c9fb7ea6.js",revision:null},{url:"favicon-16x16.png",revision:"c6b93302fc3f2ea8f101011a70d63a08"},{url:"favicon-32x32.png",revision:"d00874ce1e43be2ac335d1e80c0c8ead"},{url:"guide/api.html",revision:"13eee4c368572ab9b23b11d5713071d2"},{url:"guide/cli.html",revision:"c329cf632eef57cdaea826bf6c68fdf4"},{url:"guide/cluster.html",revision:"35f1516b3b209abc6dbb5833882967f0"},{url:"guide/configuration.html",revision:"eed3bf8a6875ce6ab2e2cd48c8b746ae"},{url:"guide/entities.html",revision:"6d93f4675c51f87bf4781e05095a45bf"},{url:"guide/index.html",revision:"6606ca1fa64f1ff53e53dd61a5924405"},{url:"guide/installation.html",revision:"01e45d0b8272823e52092545cfb6c105"},{url:"guide/monitoring.html",revision:"86304ffc5d4eb20edf5142ba6d3a22f4"},{url:"guide/quickstart-ansible.html",revision:"9a36de1af68fbd76b61a5771d6d45bfd"},{url:"guide/quickstart-docker.html",revision:"4d085399aa157e09666bf5323a028b2d"},{url:"guide/quickstart-pi-zero-w.html",revision:"2727cd69b6ec599cb398091c2a26b511"},{url:"guide/quickstart-pi.html",revision:"115c357a271ad2e1a9afb69c5ef4a7b2"},{url:"guide/upgrading.html",revision:"db128843469216d863cc5b81ebdc47eb"},{url:"index.html",revision:"05fc119684346c37ae84c81e1df9ef88"},{url:"integrations/bluetooth-classic.html",revision:"47db7f5f697eba1a3ea214ad75a65223"},{url:"integrations/bluetooth-low-energy.html",revision:"95cb92193747d0231fcf8d75d5efb02e"},{url:"integrations/gpio.html",revision:"e09f21dac9392441ac770ca25d95b795"},{url:"integrations/grid-eye.html",revision:"2b0feccb1815296d9890e6b9d4757eea"},{url:"integrations/home-assistant.html",revision:"70653b46f19a82565a812101220d49c1"},{url:"integrations/index.html",revision:"39fd602a07f9f0c31414132efbabf8af"},{url:"integrations/mqtt.html",revision:"a0234f91ea9392ab8cee1130ba5695cd"},{url:"integrations/omron-d6t.html",revision:"8c09a994fa58474608ba65781252cb0e"},{url:"integrations/shell.html",revision:"e57ad5baf3eb82fbe82769c6800fd501"},{url:"integrations/xiaomi-mi.html",revision:"67e393f816972bb0b97a3240de1e8e78"},{url:"mstile-150x150.png",revision:"5461702e6d17101516497b481857edd8"},{url:"privacy.html",revision:"3ed8bb33a347e150623b46ce421f0169"},{url:"room-assistant.png",revision:"e79e479593059c21d0971d8d802c5a9c"},{url:"safari-pinned-tab.svg",revision:"37c5052d727a9267b550b55e1faec638"}],{})}));
