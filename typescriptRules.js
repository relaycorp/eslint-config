module.exports = {
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
    "@typescript-eslint/return-await": ["error", "in-try-catch"],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
    "@typescript-eslint/no-unsafe-assignment": "off",
}
