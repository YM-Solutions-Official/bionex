/**
 * @file components/ui/ProcessItem/ProcessItem.tsx
 * @description Reusable process/list item with indicator dot
 */

export interface ProcessItemProps {
  /** Process item text content */
  text: string
}

/**
 * Displays a process step or list item with visual indicator
 * @param props ProcessItemProps
 * @returns React component
 */
export function ProcessItem({ text }: ProcessItemProps) {
  return (
    <li className="flex items-center gap-3 text-sm font-medium text-slate-800 transition-all duration-300 ease-out sm:text-base hover:text-slate-900 hover:translate-x-1">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 transition-all duration-300 ease-out hover:bg-emerald-200 hover:shadow-sm">
        <div className="h-2 w-2 rounded-full bg-emerald-600 transition-all duration-300 ease-out group-hover:scale-110" />
      </div>
      <span>{text}</span>
    </li>
  )
}
