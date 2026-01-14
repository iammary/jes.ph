import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        '**/*.css',
        'vitest.setup.ts',
        'next.config.ts',
        '**/*.test.tsx',
        '**/*.test.ts',
        'scripts/**',
        '**/(Scene.tsx|FallingLeaves.tsx)'
      ],
      thresholds: {
        lines: 95,
        functions: 95,
        branches: 95,
        statements: 95,
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './'),
    },
  },
})
