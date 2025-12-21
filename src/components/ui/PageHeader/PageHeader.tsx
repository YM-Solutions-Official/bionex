/**
 * @file components/ui/PageHeader/PageHeader.tsx
 * @description Reusable page header component for non-home pages
 */

export interface PageHeaderProps {
  /** Page title */
  title: string
  /** Page description or subtitle */
  description: string
  /** Optional badge text */
  badge?: string
}

/**
 * Professional page header with title, description, and optional badge
 * Used on all pages except the home page
 */
export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-slate-900 to-slate-800 py-20 sm:py-28 lg:py-32 font-sans">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        {badge && (
          <span className="mb-6 inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-500/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-200 backdrop-blur-sm transition-all duration-300 ease-out hover:bg-emerald-500/25">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl transition-all duration-300 ease-out">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg transition-all duration-300 ease-out">
          {description}
        </p>
      </div>
    </section>
  )
}
