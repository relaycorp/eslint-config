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
    rules: {
      'jest/valid-expect': ['error', { alwaysAwait: true }],
      'jest/max-expects': ['error', { max: 10 }],
      'jest/no-restricted-matchers': [
        'error',
        {
          toMatchSnapshot: 'Use more targeted assertions instead of a snapshot',
          toMatchInlineSnapshot:
            'Use more targeted assertions instead of a snapshot',
          toThrowErrorMatchingSnapshot:
            'Use more targeted assertions instead of a snapshot',
          toThrowErrorMatchingInlineSnapshot:
            'Use more targeted assertions instead of a snapshot',

          toBeTruthy:
            'Use more explicit matchers like `.toBe(true)` or `.toBeGreaterThan(0)`. See https://docs.gitlab.com/ee/development/testing_guide/frontend_testing.html#avoid-using-tobetruthy-or-tobefalsy',
          toBeFalsy:
            'Use more explicit matchers like `.toBe(false)`, `.toBe(0)`, or `.toBeUndefined()`. See https://docs.gitlab.com/ee/development/testing_guide/frontend_testing.html#avoid-using-tobetruthy-or-tobefalsy',
          toBeDefined:
            'Use a more explicit matcher. See https://docs.gitlab.com/ee/development/testing_guide/frontend_testing.html#tricky-tobedefined-matcher',
        },
      ],
    },
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
