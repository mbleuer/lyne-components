import { SbbTrainWagon } from './sbb-train-wagon';
import { newSpecPage } from '@stencil/core/testing';

async function assertAriaLabel(
  properties: Partial<
    Pick<
      HTMLSbbTrainWagonElement,
      | 'type'
      | 'occupancy'
      | 'sector'
      | 'blockedPassage'
      | 'wagonClass'
      | 'label'
      | 'additionalAccessibilityText'
    >
  >,
  assertArray: string[] = []
): Promise<void> {
  const attributes = [
    'type',
    'occupancy',
    'sector',
    'blockedPassage',
    'wagonClass',
    'label',
    'additionalAccessibilityText',
  ]
    .map((property) => {
      const value = properties[property];
      // Convert camelCase to kebab-case
      const attributeName = property.replace(
        /[A-Z]+(?![a-z])|[A-Z]/g,
        ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
      );
      return value ? `${attributeName}="${value}"` : attributeName;
    })
    .join(' ');

  const { root } = await newSpecPage({
    components: [SbbTrainWagon],
    html: `<sbb-train-wagon ${attributes}/>`,
  });

  // Select all accessibility relevant text parts
  const accessibilityTexts = Array.from(
    root.shadowRoot.querySelectorAll(
      '[aria-hidden=false], [aria-label]:not(.sbb-train-wagon__icons-list), .sbb-screenreaderonly:not(.sbb-train-wagon__label > span)'
    )
  ).map((entry) =>
    entry.hasAttribute('aria-label') ? entry.getAttribute('aria-label') : entry.textContent
  );

  expect(accessibilityTexts).toEqual(assertArray);
}

