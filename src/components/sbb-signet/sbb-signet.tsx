import { CSSResult, html, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './sbb-signet.scss?lit&inline';
import { SbbProtectiveRoom } from '../../global/types';

@customElement('sbb-signet')
export class SbbSignet extends LitElement {
  public static override styles: CSSResult = style;

  /** Visual protective room around signet. */
  @property({ attribute: 'protective-room', reflect: true })
  public protectiveRoom?: SbbProtectiveRoom = 'ideal';

  /** Accessibility label which will be forwarded to the inner SVG signet. */
  @property({ attribute: 'accessibility-label' }) public accessibilityLabel = 'Logo';

  protected override render(): TemplateResult {
    return html`
      <span class="sbb-signet">
        <span class="sbb-signet__svg-container">
          <svg focusable="false" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
            ${this.accessibilityLabel ? html`<title>${this.accessibilityLabel}</title>` : nothing}
            <path
              id="sbb-signet__icon"
              d="M20.0265 40H31.6821L16 24.6154H35.3907V40H44.6093V24.6154H64.106L48.4238 40H60.0795L80 20.0531L60.0795 0H48.4238L64.106 15.3846H44.6093V0H35.3907V15.3846H16L31.6821 0H20.0265L0 20.0531L20.0265 40Z"
            />
          </svg>
        </span>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'sbb-signet': SbbSignet;
  }
}
