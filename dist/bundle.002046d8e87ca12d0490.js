(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!t;)t=o[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"logo.svg";const n=function(){var e=document.querySelector(".main"),t=document.querySelector(".sidebar"),n=document.querySelector("#toggPanelBtn");t.style.display="none",e.style.gridColumn="1/3",n.textContent="menu",n.classList.replace("menu-open","menu-close")};const o=function(){var e=document.querySelector(".main"),t=document.querySelector(".sidebar"),n=document.querySelector("#toggPanelBtn");t.style.display="grid",e.style.gridColumn="2/3",n.textContent="menu_open",n.classList.replace("menu-close","menu-open")};const r=function(){var e=document.querySelector("#toggPanelBtn");window.innerWidth<700?(e.textContent="menu",e.classList.remove("menu-open"),e.classList.add("menu-close"),n()):(e.textContent="menu_open",e.classList.remove("menu-cloe"),e.classList.add("menu-open"),o())};function c(){var e=document.querySelector(".sidebar"),t=document.querySelector(".main"),n=document.querySelector("#toggPanelBtn");n.classList.toggle("menu-open"),n.classList.toggle("menu-close"),"menu_open"===n.textContent?n.textContent="menu":n.textContent="menu_open","menu_open"===n.textContent?(e.style.display="grid",t.style.gridColumn="2/3"):(e.style.display="none",t.style.gridColumn="1/3")}var s=document.querySelector(".logo");s.src=t,s.alt="Todo List Logo";document.querySelector("#toggPanelBtn");document.querySelector(".material-symbols-rounded").classList.add("notranslate"),window.addEventListener("DOMContentLoaded",(function(){r()})),window.addEventListener("resize",(function(){r()})),toggPanelBtn.addEventListener("click",c)})();
//# sourceMappingURL=bundle.002046d8e87ca12d0490.js.map