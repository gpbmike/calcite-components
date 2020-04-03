System.register(["./p-c122dff0.system.js","./p-68434ff0.system.js","./p-6d3b7ecb.system.js"],(function(t){"use strict";var e,i,a,s,r,n,o,l,h,d,u,c,p,b;return{setters:[function(t){e=t.r;i=t.c;a=t.h;s=t.H;r=t.g},function(t){n=t.g},function(t){o=t.b;l=t.H;h=t.P;d=t.c;u=t.L;c=t.D;p=t.R;b=t.U}],execute:function(){var m=':host([hidden]){display:none}:host{display:block;padding:7px 0;margin:7px 0;position:relative}:host([disabled]){opacity:0.5;pointer-events:none}:host([label-handles]),:host([precise]){margin-top:21px}:host([label-ticks]),:host([precise][is-range]){margin-bottom:21px}:host([precise][label-handles]){margin-top:35px}:host([precise][label-handles][is-range]){margin-bottom:35px}.slider__thumb{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.slider__thumb:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.slider__thumb{position:absolute;height:28px;width:28px;margin:-14px;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;background:transparent;cursor:pointer;font-family:inherit;z-index:3}.slider__handle{position:absolute;top:0;left:0;height:14px;width:14px;margin:7px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:100%;background-color:var(--calcite-ui-foreground-1);border:2px solid var(--calcite-ui-text-3);-webkit-transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, -webkit-box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;transition:border 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease, -webkit-box-shadow 0.25s ease}.slider__handle__label{position:absolute;left:0;bottom:28px;width:28px;height:0.75em;font-size:0.8125rem;line-height:1.5;font-weight:500;line-height:1;color:var(--calcite-ui-text-3);text-align:center}.slider__thumb:hover .slider__handle{border-width:3px;border-color:var(--calcite-ui-blue-1);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.08);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.08)}.slider__thumb:focus,.slider__thumb--active{z-index:4}.slider__thumb:focus .slider__handle,.slider__thumb--active .slider__handle{background-color:var(--calcite-ui-blue-1);border-color:var(--calcite-ui-blue-1);-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.16)}.slider__thumb--precise{margin-top:-28px}.slider__thumb--precise:after{content:"";display:block;position:absolute;top:14px;left:50%;width:2px;height:7px;background-color:var(--calcite-ui-text-3);margin-left:-1px;margin-top:7px;z-index:2}.slider__thumb:hover.slider__thumb--precise:after,.slider__thumb:focus.slider__thumb--precise:after,.slider__thumb--active.slider__thumb--precise:after{background-color:var(--calcite-ui-blue-1)}.slider__thumb--precise.slider__thumb--min{margin-top:-2px}.slider__thumb--precise.slider__thumb--min .slider__handle__label{bottom:unset;top:28px}.slider__thumb--precise.slider__thumb--min:after{top:0;margin-top:0}.slider__track{height:2px;border-radius:0;z-index:2;background-color:var(--calcite-ui-border-2);-webkit-transition:all 250ms ease-in;transition:all 250ms ease-in;position:relative}.slider__track__range{position:absolute;top:0;height:2px;background-color:var(--calcite-ui-blue-1)}.slider__tick{position:absolute;top:-2px;width:2px;height:4px;left:var(--calcite-ui-border-1-offset);margin-left:-3px;border:1px solid var(--calcite-ui-foreground-1);border-right-width:2px;border-left-width:2px;background-color:var(--calcite-ui-border-1)}.slider__tick--active{background-color:var(--calcite-ui-blue-1)}.slider__tick__label{position:absolute;font-size:0.8125rem;line-height:1.5;font-weight:500;color:var(--calcite-ui-text-3);width:4em;margin:14px -2em;text-align:center;display:block;pointer-events:none}.slider__tick__label--min{left:0;margin:14px -3px;text-align:left}.slider__tick__label--max{left:unset;right:0;margin:14px -3px;text-align:right}';var _=t("calcite_slider",function(){function t(t){e(this,t);this.disabled=false;this.min=0;this.max=100;this.value=null;this.snap=true;this.step=1;this.guid="calcite-slider-"+n();this.isRange=false;this.tickValues=[];this.activeProp="value";this.calciteSliderUpdate=i(this,"calciteSliderUpdate",7)}t.prototype.componentWillLoad=function(){this.isRange=!!(this.maxValue||this.maxValue===0);this.tickValues=this.generateTickValues();this.value=this.bound(this.value);if(this.snap){this.value=this.getClosestStep(this.value)}this.calciteSliderUpdate.emit()};t.prototype.render=function(){var t=this;var e=this.el.id||this.guid;var i=this.minValue||this.min;var r=this.maxValue||this.value;var n=this.isRange?"maxValue":"value";var o=this.getUnitInterval(i)*100+"%";var l=100-this.getUnitInterval(r)*100+"%";return a(s,{id:e,"is-range":this.isRange},a("div",{class:"slider__track"},a("div",{class:"slider__track__range",style:{left:o,right:l}}),a("div",{class:"slider__ticks"},this.tickValues.map((function(e){return a("span",{class:{slider__tick:true,"slider__tick--active":e>=i&&e<=r},style:{left:t.getUnitInterval(e)*100+"%"}},t.labelTicks?a("span",{class:{slider__tick__label:true,"slider__tick__label--min":e===t.min,"slider__tick__label--max":e===t.max}},e):"")})))),this.isRange?a("button",{ref:function(e){return t.minHandle=e},onFocus:function(){return t.activeProp="minValue"},onBlur:function(){return t.activeProp=null},onMouseDown:function(){return t.dragStart("minValue")},onTouchStart:function(e){return t.dragStart("minValue",e)},role:"slider","aria-orientation":"horizontal","aria-label":this.minLabel,"aria-valuenow":this.minValue,"aria-valuemin":this.min,"aria-valuemax":this.max,disabled:this.disabled,style:{left:o},class:{slider__thumb:true,"slider__thumb--min":true,"slider__thumb--active":this.dragProp==="minValue","slider__thumb--precise":this.precise}},a("span",{class:"slider__handle"}),this.labelHandles?a("span",{class:"slider__handle__label","aria-hidden":"true"},this.minValue):""):"",a("button",{ref:function(e){return t.maxHandle=e},onFocus:function(){return t.activeProp=n},onBlur:function(){return t.activeProp=null},onMouseDown:function(){return t.dragStart(n)},onTouchStart:function(e){return t.dragStart(n,e)},role:"slider","aria-orientation":"horizontal","aria-label":this.isRange?this.maxLabel:this.minLabel,"aria-valuenow":this[n],"aria-valuemin":this.min,"aria-valuemax":this.max,disabled:this.disabled,style:{right:l},class:{slider__thumb:true,"slider__thumb--max":true,"slider__thumb--active":this.dragProp===n,"slider__thumb--precise":this.precise}},a("span",{class:"slider__handle"}),this.labelHandles?a("span",{class:"slider__handle__label","aria-hidden":"true"},this[n]):""))};t.prototype.keyDownHandler=function(t){var e=this[this.activeProp];switch(t.keyCode){case b:case p:t.preventDefault();this[this.activeProp]=this.bound(e+this.step,this.activeProp);this.calciteSliderUpdate.emit();break;case c:case u:t.preventDefault();this[this.activeProp]=this.bound(e-this.step,this.activeProp);this.calciteSliderUpdate.emit();break;case d:if(this.pageStep){t.preventDefault();this[this.activeProp]=this.bound(e+this.pageStep,this.activeProp);this.calciteSliderUpdate.emit()}break;case h:if(this.pageStep){t.preventDefault();this[this.activeProp]=this.bound(e-this.pageStep,this.activeProp);this.calciteSliderUpdate.emit()}break;case l:t.preventDefault();this[this.activeProp]=this.bound(this.min,this.activeProp);this.calciteSliderUpdate.emit();break;case o:t.preventDefault();this[this.activeProp]=this.bound(this.max,this.activeProp);this.calciteSliderUpdate.emit();break}};t.prototype.clickHandler=function(t){var e=t.clientX||t.pageX;var i=this.translate(e);var a="value";if(this.isRange){var s=Math.abs(this.maxValue-i)<Math.abs(this.minValue-i);a=s?"maxValue":"minValue"}this[a]=this.bound(i,a);this.calciteSliderUpdate.emit();var r=a==="minValue"?this.minHandle:this.maxHandle;r.focus()};t.prototype.generateTickValues=function(){var t=[];var e=this.min;while(this.ticks&&e<this.max+this.ticks){t.push(e);e=e+this.ticks}return t};t.prototype.dragStart=function(t,e){if(e){e.preventDefault()}if(this.dragListener){this.dragEnd()}this.dragProp=t;this.activeProp=t;this.dragListener=this.dragListener||this.dragUpdate.bind(this);document.addEventListener("mousemove",this.dragListener);document.addEventListener("touchmove",this.dragListener,{capture:false});document.addEventListener("mouseup",this.dragEnd.bind(this));document.addEventListener("touchend",this.dragEnd.bind(this),false);document.addEventListener("touchcancel",this.dragEnd.bind(this))};t.prototype.dragUpdate=function(t){t.preventDefault();t.stopPropagation();if(this.dragProp){var e=this.translate(t.clientX||t.pageX);this[this.dragProp]=this.bound(e,this.dragProp);this.calciteSliderUpdate.emit()}};t.prototype.dragEnd=function(){this.dragProp=null;document.removeEventListener("mousemove",this.dragListener);document.removeEventListener("touchmove",this.dragListener)};t.prototype.bound=function(t,e){t=Math.min(t,this.max);t=Math.max(t,this.min);if(e==="maxValue"){t=Math.max(t,this.minValue)}if(e==="minValue"){t=Math.min(t,this.maxValue)}return t};t.prototype.translate=function(t){var e=this.max-this.min;var i=this.el.getBoundingClientRect(),a=i.left,s=i.width;var r=(t-a)/s;var n=this.bound(this.min+e*r);if(this.snap&&this.step){n=this.getClosestStep(n)}return n};t.prototype.getClosestStep=function(t){t=this.bound(t);if(this.step){var e=Math.round(t/this.step)*this.step;t=this.bound(e)}return t};t.prototype.getUnitInterval=function(t){t=this.bound(t);var e=this.max-this.min;return(t-this.min)/e};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());_.style=m}}}));