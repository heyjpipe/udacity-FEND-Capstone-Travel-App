if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise(async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()})),r.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},r=(r,i)=>{Promise.all(r.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map(r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}})).then(e=>{const r=c(...e);return i.default||(i.default=r),i})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"36cad09fb96644889be329d2559c83e0.png",revision:"18a50cfda7ab2ccc390ec76a689cb2b7"},{url:"bb32696de4f6b4a5c96f1c7270dab98d.png",revision:"78731b615306549024e78062c7456881"},{url:"index.html",revision:"ffb1316b23302a0afd0bbbffc4807efe"},{url:"main.css",revision:"3188759aa4e93faa395a24b370cd382c"},{url:"main.js",revision:"0a032185358249fca21de30c650ee5d4"}],{})}));