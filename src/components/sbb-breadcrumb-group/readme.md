The `sbb-breadcrumb-group` component is a container for one or more `sbb-breadcrumb`,
which are meant to represent the hierarchy of visited pages before arriving to the current one.

If the width of all the nested breadcrumbs exceeds the container width, only the first and the last breadcrumb are displayed,
and a new one with the ellipsis symbol appears between them. 
Clicking on this breadcrumb will make the ellipsis disappear and will restore the full list (the action is not reversible).

## Accessibility

It is strongly recommended to place an `aria-label` attribute on the `sbb-breadcrumb-group`, to describe
what context the breadcrumbs have.
Whenever the `sbb-breadcrumb` list within the component is loaded or updated, the last element of the list 
receive the attribute `aria-current` set to `page`.

## Usage

`sbb-breadcrumb-group` with home icon as first `sbb-breadcrumb`:

```html
<sbb-breadcrumb-group aria-label="You are here:">
  <sbb-breadcrumb href='/' icon-name='house-small'></sbb-breadcrumb>
  <sbb-breadcrumb href='/work-with-us'>
    Work with us
  </sbb-breadcrumb>
  <sbb-breadcrumb href='/apply' target='_blank'>
    Apply
  </sbb-breadcrumb>
</sbb-breadcrumb-group>
```

<!-- Auto Generated Below -->


## Slots

| Slot        | Description                                   |
| ----------- | --------------------------------------------- |
| `"unnamed"` | Use this to slot the sbb-breadcrumb elements. |


## Dependencies

### Depends on

- [sbb-icon](../sbb-icon)

### Graph
```mermaid
graph TD;
  sbb-breadcrumb-group --> sbb-icon
  style sbb-breadcrumb-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

