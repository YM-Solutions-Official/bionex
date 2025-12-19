import type { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
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

const variantClasses = {
  primary:
    'bg-emerald-600 text-white shadow-md shadow-emerald-500/30 hover:bg-emerald-500',
  secondary: 'bg-slate-900 text-white hover:bg-slate-800',
  outline:
    'border border-slate-200 bg-white text-slate-800 hover:border-emerald-400 hover:text-emerald-600',
  ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-xs font-medium rounded-lg',
  md: 'px-6 py-3 text-sm font-semibold rounded-full',
  lg: 'px-8 py-3 text-base font-semibold rounded-full',
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
    'inline-flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  const sizeClass = sizeClasses[size]
  const variantClass = variantClasses[variant]
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
