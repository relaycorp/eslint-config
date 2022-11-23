module.exports = {
    "env": {
        "es6": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-import",
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "eslint-plugin-unicorn",
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
};
