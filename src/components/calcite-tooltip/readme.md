# calcite-tooltip

<!-- Auto Generated Below -->

## Usage

### Basic

```html
<calcite-tooltip placement="auto" reference-element="tooltip-button"
  >This is the message of the tooltip</calcite-tooltip
>
<calcite-tooltip-manager>
  <p>
    Lorem <a id="tooltip-button" href="#">ipsum</a> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.
  </p>
</calcite-tooltip-manager>
```

## Properties

| Property                        | Attribute           | Description                                                                         | Type                                                                                                                                                                                                                                                                                                              | Default                 |
| ------------------------------- | ------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `offsetDistance`                | `offset-distance`   | Offset the position of the popover away from the reference element.                 | `number`                                                                                                                                                                                                                                                                                                          | `defaultOffsetDistance` |
| `offsetSkidding`                | `offset-skidding`   | Offset the position of the popover along the reference element.                     | `number`                                                                                                                                                                                                                                                                                                          | `0`                     |
| `open`                          | `open`              | Display and position the component.                                                 | `boolean`                                                                                                                                                                                                                                                                                                         | `false`                 |
| `placement`                     | `placement`         | Determines where the component will be positioned relative to the referenceElement. | `"auto" \| "auto-start" \| "auto-end" \| "top" \| "bottom" \| "right" \| "left" \| "top-start" \| "top-end" \| "bottom-start" \| "bottom-end" \| "right-start" \| "right-end" \| "left-start" \| "left-end" \| "leading-start" \| "leading" \| "leading-end" \| "trailing-end" \| "trailing" \| "trailing-start"` | `"auto"`                |
| `referenceElement` _(required)_ | `reference-element` | Reference HTMLElement used to position this component.                              | `HTMLElement \| string`                                                                                                                                                                                                                                                                                           | `undefined`             |
| `theme`                         | `theme`             | Select theme (light or dark)                                                        | `"dark" \| "light"`                                                                                                                                                                                                                                                                                               | `undefined`             |

## Methods

### `reposition() => Promise<void>`

#### Returns

Type: `Promise<void>`

---

_Built with [StencilJS](https://stenciljs.com/)_
