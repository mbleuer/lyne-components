/** @jsx h */
import type { InputType } from '@storybook/types';
import type { Meta, StoryObj } from '@storybook/web-components';
import isChromatic from 'chromatic';
import { h, type JSX } from 'jsx-dom';

import readme from './readme.md?raw';

import './clock';

const dataNow: InputType = {
  control: {
    type: 'date',
  },
};

const Template = (args): JSX.Element => <sbb-clock {...args}></sbb-clock>;

export const Default: StoryObj = {
  render: Template,
  argTypes: { 'data-now': dataNow },
  args: { 'data-now': undefined },
};

export const Paused: StoryObj = {
  render: Template,
  argTypes: { 'data-now': dataNow },
  args: { 'data-now': new Date('2023-01-24T10:10:30+01:00').valueOf() },
};

/**
 * Stop the clock for Chromatic visual regression tests
 * and set time to given time
 */
if (isChromatic()) {
  Default.args = {
    'data-now': new Date('2023-01-24T10:10:30+01:00').valueOf(),
  };
}

const meta: Meta = {
  decorators: [
    (Story) => (
      <div style={{ 'max-width': '600px' }}>
        <Story></Story>
      </div>
    ),
  ],
  parameters: {
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  title: 'components/sbb-clock',
};

export default meta;