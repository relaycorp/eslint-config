import jsdoc from 'eslint-plugin-jsdoc';

export default [
  jsdoc.configs['flat/recommended-error'],
  {
    rules: {
      'jsdoc/check-tag-names': [
        'error',
        { definedTags: ['category', 'group'] },
      ],
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-returns-type': 'off',
    },
  },
];
