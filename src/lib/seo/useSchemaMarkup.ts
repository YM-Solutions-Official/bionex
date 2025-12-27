/**
 * @file lib/seo/useSchemaMarkup.ts
 * @description Hook for injecting JSON-LD schema markup into document
 */

import { useEffect } from 'react'

/**
 * Inject JSON-LD schema markup into document head
 * @param schema Schema object to inject
 * @param id Optional unique ID for the script tag
 */
export function useSchemaMarkup(schema: Record<string, any>, id?: string) {
  useEffect(() => {
    // Create or find the script tag
    let scriptTag: HTMLScriptElement | null = id
      ? document.querySelector(`script[data-schema-id="${id}"]`)
      : null

    if (!scriptTag) {
      scriptTag = document.createElement('script')
      scriptTag.type = 'application/ld+json'
      if (id) scriptTag.setAttribute('data-schema-id', id)
      document.head.appendChild(scriptTag)
    }

    // Set the schema content
    scriptTag.textContent = JSON.stringify(schema)

    // Cleanup on unmount
    return () => {
      if (!id) {
        scriptTag.remove()
      }
    }
  }, [schema, id])
}
