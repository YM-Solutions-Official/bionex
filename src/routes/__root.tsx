import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Footer, Navbar } from '@/components/layout'
import {
  generateOrganizationSchema,
  getPageMetadata,
  usePageMetadata,
  useSchemaMarkup,
} from '@/lib/seo'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  const location = useLocation()

  // Map pathname to metadata key
  const getMetadataKey = (pathname: string) => {
    if (pathname === '/') return 'home'
    if (pathname === '/about') return 'about'
    if (pathname === '/services') return 'services'
    if (pathname === '/projects') return 'projects'
    if (pathname === '/contact') return 'contact'
    return 'home'
  }

  const metadataKey = getMetadataKey(
    location.pathname,
  ) as keyof typeof getPageMetadata

  // Only inject metadata for known pages
  const metadata = (
    ['home', 'about', 'services', 'projects', 'contact'] as const
  ).includes(metadataKey)
    ? getPageMetadata(metadataKey)
    : null

  // Inject page metadata
  if (metadata) {
    usePageMetadata(metadata)
  }

  // Inject global organization schema (on home page only to avoid duplication)
  if (location.pathname === '/') {
    useSchemaMarkup(generateOrganizationSchema(), 'org-schema')
  }

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
