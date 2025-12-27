// src/routes/projects.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ProjectGrid } from '@/features/projects'
import { GetStarted } from '@/components/sections'
import { ScrollToTop } from '@/components/scrolltop'
import {
  generateBreadcrumbSchema,
  generateProductSchema,
  generateWebPageSchema,
  useSchemaMarkup,
} from '@/lib/seo'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

/**
 * Projects page - portfolio of completed projects
 */
function Projects() {
  // Inject breadcrumb schema
  useSchemaMarkup(
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://bionex.com' },
      { name: 'Projects', url: 'https://bionex.com/projects' },
    ]),
    'breadcrumb-projects',
  )

  // Inject webpage schema
  useSchemaMarkup(
    generateWebPageSchema(
      'Featured Projects - Bionex Biotech Portfolio',
      'Discover Bionex case studies in bioprocessing, quantum simulation, and precision engineering with measurable outcomes.',
      'https://bionex.com/projects',
    ),
    'webpage-projects',
  )

  // Inject product schemas for featured projects
  const projects = [
    {
      title: 'Project Photosynthesis 2.0',
      description:
        'Applying quantum physics to increase photon absorption efficiency in synthetic chloroplasts.',
      image: 'https://bionex.com/images/project-1.webp',
    },
    {
      title: 'ChemiCompute Alpha',
      description:
        'Cloud platform for simulating complex organic chemical reactions before wet-lab testing.',
      image: 'https://bionex.com/images/project-2.webp',
    },
    {
      title: 'Bio-Crystal X-Ray',
      description:
        'Advanced crystallography imaging to map the physical structure of unknown viral proteins.',
      image: 'https://bionex.com/images/project-3.webp',
    },
  ]

  projects.forEach((project, idx) => {
    useSchemaMarkup(
      generateProductSchema(project.title, project.description, project.image),
      `project-${idx}`,
    )
  })

  return (
    <main className="mt-10">
      <ScrollToTop />
      <ProjectGrid />
      <GetStarted />
    </main>
  )
}
