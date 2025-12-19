// src/routes/services.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ServiceGrid } from '@/features/services'
import { GetStarted } from '@/components/sections'

export const Route = createFileRoute('/services')({
  component: Services,
})

/**
 * Services page - service offerings
 */
function Services() {
  return (
    <main>
      <ServiceGrid />
      <GetStarted />
    </main>
  )
}
