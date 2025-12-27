// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'
import { AboutHero } from '@/features/about'
import { GetStarted } from '@/components/sections'
import { ScrollToTop } from '@/components/scrolltop'
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
  useSchemaMarkup,
} from '@/lib/seo'

export const Route = createFileRoute('/about')({
  component: About,
})

/**
 * About page - company information and team
 */
function About() {
  // Inject breadcrumb schema
  useSchemaMarkup(
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://bionex.com' },
      { name: 'About', url: 'https://bionex.com/about' },
    ]),
    'breadcrumb-about',
  )

  // Inject webpage schema
  useSchemaMarkup(
    generateWebPageSchema(
      'About Bionex - Making Frugal Innovation a Global Success',
      'Learn about Bionex mission to blend engineering, biology, and software for sustainable bioprocessing solutions.',
      'https://bionex.com/about',
    ),
    'webpage-about',
  )

  return (
    <main className="mt-10">
      <ScrollToTop />
      <AboutHero />
      <GetStarted />
    </main>
  )
}
