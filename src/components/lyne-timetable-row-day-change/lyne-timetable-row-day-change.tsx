import {
  Component,
  h,
  Prop
} from '@stencil/core';

import getDocumentLang from '../../global/helpers/get-document-lang';

import {
  i18nAttention,
  i18nConnetionsDepartOn,
  i18nDayChange
} from '../../global/i18n';

@Component({
  shadow: false,
  styleUrls: {
    default: 'styles/lyne-timetable-row-day-change.default.scss',
    shared: 'styles/lyne-timetable-row-day-change.shared.scss'
  },
  tag: 'lyne-timetable-row-day-change'
})

export class LyneTimetableRowDayChange {

  private _currentLanguage = getDocumentLang();

  @Prop() public config!: string;

  public render(): JSX.Element {

    const config = JSON.parse(this.config);

    let attention = '';
    let dayChange = '';
    let visuallyHiddenClass = '';

    if (config.dayChange) {
      attention = `${i18nAttention[this._currentLanguage]}: `;
      dayChange = `${i18nDayChange[this._currentLanguage]}, `;
    }

    if (config.hidden) {
      visuallyHiddenClass = ' day-change--visually-hidden';
    }

    const departsOn = `${i18nConnetionsDepartOn[this._currentLanguage]} `;

    const visualText = `${config.day}, ${config.date}`;
    const a11yLabel = `${dayChange}${attention}${departsOn}${config.day}, ${config.date}`;

    return (
      <div
        class={`day-change${visuallyHiddenClass}`}

        /**
         * @ts-expect-error since we give the div a role gridcell we can
         * use colspan, which would normally be an invalid attribute on a div.
         */
        colspan={config.colSpan}
        role='gridcell'
      >
        <h2 class='day-change__text'>
          <span
            aria-hidden='true'
            class='day-change__text--visual'
            role='presentation'
          >
            {visualText}
          </span>
          <span
            aria-label={a11yLabel}
            class='day-change__text--visually-hidden'
            role='text'
          >
            {dayChange} {attention} {departsOn} {config.day}, {config.date}
          </span>
        </h2>
      </div>
    );
  }
}
