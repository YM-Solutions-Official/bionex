/**
 * @file components/ui/index.ts
 * @description Centralized barrel export for all UI atoms
 */

export { Button } from './Button'
export { Card, ServiceCard } from './Card'
export { Input } from './Input'
export { Badge } from './Badge'

export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  CardProps,
  CardVariant,
  ServiceCardProps,
  InputProps,
  BadgeProps,
} from '@/lib/types'
