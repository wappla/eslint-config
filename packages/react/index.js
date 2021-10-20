module.exports = {
    extends: ['airbnb'],
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
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/prop-types': 'off'
    },
    "parserOptions": {
        "ecmaVersion": 2021
    }
}
