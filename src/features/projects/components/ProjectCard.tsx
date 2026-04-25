/**
 * @file features/projects/components/ProjectCard.tsx
 * @description Individual project card component with semantic HTML
 */

import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: Array<string>
  link: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) {
  return (
    <article className="group w-92.5 relative max-sm:w-[90%] h-105 rounded-2xl border border-gray-200 overflow-hidden bg-card shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-500">
      <div className="relative h-54 overflow-hidden bg-linear-to-br from-slate-950 via-emerald-950 to-slate-900">
        <img
          src={image || '/placeholder.svg'}
          alt={`${title} - Featured biotech project showcasing precision engineering`}
          className="h-full w-full object-contain object-center p-8 group-hover:scale-105 transition-transform"
          width={400}
          height={250}
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
              className="text-sm border border-emerald-500 text-emerald-600 px-2 py-0.5 rounded-full hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-600 transition"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 rounded-tr-2xl px-6 py-2 text-white bg-emerald-600 translate-y-full group-hover:translate-y-0 transition duration-400">
          <Link to={link} className="inline-flex items-center text-sm">
            Click React <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </article>
  )
}
