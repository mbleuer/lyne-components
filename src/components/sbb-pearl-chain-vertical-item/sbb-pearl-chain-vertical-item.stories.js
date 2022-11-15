import { h } from 'jsx-dom';
import readme from './readme.md';

const Template = (args) => {
  return (
    <sbb-pearl-chain-vertical>
      <sbb-pearl-chain-vertical-item pearlChainVerticalItemAttributes={args}>
        <div
          slot="right"
          style="--sbb-pearl-chain-vertical-right-item-block-start:-10px; --sbb-pearl-chain-vertical-right-item-inline-start:10px"
        >
          slot for content
          <div>more</div>
          <div>more</div>
          <div>more</div>
          <div>more</div>
          <div>more</div>
        </div>
      </sbb-pearl-chain-vertical-item>
    </sbb-pearl-chain-vertical>
  );
};

export const pearlChainItem = Template.bind({});

pearlChainItem.args = {
  lineType: 'standard',
  lineColor: 'charcoal',
  dotType: 'standard',
  dotColor: 'charcoal',
  minHeight: '100',
  hideLine: false,
  dotSize: 'medium',
};

export default {
  decorators: [(Story) => <Story />],
  parameters: {
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  argTypes: {
    lineType: {
      options: ['dotted', 'standard', 'thin'],
      control: { type: 'radio' },
    },
    lineColor: {
      options: ['charcoal', 'red', 'metal', 'sky'],
      control: { type: 'radio' },
    },
    dotType: {
      options: ['standard', 'thin-bullet', 'thick-bullet', 'double-bullet'],
      control: { type: 'radio' },
    },
    dotColor: {
      options: ['charcoal', 'red', 'metal', 'sky'],
      control: { type: 'radio' },
    },
    dotSize: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
  title: 'components/timetable/pearl-chains/sbb-pearl-chain-vertical-item',
};