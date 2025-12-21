import type { ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  variant?: 'default' | 'elevated' | 'bordered' | 'ghost'
  hover?: boolean
  className?: string
  onClick?: () => void
}

const variantClasses = {
  default: 'rounded-2xl border border-slate-100 bg-white p-7 shadow-sm',
  elevated: 'rounded-2xl border border-slate-100 bg-white p-7 shadow-lg',
  bordered: 'rounded-2xl border-2 border-slate-200 bg-white p-7',
  ghost: 'rounded-2xl bg-slate-50 border border-slate-200 p-7',
}

const hoverClasses = 'hover:-translate-y-1 hover:shadow-lg'

export function Card({
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick,
}: CardProps) {
  const variantClass = variantClasses[variant]
  const hoverClass = hover ? hoverClasses : ''
  const combinedClassName =
    `${variantClass} ${hoverClass} transition-all duration-200 ${className}`.trim()

  return (
    <article
      className={combinedClassName}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </article>
  )
}

export interface ServiceCardProps extends CardProps {
  title: string
  description: string
  icon?: ReactNode
  badge?: string
  iconBg?: string
}

export function ServiceCard({
  title,
  description,
  icon,
  badge,
  iconBg = 'bg-emerald-50 text-emerald-600',
  ...cardProps
}: ServiceCardProps) {
  return (
    <Card {...cardProps}>
      <div>
        {badge && (
          <span className="mb-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
            {badge}
          </span>
        )}
        {icon && (
          <div
            className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}
          >
            {icon}
          </div>
        )}
        <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </Card>
  )
}
