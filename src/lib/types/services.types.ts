/**
 * @file services.types.ts
 * @description Service domain types
 */

import type { LucideIcon } from 'lucide-react'

export interface Service {
  title: string
  description: string
  bgColor: string
  icon: string
}

export interface ServiceListItem {
  title: string
  desc: string
  icon: LucideIcon
  bg: string
}
