import events from './sbb-menu.events.ts';
import { h } from 'jsx-dom';
import readme from './readme.md';
import isChromatic from 'chromatic/isChromatic';
import { userEvent, within } from '@storybook/testing-library';

// Function to emulate pausing between interactions
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Story interaction executed after the story renders
const playStory = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByTestId('menu-trigger');
  await sleep(300);
  await userEvent.click(button);
};

const iconName = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Menu action',
  },
};

const amount = {
  control: {
    type: 'text',
  },
  table: {
    category: 'Menu action',
  },
};

const disabled = {
  control: {
    type: 'boolean',
  },
  table: {
    category: 'Menu action',
  },
};

const defaultArgTypes = {
  'icon-name': iconName,
  amount,
  disabled,
};

const defaultArgs = {
  'icon-name': 'link-small',
  amount: '123',
  disabled: false,
};

const userNameStyle = {
  fontFamily: 'var(--sbb-typo-type-face-sbb-bold)',
  fontSize: 'var(--sbb-font-size-text-xs)',
  marginTop: 'var(--sbb-spacing-fixed-1x)',
};

const userInfoStyle = {
  color: 'var(--sbb-color-graphite-default)',
  fontFamily: 'var(--sbb-typo-type-face-sbb-regular)',
  fontSize: 'var(--sbb-font-size-text-xxs)',
};

const triggerButton = (id) => (
  <sbb-button data-testid="menu-trigger" id={id} size="m">
    Menu trigger
  </sbb-button>
);

const DefaultTemplate = (args) => [
  triggerButton('menu-trigger-1'),
  <sbb-menu trigger="menu-trigger-1" disable-animation={isChromatic()}>
    <sbb-menu-action icon-name={args['icon-name']} href="https://www.sbb.ch/en">
      View
    </sbb-menu-action>
    <sbb-menu-action icon-name="pen-small" amount="16" disabled={args.disabled}>
      Edit
    </sbb-menu-action>
    <sbb-menu-action icon-name="swisspass-small" amount={args.amount}>
      Details
    </sbb-menu-action>
    <sbb-divider />
    <sbb-menu-action icon-name="cross-small">Cancel</sbb-menu-action>
  </sbb-menu>,
];

const CustomContentTemplate = (args) => [
  triggerButton('menu-trigger-2'),
  <sbb-menu trigger="menu-trigger-2" disable-animation={isChromatic()}>
    <div style={userNameStyle}>Christina Müller</div>
    <span style={userInfoStyle}>UIS9057</span>
    <sbb-link href="https://www.sbb.ch/en" negative text-size="xs" variant="block">
      Profile
    </sbb-link>
    <sbb-divider />
    <sbb-menu-action icon-name={args['icon-name']} href="https://www.sbb.ch/en">
      View
    </sbb-menu-action>
    <sbb-menu-action icon-name="tickets-class-small" disabled={args.disabled}>
      Tickets
    </sbb-menu-action>
    <sbb-menu-action icon-name="shopping-cart-small" amount={args.amount}>
      Cart
    </sbb-menu-action>
    <sbb-divider />
    <sbb-menu-action icon-name="exit-small">Log Out</sbb-menu-action>
  </sbb-menu>,
];

