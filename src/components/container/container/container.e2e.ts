import { assert } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import { fixture } from '../../core/testing/private.js';

import { SbbContainerElement } from './container.js';

describe(`sbb-container with ${fixture.name}`, () => {
  let element: SbbContainerElement;

  beforeEach(async () => {
    element = await fixture(html`<sbb-container></sbb-container>`, { modules: ['./container.ts'] });
  });

  it('renders', async () => {
    assert.instanceOf(element, SbbContainerElement);
  });
});
