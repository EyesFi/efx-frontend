module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    // '@vue/standard'
  ],
  rules: {
    'no-debugger' : 'off',
     'no-unused-vars': 'warn',
    'vue/no-unused-vars': "off"
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}