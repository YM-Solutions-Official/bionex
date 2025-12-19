/**
 * @file lib/utils/formatting.ts
 * @description String and data formatting utilities
 */

/**
 * Formats a string to title case
 * @param str - Input string
 * @returns Title case string
 * @example
 * titleCase('hello world') // 'Hello World'
 */
export function titleCase(str: string): string {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

/**
 * Slugifies a string for URLs
 * @param str - Input string
 * @returns Slugified string
 * @example
 * slugify('Hello World') // 'hello-world'
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Truncates text to specified length
 * @param text - Text to truncate
 * @param length - Maximum length
 * @param suffix - Suffix to append (default: '...')
 * @returns Truncated text
 */
export function truncate(text: string, length: number, suffix = '...'): string {
  if (text.length <= length) return text
  return text.substring(0, length).trim() + suffix
}
