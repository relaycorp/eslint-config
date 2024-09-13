import typescriptEslintPlugin from 'typescript-eslint';

export default [
  {
    ...typescriptEslintPlugin.configs.strictTypeChecked,
    files: ['*.ts', '*.tsx'],

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        project: 'tsconfig.json',
        sourceType: 'module',
      },
    },

    rules: {
      'require-await': 'off',
      '@typescript-eslint/require-await': 'error',

      'no-return-await': 'off',
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],

      'no-throw-literal': 'off',
      '@typescript-eslint/no-throw-literal': 'error',

      'no-void': ['error', { allowAsStatement: true }],
      '@typescript-eslint/no-floating-promises': 'error',

      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-this-alias': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      '@typescript-eslint/no-confusing-void-expression': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',

      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
          allowBoolean: false,
          allowAny: true,
          allowNullish: false,
        },
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['strictCamelCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          modifiers: ['global'],
          format: ['strictCamelCase', 'UPPER_CASE'],
        },
        {
          selector: 'objectLiteralProperty',
          format: ['strictCamelCase', 'UPPER_CASE'],
        },
        {
          selector: ['parameter'],
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['typeLike'],
          format: ['StrictPascalCase'],
        },
        {
          selector: ['enumMember'],
          format: ['UPPER_CASE'],
        },
        {
          selector: ['variable', 'parameter', 'accessor'],
          types: ['boolean'],
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
        },
      ],

      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [0, 1],
          enforceConst: true,
          ignoreDefaultValues: true,
          ignoreClassFieldInitialValues: true,
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
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'all',
          varsIgnorePattern: '^ignore$',
          argsIgnorePattern: '^ignore$',
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

      '@typescript-eslint/quotes': [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: false },
      ],

      'no-explicit-type-exports/no-explicit-type-exports': 'error',

      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-type-alias': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/class-methods-use-this': 'off',
      '@typescript-eslint/no-restricted-imports': 'off',
    },
  },

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
