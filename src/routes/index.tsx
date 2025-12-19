// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import { HeroSection, WayAheadSection } from '@/features/home'
import {
  Counter,
  Courses,
  OurApproach,
  GetStarted,
} from '@/components/sections'
import { ProjectGrid } from '@/features/projects'
import { ServiceGrid } from '@/features/services'
import { ContactInfo } from '@/features/contact'

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
      <Counter />
      <OurApproach />
      <ProjectGrid />
      <ServiceGrid />
      <ContactInfo />
      <GetStarted />
    </main>
  )
}
