import stylisticJsPlugin from '@stylistic/eslint-plugin-js';
import stylisticTsPlugin from '@stylistic/eslint-plugin-ts';
import arrayFuncPlugin from 'eslint-plugin-array-func';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import promisePlugin from 'eslint-plugin-promise';
import putoutPlugin from 'eslint-plugin-putout/config';
import regexpPlugin from 'eslint-plugin-regexp';
import unicornPlugin from 'eslint-plugin-unicorn';

export default [
  promisePlugin.configs['flat/recommended'],
  unicornPlugin.configs['flat/recommended'],
  arrayFuncPlugin.configs.all,
  ...putoutPlugin.recommended,
  perfectionistPlugin.configs['recommended-natural'],
  regexpPlugin.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      '@stylistic/js': stylisticJsPlugin,
      '@stylistic/ts': stylisticTsPlugin,
    },

    linterOptions: {
      reportUnusedDisableDirectives: true,
    },

    ignores: [
      '!.*',

      '.git/',
      'node_modules/',
      'bower_components/',
      'jspm_packages/',
      '.npm/',
      'vendor/',

      'lib-cov/',
      'coverage/',
      '.nyc_output/',
      '.cache/',

      'build/',
      'dist/',
      'tmp/',

      '**/*.min.*',
      'package*.json',
    ],

    rules: {
      'accessor-pairs': 'error',
      'block-scoped-var': 'error',
      'camelcase': 'off',
      'consistent-return': 'error',
      'consistent-this': 'error',
      'constructor-super': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'dot-notation': 'error',
      'eqeqeq': 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'guard-for-in': 'error',
      'id-length': ['error', { max: 32, min: 2 }],
      'init-declarations': 'off',
      'line-comment-position': 'off',
      'lines-between-class-members': 'error',
      'max-classes-per-file': 'error',
      'max-depth': 'error',
      'max-lines': ['error', 800],
      'max-nested-callbacks': 'error',
      'max-params': ['error', 7],
      'max-statements': ['error', 20],
      'max-statements-per-line': 'error',
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'off',
      'no-bitwise': 'error',
      'no-buffer-constructor': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-console': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-constant-condition': 'error',
      'no-constructor-return': 'error',
      'no-continue': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': 'error',
      'no-empty-character-class': 'error',
      'no-empty-function': ['error', { allow: ['constructors'] }],
      'no-empty-pattern': 'error',
      'no-empty-static-block': 'error',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-import-assign': 'error',
      'no-inline-comments': 'off',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-object': 'error',
      'no-new-wrappers': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-setter-return': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-labels': 'error',
      'no-unused-private-class-members': 'error',
      'no-use-before-define': 'error',
      'no-useless-backreference': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'off',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'no-warning-comments': 'warn',
      'no-with': 'error',
      'object-shorthand': 'error',
      'operator-assignment': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'radix': 'error',
      'require-atomic-updates': 'error',
      'require-await': 'error',
      'require-unicode-regexp': 'error',
      'require-yield': 'error',
      'strict': 'error',
      'symbol-description': 'error',
      'yoda': ['error', 'never', { onlyEquality: true }],

      'array-callback-return': [
        'error',
        { allowImplicit: false, checkForEach: true },
      ],
      'complexity': ['error', { max: 10 }],
      'func-name-matching': ['error', { considerPropertyDescriptor: true }],
      'func-names': ['error', 'as-needed'],
      'func-style': 'off',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'logical-assignment-operators': [
        'error',
        'always',
        { enforceForIfStatements: true },
      ],
      'multiline-comment-style': ['error', 'separate-lines'],
      'no-cond-assign': ['error', 'always'],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
      'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
      'no-implicit-globals': ['error', { lexicalBindings: true }],
      'no-irregular-whitespace': ['error', { skipStrings: false }],
      'no-magic-numbers': [
        'error',
        {
          enforceConst: true,
          ignore: [0, 1],
          ignoreClassFieldInitialValues: true,
          ignoreDefaultValues: true,
        },
      ],
      'no-param-reassign': [
        'error',
        {
          ignorePropertyModificationsFor: [
            'accumulator',
            'ctx',
            'context',
            'req',
            'request',
            'res',
            'response',
            '$scope',
            'staticContext',
          ],
          props: true,
        },
      ],
      'no-return-assign': ['error', 'always'],
      'no-self-assign': ['error', { props: true }],
      'no-sequences': ['error', { allowInParentheses: false }],
      'no-shadow': [
        'error',
        {
          allow: ['defaultStatus', 'event', 'find', 'length', 'name', 'status'],
          builtinGlobals: true,
        },
      ],
      'no-undef': ['error', { typeof: true }],
      'no-underscore-dangle': [
        'error',
        {
          allow: ['_id'],
          enforceInClassFields: true,
          enforceInMethodNames: true,
        },
      ],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
      'no-unsafe-optional-chaining': [
        'error',
        { disallowArithmeticOperators: true },
      ],
      'no-unused-expressions': ['error', { enforceForJSX: true }],
      'no-unused-vars': [
        'error',
        {
          args: 'none',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          vars: 'all',
          varsIgnorePattern: '^ignore$',
        },
      ],
      'one-var': ['error', 'never'],
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'spaced-comment': ['error', 'always', { block: { balanced: true } }],
      'use-isnan': [
        'error',
        { enforceForIndexOf: true, enforceForSwitchCase: true },
      ],
      'valid-typeof': ['error', { requireStringLiterals: true }],

      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: '*', prev: '*' },
        { blankLine: 'any', next: 'expression', prev: 'expression' },
        { blankLine: 'always', next: 'iife', prev: 'iife' },
        { blankLine: 'any', next: ['case'], prev: '*' },
        { blankLine: 'any', next: 'directive', prev: 'directive' },
        { blankLine: 'any', next: 'const', prev: 'const' },
        { blankLine: 'any', next: 'let', prev: 'let' },
        { blankLine: 'any', next: 'var', prev: 'var' },
        { blankLine: 'any', next: 'import', prev: 'import' },
        { blankLine: 'any', next: 'export', prev: 'export' },
        {
          blankLine: 'always',
          next: ['cjs-import', 'cjs-export'],
          prev: '*',
        },
        {
          blankLine: 'always',
          next: '*',
          prev: ['cjs-import', 'cjs-export'],
        },
        { blankLine: 'any', next: 'cjs-import', prev: 'cjs-import' },
        { blankLine: 'any', next: 'cjs-export', prev: 'cjs-export' },
      ],

      'no-restricted-syntax': [
        'error',
        {
          message:
            'The comma operator is confusing and a common mistake. Don’t use it!',
          selector: 'SequenceExpression',
        },
      ],

      'perfectionist/sort-classes': [
        'error',
        {
          groups: [
            'index-signature',
            'static-property',
            ['property', 'accessor-property'],
            ['protected-property', 'protected-accessor-property'],
            ['private-property', 'private-accessor-property'],
            'static-block',
            'constructor',
            ['get-method', 'set-method'],
            'static-method',
            'method',
            'protected-method',
            'private-method',
            'unknown',
          ],
        },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'unknown'],
        },
      ],
      'perfectionist/sort-objects': ['error', { partitionByNewLine: true }],

      'putout/align-spaces': 'off',
      'putout/function-declaration-paren-newline': 'off',
      'putout/keyword-spacing': 'off',
      'putout/long-properties-destructuring': 'off',
      'putout/objects-braces-inside-array': 'off',
      'putout/putout': [
        'error',
        {
          rules: {
            'conditions/apply-consistent-blocks': 'off',
            'new/remove-useless': 'off',
            'nodejs/declare': 'off',
            'remove-useless-constructor': 'off',
          },
        },
      ],
      'putout/remove-empty-newline-after-import': 'off',
      'putout/single-property-destructuring': 'off',

      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/prevent-abbreviations': 'off',

      '@stylistic/js/indent': 'off',
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/ts/indent': 'off',
      '@stylistic/ts/object-curly-spacing': ['error', 'always'],
    },
  },

  {
    files: ['package.json'],
    rules: {
      // Silence error about using 'plugin:putout/esm' as it doesn't work with ESLint flat configs
      'putout/putout': 'off',
    },
  },
];
