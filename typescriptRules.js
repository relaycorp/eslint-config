module.exports = {
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/parameter-properties": ["error", {"prefer": "parameter-property"}],
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/lines-around-comment": [
        "error",
        {
            "beforeBlockComment": true,
            "beforeLineComment": true,
            "allowBlockStart": true,
            "allowObjectStart": true,
            "allowInterfaceStart": true,
            "allowEnumStart": true,
            "allowArrayStart": true,
            "allowClassStart": true
        }
    ]
}
