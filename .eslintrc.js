module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:@next/next/recommended"],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
    "requireConfigFile": false,
    "sourceType": "module",
    "babelOptions": {
        "presets": ["next/babel"]
    }
    },
    "rules": {
    }
};
