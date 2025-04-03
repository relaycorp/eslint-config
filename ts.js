import typescriptEslintPlugin from 'typescript-eslint';

export default [
  ...typescriptEslintPlugin.config({
    extends: [typescriptEslintPlugin.configs.strictTypeChecked],
    files: ['*.ts', '*.tsx'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        projectService: true,
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      '@typescript-eslint/require-await': 'error',
      'require-await': 'off',

      '@typescript-eslint/return-await': ['error', 'in-try-catch'],
      'no-return-await': 'off',

      '@typescript-eslint/no-floating-promises': 'error',
      'no-void': ['error', { allowAsStatement: true }],

      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowAny: true,
          allowBoolean: false,
          allowNullish: false,
          allowNumber: true,
        },
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['strictCamelCase'],
          selector: 'default',
        },
        {
          format: ['PascalCase'],
          selector: 'interface',
        },
        {
          format: ['strictCamelCase', 'UPPER_CASE'],
          modifiers: ['global'],
          selector: 'variable',
        },
        {
          format: ['strictCamelCase', 'UPPER_CASE'],
          selector: 'objectLiteralProperty',
        },
        {
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
          selector: ['parameter'],
        },
        {
          format: ['StrictPascalCase'],
          selector: ['typeLike'],
        },
        {
          format: ['UPPER_CASE'],
          selector: ['enumMember'],
        },
        {
          format: ['PascalCase'],
          prefix: [
            'is',
            'has',
            'are',
            'can',
            'do',
            'does',
            'did',
            'should',
            'was',
            'were',
          ],
          selector: ['variable', 'parameter', 'accessor'],
          types: ['boolean'],
        },
      ],

      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          enforceConst: true,
          ignore: [0, 1],
          ignoreClassFieldInitialValues: true,
          ignoreDefaultValues: true,
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: true,
        },
      ],

      '@typescript-eslint/no-unused-expressions': [
        'error',
        { enforceForJSX: true },
      ],

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          argsIgnorePattern: '^ignore$',
          caughtErrors: 'all',
          vars: 'all',
          varsIgnorePattern: '^ignore$',
        },
      ],

      '@typescript-eslint/no-shadow': 'error',

      '@typescript-eslint/prefer-readonly-parameter-types': 'off',

      '@typescript-eslint/no-use-before-define': [
        'error',
        { ignoreTypeReferences: false },
      ],

      '@typescript-eslint/restrict-plus-operands': 'error',

      '@typescript-eslint/no-meaningless-void-operator': [
        'error',
        { checkNever: true },
      ],

      '@typescript-eslint/consistent-indexed-object-style': [
        'error',
        'index-signature',
      ],

      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'allow-as-parameter',
        },
      ],

      '@typescript-eslint/prefer-nullish-coalescing': [
        'error',
        { ignoreTernaryTests: false },
      ],

      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],

      '@typescript-eslint/class-methods-use-this': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-restricted-imports': 'off',
      '@typescript-eslint/no-type-alias': 'off',
    },
  }),

  {
    files: [
      '**/test/**',
      '**/tests/**',
      '**/spec/**',
      '**/__tests__/**',
      '*.test.*',
      '*.spec.*',
      '*.e2e.*',
      '*.e2e-spec.*',
    ],

    rules: {
      '@typescript-eslint/no-shadow': [
        'error',
        {
          allow: ['jest'],
        },
      ],

      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
];
