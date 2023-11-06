/** @jsx h */
import { h, JSX } from 'jsx-dom';
import readme from './readme.md?raw';
import type { Meta, StoryObj } from '@storybook/web-components';
import './train-blocked-passage';

const Template = (args): JSX.Element => (
  <sbb-train-blocked-passage {...args}></sbb-train-blocked-passage>
);

export const blockedPassage: StoryObj = {
  render: Template,
};

const meta: Meta = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  title: 'timetable/sbb-train-blocked-passage',
};

export default meta;
