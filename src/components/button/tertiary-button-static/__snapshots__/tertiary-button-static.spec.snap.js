/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["Dom"] = 
`<sbb-tertiary-button-static
  data-action=""
  data-sbb-button=""
  data-slot-names="unnamed"
  dir="ltr"
  disabled=""
  negative=""
  size="m"
>
  Label Text
</sbb-tertiary-button-static>
`;
/* end snapshot Dom */

snapshots["ShadowDom"] = 
`<span class="sbb-action-base sbb-tertiary-button-static">
  <span class="sbb-button__icon">
    <slot name="icon">
    </slot>
  </span>
  <span class="sbb-button__label">
    <slot>
    </slot>
  </span>
</span>
`;
/* end snapshot ShadowDom */

snapshots["sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon Dom"] = 
`<sbb-tertiary-button-static
  data-action=""
  data-sbb-button=""
  data-slot-names="icon unnamed"
  dir="ltr"
  size="l"
>
  <sbb-icon
    aria-hidden="true"
    data-namespace="default"
    name="chevron-small-left-small"
    role="img"
    slot="icon"
  >
  </sbb-icon>
  Label Text
</sbb-tertiary-button-static>
`;
/* end snapshot sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon Dom */

snapshots["sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon ShadowDom"] = 
`<span class="sbb-action-base sbb-tertiary-button-static">
  <span class="sbb-button__icon">
    <slot name="icon">
    </slot>
  </span>
  <span class="sbb-button__label">
    <slot>
    </slot>
  </span>
</span>
`;
/* end snapshot sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon ShadowDom */

snapshots["sbb-tertiary-button-static A11y tree Chrome"] = 
`<p>
  {
  "role": "WebArea",
  "name": ""
}
</p>
`;
/* end snapshot sbb-tertiary-button-static A11y tree Chrome */

snapshots["sbb-tertiary-button-static A11y tree Firefox"] = 
`<p>
  {
  "role": "document",
  "name": ""
}
</p>
`;
/* end snapshot sbb-tertiary-button-static A11y tree Firefox */

snapshots["sbb-tertiary-button-static A11y tree Safari"] = 
`<p>
  {
  "role": "WebArea",
  "name": ""
}
</p>
`;
/* end snapshot sbb-tertiary-button-static A11y tree Safari */

snapshots["sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon A11y tree Chrome"] = 
`<p>
  {
  "role": "WebArea",
  "name": "",
  "children": [
    {
      "role": "text",
      "name": "Label Text"
    }
  ]
}
</p>
`;
/* end snapshot sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon A11y tree Chrome */

snapshots["sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon A11y tree Firefox"] = 
`<p>
  {
  "role": "document",
  "name": "",
  "children": [
    {
      "role": "text leaf",
      "name": "Label Text "
    }
  ]
}
</p>
`;
/* end snapshot sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon A11y tree Firefox */

snapshots["sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon A11y tree Safari"] = 
`<p>
  {
  "role": "WebArea",
  "name": "",
  "children": [
    {
      "role": "text",
      "name": "Label Text"
    }
  ]
}
</p>
`;
/* end snapshot sbb-tertiary-button-static renders a sbb-tertiary-button-static with slotted icon A11y tree Safari */
