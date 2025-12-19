/**
 * @file components/ui/Badge/Badge.tsx
 * @description Badge component for tags, labels, and status indicators
 */

import type { BadgeProps } from '@/lib/types'
import { cn } from '@/lib/utils'

const BADGE_VARIANTS = {
  default: 'bg-slate-100 text-slate-800',
  success: 'bg-emerald-100 text-emerald-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
}

const BADGE_SIZES = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-base',
}

/**
 * Badge component for displaying labels and status
 * @component
 * @example
 * <Badge variant="success" size="md">
 *   Active
 * </Badge>
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        BADGE_VARIANTS[variant],
        BADGE_SIZES[size],
        className,
      )}
    >
      {children}
    </span>
  )
}
