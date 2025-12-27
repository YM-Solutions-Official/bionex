/**
 * @file lib/utils/cn.ts
 * @description Class name merger utility for Tailwind CSS
 */

/**
 * Merges class names with support for conditional classes
 * @param classes - Variable list of class name strings or falsy values
 * @returns Merged class name string
 */
export function cn(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(' ')
}
