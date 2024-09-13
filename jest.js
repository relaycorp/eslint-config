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
          allow: [
            'defaultStatus',
            'event',
            'find',
            'length',
            'name',
            'status',
            'screen',
          ],
          builtinGlobals: true,
        },
      ],

      'max-classes-per-file': 'off',
      'no-magic-numbers': 'off',
    },
  },

  {
    files: ['jest.config.js', 'jest.config.cjs'],

    languageOptions: {
      project: null,
      sourceType: 'script',
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
