import jsonPlugin from 'eslint-plugin-json';
import securityPlugin from 'eslint-plugin-security';
import sonarjsPlugin from 'eslint-plugin-sonarjs';

import base from './base.js';
import prettier from './prettier.js';
import typescript from './ts.js';
import node from './node.js';
import jest from './jest.js';

export default [
  ...base,
  ...typescript,
  ...node,
  ...jest,
  jsonPlugin.configs.recommended,
  securityPlugin.configs.recommended,
  sonarjsPlugin.configs.recommended,
  ...prettier, // Should be last
];
