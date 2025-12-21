/**
 * @file components/ui/Input/Input.tsx
 * @description Reusable input field component
 */

import type { InputProps } from '@/lib/types'

/**
 * Input component with validation and styling support
 * @component
 * @example
 * <Input
 *   type="email"
 *   placeholder="Enter your email"
 *   label="Email Address"
 *   error="Invalid email format"
 * />
 */
export function Input({
  variant = 'default',
  error,
  label,
  hint,
  className = '',
  ...props
}: InputProps) {
  const baseClasses =
    'w-full rounded-lg border px-4 py-3 text-sm outline-none transition-all duration-300 ease-out focus:ring-2 focus:outline-none'

  const variantClass =
    variant === 'ghost'
      ? 'border-transparent bg-slate-100 focus:border-emerald-500 focus:ring-emerald-200 focus:bg-white'
      : 'border-slate-200 bg-white focus:border-emerald-500 focus:ring-emerald-200'

  const errorClass = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
    : 'hover:border-slate-300'

  const combinedClassName =
    `${baseClasses} ${variantClass} ${errorClass} ${className}`.trim()

  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 block text-sm font-semibold text-slate-800 sm:text-sm">
          {label}
        </label>
      )}
      <input {...props} className={combinedClassName} />
      {hint && <p className="mt-1 text-sm text-slate-500">{hint}</p>}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
