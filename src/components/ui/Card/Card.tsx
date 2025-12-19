/**
 * @file components/ui/Card/Card.tsx
 * @description Flexible card component with multiple variants and styling options
 */

import type { CardProps, ServiceCardProps } from '@/lib/types'
import { cn } from '@/lib/utils'

const CARD_VARIANTS = {
  default:
    'rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md',
  elevated:
    'rounded-2xl border border-slate-100 bg-white p-7 shadow-lg hover:shadow-xl',
  bordered:
    'rounded-2xl border-2 border-slate-200 bg-white p-7 hover:border-emerald-300 hover:shadow-sm',
  ghost: 'rounded-2xl bg-slate-50 border border-slate-200 p-7 hover:bg-slate-100',
}

/**
 * Base card component with multiple variants
 * @component
 * @example
 * <Card variant="default" hover>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 */
export function Card({
  children,
  variant = 'default',
  hover = true,
  className = '',
  onClick,
}: CardProps) {
  const variantClass = CARD_VARIANTS[variant]
  const hoverClass = hover
    ? 'hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2'
    : ''
  const combinedClassName = cn(
    variantClass,
    hoverClass,
    'transition-all duration-300 ease-out',
    className,
  )

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

/**
 * Service card component - specialized card for displaying services
 * @component
 * @example
 * <ServiceCard
 *   title="Web Development"
 *   description="Scalable full-stack applications"
 *   icon={<Globe2 />}
 *   iconBg="bg-blue-50 text-blue-600"
 * />
 */
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
          <span className="mb-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">
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
