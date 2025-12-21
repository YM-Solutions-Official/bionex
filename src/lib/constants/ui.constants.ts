/**
 * @file lib/constants/ui.constants.ts
 * @description UI design system constants (colors, spacing, typography)
 */

export const BUTTON_STYLES = {
  variants: {
    primary:
      'bg-emerald-600 text-white shadow-md shadow-emerald-500/30 hover:bg-emerald-500',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800',
    outline:
      'border border-slate-200 bg-white text-slate-800 hover:border-emerald-400 hover:text-emerald-600',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
  },
  sizes: {
    sm: 'px-4 py-2 text-sm font-medium rounded-lg',
    md: 'px-6 py-3 text-sm font-semibold rounded-full',
    lg: 'px-8 py-3 text-base font-semibold rounded-full',
  },
}

export const CARD_STYLES = {
  variants: {
    default: 'rounded-2xl border border-slate-100 bg-white p-7 shadow-sm',
    elevated: 'rounded-2xl border border-slate-100 bg-white p-7 shadow-lg',
    bordered: 'rounded-2xl border-2 border-slate-200 bg-white p-7',
    ghost: 'rounded-2xl bg-slate-50 border border-slate-200 p-7',
  },
  hover: 'hover:-translate-y-1 hover:shadow-lg',
}

export const COLOR_PALETTE = {
  primary: '#00A676',
  emerald: '#10b981',
  slate: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
}

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
}
