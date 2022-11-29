const jestRules = require("./jestRules.js");
const jsdocRules = require("./jsdoc.js");
const nodejsRules = require("./nodejsRules.js");
const typescriptRules = require("./typescriptRules.js");

module.exports = {
  env: {
    browser: false,
    node: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },

  plugins: ["jsdoc"],

  extends: [
    "./base.json",
    "./prettier.json",
    "./ts.json",
    "hardcore/node",
    "./jest.json",
    "plugin:jsdoc/recommended",
  ],

  rules: {
    // TODO: Re-enable now that the following is fixed
    // https://github.com/EvgenyOrekhov/eslint-config-hardcore/issues/655
    "putout/putout": "off",

    ...typescriptRules,
    ...nodejsRules,
    ...jsdocRules,
    ...jestRules,
  },
};
