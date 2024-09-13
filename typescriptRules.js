export default {
  '@typescript-eslint/init-declarations': 'off',
  '@typescript-eslint/lines-around-comment': [
    'error',
    {
      allowArrayStart: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowEnumStart: true,
      allowInterfaceStart: true,
      allowObjectStart: true,
      beforeBlockComment: true,
      beforeLineComment: true,
    },
  ],
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/parameter-properties': [
    'error',
    { prefer: 'parameter-property' },
  ],
};