describe('sbb-train-wagon', () => {
  describe('render', () => {
    it('should render as type wagon', async () => {
      const { root } = await newSpecPage({
        components: [SbbTrainWagon],
        html: '<sbb-train-wagon occupancy="unknown" wagon-class="1" type="wagon" label="38" blocked-passage="previous"/>',
      });

      expect(root).toEqualHtml(`
        <sbb-train-wagon data-has-visible-wagon-content blocked-passage="previous" label="38" occupancy="unknown" type="wagon" wagon-class="1">
          <mock:shadow-root>
            <div class="sbb-train-wagon">
              <ul aria-label="Train coach" class="sbb-train-wagon__compartment">
                <li class="sbb-train-wagon__label" aria-hidden="false">
                  <span class="sbb-screenreaderonly">Number, </span>
                  38
                </li>
                <li class="sbb-train-wagon__class">
                  <span class="sbb-screenreaderonly">First Class</span>
                  <span aria-hidden="true">1</span>
                </li>
                <sbb-icon
                  class="sbb-train-wagon__occupancy"
                  role="listitem"
                  name="utilization-none"
                  aria-hidden="false"
                  aria-label="No occupancy forecast available"
                ></sbb-icon>
                <li class="sbb-screenreaderonly">No passage to the previous train coach</li>
              </ul>
              <span class="sbb-train-wagon__icons" hidden>
                <span class="sbb-train-wagon__icons-item" hidden><slot></slot></span>
              </span>
            </div>
          </mock:shadow-root>
        </sbb-train-wagon>
      `);
    });

    it('should render as type wagon with one icon', async () => {
      const { root } = await newSpecPage({
        components: [SbbTrainWagon],
        html: '<sbb-train-wagon><sbb-icon name="sa-rs"></sbb-icon></sbb-train-wagon>',
      });

      expect(root).toEqualHtml(`
        <sbb-train-wagon data-has-visible-wagon-content type="wagon">
          <mock:shadow-root>
            <div class="sbb-train-wagon">
              <ul
                aria-label="Train coach"
                class="sbb-train-wagon__compartment"
              >
                <sbb-icon aria-hidden="false" aria-label="No occupancy forecast available" class="sbb-train-wagon__occupancy" name="utilization-none" role="listitem"></sbb-icon>
              </ul>
              <span class="sbb-train-wagon__icons">
                <span class="sbb-train-wagon__icons-item">
                  <span class="sbb-screenreaderonly">Additional wagon information</span>
                  <slot></slot>
                </span>
              </span>
            </div>
          </mock:shadow-root>
          <sbb-icon name="sa-rs"></sbb-icon>
        </sbb-train-wagon>
      `);
    });

    it('should render as type wagon with multiple icons', async () => {
      const { root } = await newSpecPage({
        components: [SbbTrainWagon],
        html: '<sbb-train-wagon><sbb-icon name="sa-rs"></sbb-icon><sbb-icon name="sa-rs"></sbb-icon></sbb-train-wagon>',
      });

      expect(root).toEqualHtml(`
        <sbb-train-wagon data-has-visible-wagon-content type="wagon">
          <mock:shadow-root>
            <div class="sbb-train-wagon">
              <ul
                aria-label="Train coach"
                class="sbb-train-wagon__compartment"
              >
                <sbb-icon aria-hidden="false" aria-label="No occupancy forecast available" class="sbb-train-wagon__occupancy" name="utilization-none" role="listitem"></sbb-icon>
              </ul>
              <span class="sbb-train-wagon__icons">
                <ul aria-label="Additional wagon information" class="sbb-train-wagon__icons-list">
                  <li class="sbb-train-wagon__icons-item">
                    <slot name="sbb-train-wagon-icon-0"></slot>
                  </li>
                  <li class="sbb-train-wagon__icons-item">
                    <slot name="sbb-train-wagon-icon-1"></slot>
                  </li>
                </ul>
                <span class="sbb-train-wagon__icons-item" hidden>
                  <slot></slot>
                </span>
              </span>
            </div>
          </mock:shadow-root>
          <sbb-icon name="sa-rs" slot="sbb-train-wagon-icon-0"></sbb-icon>
          <sbb-icon name="sa-rs" slot="sbb-train-wagon-icon-1"></sbb-icon>
        </sbb-train-wagon>
      `);
    });

    it('should render as type locomotive', async () => {
      const { root } = await newSpecPage({
        components: [SbbTrainWagon],
        html: '<sbb-train-wagon type="locomotive" additional-accessibility-text="Top of the train"/>',
      });

      expect(root).toEqualHtml(`
        <sbb-train-wagon type="locomotive" additional-accessibility-text="Top of the train">
          <mock:shadow-root>
            <div class="sbb-train-wagon">
              <span class="sbb-train-wagon__compartment">
                <span class="sbb-screenreaderonly">
                  Locomotive
                </span>
                <span aria-hidden="true" class="sbb-train-wagon__label"></span>
                <svg class="sbb-train-wagon__locomotive" aria-hidden="true" width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7906 4.42719C19.9743 1.93152 23.129 0.5 26.4452 0.5H53.5548C56.871 0.5 60.0257 1.93152 62.2094 4.4272L76.2094 20.4272C82.7157 27.8629 77.4351 39.5 67.5548 39.5H12.4452C2.56489 39.5 -2.71566 27.8629 3.79058 20.4272L17.7906 4.42719Z" stroke="var(--sbb-train-wagon-shape-color-closed)"></path></svg>
              </span>
              <span class="sbb-screenreaderonly">
                , Top of the train
              </span>

            </div>
          </mock:shadow-root>
        </sbb-train-wagon>
      `);
    });

    it('should render as type closed wagon without number', async () => {
      const { root } = await newSpecPage({
        components: [SbbTrainWagon],
        html: '<sbb-train-wagon type="closed" />',
      });

      expect(root).toEqualHtml(`
        <sbb-train-wagon type="closed">
          <mock:shadow-root>
            <div class="sbb-train-wagon">
              <span class="sbb-train-wagon__compartment">
                <span class="sbb-screenreaderonly">
                  Closed train coach
                </span>
                <span aria-hidden="true" class="sbb-train-wagon__label"></span>
              </span>
            </div>
          </mock:shadow-root>
        </sbb-train-wagon>
      `);
    });
  });

  it('should set aria labels correctly', async () => {
    await assertAriaLabel({}, []);
    await assertAriaLabel({ type: 'locomotive' }, ['Locomotive']);
    await assertAriaLabel({ type: 'closed', additionalAccessibilityText: `Don't enter` }, [
      'Closed train coach',
      `, Don't enter`,
    ]);
    await assertAriaLabel({ type: 'wagon' }, ['Train coach']);

    await assertAriaLabel({ sector: 'A', type: 'locomotive' }, ['Locomotive, Sector, A']);
    await assertAriaLabel({ sector: 'A', type: 'closed' }, ['Closed train coach, Sector, A']);
    await assertAriaLabel({ sector: 'A', type: 'wagon' }, ['Train coach', 'Sector, A']);

    await assertAriaLabel(
      {
        sector: 'A',
        type: 'wagon',
        label: '38',
        wagonClass: '1',
        occupancy: 'unknown',
        blockedPassage: 'previous',
      },
      [
        'Train coach',
        'Sector, A',
        'Number,\u00A038',
        'First Class',
        'No occupancy forecast available',
        'No passage to the previous train coach',
      ]
    );

    await assertAriaLabel({ type: 'wagon', wagonClass: '2' }, ['Train coach', 'Second Class']);

    await assertAriaLabel({ type: 'wagon', occupancy: 'low' }, [
      'Train coach',
      'Low to medium occupancy expected',
    ]);
    await assertAriaLabel({ type: 'wagon', occupancy: 'medium' }, [
      'Train coach',
      'High occupancy expected',
    ]);
    await assertAriaLabel({ type: 'wagon', occupancy: 'high' }, [
      'Train coach',
      'Very high occupancy expected',
    ]);

    await assertAriaLabel({ type: 'wagon', blockedPassage: 'next' }, [
      'Train coach',
      'No passage to the next train coach',
    ]);
    await assertAriaLabel({ type: 'wagon', blockedPassage: 'both' }, [
      'Train coach',
      'No passage to the next and previous train coach',
    ]);
    await assertAriaLabel({ type: 'wagon', blockedPassage: 'none' }, ['Train coach']);
  });
});