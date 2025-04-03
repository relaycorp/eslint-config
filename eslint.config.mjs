import { defineConfig } from 'eslint/config';

import base from './index.js';

export default defineConfig([
  base,
  {
    ignores: ['package.json', 'package-lock.json'],
  },
  {
    rules: {
      'no-magic-numbers': 'off',
    },
  },
]);
