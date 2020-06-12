var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function s(t){try{c(r["throw"](t))}catch(e){o(e)}}function c(t){t.done?n(t.value):i(t.value).then(a,s)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-dd45b0da.system.js","./p-4af00110.system.js"],(function(t){"use strict";var e,n,r,i,o,a;return{setters:[function(t){e=t.d;n=t.r;r=t.h;i=t.H;o=t.g},function(t){a=t.g}],execute:function(){var s={icon:"icon",mirrored:"mirrored"};var c={};var u={};var l={s:16,m:24,l:32};function f(t){var n=t.icon,r=t.scale;return __awaiter(this,void 0,void 0,(function(){var t,i,o,a,s,f;return __generator(this,(function(p){switch(p.label){case 0:t=l[r];i=h(n);o=i.charAt(i.length-1)==="F";a=o?i.substring(0,i.length-1):i;s=""+a+t+(o?"F":"");if(c[s]){return[2,c[s]]}if(!u[s]){u[s]=fetch(e("./assets/"+s+".json")).then((function(t){return t.json()})).catch((function(){console.error('"'+s+'" is not a valid calcite-ui-icon name');return""}))}return[4,u[s]];case 1:f=p.sent();c[s]=f;return[2,f]}}))}))}function h(t){var e=!isNaN(Number(t.charAt(0)));var n=t.split("-");if(n.length===1){return e?"i"+t:t}return n.map((function(t,n){if(n===0){return e?"i"+t.toUpperCase():t}return t.charAt(0).toUpperCase()+t.slice(1)})).join("")}var p=":host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex}.mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.svg{display:block}";var v=t("calcite_icon",function(){function t(t){n(this,t);this.icon=null;this.mirrored=false;this.scale="m";this.visible=false}t.prototype.connectedCallback=function(){var t=this;this.waitUntilVisible((function(){t.visible=true;t.loadIconPathData()}))};t.prototype.disconnectedCallback=function(){if(this.intersectionObserver){this.intersectionObserver.disconnect();this.intersectionObserver=null}};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.loadIconPathData();return[2]}))}))};t.prototype.render=function(){var t;var e=this,n=e.el,o=e.mirrored,c=e.pathData,u=e.scale,f=e.textLabel;var h=a(n);var p=l[u];var v=!!f;var d=[].concat(c||"");return r(i,{"aria-label":v?f:null,role:v?"img":null},r("svg",{class:(t={},t[s.mirrored]=h==="rtl"&&o,t.svg=true,t),xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",height:p,width:p,viewBox:"0 0 "+p+" "+p},d.map((function(t){return typeof t==="string"?r("path",{d:t}):r("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})}))))};t.prototype.loadIconPathData=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n,r,i;return __generator(this,(function(o){switch(o.label){case 0:t=this,e=t.icon,n=t.scale,r=t.visible;if(!e||!r){return[2]}i=this;return[4,f({icon:e,scale:n})];case 1:i.pathData=o.sent();return[2]}}))}))};t.prototype.waitUntilVisible=function(t){var e=this;if(typeof window==="undefined"||!window.IntersectionObserver){t();return}this.intersectionObserver=new IntersectionObserver((function(n){n.forEach((function(n){if(n.isIntersecting){e.intersectionObserver.disconnect();e.intersectionObserver=null;t()}}))}),{rootMargin:"50px"});this.intersectionObserver.observe(this.el)};Object.defineProperty(t,"assetsDirs",{get:function(){return["assets"]},enumerable:true,configurable:true});Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}},enumerable:true,configurable:true});return t}());v.style=p}}}));