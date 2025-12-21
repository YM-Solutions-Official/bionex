// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'
import { AboutHero } from '@/features/about'
import { GetStarted } from '@/components/sections'
import { ScrollToTop } from '@/components/scrolltop'

export const Route = createFileRoute('/about')({
  component: About,
})

/**
 * About page - company information and team
 */
function About() {
  return (
    <main className='mt-10'>
      <ScrollToTop />
      <AboutHero />
      <GetStarted />
    </main>
  )
}
