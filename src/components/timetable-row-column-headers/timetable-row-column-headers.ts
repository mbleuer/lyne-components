import { CSSResultGroup, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './timetable-row-column-headers.scss?lit&inline';

/**
 * Used in `sbb-timetable-row`, it displays row headers information for screen-readers.
 */
@customElement('sbb-timetable-row-column-headers')
export class SbbTimetableRowColumnHeaders extends LitElement {
  public static override styles: CSSResultGroup = style;

  /**
   * Stringified JSON which defines most of the
   * content of the component. Please check the
   * individual stories to get an idea of the
   * structure.
   */
  @property() public config!: string;

  protected override render(): TemplateResult {
    const columnHeaders = JSON.parse(this.config);

    return html`
      <div class="column-headers" role="none">
        ${columnHeaders.map(
          (columnHeader) => html` <div role="columnheader">${columnHeader}</div> `,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'sbb-timetable-row-column-headers': SbbTimetableRowColumnHeaders;
  }
}