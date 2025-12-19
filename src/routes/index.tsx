// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router'
import Header from '@/components/Header'
import WayAhead from '@/components/WayAhead'
import Courses from '@/components/Courses'
import AboutUs from '@/components/About'
import OurApproach from '@/components/OurApproach'
import Services from '@/components/Services'
import ContactUs from '@/components/ContactUs'
import GetStarted from '@/components/GetStarted'
import Project from '@/components/Project'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main>
      <Header />
      <WayAhead />
      <Courses />
      <AboutUs />
      <OurApproach />
      <Project />
      <Services />
      <ContactUs />
      <GetStarted />
    </main>
  )
}
