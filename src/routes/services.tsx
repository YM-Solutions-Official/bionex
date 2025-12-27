// src/routes/services.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ServiceGrid } from '@/features/services'
import { GetStarted } from '@/components/sections'
import { ScrollToTop } from '@/components/scrolltop'
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateWebPageSchema,
  useSchemaMarkup,
} from '@/lib/seo'

export const Route = createFileRoute('/services')({
  component: Services,
})

/**
 * Services page - service offerings
 */
function Services() {
  // Inject breadcrumb schema
  useSchemaMarkup(
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://bionex.com' },
      { name: 'Services', url: 'https://bionex.com/services' },
    ]),
    'breadcrumb-services',
  )

  // Inject webpage schema
  useSchemaMarkup(
    generateWebPageSchema(
      'Services - Bionex Bioprocessing & Automation Solutions',
      'Explore bioprocessing services: biophysics research, chemical synthesis, quantum biology analysis, and smart lab automation.',
      'https://bionex.com/services',
    ),
    'webpage-services',
  )

  // Inject service schemas
  const services = [
    {
      name: 'Biophysics Nexus',
      description:
        'Studying biological systems through physics and precision measurement.',
      category: 'Scientific Research',
    },
    {
      name: 'Chemical Intelligence',
      description:
        'Predictive molecular synthesis and advanced chemical reactivity analysis.',
      category: 'Chemistry Services',
    },
    {
      name: 'Quantum Biology',
      description:
        'Analyzing subatomic biological interactions and quantum effects.',
      category: 'Advanced Research',
    },
    {
      name: 'Bio-Automation',
      description:
        'Smart laboratories with integrated AI diagnostics and automation.',
      category: 'Automation Technology',
    },
  ]

  services.forEach((service, idx) => {
    useSchemaMarkup(
      generateServiceSchema(
        service.name,
        service.description,
        service.category,
      ),
      `service-${idx}`,
    )
  })

  return (
    <main className="mt-10">
      <ScrollToTop />
      <ServiceGrid />
      <GetStarted />
    </main>
  )
}
