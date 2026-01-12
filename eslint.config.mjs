import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import unicorn from "eslint-plugin-unicorn";
import sonarjs from "eslint-plugin-sonarjs";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  unicorn.configs["flat/recommended"],
  sonarjs.configs.recommended,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "coverage/**",
  ]),
  prettier,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/no-default-export": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
            camelCase: true,
          },
        },
      ],
      "unicorn/prevent-abbreviations": "off",
    },
  },
  {
    files: [
      "eslint.config.mjs",
      "next.config.ts",
      "vitest.config.ts",
      "postcss.config.mjs",
      "app/**/layout.tsx",
      "app/**/page.tsx",
      "app/**/error.tsx",
      "app/**/not-found.tsx",
      "app/**/loading.tsx",
      "app/**/route.ts",
      "app/**/template.tsx",
      "app/**/default.tsx",
    ],
    rules: {
      "import/no-default-export": "off",
    },
  },
]);

export default eslintConfig;
