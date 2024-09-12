import eslint from '@eslint/js';

export default [
  eslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...eslint.configs.recommended.globals,
        node: true,
      },
    },
  },
];
