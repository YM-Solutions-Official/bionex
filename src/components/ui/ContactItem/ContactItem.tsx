/**
 * @file components/ui/ContactItem/ContactItem.tsx
 * @description Reusable contact information item with icon and details
 */

export interface ContactItemProps {
  /** Icon component (e.g., lucide-react icon) */
  icon: React.ReactNode
  /** Contact method title (e.g., "Email us") */
  title: string
  /** Contact method detail (e.g., "hello@example.com") */
  detail: string
}

/**
 * Displays a single contact method with icon, title, and detail
 * @param props ContactItemProps
 * @returns React component
 */
export function ContactItem({ icon: Icon, title, detail }: ContactItemProps) {
  return (
    <div className="flex items-center gap-4 transition-all duration-300 ease-out hover:translate-x-1">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-all duration-300 ease-out hover:bg-emerald-100 hover:shadow-md">
        {Icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-slate-900 transition-colors duration-300 ease-out group-hover:text-emerald-600">{title}</h4>
        <p className="text-xs text-slate-500 transition-colors duration-300 ease-out sm:text-sm hover:text-slate-700">{detail}</p>
      </div>
    </div>
  )
}
