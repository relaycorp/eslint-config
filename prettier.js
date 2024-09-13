export default [
  {
    rules: {
      'arrow-body-style': 'error',
      'curly': 'error',
      'no-tabs': 'error',

      'lines-around-comment': 'off',
      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
          tabWidth: 2,
        },
      ],
      'quotes': ['error', 'single', { avoidEscape: true }],
    },
  },
];
