module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:jsdoc/recommended',
    'plugin:prettier-vue/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'vue',
    'import',
    'promise',
    'jsdoc',
    'prettier-vue',
    '@typescript-eslint',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
    },
    ecmaVersion: 12,

    tsConfigRootDir: __dirname,
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },

  settings: {
    jsdoc: {
      mode: 'typescript',
    },
    'prettier-vue': {
      SFCBlocks: {
        template: false,
        script: false,
      },
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    DEVELOPMENT: true,
    PRODUCTION: true,
    PROXY: true,
  },
  rules: {
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'no-debugger': 'warn',
    'no-console': ['warn', {
      allow: [
        'warn',
        'error',
      ],
    }],
    'semi': 'error',
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'keyword-spacing': ['error', { 'before': true }],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    // Vue Plugin ------------------------------------------------------------------------------------------------------
    'vue/no-v-html': 'off',
    'vue/block-tag-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/no-potential-component-option-typo': 'warn',
    'vue/singleline-html-element-content-newline': 'warn',
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/padding-line-between-tags': ['warn', [{ 'blankLine': 'always', 'prev': 'div', 'next': '*' }]],
    'vue/html-end-tags': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/keyword-spacing': 'error',
    'vue/html-self-closing': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/html-quotes': ['error', 'double'],
    'vue/max-len': ['error', { 'code': 180 }],
    'vue/first-attribute-linebreak': ['error', {
      'singleline': 'ignore',
      'multiline': 'below'
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/order-in-components': ['error', {
      order: [
        'name',
        ['props', 'propsData'],
        'emits',
        'components',
        'mixins',
        'ROUTER_GUARDS',
        'LIFECYCLE_HOOKS',
        'methods',
        'computed',
        'data',
        'filters',
        'watch',
      ],
    }],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION', //  'is', 'v-is'
        'LIST_RENDERING', // 'v-for item in items'
        'CONDITIONALS', // 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
        'RENDER_MODIFIERS', // 'v-once', 'v-pre'
        'SLOT', // 'v-slot'
        'OTHER_DIRECTIVES', // 'v-custom-directive'
        'TWO_WAY_BINDING', // 'v-model'
        'EVENTS', // '@click="functionCall"', 'v-on="event"'
        'OTHER_ATTR', // 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
        'CONTENT', // 'v-text', 'v-html'
        'UNIQUE', //'ref', 'key'
        'GLOBAL', //  'id'
      ],
      alphabetical: true,
    }],
    'vue/attribute-hyphenation': ['error', 'never', {
      ignore: [],
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 0,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'never',
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 0,
      ignores: [],
    }],
    // Import Plugin  --------------------------------------------------------------------------------------------------
    'import/no-unresolved': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    'import/first': 'off',
    'import/prefer-default-export': 'off',
    // Jsdoc Plugin ----------------------------------------------------------------------------------------------------
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-property': 'off',
    'jsdoc/require-property-description': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/check-tag-names': ['warn', { definedTags: ['satisfies'] }],
    'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
    // Prettier Plugin -------------------------------------------------------------------------------------------------
    'prettier-vue/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        'prettier-vue/prettier': 'off',
        'max-len': ['error', { 'code': 180 }],
        'indent': ['error', 2],
      },
    },
  ],
};
