import jestRules from "./jestRules.js";
import jsdocRules from "./jsdoc.js";
import nodejsRules from "./nodejsRules.js";
import typescriptRules from "./typescriptRules.js";

export default {
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
    "./node.json",
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
