/**
 * @file components/ui/Button/Button.tsx
 * @description Flexible, reusable button component with multiple variants
 */

import type { ButtonProps } from '@/lib/types'

/**
 * Button component with support for multiple variants and sizes
 * @component
 * @example
 * // Primary button with icon
 * <Button variant="primary" size="md" icon={<ArrowRight />} iconPosition="right">
 *   Click me
 * </Button>
 *
 * // Link as button
 * <Button variant="outline" href="/about">
 *   Learn more
 * </Button>
 */
const BUTTON_SIZES = {
  sm: 'px-4 py-2 text-xs font-medium rounded-lg',
  md: 'px-6 py-3 text-sm font-semibold rounded-full',
  lg: 'px-8 py-3 text-base font-semibold rounded-full',
}

const BUTTON_VARIANTS = {
  primary:
    'bg-emerald-600 text-white shadow-md shadow-emerald-500/30 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/40 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95',
  secondary:
    'bg-slate-900 text-white hover:bg-slate-800 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 active:scale-95',
  outline:
    'border border-slate-200 bg-white text-slate-800 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 active:scale-95',
  ghost:
    'text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 active:scale-95',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  className = '',
  onClick,
  href,
  target,
  rel,
  type = 'button',
  icon,
  iconPosition = 'right',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none'
  const sizeClass = BUTTON_SIZES[size]
  const variantClass = BUTTON_VARIANTS[variant]
  const widthClass = fullWidth ? 'w-full' : ''
  const combinedClassName =
    `${baseClasses} ${sizeClass} ${variantClass} ${widthClass} ${className}`.trim()

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClassName}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClassName}
    >
      {content}
    </button>
  )
}
