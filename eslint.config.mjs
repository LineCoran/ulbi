import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  i18next.configs['flat/recommended'],

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, "__dirname": true,"__IS_DEV__": true },
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // Правила для импортов
      "quotes": ["error", "single"], // использовать одинарные кавычки
      "object-curly-spacing": ["error", "always"],
      "react/jsx-indent": ["error", 4, {indentLogicalExpressions: true, checkAttributes: true }],
      "indent": ["error", 4],
      "react/button-has-type": "error",
      "no-unused-vars": ["error", {
        "vars": "all",
        "args": "none",
        "caughtErrors": "all",
        "ignoreRestSiblings": true,
        "ignoreUsingDeclarations": false,
        "reportUsedIgnorePattern": false,
        "destructuredArrayIgnorePattern": "^_"
      }],
      "react/no-deprecated": 'off',
    }
  },
]);