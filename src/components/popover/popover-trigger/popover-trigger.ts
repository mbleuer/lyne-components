import { type CSSResultGroup, html, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

import { SbbButtonBaseElement } from '../../core/base-elements/index.js';
import { hostContext, isValidAttribute } from '../../core/dom/index.js';
import { SbbDisabledTabIndexActionMixin, SbbNegativeMixin } from '../../core/mixins/index.js';
import { SbbIconNameMixin } from '../../icon/index.js';

import style from './popover-trigger.scss?lit&inline';

/**
 * It can be used as a trigger for the `sbb-popover` component.
 *
 * @slot - Use the unnamed slot to add content to the `sbb-popover-trigger`.
 */
@customElement('sbb-popover-trigger')
export class SbbPopoverTriggerElement extends SbbDisabledTabIndexActionMixin(
  SbbNegativeMixin(SbbIconNameMixin(SbbButtonBaseElement)),
) {
  public static override styles: CSSResultGroup = style;

  public override connectedCallback(): void {
    super.connectedCallback();
    const formField = hostContext('sbb-form-field', this) ?? hostContext('[data-form-field]', this);

    if (formField) {
      this.toggleAttribute('data-icon-small', true);
      this.negative = isValidAttribute(formField as HTMLElement, 'negative');
    }
  }

  protected override renderTemplate(): TemplateResult {
    return html`
      <slot>
        <sbb-icon name=${this.iconName || 'circle-information-small'}></sbb-icon>
      </slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'sbb-popover-trigger': SbbPopoverTriggerElement;
  }
}
