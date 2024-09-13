export default [
  {
    rules: {
      'arrow-body-style': 'error',
      'no-tabs': 'error',
      'curly': 'error',

      'max-len': [
        'error',
        {
          code: 100,
          ignoreComments: true,
          tabWidth: 2,
        },
      ],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'lines-around-comment': 'off',
    },
  },
];
