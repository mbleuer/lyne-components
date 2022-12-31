# sbb-tag-group

The `<sbb-tag-group>` component is used as a container for one or multiple `<sbb-tag>` components,
which are projected inside an unnamed slot.

Once an `<sbb-tag>` has been focused, it's possible to move to the others in the group using the keyboard's arrows.

## Exclusive selection

If you like a custom behavior, like an exclusive selection, you have to implement it yourself
by unchecking all other tags than the selected one programmatically. 
To achieve a closer accessibility experience to the radio button, 
you could set the `accessibility-label="Option 1 of 4"` accordingly for each `sbb-tag`. 
If you would like to announce more specific messages, you could use an aria-live region and announce directly.

## Usage

Basic usage:

```html
<sbb-tag-group aria-label="Select your desired device to filter it">
  <sbb-tag value="tag-1" checked="true">All</sbb-tag>
  <sbb-tag value="tag-2" disabled="true">Phones</sbb-tag>
  <sbb-tag value="tag-3">Computer</sbb-tag>
  <sbb-tag value="tag-3">Laptop</sbb-tag>
</sbb-tag-group>
```

<!-- Auto Generated Below -->


## Slots

| Slot        | Description                                        |
| ----------- | -------------------------------------------------- |
| `"unnamed"` | Provide one or more 'sbb-tag' to add to the group. |


----------------------------------------------

