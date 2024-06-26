import { assert } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import { fixture } from '../core/testing/private.js';

import { SbbJourneySummaryElement } from './journey-summary.js';

describe(`sbb-journey-summary with ${fixture.name}`, () => {
  it('renders', async () => {
    const element = await fixture(html`<sbb-journey-summary></sbb-journey-summary>`, {
      modules: ['./journey-summary.ts'],
    });
    assert.instanceOf(element, SbbJourneySummaryElement);
  });
});
