const jestRules = require('jestRules');
const typescriptEslintRules = require('typescriptEslintRules');

module.exports = {
  env: {
    es6: true,
    browser: false,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },

  plugins: ["jsdoc"],

  extends: [
    "hardcore",
    "hardcore/ts",
    "hardcore/node",
    'hardcore/jest',
    "plugin:jsdoc/recommended",
  ],

  rules: {
    ...typescriptEslintRules,
    ...jestRules,
  }
};
