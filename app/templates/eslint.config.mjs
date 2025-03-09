import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import js from '@eslint/js';
<% if (linter === 'airbnb') { %>
import importPlugin from 'eslint-plugin-import';
<% } %>

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/dist/',
      'public/api-explorer/',
      '**/*.yaml',
      '**/*.yml',
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        globals: {
          ...globals.node,
          ...globals.mocha,
        },
      },
    plugins: {
      prettier,
      <% if (linter === 'airbnb') { %>
      import: importPlugin,
      <% } %>
    },
    rules: {
      'no-unused-vars': 'error',
    <% if (linter === 'airbnb') { %>
        // Core ESLint rules similar to Airbnb
        'no-var': 'error',
        'prefer-const': 'error',
        'no-undef': 'error',
        eqeqeq: ['error', 'always'],
        curly: ['error', 'all'],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],

        // Import plugin rules
        'import/no-unresolved': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'import/export': 'error',
        'import/order': [
            'error',
            { groups: ['builtin', 'external', 'internal'] },
        ],
    <% } %>
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          printWidth: 80,
        },
      ],
    },
  },
];
