(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();e.p;document.querySelector(".material-symbols-rounded").classList.add("notranslate"),function(){var e=document.querySelector(".sidebar"),t=document.querySelector(".main"),n=document.querySelector("#toggPanelBtn");function o(){return window.innerWidth<=700&&window.innerHeight<=761?(e.style.display="none",t.style.gridColumn="1/3",void(n.textContent="menu")):(e.style.display="grid",t.style.gridColumn="2/3",void(n.textContent="menu_open"))}window.addEventListener("DOMContentLoaded",(function(){o()})),window.addEventListener("resize",(function(){o()})),n.addEventListener("click",(function(){n.classList.toggle("menu-open"),n.classList.toggle("menu-close"),"menu_open"===n.textContent?n.textContent="menu":n.textContent="menu_open","menu_open"===n.textContent?(e.style.display="grid",t.style.gridColumn="2/3"):(e.style.display="none",t.style.gridColumn="1/3")}))}()})();
//# sourceMappingURL=bundle.dcf1c41e71f1d17c374a.js.map