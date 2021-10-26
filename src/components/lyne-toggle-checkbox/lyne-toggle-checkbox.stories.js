import events from './lyne-toggle-checkbox.events.ts';
import { h } from 'jsx-dom';
import readme from './readme.md';

// --- Component
const Template = (args) => (
  <lyne-toggle-checkbox {...args}>
  </lyne-toggle-checkbox>
);

const checked = {
  control: {
    type: 'boolean'
  },
  table: {
    category: 'State'
  }
};

const value = {
  control: {
    type: 'text'
  }
};

const disabledArg = {
  control: {
    type: 'boolean'
  },
  table: {
    category: 'State'
  }
};

const label = {
  control: {
    type: 'text'
  },
  table: {
    category: 'Label'
  }
};

const labelPlacement = {
  control: {
    type: 'inline-radio'
  },
  options: [
    'left',
    'right'
  ],
  table: {
    category: 'Label'
  }
};

const name = {
  control: {
    type: 'text'
  }
};

const basicArgTypes = {
  checked,
  'disabled': disabledArg,
  label,
  'label-placement': labelPlacement,
  name,
  value
};

const basicArgs = {
  'checked': false,
  'disabled': false,
  'label': 'Toggle Label',
  'label-placement': labelPlacement.options[0],
  'name': 'demo',
  'value': 'togglevalue'
};
/* eslint-enable sort-keys */

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */
export const LabelLeft = Template.bind({});

LabelLeft.argTypes = basicArgTypes;
LabelLeft.args = JSON.parse(JSON.stringify(basicArgs));

LabelLeft.documentation = {
  title: 'Label left'
};

export const LabelLeftChecked = Template.bind({});

LabelLeftChecked.argTypes = basicArgTypes;
LabelLeftChecked.args = JSON.parse(JSON.stringify(basicArgs));
LabelLeftChecked.args['checked'] = true;

LabelLeftChecked.documentation = {
  title: 'Label Left Checked'
};

export const LabelLeftCheckedDisabled = Template.bind({});

LabelLeftCheckedDisabled.argTypes = basicArgTypes;
LabelLeftCheckedDisabled.args = JSON.parse(JSON.stringify(basicArgs));
LabelLeftCheckedDisabled.args['checked'] = true;
LabelLeftCheckedDisabled.args['disabled'] = true;

LabelLeftCheckedDisabled.documentation = {
  title: 'Label Left Checked & Disabled'
};

export const LabelLeftDisabled = Template.bind({});

LabelLeftDisabled.argTypes = basicArgTypes;
LabelLeftDisabled.args = JSON.parse(JSON.stringify(basicArgs));
LabelLeftDisabled.args['disabled'] = true;

LabelLeftDisabled.documentation = {
  title: 'Label Left Disabled'
};

export const LabelRight = Template.bind({});

LabelRight.argTypes = basicArgTypes;
LabelRight.args = {
  ...basicArgs,
  'label-placement': labelPlacement.options[1]
};

LabelRight.documentation = {
  title: 'Label Right'
};

export const LabelRightChecked = Template.bind({});

LabelRightChecked.argTypes = basicArgTypes;
LabelRightChecked.args = {
  ...basicArgs,
  'checked': true,
  'label-placement': labelPlacement.options[1]
};

LabelRightChecked.documentation = {
  title: 'Label Right Checked'
};

export const LabelRightCheckedDisabled = Template.bind({});

LabelRightCheckedDisabled.argTypes = basicArgTypes;
LabelRightCheckedDisabled.args = {
  ...basicArgs,
  'checked': true,
  'disabled': true,
  'label-placement': labelPlacement.options[1]
};

LabelRightCheckedDisabled.documentation = {
  title: 'Label Right Checked & Disabled'
};

export const LabelRightDisabled = Template.bind({});

LabelRightDisabled.argTypes = basicArgTypes;
LabelRightDisabled.args = {
  ...basicArgs,
  'disabled': true,
  'label-placement': labelPlacement.options[1]
};

LabelRightDisabled.documentation = {
  title: 'Label Right Disabled'
};

/* ************************************************* */
/* The Export                                        */
/* ************************************************* */
export default {
  decorators: [
    (Story) => (
      <div style='padding: 2rem'>
        <Story/>
      </div>
    )
  ],
  parameters: {
    actions: {
      handles: [events.change]
    },
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'Form Elements/lyne-toggle-checkbox'
};
