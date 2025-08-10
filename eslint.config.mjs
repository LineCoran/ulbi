import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // Правила для импортов
      "quotes": ["error", "single"], // использовать одинарные кавычки
      "object-curly-spacing": ["error", "always"],
      "react/jsx-indent": ["error", 10],
    }
      // "import/order": ["error", { // сортировка импортов (опционально)
      //   "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      //   "newlines-between": "always"
      // }],

      // Дополнительные правила для TypeScript (если нужно)
      // "@typescript-eslint/type-annotation-spacing": ["error", {
      //   "before": false,
      //   "after": true
      // }]
  }
]);