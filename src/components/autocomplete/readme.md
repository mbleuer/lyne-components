The `sbb-autocomplete` is a component that can be used to display a panel of suggested options connected to a text input.

It's possible to set the element to which the component's panel will be attached using the `origin` prop,
and the input which will work as a trigger using the `trigger` prop.
Both accept an id or an element reference.

```html
<!-- Origin element -->
<div id="autocomplete-origin">Another origin</div>

<!-- Trigger element -->
<input id="autocomplete-txt" placeholder="Another trigger element" />

<sbb-autocomplete origin="autocomplete-origin" trigger="autocomplete-txt">
  <sbb-option value="Option A">Option A</sbb-option>
  <sbb-option value="Option B">Option B</sbb-option>
  <sbb-option value="Option C">Option C</sbb-option>
</sbb-autocomplete>
```

## In `sbb-form-field`

If the component is used within a [sbb-form-field](/docs/components-sbb-form-field-sbb-form-field--docs),
it will automatically connect to the native `<input>` as trigger and will display the option panel above or below the `sbb-form-field`.

```html
<!-- Origin element -->
<sbb-form-field label="Label">
  <!-- Trigger element -->
  <input placeholder="Trigger element" />

  <sbb-autocomplete>
    <sbb-option icon-name="clock-small" value="Option 1"> Option 1 </sbb-option>
    <sbb-option icon-name="clock-small" value="Option 2"> Option 2 </sbb-option>
    <sbb-option icon-name="clock-small" value="Option 3"> Option 3 </sbb-option>
  </sbb-autocomplete>
</sbb-form-field>
```

## Style

### Option highlight

By default, the autocomplete will highlight the label of the `sbb-option` in the panel, if it matches the typed text.
See the [sbb-option](/docs/components-sbb-option-sbb-option--docs) for more details.

### Option grouping

The displayed `sbb-option` can be collected into groups using `sbb-optgroup` element:

```html
<!-- Origin element -->
<sbb-form-field label="Label">
  <!-- Trigger element -->
  <input placeholder="Trigger element" />

  <sbb-autocomplete>
    <sbb-optgroup label="Group 1">
      <sbb-option icon-name="clock-small" value="Option 1"> Option 1 </sbb-option>
      ...
    </sbb-optgroup>
    <sbb-optgroup label="Group 2"> ... </sbb-optgroup>
  </sbb-autocomplete>
</sbb-form-field>
```

## Events

The `sbb-option` emits the `option-selected` event when selected via user interaction.

## Keyboard interaction

The options panel opens on `focus`, `click` or `input` events on the trigger element, or on `ArrowDown` keypress;
it can be closed on backdrop click, or using the `Escape` or `Tab` keys.

| Keyboard              | Action                                                  |
| --------------------- | ------------------------------------------------------- |
| <kbd>Down Arrow</kbd> | Navigate to the next option. Open the panel, if closed. |
| <kbd>Up Arrow</kbd>   | Navigate to the previous option.                        |
| <kbd>Enter</kbd>      | Select the active option.                               |
| <kbd>Escape</kbd>     | Close the autocomplete panel.                           |

## Accessibility

The `sbb-autocomplete` implements the [ARIA combobox interaction pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).

The text input trigger specifies `role="combobox"` while the content of the pop-up applies `role="listbox"`.
Because of this `listbox` pattern, you should not put other interactive controls, such as buttons or checkboxes, inside an autocomplete option.
Nesting interactive controls like this interferes with many assistive technologies.

The component preserves focus on the input trigger,
using `aria-activedescendant` to support navigation though the autocomplete options.

<!-- Auto Generated Below -->

## Properties

| Name                | Attribute             | Privacy | Type                         | Default | Description                                                                                                                                                                                                                                                                                                       |
| ------------------- | --------------------- | ------- | ---------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `origin`            | `origin`              | public  | `string \| HTMLElement`      |         | The element where the autocomplete will attach; accepts both an element's id or an HTMLElement. If not set, will search for the first 'sbb-form-field' ancestor.                                                                                                                                                  |
| `trigger`           | `trigger`             | public  | `string \| HTMLInputElement` |         | The input element that will trigger the autocomplete opening; accepts both an element's id or an HTMLElement. By default, the autocomplete will open on focus, click, input or `ArrowDown` keypress of the 'trigger' element. If not set, will search for the first 'input' child of a 'sbb-form-field' ancestor. |
| `disableAnimation`  | `disable-animation`   | public  | `boolean`                    | `false` | Whether the animation is disabled.                                                                                                                                                                                                                                                                                |
| `preserveIconSpace` | `preserve-icon-space` | public  | `boolean`                    |         | Whether the icon space is preserved when no icon is set.                                                                                                                                                                                                                                                          |
| `negative`          | `negative`            | public  | `boolean`                    | `false` | Negative coloring variant flag.                                                                                                                                                                                                                                                                                   |

## Methods

| Name    | Privacy | Description              | Parameters | Return | Inherited From |
| ------- | ------- | ------------------------ | ---------- | ------ | -------------- |
| `open`  | public  | Opens the autocomplete.  |            | `void` |                |
| `close` | public  | Closes the autocomplete. |            | `void` |                |

## Events

| Name         | Type                | Description                                                          | Inherited From |
| ------------ | ------------------- | -------------------------------------------------------------------- | -------------- |
| `will-open`  | `CustomEvent<void>` | Emits whenever the `sbb-autocomplete` starts the opening transition. |                |
| `did-open`   | `CustomEvent<void>` | Emits whenever the `sbb-autocomplete` is opened.                     |                |
| `will-close` | `CustomEvent<void>` | Emits whenever the `sbb-autocomplete` begins the closing transition. |                |
| `did-close`  | `CustomEvent<void>` | Emits whenever the `sbb-autocomplete` is closed.                     |                |

## Slots

| Name | Description                                                                                    |
| ---- | ---------------------------------------------------------------------------------------------- |
|      | Use the unnamed slot to add `sbb-option` or `sbb-optgroup` elements to the `sbb-autocomplete`. |