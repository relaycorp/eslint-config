module.exports = {
    "etc/no-enum": "off",
    "etc/prefer-interface": "off",

    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/naming-convention": [
        "error",
        {
            "selector": "default",
            "format": ["strictCamelCase", "UPPER_CASE"]
        },
        {
            "selector": "function",
            "format": ["strictCamelCase", "StrictPascalCase"]
        },
        {
            "selector": ["typeLike"],
            "format": ["StrictPascalCase"]
        },
        {
            "selector": ["enumMember"],
            "format": ["UPPER_CASE"]
        },
        {
            "selector": ["variable", "parameter", "accessor"],
            "types": ["boolean"],
            "format": ["PascalCase"],
            "prefix": ["is", "has", "are", "can", "did", "should"]
        }
    ],
    "@typescript-eslint/parameter-properties": ["error", {"prefer": "parameter-property"}],
    "@typescript-eslint/prefer-readonly-parameter-types": "off", // Reports false positives
    "@typescript-eslint/consistent-type-assertions": [
        "error",
        { "assertionStyle": "as",objectLiteralTypeAssertions: 'allow-as-parameter' }
    ],
    "@typescript-eslint/return-await": ["error", "in-try-catch"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/quotes": [
        "error",
        "single",
        {"avoidEscape": true, "allowTemplateLiterals": false}
    ],
}
