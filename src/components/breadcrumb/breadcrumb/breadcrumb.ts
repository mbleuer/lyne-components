import { spread } from '@open-wc/lit-helpers';
import { CSSResultGroup, LitElement, nothing, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { html, unsafeStatic } from 'lit/static-html.js';

import { setAttributes } from '../../core/dom';
import {
  actionElementHandlerAspect,
  createNamedSlotState,
  documentLanguage,
  HandlerRepository,
  languageChangeHandlerAspect,
  namedSlotChangeHandlerAspect,
} from '../../core/eventing';
import { i18nTargetOpensInNewWindow } from '../../core/i18n';
import {
  LinkTargetType,
  resolveLinkOrStaticRenderVariables,
  targetsNewWindow,
} from '../../core/interfaces';

import style from './breadcrumb.scss?lit&inline';

import '../../icon';

/**
 * It displays a link to a page; used within a `sbb-breadcrumb-group` it can display the path to the current page.
 *
 * @slot - Use the unnamed slot to add content to the breadcrumb.
 * @slot icon - Use this to display an icon as breadcrumb.
 */
@customElement('sbb-breadcrumb')
export class SbbBreadcrumb extends LitElement {
  public static override styles: CSSResultGroup = style;

  /** The href value you want to link to. */
  @property() public href: string | undefined;

  /** Where to display the linked URL. */
  @property() public target?: LinkTargetType | string | undefined;

  /** The relationship of the linked URL as space-separated link types. */
  @property() public rel?: string | undefined;

  /** Whether the browser will show the download dialog on click. */
  @property({ type: Boolean }) public download?: boolean;

  /**
   * The icon name we want to use, choose from the small icon variants
   * from the ui-icons category from here
   * https://icons.app.sbb.ch.
   */
  @property({ attribute: 'icon-name' }) public iconName?: string;

  /** State of listed named slots, by indicating whether any element for a named slot is defined. */
  @state() private _namedSlots = createNamedSlotState('icon');

  @state() private _currentLanguage = documentLanguage();

  @state() private _hasText = false;

  private _handlerRepository = new HandlerRepository(
    this,
    actionElementHandlerAspect,
    languageChangeHandlerAspect((l) => (this._currentLanguage = l)),
    namedSlotChangeHandlerAspect((m) => (this._namedSlots = m(this._namedSlots))),
  );

  public override connectedCallback(): void {
    super.connectedCallback();
    this._hasText = Array.from(this.childNodes).some(
      (n) => !(n as Element).slot && n.textContent?.trim(),
    );
    this._handlerRepository.connect();
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._handlerRepository.disconnect();
  }

  private _onLabelSlotChange(event: Event): void {
    this._hasText = (event.target as HTMLSlotElement)
      .assignedNodes()
      .some((n) => !!n.textContent?.trim());
  }

  protected override render(): TemplateResult {
    const {
      tagName: TAG_NAME,
      attributes,
      hostAttributes,
    } = resolveLinkOrStaticRenderVariables(this);

    setAttributes(this, hostAttributes);

    /* eslint-disable lit/binding-positions */
    return html`
      <${unsafeStatic(TAG_NAME)} class='sbb-breadcrumb' ${spread(attributes)}>
        ${
          this.iconName || this._namedSlots.icon
            ? html` <span class="sbb-breadcrumb__icon">
                <slot name="icon">
                  ${this.iconName ? html` <sbb-icon name="${this.iconName}"></sbb-icon>` : nothing}
                </slot>
              </span>`
            : nothing
        }
        ${
          this._hasText
            ? html` <span class="sbb-breadcrumb__label">
                <slot
                  @slotchange="${(event: Event): void => this._onLabelSlotChange(event)}"
                ></slot>
                ${targetsNewWindow(this)
                  ? html` <span class="sbb-breadcrumb__label--opens-in-new-window">
                      . ${i18nTargetOpensInNewWindow[this._currentLanguage]}
                    </span>`
                  : nothing}
              </span>`
            : nothing
        }
        ${
          !this._hasText
            ? html` <span hidden>
                <slot
                  @slotchange="${(event: Event): void => this._onLabelSlotChange(event)}"
                ></slot>
              </span>`
            : nothing
        }
      </${unsafeStatic(TAG_NAME)}>
    `;
    /* eslint-disable lit/binding-positions */
  }
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'sbb-breadcrumb': SbbBreadcrumb;
  }
}