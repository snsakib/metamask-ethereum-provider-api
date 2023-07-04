(()=>{"use strict";var e,t,o,r,n={3:e=>{e.exports=function({mustBeMetaMask:e=!1,silent:t=!1,timeout:o=3e3}={}){!function(){if("boolean"!=typeof e)throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if("boolean"!=typeof t)throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if("number"!=typeof o)throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}();let r=!1;return new Promise((n=>{function a(){if(r)return;r=!0,window.removeEventListener("ethereum#initialized",a);const{ethereum:o}=window;if(!o||e&&!o.isMetaMask){const r=e&&o?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum.";!t&&console.error("@metamask/detect-provider:",r),n(null)}else n(o)}window.ethereum?a():(window.addEventListener("ethereum#initialized",a,{once:!0}),setTimeout((()=>{a()}),o))}))}},138:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var r=o(3),n=o.n(r);const a=await n()();function c(e){e!==window.ethereum&&console.error("Do you have multiple wallets installed?")}function i(e){window.location.reload()}a?(console.log("Provider:"),console.log(a),c(a)):console.log("Please install MetaMask!"),await window.ethereum.request({method:"eth_chainId"}),window.ethereum.on("chainChanged",i);let s=null;function u(e){0===e.length?console.log("Please connect to MetaMask."):e[0]!==s&&(s=e[0],d.innerHTML=s)}window.ethereum.request({method:"eth_accounts"}).then(u).catch((e=>{console.error(e)})),window.ethereum.on("accountsChanged",u);const l=document.querySelector(".enableEthereumButton"),d=document.querySelector(".showAccount");async function w(){const e=(await window.ethereum.request({method:"eth_requestAccounts"}).catch((e=>{4001===e.code?console.log("Please connect to MetaMask."):console.error(e)})))[0];d.innerHTML=e}l.addEventListener("click",(()=>{w()})),t()}catch(m){t(m)}}),1)}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return n[e](o,o.exports,c),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(n,a,c)=>{var i;c&&((i=[]).d=-1);var s,u,l,d=new Set,w=n.exports,m=new Promise(((e,t)=>{l=t,u=e}));m[t]=w,m[e]=e=>(i&&e(i),d.forEach(e),m.catch((e=>{}))),n.exports=m,a((n=>{var a;s=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{c[t]=e,r(a)}),(e=>{c[o]=e,r(a)}));var c={};return c[e]=e=>e(a),c}}var i={};return i[e]=e=>{},i[t]=n,i})))(n);var c=()=>s.map((e=>{if(e[o])throw e[o];return e[t]})),u=new Promise((t=>{(a=()=>t(c)).r=0;var o=e=>e!==i&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));s.map((t=>t[e](o)))}));return a.r?u:c()}),(e=>(e?l(m[o]=e):u(w),r(i)))),i&&i.d<0&&(i.d=0)},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c(138)})();