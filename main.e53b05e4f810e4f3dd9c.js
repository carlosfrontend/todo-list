(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"5a3eca3cc0666a461bc1.svg",n=t.p+"9be7d3a334d0f29d2ef6.svg",o=()=>{const t=document.querySelector(".main"),e=document.querySelector(".sidebar"),n=document.querySelector("#toggPanelBtn");e.style.display="none",t.style.gridColumn="1/3",n.textContent="menu"},r=()=>{const t=document.querySelector(".main"),e=document.querySelector(".sidebar"),n=document.querySelector("#toggPanelBtn");e.style.display="grid",t.style.gridColumn="2/3",n.textContent="menu_open",n.classList.replace("menu-close","menu-open")},a=()=>{const t=document.querySelector("#toggPanelBtn");window.innerWidth<=700?(t.textContent="menu",t.classList.remove("menu-open"),t.classList.add("menu-close"),o()):(t.textContent="menu_open",t.classList.remove("menu-cloe"),t.classList.add("menu-open"),r())};const i=function(){document.querySelector(".sidebar"),document.querySelector(".main");const t=document.querySelector("#toggPanelBtn");t.classList.toggle("menu-open"),t.classList.toggle("menu-close"),"menu_open"===t.textContent?t.textContent="menu":t.textContent="menu_open","menu_open"===t.textContent?(t.textContent="menu_open",r()):(t.textContent="menu",o())},c=()=>{const t=document.querySelector("#dialog-add-task"),e=document.querySelector("#cancel-add");t.showModal(),e.addEventListener("click",(()=>{t.close()}))},s=t=>{const e=document.querySelector(".projects-box");"expand_less"===t.target.textContent?t.target.textContent="expand_more":t.target.textContent="expand_less","expand_less"===t.target.textContent?e.style.display="none":e.style.display="block"},d=()=>{const t=document.querySelector("#dialog-add-project"),e=document.querySelector("#cancel-add-project");t.showModal(),e.addEventListener("click",(()=>{t.close()}))};function u(t){return t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function l(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function m(t){if(!u(t)&&"number"!=typeof t)return!1;const e=l(t);return!isNaN(Number(e))}const h={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function g(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const p={date:g({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:g({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:g({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(t){return(e,n)=>{let o;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;o=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;o=t.values[r]||t.values[e]}return o[t.argumentCallback?t.argumentCallback(e):e]}}function w(t){return(e,n={})=>{const o=n.width,r=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],a=e.match(r);if(!a)return null;const i=a[0],c=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(c)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(c,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(c,(t=>t.test(i)));let d;d=t.valueCallback?t.valueCallback(s):s,d=n.valueCallback?n.valueCallback(d):d;return{value:d,rest:e.slice(i.length)}}}var b;const x={code:"en-US",formatDistance:(t,e,n)=>{let o;const r=h[t];return o="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+o:o+" ago":o},formatLong:p,formatRelative:(t,e,n,o)=>f[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),o=n%100;if(o>20||o<10)switch(o%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(b={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(b.matchPattern);if(!n)return null;const o=n[0],r=t.match(b.parsePattern);if(!r)return null;let a=b.valueCallback?b.valueCallback(r[0]):r[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(o.length)}}),era:w({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:w({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:w({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:w({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let S={};function v(){return S}Math.pow(10,8);const C=6048e5,q=864e5;function M(t){const e=l(t);return e.setHours(0,0,0,0),e}function L(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function D(t,e){const n=M(t),o=M(e),r=n.getTime()-L(n),a=o.getTime()-L(o);return Math.round((r-a)/q)}function k(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function E(t){const e=l(t),n=k(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function j(t){const e=l(t);return D(e,E(e))+1}function P(t,e){const n=v(),o=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=l(t),a=r.getDay(),i=(a<o?7:0)+a-o;return r.setDate(r.getDate()-i),r.setHours(0,0,0,0),r}function T(t){return P(t,{weekStartsOn:1})}function W(t){const e=l(t),n=e.getFullYear(),o=k(t,0);o.setFullYear(n+1,0,4),o.setHours(0,0,0,0);const r=T(o),a=k(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=T(a);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function N(t){const e=W(t),n=k(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),T(n)}function H(t){const e=l(t),n=T(e).getTime()-N(e).getTime();return Math.round(n/C)+1}function Y(t,e){const n=l(t),o=n.getFullYear(),r=v(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=k(t,0);i.setFullYear(o+1,0,a),i.setHours(0,0,0,0);const c=P(i,e),s=k(t,0);s.setFullYear(o,0,a),s.setHours(0,0,0,0);const d=P(s,e);return n.getTime()>=c.getTime()?o+1:n.getTime()>=d.getTime()?o:o-1}function O(t,e){const n=v(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=Y(t,e),a=k(t,0);a.setFullYear(r,0,o),a.setHours(0,0,0,0);return P(a,e)}function A(t,e){const n=l(t),o=P(n,e).getTime()-O(n,e).getTime();return Math.round(o/C)+1}function F(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const _={y(t,e){const n=t.getFullYear(),o=n>0?n:1-n;return F("yy"===e?o%100:o,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):F(n+1,2)},d:(t,e)=>F(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>F(t.getHours()%12||12,e.length),H:(t,e)=>F(t.getHours(),e.length),m:(t,e)=>F(t.getMinutes(),e.length),s:(t,e)=>F(t.getSeconds(),e.length),S(t,e){const n=e.length,o=t.getMilliseconds();return F(Math.floor(o*Math.pow(10,n-3)),e.length)}},B="midnight",z="noon",I="morning",Q="afternoon",G="evening",X="night",$={G:function(t,e,n){const o=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(o,{width:"abbreviated"});case"GGGGG":return n.era(o,{width:"narrow"});default:return n.era(o,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),o=e>0?e:1-e;return n.ordinalNumber(o,{unit:"year"})}return _.y(t,e)},Y:function(t,e,n,o){const r=Y(t,o),a=r>0?r:1-r;if("YY"===e){return F(a%100,2)}return"Yo"===e?n.ordinalNumber(a,{unit:"year"}):F(a,e.length)},R:function(t,e){return F(W(t),e.length)},u:function(t,e){return F(t.getFullYear(),e.length)},Q:function(t,e,n){const o=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(o);case"QQ":return F(o,2);case"Qo":return n.ordinalNumber(o,{unit:"quarter"});case"QQQ":return n.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(o,{width:"narrow",context:"formatting"});default:return n.quarter(o,{width:"wide",context:"formatting"})}},q:function(t,e,n){const o=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(o);case"qq":return F(o,2);case"qo":return n.ordinalNumber(o,{unit:"quarter"});case"qqq":return n.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(o,{width:"narrow",context:"standalone"});default:return n.quarter(o,{width:"wide",context:"standalone"})}},M:function(t,e,n){const o=t.getMonth();switch(e){case"M":case"MM":return _.M(t,e);case"Mo":return n.ordinalNumber(o+1,{unit:"month"});case"MMM":return n.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(o,{width:"narrow",context:"formatting"});default:return n.month(o,{width:"wide",context:"formatting"})}},L:function(t,e,n){const o=t.getMonth();switch(e){case"L":return String(o+1);case"LL":return F(o+1,2);case"Lo":return n.ordinalNumber(o+1,{unit:"month"});case"LLL":return n.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(o,{width:"narrow",context:"standalone"});default:return n.month(o,{width:"wide",context:"standalone"})}},w:function(t,e,n,o){const r=A(t,o);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):F(r,e.length)},I:function(t,e,n){const o=H(t);return"Io"===e?n.ordinalNumber(o,{unit:"week"}):F(o,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):_.d(t,e)},D:function(t,e,n){const o=j(t);return"Do"===e?n.ordinalNumber(o,{unit:"dayOfYear"}):F(o,e.length)},E:function(t,e,n){const o=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},e:function(t,e,n,o){const r=t.getDay(),a=(r-o.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return F(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,o){const r=t.getDay(),a=(r-o.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return F(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const o=t.getDay(),r=0===o?7:o;switch(e){case"i":return String(r);case"ii":return F(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},a:function(t,e,n){const o=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},b:function(t,e,n){const o=t.getHours();let r;switch(r=12===o?z:0===o?B:o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const o=t.getHours();let r;switch(r=o>=17?G:o>=12?Q:o>=4?I:X,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return _.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):_.H(t,e)},K:function(t,e,n){const o=t.getHours()%12;return"Ko"===e?n.ordinalNumber(o,{unit:"hour"}):F(o,e.length)},k:function(t,e,n){let o=t.getHours();return 0===o&&(o=24),"ko"===e?n.ordinalNumber(o,{unit:"hour"}):F(o,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):_.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):_.s(t,e)},S:function(t,e){return _.S(t,e)},X:function(t,e,n,o){const r=(o._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return U(r);case"XXXX":case"XX":return R(r);default:return R(r,":")}},x:function(t,e,n,o){const r=(o._originalDate||t).getTimezoneOffset();switch(e){case"x":return U(r);case"xxxx":case"xx":return R(r);default:return R(r,":")}},O:function(t,e,n,o){const r=(o._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+J(r,":");default:return"GMT"+R(r,":")}},z:function(t,e,n,o){const r=(o._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+J(r,":");default:return"GMT"+R(r,":")}},t:function(t,e,n,o){const r=o._originalDate||t;return F(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,o){return F((o._originalDate||t).getTime(),e.length)}};function J(t,e=""){const n=t>0?"-":"+",o=Math.abs(t),r=Math.floor(o/60),a=o%60;return 0===a?n+String(r):n+String(r)+e+F(a,2)}function U(t,e){if(t%60==0){return(t>0?"-":"+")+F(Math.abs(t)/60,2)}return R(t,e)}function R(t,e=""){const n=t>0?"-":"+",o=Math.abs(t);return n+F(Math.floor(o/60),2)+e+F(o%60,2)}const V=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},K=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Z={p:K,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],o=n[1],r=n[2];if(!r)return V(t,e);let a;switch(o){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",V(o,e)).replace("{{time}}",K(r,e))}},tt=/^D+$/,et=/^Y+$/,nt=["D","DD","YY","YYYY"];function ot(t,e,n){const o=function(t,e,n){const o="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(o),nt.includes(t))throw new RangeError(o)}const rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,ct=/''/g,st=/[a-zA-Z]/;function dt(t,e,n){const o=v(),r=n?.locale??o.locale??x,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??o.weekStartsOn??o.locale?.options?.weekStartsOn??0,c=l(t);if(!m(c))throw new RangeError("Invalid time value");const s={firstWeekContainsDate:a,weekStartsOn:i,locale:r,_originalDate:c};return e.match(at).map((function(t){const e=t[0];if("p"===e||"P"===e){return(0,Z[e])(t,r.formatLong)}return t})).join("").match(rt).map((function(o){if("''"===o)return"'";const a=o[0];if("'"===a)return function(t){const e=t.match(it);if(!e)return t;return e[1].replace(ct,"'")}(o);const i=$[a];if(i)return!n?.useAdditionalWeekYearTokens&&(d=o,et.test(d))&&ot(o,e,String(t)),!n?.useAdditionalDayOfYearTokens&&function(t){return tt.test(t)}(o)&&ot(o,e,String(t)),i(c,o,r.localize,s);var d;if(a.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return o})).join("")}const ut=t=>{t.target.setAttribute("min",dt(new Date,"yyyy-MM-dd HH:MM"))},lt=function(t){this.id=self.crypto.randomUUID(),this.name=t,this.todos=[]},mt=()=>JSON.parse(localStorage.getItem("todolist")),ht=t=>localStorage.setItem("todolist",JSON.stringify(t)),gt=()=>{if(null===mt()){ht([]);const t=new lt("Inbox"),e=mt();e.push(t),ht(e)}},pt=t=>{const e=document.querySelector(".projects-box"),n=document.createElement("button"),o=document.createElement("span"),r=document.createElement("span"),a=document.createElement("span"),i=document.createElement("span"),c=document.querySelector("#project_name"),s=document.createElement("option");s.setAttribute("value",t.name),s.textContent=t.name,n.classList.add("project-item"),n.setAttribute("id",t.id),o.classList.add("material-symbols-rounded","project-icon","notranslate"),o.textContent="folder",r.classList.add("project-txt"),r.textContent=t.name,a.setAttribute("id","delete-proj-btn"),a.classList.add("material-symbols-rounded","project-icon","notranslate"),a.textContent="delete",i.classList.add("counter"),n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(i),e.appendChild(n),c.appendChild(s)},ft=()=>{const t=document.querySelector("#add-project-form"),e=document.querySelector("#name");t.addEventListener("submit",(()=>{const n=new lt(e.value),o=mt();o.push(n),ht(o),t.reset(),pt(n)}))},yt=t=>{const e=document.querySelector("#project_name"),n=mt(),o=t.target.closest(".project-item"),r=o.id;n.map(((t,a)=>{if(t.id===r){n.splice(a,1),ht(n),o.remove();const t=mt();e.innerHTML="",t.map((t=>{const n=document.createElement("option");n.setAttribute("value",t.name),n.textContent=t.name,e.appendChild(n)}))}}))},wt=function(t,e,n,o,r,a="Inbox"){this.id=self.crypto.randomUUID(),this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.notes=r,this.projectName=a,this.completed=!1},bt=(t,e)=>{t.map((t=>{const n=document.createElement("div");n.classList.add("todo-item"),n.setAttribute("id",t.id);const o=document.createElement("h3");o.textContent=t.title,o.classList.add("todo-title");const r=document.createElement("p");r.classList.add("todo-description"),r.textContent=t.description;const a=document.createElement("div");a.classList.add("todo-duedate");const i=document.createElement("span");i.textContent="Due Date:";const c=document.createElement("span");c.classList.add("due-date"),c.textContent=" "+dt(t.dueDate,"MMMM dd y HH:mm");const s=document.createElement("div"),d=document.createElement("span"),u=document.createElement("span"),l=document.createElement("div"),m=document.createElement("span"),h=document.createElement("p"),g=document.createElement("label"),p=document.createElement("input");p.type="checkbox",p.checked=t.completed,!0===p.checked?n.classList.add("todo-completed-bg"):n.classList.remove("todo-completed-bg"),!0===p.checked?o.classList.add("todo-completed-txt"):o.classList.remove("todo-completed-txt"),!0===p.checked?r.classList.add("todo-completed-txt"):r.classList.remove("todo-completed-txt"),!0===p.checked?a.classList.add("todo-completed-txt"):a.classList.remove("todo-completed-txt"),!0===p.checked?s.classList.add("todo-completed-txt"):s.classList.remove("todo-completed-txt"),!0===p.checked?l.classList.add("todo-completed-txt"):l.classList.remove("todo-completed-txt"),p.classList.add("completed"),g.classList.add("completed-label"),g.textContent="Completed",h.classList.add("note"),h.textContent=t.notes,m.classList.add("notes-title"),m.textContent="Notes:",l.classList.add("notes"),u.classList.add("priority"),u.textContent=" "+t.priority,d.textContent="Priority:",s.classList.add("todo-priority"),s.appendChild(d),s.appendChild(u),a.appendChild(i),a.appendChild(c),l.appendChild(m),l.appendChild(h),g.appendChild(p);const f=document.createElement("div");f.classList.add("project-name-title");const y=document.createElement("span");y.classList.add("material-symbols-rounded","project-logo","notranslate"),y.textContent="numbers",f.appendChild(y);const w=document.createElement("span");w.classList.add("my-project"),w.textContent=" "+t.projectName,f.appendChild(w);const b=document.createElement("div");b.classList.add("todo-buttons");const x=document.createElement("button"),S=document.createElement("span");S.classList.add("material-symbols-rounded","edit-logo","notranslate"),S.textContent="edit",x.classList.add("edit-button"),x.textContent="Edit",x.appendChild(S);const v=document.createElement("button");v.type="button",v.classList.add("delete-button"),v.textContent="Delete";const C=document.createElement("span");C.classList.add("material-symbols-rounded","delete-logo","notranslate"),C.textContent="delete",v.appendChild(C),b.appendChild(x),b.appendChild(v),n.appendChild(o),n.appendChild(r),n.appendChild(a),n.appendChild(s),n.appendChild(l),n.appendChild(g),n.appendChild(f),n.appendChild(b),e.appendChild(n)}))},xt=t=>{const e=document.querySelector(".todos-container");e.innerHTML="";const n=mt().filter((e=>e.name===t))[0].todos;bt(n,e)},St=()=>{let t=document.querySelector("#inboxCounter"),e=document.querySelector("#inbox-in-projects-box").children[2],n=mt().find((t=>"Inbox"===t.name)).todos.length;t.textContent=n,e.textContent=n};function vt(t){return+l(t)>Date.now()}const Ct=()=>{let t=document.querySelector("#nextCounter"),e=[];mt().map((t=>e=e.concat(t.todos)));const n=e.filter((t=>vt(new Date(t.dueDate))));t.textContent=n.length};function qt(t,e){return+M(t)==+M(e)}function Mt(t){return qt(t,Date.now())}const Lt=()=>{let t=document.querySelector("#todayCounter"),e=[];mt().map((t=>e=e.concat(t.todos)));const n=e.filter((t=>Mt(new Date(t.dueDate))));t.textContent=n.length};function Dt(t,e){const n=l(t);return isNaN(e)?k(t,NaN):e?(n.setDate(n.getDate()+e),n):n}function kt(t){return qt(t,Dt(Date.now(),1))}const Et=()=>{let t=document.querySelector("#tomorrowCounter"),e=[];mt().map((t=>e=e.concat(t.todos)));const n=e.filter((t=>kt(new Date(t.dueDate))));t.textContent=n.length},jt=()=>{St(),Lt(),Et(),Ct()},Pt=()=>{const t=document.querySelector("#addForm");t.addEventListener("submit",(()=>{const e=document.querySelector("#title"),n=document.querySelector("#description"),o=document.querySelector("#dueDate"),r=document.querySelector("#priority"),a=document.querySelector("#notes"),i=document.querySelector("#project_name"),c=new wt(e.value,n.value,o.value,r.value,a.value,i.value),s=mt();s.map((t=>{t.name===i.value&&(t.todos.push(c),ht(s),xt(t.name),setTimeout((()=>{"Inbox"===t.name&&document.querySelector("#inbox-in-projects-box").focus();[...document.querySelectorAll(".project-item")].filter((e=>{e.children[1].textContent===t.name&&e.focus()}))}),0))})),t.reset(),jt()}))},Tt=t=>{const e=mt(),n=t.target.closest(".todo-item"),o=n.querySelector(".my-project").textContent.trim();let r=e.find((t=>t.name===o)).todos;if(null!==e){const t=r.findIndex((t=>t.id===n.id));r.splice(t,1),ht(e),xt(o)}jt()},Wt=t=>{const e=mt();if(null!==e){const n=document.querySelector(".my-project").textContent.trim(),o=e.find((t=>t.name===n)).todos.filter((e=>e.id===t.target.parentElement.parentElement.id))[0];!1===o.completed?o.completed=!0:o.completed=!1,ht(e),t.target.parentElement.parentElement.classList.toggle("todo-completed-bg"),t.target.parentElement.parentElement.children[0].classList.toggle("todo-completed-txt"),t.target.parentElement.parentElement.children[1].classList.toggle("todo-completed-txt"),t.target.parentElement.parentElement.children[2].classList.toggle("todo-completed-txt"),t.target.parentElement.parentElement.children[3].classList.toggle("todo-completed-txt"),t.target.parentElement.parentElement.children[4].classList.toggle("todo-completed-txt")}},Nt=()=>{const t=document.querySelector("#dialog-edit-task"),e=document.querySelector("#cancel-edit");t.showModal(),e.addEventListener("click",(e=>{document.querySelector("#project_name").setAttribute("selected","Inbox"),t.close()}))},Ht=t=>{document.querySelector(".todos-container");const e=t.target.closest(".todo-item"),n=e.id,o=e.children[0].textContent,r=e.children[1].textContent,a=`${dt(e.children[2].textContent,"yyyy-MM-dd")}T${dt(e.children[2].textContent,"HH:mm")}`,i=e.children[3].children[1].textContent.trim(),c=e.children[4].children[1].textContent,s=e.children[5].children[0].checked,d=document.querySelector("#project_name").innerHTML,u=e.children[6].children[1].textContent.trim();document.querySelector("#edit-title").value=o,document.querySelector("#edit-description").value=r,document.querySelector("#edit-dueDate").value=a,document.querySelector("#edit-dueDate").setAttribute("min",dt(new Date,"yyyy-MM-dd HH:MM")),document.querySelector("#edit-priority").children[0].removeAttribute("selected"),document.querySelector("#edit-priority").value=i,document.querySelector("#edit-priority").setAttribute("selected",i),document.querySelector("#edit-notes").value=c,document.querySelector("#isCompleted").value=s,document.querySelector("#isCompleted").setAttribute("selected",s),document.querySelector("#edit-project_name").innerHTML=d,document.querySelector("#edit-project_name").value=u,document.querySelector("#edit-project_name").setAttribute("selected",u);document.querySelector("#editForm").addEventListener("submit",(()=>{const t=document.querySelector("#edit-title").value,o=document.querySelector("#edit-description").value,r=document.querySelector("#edit-dueDate").value,a=document.querySelector("#edit-priority").value,i=document.querySelector("#edit-notes").value,c=document.querySelector("#isCompleted").value,s=document.querySelector("#edit-project_name").value;let d=new wt(t,o,r,a,i,s);if(d.completed="true"===c,u===d.projectName){let t=mt(),o=t.find((t=>t.name===u)),r=o.todos.findIndex((t=>t.id===n));o.todos.splice(r,1,d),ht(t),e.remove(),xt(u);[...document.querySelectorAll(".project-item")].map((t=>{t.children[1].textContent.trim()===u&&setTimeout((()=>{t.focus()}),0)}))}else{let t=mt(),o=t.find((t=>t.name===d.projectName)),r=t.find((t=>t.name===u)),a=r.todos.findIndex((t=>t.id===n));r.todos.splice(a,1),o.todos.push(d),ht(t),e.remove(),xt(d.projectName);[...document.querySelectorAll(".project-item")].map((t=>{t.children[1].textContent.trim()===d.projectName&&setTimeout((()=>{t.focus()}),0)}))}jt()}),{once:!0})},Yt=()=>{const t=document.querySelector(".todos-container");let e=[];mt().map((t=>e=e.concat(t.todos)));const n=e.filter((t=>Mt(new Date(t.dueDate))));t.innerHTML="",bt(n,t)},Ot=()=>{const t=document.querySelector(".todos-container");let e=[];mt().map((t=>e=e.concat(t.todos)));const n=e.filter((t=>kt(new Date(t.dueDate))));t.innerHTML="",bt(n,t)},At=()=>{const t=document.querySelector(".todos-container");let e=[];mt().map((t=>e=e.concat(t.todos)));const n=e.filter((t=>vt(new Date(t.dueDate))));t.innerHTML="",bt(n,t)};(()=>{jt();let t=mt();gt();const o=document.querySelector(".logo"),r=document.querySelector(".gh-logo");o.src=e,r.src=n,o.alt="Todo List Logo",r.alt="Github Logo",document.querySelector("#inbox-in-tasks-box").focus(),null!==t&&xt(t[0].name),Pt(),ft(),null!==t&&t.filter((t=>"Inbox"!==t.name)).map((t=>{pt(t)})),window.addEventListener("DOMContentLoaded",(()=>{window.innerWidth<=700?document.querySelector("#toggPanelBtn").textContent="menu":document.querySelector("#toggPanelBtn").textContent="menu_open"})),window.addEventListener("resize",(()=>{a()})),document.querySelector(".main").addEventListener("click",(e=>{e.target.closest("#toggPanelBtn")&&i(),e.target.closest(".delete-button")&&Tt(e),e.target.closest(".completed")&&(Wt(e),t=mt()),e.target.closest(".edit-button")&&(Nt(),Ht(e))})),document.querySelector(".tasks-box").addEventListener("click",(t=>{if(t.target.closest(".add")&&c(),t.target.closest("#inbox-in-tasks-box")){xt("Inbox")}if(t.target.closest(".menu-element")){const e=t.target.closest(".menu-element").querySelector(".menu-txt").textContent;if("Inbox"!==e)switch(e){case"Today":Yt();break;case"Tomorrow":Ot();break;case"Next":At()}}})),document.querySelector("#addForm").addEventListener("click",(e=>{"dueDate"===e.target.id&&ut(e),e.target.closest("#cancel-add")&&(document.querySelector("#inbox-in-tasks-box").focus(),null!==t&&xt(t[0].name))})),document.querySelector(".menu-element-project").addEventListener("click",(t=>{t.target.closest("#addProjBtn")&&d(),"collapseBtn"===t.target.id&&s(t)}));document.querySelector(".projects-box").addEventListener("click",(function(t){if(t.target.closest("#delete-proj-btn"))return yt(t),void(document.querySelector(".todos-container").innerHTML="");t.target.closest(".project-item")&&xt(t.target.closest(".project-item").children[1].textContent)}))})()})();
//# sourceMappingURL=main.e53b05e4f810e4f3dd9c.js.map