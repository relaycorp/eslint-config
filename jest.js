import jestPlugin from 'eslint-plugin-jest';

const TEST_FILE_GLOBS = [
  '**/test/**',
  '**/tests/**',
  '**/spec/**',
  '**/__tests__/**',
  '*.test.*',
  '*.spec.*',
  '*.e2e.*',
  '*.e2e-spec.*',
];

export default [
  {
    ...jestPlugin.configs['flat/all'],
    files: TEST_FILE_GLOBS,
  },

  {
    files: TEST_FILE_GLOBS,

    rules: {
      'no-shadow': [
        'error',
        {
          builtinGlobals: true,
          allow: [
            'defaultStatus',
            'event',
            'find',
            'length',
            'name',
            'status',
            'screen',
          ],
        },
      ],

      'no-magic-numbers': 'off',
      'max-classes-per-file': 'off',
    },
  },

  {
    files: ['jest.config.js', 'jest.config.cjs'],

    languageOptions: {
      sourceType: 'script',
      project: null,
    },

    rules: {
      'unicorn/prefer-module': 'off',
    },
  },

  {
    settings: {
      jest: {
        version: 29,
      },
    },
  },
];
