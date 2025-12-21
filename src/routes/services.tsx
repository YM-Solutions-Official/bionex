// src/routes/services.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ServiceGrid } from '@/features/services'
import { GetStarted } from '@/components/sections'
import { ScrollToTop } from '@/components/scrolltop'

export const Route = createFileRoute('/services')({
  component: Services,
})

/**
 * Services page - service offerings
 */
function Services() {
  return (
    <main className='mt-10'>
      <ScrollToTop />
      <ServiceGrid />
      <GetStarted />
    </main>
  )
}
