module.exports = {
    extends: ['airbnb-base'],
    plugins: ['jest'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        'jest/globals': true
    },
    rules: {
        indent: ['error', 4, { 'SwitchCase': 1 }],
        semi: ['error', 'never'],
        'comma-dangle': 'off',
        'no-underscore-dangle': 'off',
        'import/no-extraneous-dependencies': 'off',
    },
    "parserOptions": {
        "ecmaVersion": 2022
    }
}
