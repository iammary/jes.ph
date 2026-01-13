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
        'vitest.setup.ts',
        'next.config.ts',
        '**/*.test.tsx',
        '**/*.test.ts',
        'styles/**',
      ],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 25,
        statements: 70,
        '**/!(Scene.tsx|FallingLeaves.tsx)': {
          lines: 95,
          functions: 95,
          branches: 95,
          statements: 95,
        },
        'layout/Scene.tsx': {
          lines: 55,
          functions: 35,
          branches: 10,
          statements: 55,
        },
        '**/layout/FallingLeaves.tsx': {
          lines: 70,
          functions: 87,
          branches: 42,
          statements: 69,
        },
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './'),
    },
  },
})
