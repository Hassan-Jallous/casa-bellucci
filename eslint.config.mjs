import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    '_archive/**',
    // Vendor / third-party assets (not project source).
    'public/**',
    'php-backend/**',
    'scripts/**',
    'next-env.d.ts',
  ]),
  {
    // Static export + custom CSS: next/image is intentionally not used
    // (images.unoptimized, asset() helper, existing class-based markup).
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]);

export default eslintConfig;
