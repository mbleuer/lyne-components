import type { Meta, StoryObj } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import readme from './readme.md?raw';

import '../../card/index.js';

const Template = (): TemplateResult => html`
  <sbb-card color="milk">
    'sbb-expansion-panel-header' is an element to be only used together with 'sbb-expansion-panel'.
    See 'sbb-expansion-panel' examples to see it in action.
  </sbb-card>
`;
export const ExpansionPanelHeader: StoryObj = {
  render: Template,
};

const meta: Meta = {
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  title: 'components/sbb-accordion/sbb-expansion-panel-header',
};

export default meta;
