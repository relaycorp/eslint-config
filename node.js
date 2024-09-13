import eslintJsPlugin from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import nodePlugin from 'eslint-plugin-n';
import sortClassMembersPlugin from 'eslint-plugin-sort-class-members';

export default [
  eslintJsPlugin.configs.all,

  jsdoc.configs['flat/recommended-error'],

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

  sortClassMembersPlugin.configs['flat/recommended'],
  {
    rules: {
      'sort-class-members/sort-class-members': [
        'error',
        {
          accessorPairPositioning: 'getThenSet',
          groups: {
            'async-conventional-private-methods': [
              {
                async: true,
                name: '/_.+/',
                type: 'method',
              },
            ],
            'static-accessor-pairs': [{ accessorPair: true, static: true }],
            'static-arrow-function-properties': [
              {
                propertyType: 'ArrowFunctionExpression',
                static: true,
              },
            ],
            'static-async-conventional-private-methods': [
              {
                async: true,
                name: '/_.+/',
                static: true,
                type: 'method',
              },
            ],
            'static-async-methods': [
              {
                async: true,
                static: true,
                type: 'method',
              },
            ],
            'static-conventional-private-methods': [
              {
                name: '/_.+/',
                static: true,
                type: 'method',
              },
            ],
            'static-conventional-private-properties': [
              {
                name: '/_.+/',
                static: true,
                type: 'property',
              },
            ],
            'static-getters': [{ kind: 'get', static: true }],
            'static-setters': [{ kind: 'set', static: true }],
          },
          order: [
            '[static-properties]',
            '[static-arrow-function-properties]',
            '[static-accessor-pairs]',
            '[static-getters]',
            '[static-setters]',
            '[static-methods]',
            '[static-async-methods]',
            '[properties]',
            '[arrow-function-properties]',
            'constructor',
            '[accessor-pairs]',
            '[getters]',
            '[setters]',
            '[methods]',
            '[async-methods]',
            '[static-conventional-private-properties]',
            '[static-conventional-private-methods]',
            '[static-async-conventional-private-methods]',
            '[conventional-private-properties]',
            '[conventional-private-methods]',
            '[async-conventional-private-methods]',
          ],
        },
      ],
    },
  },
];
