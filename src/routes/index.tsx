// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { HeroSection, WayAheadSection } from '@/features/home'
import { Courses, GetStarted, OurApproach } from '@/components/sections'
import { ServiceGrid } from '@/features/services'
import ContactUs from '@/components/ContactUs'
import { ProjectGrid } from '@/features'
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
  useSchemaMarkup,
} from '@/lib/seo'

export const Route = createFileRoute('/')({
  component: Home,
})

/**
 * Home page - landing page with all sections
 */
function Home() {
  // Inject breadcrumb schema
  useSchemaMarkup(
    generateBreadcrumbSchema([{ name: 'Home', url: 'https://bionex.com' }]),
    'breadcrumb-home',
  )

  // Inject webpage schema
  useSchemaMarkup(
    generateWebPageSchema(
      'Bionex - Next-Gen Bioprocessing Solutions & Bioreactor Systems',
      'Innovate bioprocessing with precision bioreactor technology and cutting-edge automation systems.',
      'https://bionex.com',
    ),
    'webpage-home',
  )

  return (
    <main>
      <HeroSection />
      <WayAheadSection />
      <Courses />
      <OurApproach />
      <ProjectGrid />
      <ServiceGrid />
      <ContactUs />
      <GetStarted />
    </main>
  )
}
