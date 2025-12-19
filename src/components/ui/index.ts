/**
 * @file components/ui/index.ts
 * @description Centralized barrel export for all UI atoms
 */

export { Button } from './Button'
export { Card, ServiceCard } from './Card'
export { Input } from './Input'
export { Badge } from './Badge'
export { ContactItem } from './ContactItem'
export { ProcessItem } from './ProcessItem'

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
export type { ContactItemProps } from './ContactItem'
export type { ProcessItemProps } from './ProcessItem'
