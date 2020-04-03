import{r as e,c as t,h as s,H as i,g as h}from"./p-2dcc2b38.js";import{S as o,E as c}from"./p-eb6a0c18.js";const r=class{constructor(s){e(this,s),this.checked=!1,this.indeterminate=!1,this.name="",this.value="",this.size=null,this.disabled=!1,this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.indeterminate=!1)},this.indeterminatePath="M4 7h8v2H4z",this.checkedPath="M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.syncThisToProxyInput=()=>{this.checked=this.inputProxy.hasAttribute("checked"),this.name=this.inputProxy.name,this.value=this.inputProxy.value},this.syncProxyInputToThis=()=>{this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"),this.inputProxy.name=this.name,this.inputProxy.value=this.value},this.calciteCheckboxChange=t(this,"calciteCheckboxChange",7)}onClick({target:e}){(this.el.closest("label")&&e===this.inputProxy||!this.el.closest("label")&&e===this.el)&&this.toggle()}keyDownHandler(e){e.keyCode!==o&&e.keyCode!==c||(e.preventDefault(),this.toggle())}checkedWatcher(){this.calciteCheckboxChange.emit(),this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")}connectedCallback(){this.setupProxyInput()}disconnectedCallback(){this.observer.disconnect()}componentWillRender(){this.syncProxyInputToThis()}render(){return s(i,{role:"checkbox","aria-checked":this.checked.toString(),tabindex:this.disabled?"-1":"0"},s("svg",{class:"check-svg",viewBox:"0 0 16 16"},s("path",{d:this.getPath(),fill:"white"})),s("slot",null))}setupProxyInput(){this.inputProxy=this.el.querySelector("input"),this.inputProxy||(this.inputProxy=document.createElement("input"),this.inputProxy.type="checkbox",this.syncProxyInputToThis(),this.el.appendChild(this.inputProxy)),this.syncThisToProxyInput(),this.observer=new MutationObserver(this.syncThisToProxyInput),this.observer.observe(this.inputProxy,{attributes:!0})}get el(){return h(this)}static get watchers(){return{checked:["checkedWatcher"]}}};r.style=":host([hidden]){display:none}::slotted(input){display:none}:host{display:inline-block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}:host .check-svg{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .check-svg{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.check-svg{width:20px;height:20px;overflow:hidden;display:inline-block;background-color:white;border:1px solid #757575;vertical-align:-0.25em;margin-right:0.25em;pointer-events:none;-webkit-transition:all 150ms linear;transition:all 150ms linear;-webkit-box-sizing:border-box;box-sizing:border-box}:host([theme=dark]) .check-svg{background-color:transparent;border-color:#eaeaea}:host([theme=dark][disabled]) .check-svg{border-color:#757575;background-color:#2b2b2b}:host([theme=dark][checked]) .check-svg,:host([theme=dark][indeterminate]) .check-svg{background-color:#3db8ff}:host([size=large]) .check-svg{width:24px;height:24px}:host([size=small]) .check-svg{width:16px;height:16px}:host([disabled]){pointer-events:none;cursor:default}:host([disabled]) .check-svg{background-color:#f3f3f3;border-color:#eaeaea}:host([disabled][checked]) .check-svg,:host([disabled][indeterminate]) .check-svg{background-color:#84c1e8;border-color:#84c1e8}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:#007ac2;border:1px solid #007ac2}:host(:hover),:host(:focus){outline:none}";export{r as calcite_checkbox}