import { assert, expect } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import { html } from 'lit/static-html.js';

import { EventSpy, waitForCondition, waitForLitRender } from '../../core/testing';
import { fixture } from '../../core/testing/private';

import { SbbLinkStaticElement } from './link-static';

describe(`sbb-link-static with ${fixture.name}`, () => {
  let element: SbbLinkStaticElement;

  beforeEach(async () => {
    element = await fixture(html`<sbb-link-static id="focus-id">Link static</sbb-link-static>`, {
      modules: ['./link-static.ts'],
    });
  });

  it('renders', async () => {
    assert.instanceOf(element, SbbLinkStaticElement);
  });

  describe('events', () => {
    it('dispatches event on click', async () => {
      const changeSpy = new EventSpy('click');

      await element.click();
      await waitForCondition(() => changeSpy.events.length === 1);
      expect(changeSpy.count).to.be.equal(1);
    });

    it('should dispatch event on click if disabled', async () => {
      element.setAttribute('disabled', 'true');

      await waitForLitRender(element);

      const changeSpy = new EventSpy('click');

      await element.click();
      expect(changeSpy.count).to.be.greaterThan(0);
    });

    it('should stop propagating host click if disabled', async () => {
      element.disabled = true;

      const clickSpy = new EventSpy('click');

      element.dispatchEvent(new CustomEvent('click'));
      await waitForLitRender(element);

      expect(clickSpy.count).not.to.be.greaterThan(0);
    });

    it('should not dispatch click event on pressing Enter', async () => {
      const changeSpy = new EventSpy('click');
      element.focus();
      await sendKeys({ press: 'Enter' });
      expect(changeSpy.count).not.to.be.greaterThan(0);
    });

    it('should not dispatch click event on pressing Space', async () => {
      const changeSpy = new EventSpy('click');
      element.focus();
      await sendKeys({ press: ' ' });
      expect(changeSpy.count).not.to.be.greaterThan(0);
    });
  });
});
