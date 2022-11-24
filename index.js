const jestRules = require('./jestRules.js');
const jsdocRules = require('./jsdoc.js');
const typescriptRules = require('./typescriptRules.js');

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
    "max-len": ["error", 100],
    "max-params": ["error", 7],
    "no-inline-comments": "off",
    ...typescriptRules,
    ...jsdocRules,
    ...jestRules,
  }
};
