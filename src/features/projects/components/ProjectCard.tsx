/**
 * @file features/projects/components/ProjectCard.tsx
 * @description Individual project card component
 */

import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

/**
 * Individual project card with image, description, and CTA
 */
export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <div className="group w-92.5 relative max-sm:w-[90%] h-105 rounded-2xl border border-gray-200 overflow-hidden bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-500">
      <div className="relative h-54 overflow-hidden">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-linear-to-t from-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold group-hover:text-emerald-600 transition">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="text-xs border border-emerald-500 text-emerald-600 px-2 py-0.5 rounded-full hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-600 transition"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 rounded-tr-2xl px-6 py-2 text-white bg-emerald-600 translate-y-full group-hover:translate-y-0 transition duration-400">
          <Link to={link} className="inline-flex items-center text-sm">
            View Live <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}
