// src/routes/projects.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ProjectGrid } from '@/features/projects'
import { GetStarted } from '@/components/sections'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

/**
 * Projects page - portfolio of completed projects
 */
function Projects() {
  return (
    <main>
      <ProjectGrid />
      <GetStarted />
    </main>
  )
}
