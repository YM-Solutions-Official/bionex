// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { HeroSection, WayAheadSection } from '@/features/home'
import { Courses, OurApproach, GetStarted } from '@/components/sections'
import { ServiceGrid } from '@/features/services'
import ContactUs from '@/components/ContactUs'
import { ProjectGrid } from '@/features'

export const Route = createFileRoute('/')({
  component: Home,
})

/**
 * Home page - landing page with all sections
 */
function Home() {
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
