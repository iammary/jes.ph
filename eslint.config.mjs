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
    "vitest.setup.ts",
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
      "app/**/not-found.tsx",
      "app/**/robots.ts",
      "app/**/sitemap.ts",
    ],
    rules: {
      "import/no-default-export": "off",
    },
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);

export default eslintConfig;
