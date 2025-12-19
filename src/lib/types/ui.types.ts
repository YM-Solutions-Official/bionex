/**
 * @file ui.types.ts
 * @description Core UI component types and interfaces
 */

import type { ReactNode } from 'react'

/** Button component variants */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

/** Button component sizes */
export type ButtonSize = 'sm' | 'md' | 'lg'

/** Button component props interface */
export interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

/** Card component variants */
export type CardVariant = 'default' | 'elevated' | 'bordered' | 'ghost'

/** Card component props interface */
export interface CardProps {
  children: ReactNode
  variant?: CardVariant
  hover?: boolean
  className?: string
  onClick?: () => void
}

/** ServiceCard component props interface */
export interface ServiceCardProps extends CardProps {
  title: string
  description: string
  icon?: ReactNode
  badge?: string
  iconBg?: string
}

/** Input component props interface */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'ghost'
  error?: string
  label?: string
  hint?: string
}

/** Badge component props interface */
export interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}
