/**
 * @file lib/constants/approach.constants.ts
 * @description Approach steps and strategy constants
 */

import {
  Bot,
  Cpu,
  FlaskConical,
  Lightbulb,
  Rocket,
  Users,
} from 'lucide-react'
import type { ApproachStep, CTAButton, WayAheadCard } from '@/lib/types'

export const APPROACH_STEPS: Array<ApproachStep> = [
  {
    icon: Users,
    title: 'Hypothesize',
    description:
      'Identifying variables and establishing scientific questions through interdisciplinary peer review.',
    color: 'bg-blue-600',
  }
]

export const WAY_AHEAD_CARDS: Array<WayAheadCard> = [
  {
    icon: Bot,
    title: 'Bioreact with AI',
    description:
      'AI-guided bioreactor workflows for smarter monitoring and process decisions.',
    color: 'text-emerald-600',
  },
  {
    icon: Cpu,
    title: 'Nanobiotechnology',
    description: 'Atomic-scale engineering of medical delivery systems.',
    color: 'text-purple-600',
  },
  {
    icon: FlaskConical,
    title: 'Exobiology',
    description:
      'Searching for the chemical and physical signatures of life beyond Earth.',
    color: 'text-teal-600',
  },
]
export const CTA_BUTTONS: Array<CTAButton> = [
  {
    text: 'Schedule a demo',
    primary: true,
    iconName: 'ArrowRight',
    href: '/contact',
  },
  {
    text: 'Contact Us',
    primary: false,
    iconName: 'Phone',
    href: '/contact',
  },
]
