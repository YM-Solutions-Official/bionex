/**
 * @file lib/constants/stats.constants.ts
 * @description Statistics and metrics constants
 */

import type { EventStat } from '@/lib/types'

export const EVENT_STATS: EventStat[] = [
  {
    icon: '🔬',
    label: 'Experiments Conducted',
    value: 450,
    suffix: '+',
    description: 'Verified scientific trials',
  },
  {
    icon: '📜',
    label: 'Research Citations',
    value: 12,
    suffix: 'k',
    description: 'Global academic impact',
  },
  {
    icon: '🧪',
    label: 'Formulas Developed',
    value: 95,
    suffix: '',
    description: 'Patented chemical solutions',
  },
  {
    icon: '⚛️',
    label: 'Physics Simulations',
    value: 1.2,
    suffix: 'M',
    description: 'Compute hours logged',
  },
]
