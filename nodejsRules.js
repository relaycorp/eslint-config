module.exports = {
    "decorator-position/decorator-position": ["error", {properties: "above"}],

    "import/prefer-default-export": "off",

    "node/no-extraneous-import": ["error", {allowModules: ['@jest/globals']}],

    "unicorn/prefer-object-from-entries": "off",
    "unicorn/no-null": "off", // Sound idea but `null` is already used extensively in our codebase
    "unicorn/custom-error-definition": "off", // Good rule but conflicts with another that requires constant properties to be defined at the class level (instead of the constructor)
    "unicorn/consistent-function-scoping": "off",
};
