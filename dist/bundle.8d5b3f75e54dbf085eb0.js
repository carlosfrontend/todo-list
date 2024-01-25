(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=[];const n=function(t){return e.push(t),t};const r=[];const o=function(t){return r.push(t),t};const a=function(){localStorage.setItem("TodoList",JSON.stringify(e))},i={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let u;const s=new Uint8Array(16);function c(){if(!u&&(u="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(s)}const d=[];for(let t=0;t<256;++t)d.push((t+256).toString(16).slice(1));function l(t,e=0){return d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]}const m=function(t,e,n){if(i.randomUUID&&!e&&!t)return i.randomUUID();const r=(t=t||{}).random||(t.rng||c)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return l(r)};var h=function(t){this.id=m(),this.name=t,this.todos=[]};h.prototype.setTodos=function(t){var e=this;this.todos=t.filter((function(t){return t.projectName===e.name}))};const f=h;const g=function(t,e,n,r,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"Inbox";this.id=m(),this.title=t,this.description=e,this.dueDate=n,this.priority=r,this.notes=o,this.projectName=a,this.completed=!1};function y(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){u=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const p=function(){var t,n=y(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=document.querySelector(".projects-box"),a=document.createElement("button"),i=document.createElement("span"),u=document.createElement("span"),s=document.createElement("span"),c=document.createElement("span");a.setAttribute("type","button"),a.classList.add("project-item"),i.classList.add("material-symbols-rounded","project-icon","notranslate"),i.textContent="folder",u.classList.add("project-txt"),u.textContent="".concat(r.name),s.setAttribute("id","delete-proj-btn"),s.classList.add("material-symbols-rounded","project-icon","notranslate"),s.textContent="delete",c.classList.add("counter"),c.textContent="".concat(r.todos.length),a.appendChild(i),a.appendChild(u),"Inbox"!==r.name&&a.appendChild(s),a.appendChild(c),o.appendChild(a)}}catch(t){n.e(t)}finally{n.f()}};const b=function(){document.querySelector("#inboxCounter").textContent=e[0].todos.length};function v(t){return t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function S(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function M(t){if(!v(t)&&"number"!=typeof t)return!1;const e=S(t);return!isNaN(Number(e))}const x={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function D(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const k={date:D({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:D({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:D({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},C={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function P(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;r=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function T(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?function(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n;return}(u,(t=>t.test(i))):function(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n;return}(u,(t=>t.test(i)));let c;c=t.valueCallback?t.valueCallback(s):s,c=n.valueCallback?n.valueCallback(c):c;return{value:c,rest:e.slice(i.length)}}}var q;const W={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=x[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:k,formatRelative:(t,e,n,r)=>C[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:P({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:P({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:P({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:P({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:P({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(q.matchPattern);if(!n)return null;const r=n[0],o=t.match(q.parsePattern);if(!o)return null;let a=q.valueCallback?q.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(r.length)}}),era:T({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:T({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:T({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:T({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:T({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let L={};function j(){return L}Math.pow(10,8);const E=6048e5,O=864e5;function Y(t){const e=S(t);return e.setHours(0,0,0,0),e}function A(t){const e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function N(t,e){const n=Y(t),r=Y(e),o=n.getTime()-A(n),a=r.getTime()-A(r);return Math.round((o-a)/O)}function H(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function F(t){const e=S(t),n=H(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}function B(t){const e=S(t);return N(e,F(e))+1}function z(t,e){const n=j(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=S(t),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function I(t){return z(t,{weekStartsOn:1})}function Q(t){const e=S(t),n=e.getFullYear(),r=H(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=I(r),a=H(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=I(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function U(t){const e=Q(t),n=H(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),I(n)}function _(t){const e=S(t),n=I(e).getTime()-U(e).getTime();return Math.round(n/E)+1}function G(t,e){const n=S(t),r=n.getFullYear(),o=j(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=H(t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const u=z(i,e),s=H(t,0);s.setFullYear(r,0,a),s.setHours(0,0,0,0);const c=z(s,e);return n.getTime()>=u.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function X(t,e){const n=j(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=G(t,e),a=H(t,0);a.setFullYear(o,0,r),a.setHours(0,0,0,0);return z(a,e)}function $(t,e){const n=S(t),r=z(n,e).getTime()-X(n,e).getTime();return Math.round(r/E)+1}function J(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const R={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return J("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):J(n+1,2)},d:(t,e)=>J(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>J(t.getHours()%12||12,e.length),H:(t,e)=>J(t.getHours(),e.length),m:(t,e)=>J(t.getMinutes(),e.length),s:(t,e)=>J(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return J(Math.floor(r*Math.pow(10,n-3)),e.length)}},V="midnight",K="noon",Z="morning",tt="afternoon",et="evening",nt="night",rt={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return R.y(t,e)},Y:function(t,e,n,r){const o=G(t,r),a=o>0?o:1-o;if("YY"===e){return J(a%100,2)}return"Yo"===e?n.ordinalNumber(a,{unit:"year"}):J(a,e.length)},R:function(t,e){return J(Q(t),e.length)},u:function(t,e){return J(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return J(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return J(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return R.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return J(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=$(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):J(o,e.length)},I:function(t,e,n){const r=_(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):J(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):R.d(t,e)},D:function(t,e,n){const r=B(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):J(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return J(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return J(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return J(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(o=12===r?K:0===r?V:r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(o=r>=17?et:r>=12?tt:r>=4?Z:nt,e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return R.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):R.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):J(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):J(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):R.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):R.s(t,e)},S:function(t,e){return R.S(t,e)},X:function(t,e,n,r){const o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return at(o);case"XXXX":case"XX":return it(o);default:return it(o,":")}},x:function(t,e,n,r){const o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return at(o);case"xxxx":case"xx":return it(o);default:return it(o,":")}},O:function(t,e,n,r){const o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+ot(o,":");default:return"GMT"+it(o,":")}},z:function(t,e,n,r){const o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+ot(o,":");default:return"GMT"+it(o,":")}},t:function(t,e,n,r){const o=r._originalDate||t;return J(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return J((r._originalDate||t).getTime(),e.length)}};function ot(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+e+J(a,2)}function at(t,e){if(t%60==0){return(t>0?"-":"+")+J(Math.abs(t)/60,2)}return it(t,e)}function it(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+J(Math.floor(r/60),2)+e+J(r%60,2)}const ut=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},st=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},ct={p:st,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return ut(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",ut(r,e)).replace("{{time}}",st(o,e))}},dt=/^D+$/,lt=/^Y+$/,mt=["D","DD","YY","YYYY"];function ht(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),mt.includes(t))throw new RangeError(r)}const ft=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,yt=/^'([^]*?)'?$/,wt=/''/g,pt=/[a-zA-Z]/;function bt(t,e,n){const r=j(),o=n?.locale??r.locale??W,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,u=S(t);if(!M(u))throw new RangeError("Invalid time value");const s={firstWeekContainsDate:a,weekStartsOn:i,locale:o,_originalDate:u};return e.match(gt).map((function(t){const e=t[0];if("p"===e||"P"===e){return(0,ct[e])(t,o.formatLong)}return t})).join("").match(ft).map((function(r){if("''"===r)return"'";const a=r[0];if("'"===a)return function(t){const e=t.match(yt);if(!e)return t;return e[1].replace(wt,"'")}(r);const i=rt[a];if(i)return!n?.useAdditionalWeekYearTokens&&(c=r,lt.test(c))&&ht(r,e,String(t)),!n?.useAdditionalDayOfYearTokens&&function(t){return dt.test(t)}(r)&&ht(r,e,String(t)),i(u,r,o.localize,s);var c;if(a.match(pt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}function vt(t,e){return+Y(t)==+Y(e)}function St(t){return vt(t,Date.now())}const Mt=function(){var t=[],n=document.querySelector("#todayCounter");e.map((function(e){return e.todos.filter((function(e,r){St(bt(e.dueDate,"yyyy-MM-d"))&&(t.push(e),n.textContent=t.length)}))}))};const xt=function(){var t=document.createElement("h1");return t.textContent="No yet Tasks !",t.classList.add("noyet"),t},Dt=t.p+"logo.svg";const kt=function(){var t=document.querySelector(".main"),e=document.querySelector(".sidebar"),n=document.querySelector("#toggPanelBtn");e.style.display="none",t.style.gridColumn="1/3",n.textContent="menu",n.classList.replace("menu-open","menu-close")};const Ct=function(){var t=document.querySelector(".main"),e=document.querySelector(".sidebar"),n=document.querySelector("#toggPanelBtn");e.style.display="grid",t.style.gridColumn="2/3",n.textContent="menu_open",n.classList.replace("menu-close","menu-open")};const Pt=function(){var t=document.querySelector("#toggPanelBtn");window.innerWidth<700?(t.textContent="menu",t.classList.remove("menu-open"),t.classList.add("menu-close"),kt()):(t.textContent="menu_open",t.classList.remove("menu-cloe"),t.classList.add("menu-open"),Ct())};function Tt(){var t=document.querySelector(".sidebar"),e=document.querySelector(".main"),n=document.querySelector("#toggPanelBtn");n.classList.toggle("menu-open"),n.classList.toggle("menu-close"),"menu_open"===n.textContent?n.textContent="menu":n.textContent="menu_open","menu_open"===n.textContent?(t.style.display="grid",e.style.gridColumn="2/3"):(t.style.display="none",e.style.gridColumn="1/3")}const qt=function(){var t=document.querySelector(".add"),e=document.querySelector("#dialog-add-task"),n=document.querySelector("#cancel-add");t.addEventListener("click",(function(){window.innerWidth<=700?(e.showModal(),kt()):e.showModal()})),n.addEventListener("click",(function(){e.close()}))};const Wt=function(){var t=document.querySelector("#collapseBtn"),e=document.querySelector(".projects-box");t.addEventListener("click",(function(){"expand_less"===t.textContent?t.textContent="expand_more":t.textContent="expand_less","expand_less"===t.textContent?e.style.display="none":e.style.display="block"}))};const Lt=function(){var t=document.querySelector("#dialog-add-project"),e=document.querySelector("#addProjBtn"),n=document.querySelector("#cancel-add-project");e.addEventListener("click",(function(){t.showModal()})),n.addEventListener("click",(function(){t.close()}))};const jt=function(){document.querySelector("#dueDate").setAttribute("min",bt(new Date,"yyyy-MM-d HH:MM"))};function Et(t){return function(t){if(Array.isArray(t))return Ot(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Ot(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ot(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const Yt=function(){var t=Et(document.querySelectorAll(".project-item"));t.map((function(t){return t.addEventListener("focus",(function(){t.children[0].textContent="folder_open",window.innerWidth<=700&&kt()}))})),t.map((function(t){return t.addEventListener("blur",(function(){t.children[0].textContent="folder"}))}))};const At=function(){var t=document.querySelector(".main"),e=document.querySelector(".logo");e.src=Dt,e.alt="Todo List Logo",window.addEventListener("DOMContentLoaded",(function(){Pt(),Wt(),Lt(),jt(),Yt()})),window.addEventListener("resize",(function(){Pt()})),toggPanelBtn.addEventListener("click",Tt),qt(),t.appendChild(xt())};a(),At();var Nt=n(new f("Inbox")),Ht=n(new f("Study")),Ft=n(new f("Work"));o(new g("My first todo","This is a todo",new Date("2025-10-2"),"low","Some notes","Study")),o(new g("Other todo","My second todo",new Date("2025-1-15"),"high","Some notes")),o(new g("Estudiar matemáticas","Debo estudiar para el examen",new Date("2024-1-25"),"medium","Some notes","Study")),o(new g("Levantarme temprano","Debo ir al trabajo",new Date("2024-1-25"),"high","Some notes","Work"));Nt.setTodos(r),Ht.setTodos(r),Ft.setTodos(r),console.log(r),console.log(e),b(),Mt(),p(),a()})();