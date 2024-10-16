import eslintJsPlugin from '@eslint/js';
import nodePlugin from 'eslint-plugin-n';

import jsdocConfig from './jsdoc.js';

export default [
  {
    ...eslintJsPlugin.configs.all,
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
  },

  ...jsdocConfig,

  nodePlugin.configs['flat/recommended-module'],
  {
    rules: {
      'n/callback-return': 'error',
      'n/exports-style': 'error',
      'n/file-extension-in-import': 'error',
      'n/global-require': 'error',
      'n/handle-callback-err': ['error', '^.*(e|E)rror'],
      'n/no-callback-literal': 'error',
      'n/no-mixed-requires': 'error',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/no-process-env': 'error',
      'n/no-process-exit': 'error',
      'n/no-sync': 'error',
      'n/no-unpublished-import': ['error', { ignoreTypeImport: true }],
      'n/prefer-global/buffer': 'error',
      'n/prefer-global/console': 'error',
      'n/prefer-global/process': 'error',
      'n/prefer-global/text-decoder': 'error',
      'n/prefer-global/text-encoder': 'error',
      'n/prefer-global/url': 'error',
      'n/prefer-global/url-search-params': 'error',
      'n/prefer-promises/dns': 'error',
      'n/prefer-promises/fs': 'error',
    },
  },
];
