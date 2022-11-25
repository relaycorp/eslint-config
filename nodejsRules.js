module.exports = {
    "decorator-position/decorator-position": ["error", {properties: "above"}],

    "import/prefer-default-export": "off",

    "node/no-extraneous-import": ["error", {allowModules: ['@jest/globals']}],

    "unicorn/prefer-object-from-entries": "off",
    "unicorn/no-null": "off", // Sound idea but `null` is already used extensively in our codebase
    "unicorn/custom-error-definition": "off", // Good rule but conflicts with another that requires constant properties to be defined at the class level (instead of the constructor)
    "unicorn/consistent-function-scoping": "off",

    // Ugly workaround to support ESM. See:
    // https://github.com/import-js/eslint-plugin-import/issues/2170#issuecomment-1149473239
    "import/extensions": ["error", "always", {"ts": "never", "tsx": "never"}],
    "node/file-extension-in-import": ["error", "always"],
    "node/no-missing-import": "off",
};
