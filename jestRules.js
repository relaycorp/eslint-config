module.exports = {
    "jest/consistent-test-it": [
        'error',
        {fn: 'test', withinDescribe: 'test'}
    ],
    "jest/prefer-expect-assertions": "off",
    "jest/prefer-lowercase-title": "off",

    // We'd leave this enabled ideally, but we just have too much code using hooks today
    "jest/no-hooks": "off",

    "jest-formatting/padding-around-all": "off",
    'jest-formatting/padding-around-after-all-blocks': 2,
    'jest-formatting/padding-around-after-each-blocks': 2,
    'jest-formatting/padding-around-before-all-blocks': 2,
    'jest-formatting/padding-around-before-each-blocks': 2,
    'jest-formatting/padding-around-describe-blocks': 2,
    'jest-formatting/padding-around-test-blocks': 2,
}
