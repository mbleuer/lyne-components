import { expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import { fixture } from '../../core/testing/private';

import './navigation';
import '../navigation-button';
import '../navigation-marker';
import '../../button/button';

describe(`sbb-navigation`, () => {
  it('renders', async () => {
    await fixture(html`
      <sbb-button id="nav-trigger">Navigation trigger</sbb-button>
      <sbb-navigation trigger="nav-trigger">
        <sbb-navigation-marker>
          <sbb-navigation-button id="nav-1">Tickets & Offers</sbb-navigation-button>
          <sbb-navigation-button id="nav-2">Vacations & Recreation</sbb-navigation-button>
        </sbb-navigation-marker>
      </sbb-navigation>
    `);
    const nav = document.querySelector('sbb-navigation');

    expect(nav).dom.to.be.equal(
      `
        <sbb-navigation trigger="nav-trigger" role="navigation" data-state="closed" id="sbb-navigation-1">
          <sbb-navigation-marker size="l">
            <sbb-navigation-button id="nav-1" data-action data-button dir="ltr" role="button" size="l" slot="li-0" tabindex="0">
              Tickets &amp; Offers
            </sbb-navigation-button>
            <sbb-navigation-button id="nav-2" data-action data-button dir="ltr" role="button" size="l" slot="li-1" tabindex="0">
              Vacations &amp; Recreation
            </sbb-navigation-button>
          </sbb-navigation-marker>
        </sbb-navigation>
      `,
    );
    expect(nav).shadowDom.to.be.equal(
      `
        <div class="sbb-navigation__container">
          <div class="sbb-navigation" id="sbb-navigation-overlay">
            <div class="sbb-navigation__header">
              <sbb-transparent-button
                id="sbb-navigation-close-button"
                aria-label="Close navigation"
                aria-controls="sbb-navigation-overlay"
                class="sbb-navigation__close"
                dir="ltr"
                icon-name="cross-small"
                negative=""
                role="button"
                sbb-navigation-close=""
                size="m"
                data-action
                data-button
                data-sbb-button
                tabindex="0"
                type="button">
              </sbb-transparent-button>
            </div>
            <div class="sbb-navigation__wrapper">
              <div class="sbb-navigation__content">
                <slot></slot>
              </div>
            </div>
          </div>
          <slot name="navigation-section"></slot>
        </div>
      `,
    );
  });
});
