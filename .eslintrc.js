module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react', 'react-hooks', 'eslint-plugin-import-helpers', 'testing-library'],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'newline-before-return': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import-helpers/order-imports': [
      2,
      {
        newlinesBetween: 'always',
        groups: [
          ['/^next/', 'module'],
          '/^@/styles/',
          '/^@/components/',
          '/^@/lib/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ],
    'no-console': 0,
    'no-useless-escape': 0,
    'no-unused-vars': 0
  }
};
