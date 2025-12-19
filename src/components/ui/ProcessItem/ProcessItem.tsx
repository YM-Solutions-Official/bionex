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
    <li className="flex items-center gap-3 text-sm font-medium text-slate-800 sm:text-base">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
        <div className="h-2 w-2 rounded-full bg-emerald-600" />
      </div>
      <span>{text}</span>
    </li>
  )
}
