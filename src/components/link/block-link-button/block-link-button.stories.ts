import { withActions } from '@storybook/addon-actions/decorator';
import type { Args, ArgTypes, Decorator, Meta, StoryObj } from '@storybook/web-components';
import { styleMap } from 'lit/directives/style-map.js';
import { html } from 'lit/static-html.js';

import {
  blockLinkCommonDefaultArgTypes,
  blockLinkCommonDefaultArgs,
  blockFixedWidth,
  blockIconStart,
  blockM,
  blockMIcon,
  blockNegative,
  blockS,
  blockSIcon,
  blockWithSlottedIcon,
  blockXS,
  blockXSIcon,
  linkButtonDefaultArgs,
  linkButtonDefaultArgTypes,
  wrapperStyle,
} from '../common/link-common-stories.js';

import readme from './readme.md?raw';
import './block-link-button.js';

const defaultArgTypes: ArgTypes = {
  ...blockLinkCommonDefaultArgTypes,
  ...linkButtonDefaultArgTypes,
};

const defaultArgs: Args = {
  ...blockLinkCommonDefaultArgs,
  ...linkButtonDefaultArgs,
  tag: 'sbb-block-link-button',
};

export const BlockXS: StoryObj = blockXS;
export const BlockS: StoryObj = blockS;
export const BlockM: StoryObj = blockM;
export const BlockXSIcon: StoryObj = blockXSIcon;
export const BlockSIcon: StoryObj = blockSIcon;
export const BlockMIcon: StoryObj = blockMIcon;
export const BlockIconStart: StoryObj = blockIconStart;
export const BlockNegative: StoryObj = blockNegative;
export const BlockWithSlottedIcon: StoryObj = blockWithSlottedIcon;
export const BlockFixedWidth: StoryObj = blockFixedWidth;

const meta: Meta = {
  argTypes: defaultArgTypes,
  args: defaultArgs,
  decorators: [
    (story, context) => html`
      <div style=${styleMap({ ...wrapperStyle(context), padding: '2rem' })}>${story()}</div>
    `,
    withActions as Decorator,
  ],
  parameters: {
    actions: {
      handles: ['click'],
    },
    docs: {
      extractComponentDescription: () => readme,
    },
  },
  title: 'components/sbb-link/sbb-block-link-button',
};

export default meta;
