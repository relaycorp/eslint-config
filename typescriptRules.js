module.exports = {
    "etc/no-enum": "off",

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
            "selector": ["typeLike", "enumMember"],
            "format": ["StrictPascalCase"]
        },
        {
            "selector": ["variable", "parameter", "property", "accessor"],
            "types": ["boolean"],
            "format": ["PascalCase"],
            "prefix": ["is", "has", "are", "can", "did"]
        }
    ],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": [
        "error",
        {ignoreInferredTypes: true}
    ],
    "@typescript-eslint/quotes": [
        "error",
        "single",
        {"avoidEscape": true, "allowTemplateLiterals": false}
    ],
}
