import { Component, Element, Event, h, Host, Listen, Prop, } from "@stencil/core";
import { UP, DOWN, ENTER, HOME, END, SPACE } from "../../utils/keys";
import { getElementDir, getElementProp } from "../../utils/dom";
import { guid } from "../../utils/guid";
export class CalciteAccordionItem {
    constructor() {
        //--------------------------------------------------------------------------
        //
        //  Public Properties
        //
        //--------------------------------------------------------------------------
        this.active = false;
        //--------------------------------------------------------------------------
        //
        //  Private State/Props
        //
        //--------------------------------------------------------------------------
        /** unique id for Accordion item */
        this.accordionItemId = `calcite-accordion-item-${guid()}`;
        /** what selection mode is the parent accordion in */
        this.selectionMode = getElementProp(this.el, "selection-mode", "multi");
        /** what icon type does the parent accordion specify */
        this.iconType = getElementProp(this.el, "icon-type", "chevron");
        /** handle clicks on item header */
        this.itemHeaderClickHander = () => this.emitRequestedItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    componentDidLoad() {
        this.itemPosition = this.getItemPosition();
        this.registerCalciteAccordionItem.emit({
            position: this.itemPosition,
        });
    }
    render() {
        const dir = getElementDir(this.el);
        return (h(Host, { tabindex: "0", "aria-expanded": this.active.toString(), dir: dir },
            h("div", { class: "accordion-item-header", onClick: this.itemHeaderClickHander },
                h("div", { class: "accordion-item-header-text" },
                    h("span", { class: "accordion-item-title" }, this.itemTitle),
                    h("span", { class: "accordion-item-subtitle" }, this.itemSubtitle)),
                h("calcite-icon", { class: "accordion-item-icon", icon: this.iconType === "chevron"
                        ? "chevronUp"
                        : this.iconType === "caret"
                            ? "caretUp"
                            : this.active
                                ? "minus"
                                : "plus", scale: "s" })),
            h("div", { class: "accordion-item-content" },
                h("slot", null))));
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(e) {
        if (e.target === this.el) {
            switch (e.keyCode) {
                case SPACE:
                case ENTER:
                    this.emitRequestedItem();
                    e.preventDefault();
                    break;
                case UP:
                case DOWN:
                case HOME:
                case END:
                    this.calciteAccordionItemKeyEvent.emit({ item: e });
                    e.preventDefault();
                    break;
            }
        }
    }
    updateActiveItemOnChange(event) {
        this.requestedAccordionItem = event.detail.requestedAccordionItem;
        this.determineActiveItem();
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    determineActiveItem() {
        switch (this.selectionMode) {
            case "multi":
                if (this.accordionItemId === this.requestedAccordionItem)
                    this.active = !this.active;
                break;
            case "single":
                if (this.accordionItemId === this.requestedAccordionItem)
                    this.active = !this.active;
                else
                    this.active = false;
                break;
            case "single-persist":
                this.active = this.accordionItemId === this.requestedAccordionItem;
                break;
        }
    }
    emitRequestedItem() {
        this.calciteAccordionItemSelected.emit({
            requestedAccordionItem: this.accordionItemId,
        });
    }
    getItemPosition() {
        const parent = this.el.parentElement;
        return Array.prototype.indexOf.call(parent.querySelectorAll("calcite-accordion-item"), this.el);
    }
    static get is() { return "calcite-accordion-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["calcite-accordion-item.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["calcite-accordion-item.css"]
    }; }
    static get properties() { return {
        "active": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "active",
            "reflect": true,
            "defaultValue": "false"
        },
        "itemTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "pass a title for the accordion item"
            },
            "attribute": "item-title",
            "reflect": false
        },
        "itemSubtitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "pass a title for the accordion item"
            },
            "attribute": "item-subtitle",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "calciteAccordionItemKeyEvent",
            "name": "calciteAccordionItemKeyEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "calciteAccordionItemSelected",
            "name": "calciteAccordionItemSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "closeCalciteAccordionItem",
            "name": "closeCalciteAccordionItem",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "registerCalciteAccordionItem",
            "name": "registerCalciteAccordionItem",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "el"; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "keyDownHandler",
            "target": undefined,
            "capture": false,
            "passive": false
        }, {
            "name": "calciteAccordionItemHasChanged",
            "method": "updateActiveItemOnChange",
            "target": "parent",
            "capture": false,
            "passive": false
        }]; }
}
