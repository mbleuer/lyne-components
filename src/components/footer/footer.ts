import { CSSResult, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './footer.scss?lit&inline';
import { html, unsafeStatic } from 'lit/static-html.js';
import { TitleLevel } from '../title';

/**
 * TODO: Document me
 */
@customElement('sbb-footer')
export class SbbFooter extends LitElement {
  public static override styles: CSSResult = style;

  /**
   * Variants to display the footer. The default, displays the content in regular block element
   * approach. The clock-columns, used a css-grid for displaying the content over different
   * breakpoints.
   */
  @property({ reflect: true }) public variant: 'default' | 'clock-columns' = 'default';

  /** Negative coloring variant flag. */
  @property({ reflect: true, type: Boolean }) public negative = false;

  /**
   * Whether to allow the footer content to stretch to full width.
   * By default, the content has the appropriate page size.
   */
  @property({ reflect: true, type: Boolean }) public expanded = false;

  /** Footer title text, visually hidden, necessary for screen readers. */
  @property({ attribute: 'accessibility-title' }) public accessibilityTitle?: string;

  /** Level of the accessibility title, will be rendered as heading tag (e.g. h1). Defaults to level 1. */
  @property({ attribute: 'accessibility-title-level' })
  public accessibilityTitleLevel: TitleLevel = '1';

  protected override render(): TemplateResult {
    const TITLE_TAG_NAME = `h${this.accessibilityTitleLevel}`;

    /* eslint-disable lit/binding-positions */
    const accessibilityTitle = html`<${unsafeStatic(TITLE_TAG_NAME)} class="sbb-footer__title"
        >${this.accessibilityTitle}</${unsafeStatic(TITLE_TAG_NAME)}>`;
    /* eslint-enable lit/binding-positions */

    return html`
      <footer class="sbb-footer">
        <div class="sbb-footer-wrapper">
          ${this.accessibilityTitle ? accessibilityTitle : nothing}
          <slot></slot>
        </div>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'sbb-footer': SbbFooter;
  }
}
