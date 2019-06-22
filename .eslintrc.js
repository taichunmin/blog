module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/essential',
    '@vue/standard'
  ],
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'no-return-await': 0, // 0 = off, 1 = warn, 2 = error
    "comma-dangle": ["error", "only-multiline"],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    liff: true
  }
}
