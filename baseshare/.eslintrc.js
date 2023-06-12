module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  plugins: [
    'nuxt',
    'vue',
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
  },
};
