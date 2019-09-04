'use strict';

const core = require('./core-9cd06664.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["calcite-dropdown_3.cjs",[[1,"calcite-dropdown-group",{"grouptitle":[513],"requestedDropdownGroup":[32],"requestedDropdownItem":[32],"items":[32],"groupPosition":[32]},[[0,"calciteDropdownItemSelected","updateActiveItemOnChange"],[0,"registerCalciteDropdownItem","registerCalciteDropdownItem"]]],[1,"calcite-dropdown-item",{"active":[1540],"requestedDropdownGroup":[1,"requested-dropdown-group"],"requestedDropdownItem":[1,"requested-dropdown-item"],"href":[1],"linktitle":[1],"itemPosition":[32],"currentDropdownGroup":[32]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"]]],[1,"calcite-dropdown",{"alignment":[1537],"theme":[1537],"scale":[1537],"active":[32],"items":[32],"sorted":[32]},[[0,"click","openDropdown"],[8,"click","closeCalciteDropdownOnClick"],[0,"closeCalciteDropdown","closeCalciteDropdownOnEvent"],[0,"keydown","keyDownHandler"],[0,"calciteDropdownItemKeyEvent","calciteDropdownItemKeyEvent"],[0,"registerCalciteDropdownGroup","registerCalciteDropdownGroup"]]]]],["calcite-alert_2.cjs",[[1,"calcite-alert",{"dismiss":[4],"duration":[513],"color":[513],"theme":[513],"icon":[4],"alertId":[1,"alert-id"],"currentAlert":[1,"current-alert"],"queueLength":[2,"queue-length"],"active":[32],"closeCalciteAlert":[64],"openCalciteAlert":[64]}],[1,"calcite-alerts",{"currentAlert":[32],"active":[32],"alertQueue":[32]},[[0,"calciteAlertOpen","updateQueueOnOpen"],[0,"calciteAlertClose","updateQueueOnClose"]]]]],["calcite-button.cjs",[[1,"calcite-button",{"color":[1537],"appearance":[1537],"theme":[513],"scale":[1537],"width":[1537],"loading":[516],"href":[513],"icon":[513],"iconposition":[1537],"disabled":[516],"hastext":[1028]}]]],["calcite-tab_4.cjs",[[1,"calcite-tab",{"tab":[1537],"isActive":[1540,"is-active"],"labeledBy":[32],"getTabIndex":[64],"updateAriaInfo":[64]},[[16,"calciteTabChange","tabChangeHandler"]]],[1,"calcite-tab-nav",{"storageId":[1,"storage-id"],"syncId":[1,"sync-id"],"selectedTab":[32]},[[0,"calciteTabsFocusPrevious","focusPreviousTabHandler"],[0,"calciteTabsFocusNext","focusNextTabHandler"],[0,"calciteTabsActivate","activateTabHandler"],[32,"calciteTabChange","globalTabChangeHandler"]]],[1,"calcite-tab-title",{"tab":[1537],"isActive":[1540,"is-active"],"controls":[32],"getTabIndex":[64],"getTabIdentifier":[64],"updateAriaInfo":[64]},[[16,"calciteTabChange","tabChangeHandler"],[0,"click","onClick"],[0,"keydown","keyDownHandler"]]],[1,"calcite-tabs",{"theme":[513],"layout":[513],"titles":[32],"tabs":[32]},[[0,"calciteTabTitleRegister","calciteTabTitleRegister"],[0,"calciteTabTitleUnregister","calciteTabTitleUnregister"],[0,"calciteTabRegister","calciteTabRegister"],[0,"calciteTabUnregister","calciteTabUnregister"]]]]],["calcite-radio-group_2.cjs",[[1,"calcite-radio-group",{"name":[1],"selectedItem":[8,"selected-item"],"theme":[513],"scale":[513]},[[0,"click","handleClick"],[0,"calciteRadioGroupItemChange","handleSelected"],[0,"keydown","handleKeyDown"]]],[1,"calcite-radio-group-item",{"checked":[1540],"value":[8]}]]],["calcite-tree_2.cjs",[[1,"calcite-tree",{"lines":[1540],"root":[1540],"theme":[1537],"size":[1537],"selectionMode":[1537,"selection-mode"]},[[0,"focus","onFocus"],[0,"calciteTreeItemSelect","onClick"]]],[1,"calcite-tree-item",{"selected":[1540],"depth":[1538],"hasChildren":[1540,"has-children"],"expanded":[1540],"parentExpanded":[1028,"parent-expanded"],"selectionMode":[32]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]]],["calcite-checkbox.cjs",[[1,"calcite-checkbox",{"checked":[1540],"indeterminate":[1540],"name":[1537],"value":[1537],"size":[513],"disabled":[516],"theme":[513]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]]],["calcite-example.cjs",[[1,"calcite-example",{"property":[1],"state":[32],"doThing":[64]},[[0,"click","onClick"]]]]],["calcite-modal.cjs",[[1,"calcite-modal",{"beforeClose":[16],"closeLabel":[1,"close-label"],"docked":[516],"firstFocus":[16],"disableEscape":[516,"disable-escape"],"size":[513],"color":[513],"theme":[513],"isActive":[32],"hideBackButton":[32],"hideSecondaryButton":[32],"open":[64],"close":[64]},[[0,"keyup","handleEscape"]]]]],["calcite-progress.cjs",[[4,"calcite-progress",{"type":[1],"value":[2],"text":[1],"reversed":[4]}]]],["calcite-slider.cjs",[[1,"calcite-slider",{"theme":[513],"disabled":[1540],"min":[1538],"max":[1538],"value":[1538],"minValue":[2,"min-value"],"maxValue":[2,"max-value"],"minLabel":[1,"min-label"],"maxLabel":[1,"max-label"],"snap":[4],"step":[2],"pageStep":[2,"page-step"],"ticks":[2],"labelTicks":[516,"label-ticks"],"labelHandles":[516,"label-handles"],"precise":[4],"tickValues":[32],"activeProp":[32]},[[0,"keydown","keyDownHandler"],[0,"click","clickHandler"]]]]],["calcite-switch.cjs",[[1,"calcite-switch",{"switched":[1540],"name":[1537],"value":[1537],"color":[1537],"scale":[1537],"theme":[1537]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]]],["calcite-loader.cjs",[[1,"calcite-loader",{"isActive":[1540,"is-active"],"inline":[1540],"type":[1537],"value":[2],"text":[1],"loaderBarOffsets":[32],"isEdge":[32]}]]],["calcite-date-day_4.cjs",[[1,"calcite-date-picker",{"value":[513],"min":[513],"max":[513],"prevMonthLabel":[1,"prev-month-label"],"nextMonthLabel":[1,"next-month-label"],"startOfWeek":[2,"start-of-week"],"locale":[1],"showCalendar":[32],"activeDate":[32]}],[1,"calcite-date-month",{"month":[2],"year":[2],"selectedDate":[16],"activeDate":[16],"min":[16],"max":[16],"startOfWeek":[2,"start-of-week"],"locale":[1]},[[0,"keydown","keyDownHandler"],[1,"mouseover","mouseoverHandler"]]],[1,"calcite-date-month-header",{"month":[2],"year":[2],"selectedDate":[16],"min":[16],"max":[16],"locale":[1],"prevMonthLabel":[1,"prev-month-label"],"nextMonthLabel":[1,"next-month-label"]}],[1,"calcite-date-day",{"day":[2],"enable":[4],"selected":[4],"active":[4],"hover":[32]},[[0,"click","onClick"],[0,"keydown","keyDownHandler"]]]]],["context-consumer.cjs",[[0,"context-consumer",{"context":[16],"renderer":[16],"subscribe":[16],"unsubscribe":[32]}]]]], options);
});
