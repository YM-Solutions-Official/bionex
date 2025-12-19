/**
 * @file lib/hooks/useScrollTracking.ts
 * @description Hook for tracking scroll position
 */

import { useEffect, useState } from 'react'

interface ScrollPosition {
  x: number
  y: number
}

/**
 * Hook for tracking current scroll position
 * @returns Current scroll position {x, y}
 * @example
 * const { x, y } = useScrollTracking()
 */
export function useScrollTracking(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollPosition
}
