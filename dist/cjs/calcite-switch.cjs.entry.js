'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-9cd06664.js');
const dom = require('./dom-dcb5a4ba.js');
const keys = require('./keys-7f994354.js');

const CalciteSwitch = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** True if the switch is initially on */
        this.switched = false;
        /** The name of the checkbox input */
        this.name = "";
        /** The value of the checkbox input */
        this.value = "";
        /** What color the switch should be */
        this.color = "blue";
        /** The scale of the button */
        this.scale = "m";
        /** The component's theme. */
        this.theme = "light";
        this.syncThisToProxyInput = () => {
            this.switched = this.inputProxy.hasAttribute("checked");
            this.name = this.inputProxy.name;
            this.value = this.inputProxy.value;
        };
        this.syncProxyInputToThis = () => {
            this.switched
                ? this.inputProxy.setAttribute("checked", "")
                : this.inputProxy.removeAttribute("checked");
            this.inputProxy.setAttribute("name", this.name);
            this.inputProxy.setAttribute("value", this.value);
        };
        this.calciteSwitchChange = core.createEvent(this, "calciteSwitchChange", 7);
    }
    onClick(e) {
        // prevent duplicate click events that occur
        // when the component is wrapped in a label and checkbox is clicked
        if ((this.el.closest("label") && e.target === this.inputProxy) ||
            (!this.el.closest("label") && e.target === this.el)) {
            this.switched = !this.switched;
        }
    }
    keyDownHandler(e) {
        if (e.keyCode === keys.SPACE || e.keyCode === keys.ENTER) {
            this.switched = !this.switched;
        }
    }
    switchWatcher() {
        this.calciteSwitchChange.emit();
        this.switched
            ? this.inputProxy.setAttribute("checked", "")
            : this.inputProxy.removeAttribute("checked");
    }
    connectedCallback() {
        // prop validations
        let color = ["blue", "red"];
        if (!color.includes(this.color))
            this.color = "blue";
        let scale = ["s", "m", "l"];
        if (!scale.includes(this.scale))
            this.scale = "m";
        let theme = ["dark", "light"];
        if (!theme.includes(this.theme))
            this.theme = "light";
        this.setupProxyInput();
    }
    disconnectedCallback() {
        this.observer.disconnect();
    }
    componentWillRender() {
        this.syncProxyInputToThis();
    }
    render() {
        const dir = dom.getElementDir(this.el);
        return (core.h(core.Host, { role: "checkbox", dir: dir, "aria-checked": this.switched, tabindex: "0" }, core.h("div", { class: "track" }, core.h("div", { class: "handle" })), core.h("slot", null)));
    }
    setupProxyInput() {
        // check for a proxy input
        this.inputProxy = this.el.querySelector("input");
        // if the user didn't pass a proxy input create one for them
        if (!this.inputProxy) {
            this.inputProxy = document.createElement("input");
            this.inputProxy.type = "checkbox";
            this.syncProxyInputToThis();
            this.el.appendChild(this.inputProxy);
        }
        this.syncThisToProxyInput();
        {
            this.observer = new MutationObserver(this.syncThisToProxyInput);
            this.observer.observe(this.inputProxy, { attributes: true });
        }
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "switched": ["switchWatcher"]
    }; }
    static get style() { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-switch-track-background:#f3f3f3;--calcite-switch-track-border:#d4d4d4;--calcite-switch-handle-background:#fff;--calcite-switch-handle-border:#959595;--calcite-switch-hover-handle-border:#2890ce;--calcite-switch-hover-track-background:#eaeaea;--calcite-switch-hover-track-border:#bfbfbf;--calcite-switch-switched-track-background:#2890ce;--calcite-switch-switched-track-border:#00619b;--calcite-switch-switched-handle-border:#007ac2;--calcite-switch-switched-hover-track-background:#007ac2;--calcite-switch-switched-hover-track-border:#2890ce;--calcite-switch-switched-hover-handle-border:#00619b;--calcite-switch-box-shadow-color:hsla(0,0%,45.9%,0.5);--calcite-switch-switched-box-shadow-color:rgba(0,122,194,0.5)}:host([theme=dark]){--calcite-switch-track-background:#353535;--calcite-switch-track-border:#555;--calcite-switch-handle-background:#2b2b2b;--calcite-switch-handle-border:#959595;--calcite-switch-hover-handle-border:#59d6ff;--calcite-switch-hover-track-background:#404040;--calcite-switch-hover-track-border:grey;--calcite-switch-switched-track-background:#59d6ff;--calcite-switch-switched-track-border:#3db8ff;--calcite-switch-switched-handle-border:#3db8ff;--calcite-switch-switched-hover-track-background:#3db8ff;--calcite-switch-switched-hover-track-border:#3db8ff;--calcite-switch-switched-hover-handle-border:#59d6ff;--calcite-switch-switched-box-shadow-color:rgba(61,184,255,0.5)}:host([color=red]){--calcite-switch-switched-track-background:#e65240;--calcite-switch-switched-track-border:#d83020;--calcite-switch-hover-handle-border:#e65240;--calcite-switch-switched-handle-border:#d83020;--calcite-switch-switched-hover-track-background:#d83020;--calcite-switch-switched-hover-track-border:#e65240;--calcite-switch-switched-hover-handle-border:#a82b1e;--calcite-switch-switched-box-shadow-color:rgba(216,48,32,0.5)}:host([theme=dark][color=red]){--calcite-switch-switched-track-background:#ff624d;--calcite-switch-switched-track-border:#ff0015;--calcite-switch-hover-handle-border:#ff624d;--calcite-switch-switched-handle-border:#ff0015;--calcite-switch-switched-hover-track-background:#ff0015;--calcite-switch-switched-hover-track-border:#d90012;--calcite-switch-switched-hover-handle-border:#d90012;--calcite-switch-switched-box-shadow-color:rgba(255,0,21,0.5)}:host([scale=s]){--calcite-switch-track-width:28px;--calcite-switch-track-height:16px;--calcite-switch-handle-size:14px}:host([scale=m]){--calcite-switch-track-width:36px;--calcite-switch-track-height:20px;--calcite-switch-handle-size:18px}:host([scale=l]){--calcite-switch-track-width:44px;--calcite-switch-track-height:24px;--calcite-switch-handle-size:22px}::slotted(input){display:none}:host{display:inline-block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;top:-.1em;tap-highlight-color:transparent;margin-right:.5em}.track{position:relative;display:inline-block;vertical-align:top;width:var(--calcite-switch-track-width);height:var(--calcite-switch-track-height);background-color:var(--calcite-switch-track-background);border-radius:30px;border:1px solid var(--calcite-switch-track-border)}.handle,.track{-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.handle{position:absolute;display:block;width:var(--calcite-switch-handle-size);height:var(--calcite-switch-handle-size);top:-1px;left:-1px;right:auto;background-color:var(--calcite-switch-handle-background);border-radius:30px;border:2px solid var(--calcite-switch-handle-border)}:host(:focus),:host(:hover){outline:none}:host(:focus) .track,:host(:hover) .track{background-color:var(--calcite-switch-hover-track-background);border-color:var(--calcite-switch-hover-track-border);-webkit-box-shadow:0 0 6px 1px var(--calcite-switch-box-shadow-color);box-shadow:0 0 6px 1px var(--calcite-switch-box-shadow-color)}:host(:focus) .handle,:host(:hover) .handle{border-color:var(--calcite-switch-hover-handle-border);-webkit-box-shadow:0 0 12px 0 rgba(0,0,0,.05);box-shadow:0 0 12px 0 rgba(0,0,0,.05);right:auto;left:0}:host(:hover) .handle{right:auto;left:1px}:host([switched]) .track{background-color:var(--calcite-switch-switched-track-background);border-color:var(--calcite-switch-switched-track-border)}:host([switched]) .handle{right:-1px;left:auto;border-color:var(--calcite-switch-switched-handle-border);-webkit-box-shadow:0 0 12px 0 rgba(0,0,0,.05);box-shadow:0 0 12px 0 rgba(0,0,0,.05)}:host([switched]:focus) .track{-webkit-box-shadow:0 0 6px 1px var(--calcite-switch-switched-box-shadow-color);box-shadow:0 0 6px 1px var(--calcite-switch-switched-box-shadow-color)}:host([switched]:hover) .track{background-color:var(--calcite-switch-switched-hover-track-background);border-color:var(--calcite-switch-switched-hover-track-border)}:host([switched]:hover) .handle{border-color:var(--calcite-switch-switched-hover-handle-border)}:host([dir=rtl]){margin-right:0;margin-left:.5em}:host([dir=rtl]) .handle{left:auto;right:-1px}:host([dir=rtl]:hover) .handle{right:1px;left:auto}:host([dir=rtl][switched]) .handle,:host([dir=rtl][switched]:active) .handle,:host([dir=rtl][switched]:focus) .handle{right:auto;left:-1px}"; }
};

exports.calcite_switch = CalciteSwitch;
