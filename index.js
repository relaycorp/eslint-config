const jestRules = require('./jestRules.js');
const jsdocRules = require('./jsdoc.js');
const nodejsRules = require('./nodejsRules.js');
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
    //region Built in rules
    "line-comment-position": "off",
    "max-len": ["error", 100],
    "max-params": ["error", 7],
    "no-inline-comments": "off",
    "id-length": ["error", {min: 2, max: 32}],
    "func-style": "off",
    "max-lines": ["error", 800],
    "max-statements": ["error", 20],
    "no-plusplus": ["error", {allowForLoopAfterthoughts: true}],
    //endregion

    // Work around https://github.com/EvgenyOrekhov/eslint-config-hardcore/issues/655
    "putout/putout": "off",

    ...typescriptRules,
    ...nodejsRules,
    ...jsdocRules,
    ...jestRules,
  }
};
