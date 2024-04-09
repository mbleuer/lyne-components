import {
  type CSSResultGroup,
  html,
  isServer,
  LitElement,
  type PropertyValueMap,
  type TemplateResult,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { SbbNamedSlotListMixin, type WithListChildren } from '../../core/mixins/index.js';
import type { SbbTagElement } from '../tag/index.js';

import style from './tag-group.scss?lit&inline';

/**
 * It can be used as a container for one or more `sbb-tag`.
 *
 * @slot - Use the unnamed slot to add one or more 'sbb-tag' elements to the `sbb-tag-group`.
 */
@customElement('sbb-tag-group')
export class SbbTagGroupElement extends SbbNamedSlotListMixin<SbbTagElement, typeof LitElement>(
  LitElement,
) {
  public static override styles: CSSResultGroup = style;
  // DIV is added here due to special requirements from sbb.ch.
  protected override readonly listChildTagNames = ['SBB-TAG', 'DIV'];

  /**
   * This will be forwarded as aria-label to the inner list.
   */
  @property({ attribute: 'list-accessibility-label' }) public listAccessibilityLabel?: string;

  /**
   * If set multiple to false, the selection is exclusive and the value is a string (or null).
   * If set multiple to true, the selection can have multiple values and therefore value is an array.
   *
   * Changing multiple during run time is not supported.
   */
  @property({ type: Boolean }) public multiple = false;

  /**
   * Value of the sbb-tag-group.
   * If set multiple to false, the value is a string (or null).
   * If set multiple to true, the value is an array.
   */
  @property()
  public set value(value: string | string[] | null) {
    const tags = this.tags;
    if (isServer) {
      this._value = value;
    } else if (value === null) {
      tags.forEach((t) => (t.checked = false));
    } else if (this.multiple) {
      if (!Array.isArray(value) && tags.every((t) => t.value !== value)) {
        try {
          // If it is multiple mode and no tag matches the value, we try to parse the value as JSON.
          // This allows server side rendering to use array values to be passed to the client side.
          value = JSON.parse(value);
        } catch {
          /* empty */
        }
      }
      const valueAsArray = Array.isArray(value) ? value : [value];
      tags.forEach((t) => (t.checked = valueAsArray.includes(t.value ?? t.getAttribute('value'))));
    } else {
      if (!Array.isArray(value)) {
        tags.forEach((t) => (t.checked = (t.value ?? t.getAttribute('value')) === value));
      } else if (import.meta.env.DEV) {
        console.warn('value must not be set as an array in singular mode.', value);
      }
    }
  }
  public get value(): string | string[] | null {
    return isServer
      ? this._value
      : this.multiple
        ? this.tags.filter((t) => t.checked).map((t) => t.value)
        : this.tags.find((t) => t.checked)?.value ?? null;
  }
  private _value: string | string[] | null = null;

  /** The child instances of sbb-tag as an array. */
  public get tags(): SbbTagElement[] {
    return Array.from(this.querySelectorAll?.('sbb-tag') ?? []) as SbbTagElement[];
  }

  protected override willUpdate(changedProperties: PropertyValueMap<WithListChildren<this>>): void {
    super.willUpdate(changedProperties);
    if (
      (changedProperties.has('listChildren') || changedProperties.has('multiple')) &&
      !this.multiple
    ) {
      // Ensure only one tag checked
      this.tags
        .filter((tag) => tag.checked)
        .slice(1)
        .forEach((tag) => (tag.checked = false));
    }
    if (changedProperties.has('listAccessibilityLabel') && this.listAccessibilityLabel) {
      this.removeAttribute('role');
    } else {
      this.setAttribute('role', 'group');
    }
  }

  protected override render(): TemplateResult {
    return html`
      <div class="sbb-tag-group">
        ${this.renderList({
          class: 'sbb-tag-group__list',
          ariaLabel: this.listAccessibilityLabel,
        })}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'sbb-tag-group': SbbTagGroupElement;
  }
}
