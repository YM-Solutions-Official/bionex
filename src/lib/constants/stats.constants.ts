/**
 * @file lib/constants/stats.constants.ts
 * @description Statistics and metrics constants
 */

import type { EventStat } from '@/lib/types'

export const EVENT_STATS: EventStat[] = [
  {
    icon: '🚀',
    label: 'Projects Completed',
    value: 120,
    suffix: '+',
    description: 'Successful launches',
  },
  {
    icon: '⏳',
    label: 'Average Delivery Time',
    value: 6,
    suffix: 'w',
    description: 'Weeks per project',
  },
  {
    icon: '🤝',
    label: 'Clients Served',
    value: 85,
    suffix: '',
    description: 'Satisfied clients',
  },
  {
    icon: '🌐',
    label: 'Technologies Used',
    value: 15,
    suffix: '+',
    description: 'Modern frameworks & tools',
  },
]
