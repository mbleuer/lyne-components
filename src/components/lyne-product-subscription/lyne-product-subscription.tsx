import {
  Component,
  Element,
  h,
  Prop
} from '@stencil/core';
import { InterfaceProductSubscriptionAttributes } from './lyne-product-subscription.custom';

/**
 * @slot title - Slot used to render the title
 * @slot action - Slot used to render the link-button
 */

@Component({
  shadow: true,
  styleUrls: {
    default: 'styles/lyne-product-subscription.default.scss',
    shared: 'styles/lyne-product-subscription.shared.scss'
  },
  tag: 'lyne-product-subscription'
})

export class LyneProductSubscription {

  /** Lead text */
  @Prop() public lead!: string;

  /** Product subscription appearance */
  @Prop() public appearance?: InterfaceProductSubscriptionAttributes['appearance'] = 'primary';

  /** Detailed text */
  @Prop() public text?: string;

  /** Host element */
  @Element() private _hostElement: HTMLElement;

  private _hasTitleSlot: boolean;
  private _hasActionSlot: boolean;

  public componentWillLoad(): void {
    this._hasTitleSlot = Boolean(this._hostElement.querySelector('[slot="title"]'));
    this._hasActionSlot = Boolean(this._hostElement.querySelector('[slot="action"]'));
  }

  public render(): JSX.Element {
    return (
      <div
        class={
          `product-subscription product-subscription--${this.appearance}`
        }
      >
        <div class='product-subscription__content'>
          <div>
            {this._hasTitleSlot
              ? <div class='product-subscription__title'><slot name='title'/></div>
              : ''
            }
            <div class='product-subscription__lead'>
              {this.lead}
            </div>
            {this.text
              ? <div class='product-subscription__text'>{this.text}</div>
              : ''
            }
          </div>
        </div>
        {this._hasActionSlot
          ? <div class='product-subscription__action'><slot name='action'/></div>
          : ''
        }
      </div>
    );
  }
}
