module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["airbnb/base"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/no-dynamic-require": "off",
        "global-require": "off"
    }
};