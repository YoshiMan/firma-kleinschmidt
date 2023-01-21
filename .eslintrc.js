module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@antfu',
    'vue-global-api',
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    // ESLint core rules
    // these are mostly the same as our Prettier config settings

    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'template-curly-spacing': ['error', 'always'],
    'multiline-comment-style': ['error', 'separate-lines'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'curly': ['error', 'all'],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'vue/require-explicit-emits': 'off',
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/custom-event-name-casing': ['error',
      'kebab-case',
    ],
    'vue/no-deprecated-functional-template': 'off',
  },
};
