module.exports = {
    "decorator-position/decorator-position": ["error", {properties: "above"}],

    "node/no-extraneous-import": ["error", {allowModules: ['@jest/globals']}],

    // Ugly workaround to support ESM. See:
    // https://github.com/import-js/eslint-plugin-import/issues/2170#issuecomment-1149473239
    "import/extensions": ["error", "always", {"ts": "never", "tsx": "never"}],
    "node/file-extension-in-import": ["error", "always"],
    "node/no-missing-import": "off",
};
