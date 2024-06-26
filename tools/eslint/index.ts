import type { TSESLint } from '@typescript-eslint/utils';

import * as customElementClassName from './custom-element-class-name-rule.js';
import * as customElementDecoratorPosition from './custom-element-decorator-position-rule.js';
import * as importExtensionRule from './import-extension-rule.js';
import * as missingComponentDocumentation from './missing-component-documentation-rule.js';

const plugin: Omit<Required<TSESLint.FlatConfig.Plugin>, 'processors'> = {
  meta: {
    name: 'lyne',
  },
  configs: {},
  rules: {
    [missingComponentDocumentation.name]: missingComponentDocumentation.rule,
    [customElementClassName.name]: customElementClassName.rule,
    [importExtensionRule.name]: importExtensionRule.rule,
    [customElementDecoratorPosition.name]: customElementDecoratorPosition.rule,
  },
};

plugin.configs!.recommended = {
  plugins: {
    lyne: plugin,
  },
  rules: Object.keys(plugin.rules!).reduce(
    (current, next) => Object.assign(current, { [`lyne/${next}`]: 'error' }),
    {} as TSESLint.FlatConfig.Rules,
  ),
};

export default plugin;
