/**
 * @file lib/seo/usePageMetadata.ts
 * @description Hook for injecting page metadata into document head
 */

import { useEffect } from 'react'
import type { PageMetadata } from './metadata'

/**
 * Hook to inject meta tags, canonical URL, and OG tags into document head
 * @param metadata PageMetadata object with page information
 */
export function usePageMetadata(metadata: PageMetadata) {
  useEffect(() => {
    // Set title
    document.title = metadata.title

    // Helper function to set or create meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      let tag = document.querySelector(
        `meta[${property ? 'property' : 'name'}="${name}"]`,
      )
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(property ? 'property' : 'name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    // Set standard meta tags
    setMetaTag('description', metadata.description)
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    setMetaTag(
      'keywords',
      metadata.keywords || 'bioprocessing, bioreactor, automation, research',
    )

    // Set Open Graph tags
    if (metadata.ogTitle) setMetaTag('og:title', metadata.ogTitle, true)
    if (metadata.ogDescription)
      setMetaTag('og:description', metadata.ogDescription, true)
    if (metadata.ogImage) setMetaTag('og:image', metadata.ogImage, true)
    if (metadata.ogType) setMetaTag('og:type', metadata.ogType, true)
    setMetaTag('og:url', metadata.canonicalPath, true)

    // Set Twitter Card tags
    if (metadata.twitterCard) setMetaTag('twitter:card', metadata.twitterCard)
    setMetaTag('twitter:title', metadata.ogTitle || metadata.title)
    setMetaTag(
      'twitter:description',
      metadata.ogDescription || metadata.description,
    )
    if (metadata.ogImage) setMetaTag('twitter:image', metadata.ogImage)

    // Set canonical URL
    let canonicalTag = document.querySelector("link[rel='canonical']")
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }
    const canonicalUrl = `https://bionex.com${metadata.canonicalPath}`
    canonicalTag.setAttribute('href', canonicalUrl)

    // Cleanup: title is already set, others are updated in place
    return () => {
      // Optional: Reset if needed
    }
  }, [metadata])
}
