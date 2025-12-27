//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: [
      'eslint.config.js',
      'prettier.config.js',
      'tailwind.config.js',
      'vite.config.js',
    ],
  },
  ...tanstackConfig,
  {
    plugins: {
      '@stylistic': stylistic,
    },
  },
]
