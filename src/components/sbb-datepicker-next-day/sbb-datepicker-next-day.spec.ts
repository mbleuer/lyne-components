import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit/static-html.js';
import { SbbFormField } from '../sbb-form-field/sbb-form-field';
import { SbbDatepickerNextDay } from './sbb-datepicker-next-day';

import '../sbb-datepicker';
import '../sbb-form-field';
import './sbb-datepicker-next-day';

describe('sbb-datepicker-next-day', () => {
  it('renders', async () => {
    const page: SbbDatepickerNextDay = await fixture(html`<sbb-datepicker-next-day />`);

    expect(page).dom.to.be.equal(`
      <sbb-datepicker-next-day dir="ltr" role="button" slot="suffix" tabindex="0"></sbb-datepicker-next-day>
    `);

    expect(page).shadowDom.to.be.equal(`
    <span class="sbb-datepicker-next-day">
      <sbb-icon aria-hidden="true" data-namespace="default" name="chevron-small-right-small" role="img"></sbb-icon>
    </span>
    `);
  });

  it('renders with datepicker and input disabled', async () => {
    const page: SbbFormField = await fixture(html`
      <sbb-form-field>
        <input disabled="" />
        <sbb-datepicker></sbb-datepicker>
        <sbb-datepicker-next-day></sbb-datepicker-next-day>
      </sbb-form-field>
    `);

    const element: SbbDatepickerNextDay = page.querySelector('sbb-datepicker-next-day');
    expect(element).to.have.attribute('data-disabled');
  });

  it('renders with datepicker and input readonly', async () => {
    const page: SbbFormField = await fixture(html`
      <sbb-form-field>
        <input readonly="" />
        <sbb-datepicker></sbb-datepicker>
        <sbb-datepicker-next-day></sbb-datepicker-next-day>
      </sbb-form-field>
    `);

    const element: SbbDatepickerNextDay = page.querySelector('sbb-datepicker-next-day');
    expect(element).to.have.attribute('data-disabled');
  });
});
