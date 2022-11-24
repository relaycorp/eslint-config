const jestRules = require('jestRules');
const jsdocRules = require('jsdoc');
const typescriptRules = require('typescriptRules');

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
    "line-comment-position": "off",
    "max-len": 100,
    "no-inline-comments": "off",
    ...typescriptRules,
    ...jsdocRules,
    ...jestRules,
  }
};
