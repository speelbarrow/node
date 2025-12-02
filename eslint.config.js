// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook"

import { FlatCompat } from "@eslint/eslintrc"

import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

export default [pluginJs.configs.recommended, ...tseslint.configs.recommended, {
  languageOptions: {
    globals: globals.browser,
  },
  plugins: {
    "@stylistic/ts": stylistic,
  },
  rules: {
    "prefer-const": ["error", {
      destructuring: "all"
    }],

    "@stylistic/ts/comma-dangle": ["warn", "always-multiline"],
    "@stylistic/ts/max-len": ["warn", 100, 2],
    "@stylistic/ts/quotes": ["warn", "double", {
      "avoidEscape": true,
    }],
    "@stylistic/ts/semi": ["warn", "never"],

    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    // Covered by TypeScript compiler
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
  },
}, ...storybook.configs["flat/recommended"]];
