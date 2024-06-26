import type { TemplateResult } from 'lit';

import { isHydratedSsr, isNonHydratedSsr } from '../platform.js';
import { waitForLitRender } from '../wait-for-render.js';

// Copied from @lit-labs/testing/lib/fixtures/fixture-options.d.ts
interface FixtureOptions {
  /**
   * Array of relative module paths to be imported before rendering. Normally
   * would contain custom element definitions.
   */
  modules: string[];
  /**
   * Base url for resolving module paths. If not provided, will guess the
   * location based on call stack to have the same effect as passing in
   * `import.meta.url`.
   */
  base?: string;
}

/**
 * We want to dynamically use the correct fixture from Lit testing for the current context.
 * However, currently @lit-labs/testing/fixtures.js also loads the Lit hydration logic
 * which mutates LitElement, which breaks the use case for non hydration.
 * Due to this, we first need to load the components and only once that is done, import
 * the fixture.
 * We also patch the name property of this function, to reflect the correct function name
 * of the original fixture.
 */
export const fixture = Object.defineProperty(
  async <T extends HTMLElement>(
    template: TemplateResult,
    options: FixtureOptions = { modules: [] },
  ): Promise<T> => {
    // PlayWright with WebKit does not include wtr-session-id in stack trace.
    // As an alternative, we look for the first file in the stack trace that is not part of
    // node_modules and not in /core/testing/.
    // See https://github.com/lit/lit/issues/4067
    const { stack } = new Error();
    options.base ??= [...stack!.matchAll(/http:\/\/localhost:?[^:)]+/gm)]
      .map((m) => m[0])
      .find((u) => !u.includes('/node_modules/') && !u.includes('/core/testing/'));
    options.modules.unshift('/src/components/core/testing/test-setup-ssr.ts');
    const fixtures = await import('@lit-labs/testing/fixtures.js');
    let result: T;
    if (isHydratedSsr()) {
      result = await fixtures.ssrHydratedFixture<T>(template, options);
      result
        .parentElement!.querySelectorAll('[defer-hydration]')
        .forEach((e) => e.removeAttribute('defer-hydration'));
      return result;
    } else if (isNonHydratedSsr()) {
      result = await fixtures.ssrNonHydratedFixture<T>(template, options);
    } else {
      result = await fixtures.csrFixture<T>(template, options);
    }
    await waitForLitRender(result);
    return result;
  },
  'name',
  {
    get() {
      if (isHydratedSsr()) {
        return 'ssrHydratedFixture';
      } else if (isNonHydratedSsr()) {
        return 'ssrNonHydratedFixture';
      } else {
        return 'csrFixture';
      }
    },
  },
);
