/**
 * @file constants.types.ts
 * @description App-level constants and approach types
 */

import type { LucideIcon } from 'lucide-react'

export interface ApproachStep {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface WayAheadCard {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface CTAButton {
  text: string
  primary: boolean
  iconName: 'ArrowRight' | 'Phone'
  href: string
}
