System.register(["./p-dd45b0da.system.js"],(function(t){"use strict";var e,r,i,n;return{setters:[function(t){e=t.r;r=t.h;i=t.H;n=t.g}],execute:function(){var a=":host([hidden]){display:none}:host{position:relative;display:block;width:100%}.track,.bar{position:absolute;top:0;height:2px}.track{background:var(--calcite-ui-border-3);z-index:0;width:100%;overflow:hidden}.bar{background-color:var(--calcite-ui-blue-1);z-index:0}.indeterminate{width:20%;-webkit-animation:looping-progress-bar-ani 2200ms linear infinite;animation:looping-progress-bar-ani 2200ms linear infinite}.reversed{animation-direction:reverse}.text{padding:1.5rem 0 0 0;text-align:center;font-size:0.875rem;line-height:1.5}@-webkit-keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani{0%{-webkit-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0)}50%{width:40%}100%{-webkit-transform:translate3d(600%, 0, 0);transform:translate3d(600%, 0, 0)}}";var s=t("calcite_progress",function(){function t(t){e(this,t);this.type="determinate";this.value=0;this.text=null;this.reversed=false}t.prototype.render=function(){var t=this.type==="determinate";var e=t?{width:this.value*100+"%"}:{};return r(i,null,r("div",{class:"track"},r("div",{class:{bar:true,indeterminate:this.type==="indeterminate",reversed:this.reversed},style:e})),this.text?r("div",{class:"text"},this.text):null)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());s.style=a}}}));