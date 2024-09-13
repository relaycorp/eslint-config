import eslintJsPlugin from '@eslint/js';
import nodePlugin from 'eslint-plugin-n';
import jsdoc from 'eslint-plugin-jsdoc';
import sortClassMembersPlugin from 'eslint-plugin-sort-class-members';

export default [
  eslintJsPlugin.configs.all,

  jsdoc.configs['flat/recommended-error'],

  nodePlugin.configs['flat/recommended-module'],
  {
    rules: {
      'n/no-callback-literal': 'error',
      'n/exports-style': 'error',
      'n/file-extension-in-import': 'error',
      'n/prefer-global/buffer': 'error',
      'n/prefer-global/console': 'error',
      'n/prefer-global/process': 'error',
      'n/prefer-global/text-decoder': 'error',
      'n/prefer-global/text-encoder': 'error',
      'n/prefer-global/url-search-params': 'error',
      'n/prefer-global/url': 'error',
      'n/prefer-promises/dns': 'error',
      'n/prefer-promises/fs': 'error',
      'n/callback-return': 'error',
      'n/global-require': 'error',
      'n/handle-callback-err': ['error', '^.*(e|E)rror'],
      'n/no-mixed-requires': 'error',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
      'n/no-process-env': 'error',
      'n/no-process-exit': 'error',
      'n/no-sync': 'error',
    },
  },

  sortClassMembersPlugin.configs['flat/recommended'],
  {
    rules: {
      'sort-class-members/sort-class-members': [
        'error',
        {
          groups: {
            'static-arrow-function-properties': [
              {
                static: true,
                propertyType: 'ArrowFunctionExpression',
              },
            ],
            'static-async-methods': [
              {
                static: true,
                type: 'method',
                async: true,
              },
            ],
            'static-accessor-pairs': [{ static: true, accessorPair: true }],
            'static-getters': [{ static: true, kind: 'get' }],
            'static-setters': [{ static: true, kind: 'set' }],
            'static-conventional-private-properties': [
              {
                static: true,
                type: 'property',
                name: '/_.+/',
              },
            ],
            'static-conventional-private-methods': [
              {
                static: true,
                type: 'method',
                name: '/_.+/',
              },
            ],
            'static-async-conventional-private-methods': [
              {
                static: true,
                type: 'method',
                name: '/_.+/',
                async: true,
              },
            ],
            'async-conventional-private-methods': [
              {
                type: 'method',
                name: '/_.+/',
                async: true,
              },
            ],
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
          accessorPairPositioning: 'getThenSet',
        },
      ],
    },
  },
];
