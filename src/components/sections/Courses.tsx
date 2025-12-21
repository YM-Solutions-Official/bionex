/**
 * @file components/sections/Courses.tsx
 * @description Learning and courses section
 */

import { CheckCircle2 } from 'lucide-react'
import { COURSES_DATA } from '@/lib/constants/courses.constants'
import { Card } from '@/components/ui'

/**
 * Displays available learning courses and programs
 */
export function Courses() {
  return (
    <section className="w-full bg-slate-50 py-16 lg:py-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start gap-10 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2 space-y-4">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
              Learning Hub
            </span>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-4xl">
              Learn fast. Build real skills.
            </h2>
            <p className="text-sm text-slate-600 sm:text-lg">
              Short, curated paths in data, engineering, instrumentation, and
              Excel.
            </p>
          </div>

          <div className="relative h-65 w-full overflow-hidden rounded-2xl bg-slate-900 lg:w-1/2">
            <img
              src="/images/bio.jpg"
              alt="Learning"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-end bg-linear-to-t from-slate-950/70 to-transparent p-6">
              <p className="text-sm font-medium text-white sm:text-base">
                Designed with industry experts.
              </p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {COURSES_DATA.map((course: any, idx: number) => {
            const Icon = course.icon
            return (
              <Card key={idx} variant="default" hover>
                <div
                  className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${course.bg} group-hover:scale-105 transition-transform`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {course.title}
                </h3>
                <p className="mb-4 text-sm text-slate-600">
                  {course.description}
                </p>

                <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {course.list.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="text-sm text-slate-700 sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Courses
