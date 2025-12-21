// src/ScrollToTop.tsx
import * as React from 'react'
import { useRouterState } from '@tanstack/react-router'

export function ScrollToTop() {
  const location = useRouterState({
    select: (state) => state.location,
  })

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.href])

  return null
}
