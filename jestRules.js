module.exports = {
    "jest/consistent-test-it": [
        'error',
        {fn: 'test', withinDescribe: 'test'}
    ],
    "jest/prefer-expect-assertions": "off",
    "jest/prefer-lowercase-title": "off",
    "jest/no-conditional-in-test": "off", // Often incompatible with expect.toSatisfy()
    "jest/no-duplicate-hooks": "off",
    "jest/require-top-level-describe": "off",

    // We'd leave this enabled ideally, but we just have too much code using hooks today
    "jest/no-hooks": "off",
    "jest/require-hook": "off",

    'jest-formatting/padding-around-describe-blocks': "error",
    'jest-formatting/padding-around-test-blocks': "error",
}
