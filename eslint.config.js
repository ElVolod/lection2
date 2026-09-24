import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  // 1. Базовые правила ESLint
  js.configs.recommended,
  // 2. Интеграция с Prettier
  eslintPluginPrettierRecommended,
  // 3. Ваше кастомное переопределение правил
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      'prettier/prettier': 'error',
    },
  },
];
