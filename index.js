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
    "plugin:jsdoc/recommended",
  ],

  rules: {
    "@typescript-eslint/quotes": [
      "error",
      "single",
      {"avoidEscape": true, "allowTemplateLiterals": false}
    ]
  }
};