const LongContentTemplate = (args) => [
  triggerButton('menu-trigger-3'),
  <sbb-menu trigger="menu-trigger-3" disable-animation={isChromatic()}>
    <sbb-menu-action icon-name={args['icon-name']} disabled={args.disabled} amount={args.amount}>
      English
    </sbb-menu-action>
    <sbb-menu-action>Deutsch</sbb-menu-action>
    <sbb-menu-action>Français</sbb-menu-action>
    <sbb-menu-action>Italiano</sbb-menu-action>
    <sbb-menu-action>Rumantsch</sbb-menu-action>
    <sbb-menu-action>Español</sbb-menu-action>
    <sbb-menu-action>Português</sbb-menu-action>
    <sbb-menu-action>日本語</sbb-menu-action>
    <sbb-menu-action>한국어</sbb-menu-action>
    <sbb-menu-action>广州话</sbb-menu-action>
    <sbb-menu-action>Afrikaans</sbb-menu-action>
    <sbb-menu-action>Svenska</sbb-menu-action>
    <sbb-menu-action>Dansk</sbb-menu-action>
    <sbb-menu-action>Nederlands</sbb-menu-action>
    <sbb-menu-action>Suomi</sbb-menu-action>
    <sbb-menu-action>українська мова</sbb-menu-action>
    <sbb-menu-action>አማርኛ</sbb-menu-action>
    <sbb-menu-action>ქართული ენა</sbb-menu-action>
    <sbb-menu-action>Afrikaans</sbb-menu-action>
    <sbb-menu-action>Svenska</sbb-menu-action>
    <sbb-menu-action>Dansk</sbb-menu-action>
    <sbb-menu-action>Nederlands</sbb-menu-action>
    <sbb-menu-action>Suomi</sbb-menu-action>
    <sbb-divider />
    <sbb-menu-action icon-name="cross-small">Cancel</sbb-menu-action>
  </sbb-menu>,
];

const EllipsisTemplate = (args) => [
  triggerButton('menu-trigger-4'),
  <sbb-menu trigger="menu-trigger-4" disable-animation={isChromatic()}>
    <div style={userNameStyle}>Christina Müller</div>
    <span style={userInfoStyle}>UIS9057</span>
    <sbb-link href="https://www.sbb.ch/en" negative text-size="xs" variant="block">
      Profile
    </sbb-link>
    <sbb-divider />
    <sbb-menu-action icon-name={args['icon-name']} href="https://www.sbb.ch/en">
      View
    </sbb-menu-action>
    <sbb-menu-action icon-name="pen-small" disabled={args.disabled}>
      Edit
    </sbb-menu-action>
    <sbb-menu-action icon-name="swisspass-small" amount={args.amount}>
      Very long label that exceeds the maximum width of the menu, very long label that exceeds the
      maximum width of the menu, very long label that exceeds the maximum width of the menu
    </sbb-menu-action>
    <sbb-divider />
    <sbb-menu-action icon-name="cross-small">Cancel</sbb-menu-action>
  </sbb-menu>,
];

export const Default = DefaultTemplate.bind({});
Default.argTypes = defaultArgTypes;
Default.args = { ...defaultArgs, disabled: true };
Default.documentation = { title: 'Default' };
Default.play = playStory;

export const CustomContent = CustomContentTemplate.bind({});
CustomContent.argTypes = defaultArgTypes;
CustomContent.args = { ...defaultArgs, amount: '2' };
CustomContent.documentation = { title: 'Custom Content' };
CustomContent.play = playStory;

export const LongContent = LongContentTemplate.bind({});
LongContent.argTypes = defaultArgTypes;
LongContent.args = { ...defaultArgs, 'icon-name': 'tick-small', amount: undefined };
LongContent.documentation = { title: 'Long Content' };
LongContent.play = playStory;

export const Ellipsis = EllipsisTemplate.bind({});
Ellipsis.argTypes = defaultArgTypes;
Ellipsis.args = { ...defaultArgs };
Ellipsis.documentation = { title: 'Ellipsis' };
Ellipsis.play = playStory;

export default {
  decorators: [
    (Story) => (
      <div style={`padding: 2rem; ${isChromatic() ? 'min-height: 100vh' : ''}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: {
      handles: [events.willPresent, events.didPresent, events.didDismiss, events.willDismiss],
    },
    backgrounds: {
      disable: true,
    },
    docs: {
      inlineStories: false,
      iframeHeight: '400px',
      extractComponentDescription: () => readme,
    },
  },
  title: 'components/menu/sbb-menu',
};