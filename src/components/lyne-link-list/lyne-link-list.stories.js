import {
  ColorCharcoalDefault,
  ColorWhiteDefault
} from 'lyne-design-tokens/dist/js/tokens.es6';
import { h } from 'jsx-dom';
import readme from './readme.md';

const wrapperStyle = (context) => {

  if (context.args.variant === 'positive') {
    return `background-color: ${ColorWhiteDefault};`;
  }

  return `background-color: ${ColorCharcoalDefault};`;

};

const Template = (args) => (
  <lyne-link-list {...args}>
    <li class='link-list__item' slot='link-list__item'>
      <lyne-link href-value='https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html' text='Rückerstattungen' text-size='s' variant={args.variant}></lyne-link>
    </li>
    <li className='link-list__item' slot='link-list__item'>
      <lyne-link href-value='https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html' text='Fundbüro' text-size='s' variant={args.variant}></lyne-link>
    </li>
    <li className='link-list__item' slot='link-list__item'>
      <lyne-link href-value='https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html' text='Beschwerden' text-size='s' variant={args.variant}></lyne-link>
    </li>
    <li className='link-list__item' slot='link-list__item'>
      <lyne-link href-value='https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html' text='Lob aussprechen' text-size='s' variant={args.variant}></lyne-link>
    </li>
    <li className='link-list__item' slot='link-list__item'>
      <lyne-link href-value='https://www.sbb.ch/de/hilfe-und-kontakt/erstattung-entschaedigung/rueckerstattung-von-billetten.html' text='Sachbeschädigung melden' text-size='s' variant={args.variant}></lyne-link>
    </li>
  </lyne-link-list>
);

const titleText = {
  control: {
    type: 'text'
  },
  table: {
    category: 'List Title'
  }
};

const titleLevel = {
  control: {
    type: 'inline-radio'
  },
  options: [
    2,
    3,
    4,
    5,
    6
  ],
  table: {
    category: 'List Title'
  }
};

const variant = {
  control: {
    type: 'select'
  },
  options: [
    'positive',
    'negative'
  ],
  table: {
    category: 'List Styling'
  }
};

const defaultArgTypes = {
  'title-level': titleLevel,
  'title-text': titleText,
  variant
};

const defaultArgs = {
  'title-level': titleLevel.options[0],
  'title-text': 'Help & Contact',
  'variant': variant.options[0]
};

/* ************************************************* */
/* The Stories                                       */
/* ************************************************* */
export const LyneLinkListPositive = Template.bind({});

LyneLinkListPositive.argTypes = defaultArgTypes;
LyneLinkListPositive.args = {
  ...defaultArgs
};

LyneLinkListPositive.documentation = {
  title: 'Link List Positive No Title'
};

export const LyneLinkListPositiveNoTitle = Template.bind({});

LyneLinkListPositiveNoTitle.argTypes = defaultArgTypes;
LyneLinkListPositiveNoTitle.args = {
  ...defaultArgs,
  'title-text': ''
};

LyneLinkListPositiveNoTitle.documentation = {
  title: 'Link List Positive'
};

export const LyneLinkListNegative = Template.bind({});

LyneLinkListNegative.argTypes = defaultArgTypes;
LyneLinkListNegative.args = {
  ...defaultArgs,
  variant: variant.options[1]
};

LyneLinkListNegative.documentation = {
  title: 'Link List Negative'
};

export default {
  decorators: [
    (Story, context) => (
      <div style={`${wrapperStyle(context)}padding: 2rem`}>
        <Story/>
      </div>
    )
  ],
  parameters: {
    docs: {
      extractComponentDescription: () => readme
    }
  },
  title: 'lyne-link-list'
};
