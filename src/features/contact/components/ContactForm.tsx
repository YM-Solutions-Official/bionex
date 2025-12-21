/**
 * @file features/contact/components/ContactForm.tsx
 * @description Contact form with validation
 */

import { Input } from '@/components/ui'
import { CONTACT_SERVICE_OPTIONS } from '@/lib/constants/contact.constants'
import { useContactForm } from '@/lib/hooks'

export function ContactForm() {
  const { formData, errors, isSubmitting, updateField, submit } =
    useContactForm()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submit()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4 shadow-[0_20px_55px_rgba(15,23,42,0.09)] sm:p-7 lg:p-8"
    >
      <div className="mb-5 space-y-1.5">
        <h1 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Tell us about your project
        </h1>
        <p className="text-sm text-slate-500 sm:text-sm">
          Fill out the form and our team will get back to you within one business day.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input
            placeholder="First name"
            value={formData.firstName}
            onChange={(e) => updateField('firstName', e.target.value)}
            error={errors.firstName}
          />
          <Input
            placeholder="Last name"
            value={formData.lastName}
            onChange={(e) => updateField('lastName', e.target.value)}
            error={errors.lastName}
          />
        </div>

        <Input
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          error={errors.email}
        />

        <select
          value={formData.service}
          onChange={(e) => updateField('service', e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
        >
          {CONTACT_SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <textarea
          rows={4}
          placeholder="Tell us about your project, timelines and any technical constraints..."
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
        />

        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>
          <p className="text-[11px] text-slate-400 sm:text-sm">
            By submitting, you agree to our terms and privacy policy.
          </p>
        </div>
      </div>
    </form>
  )
}
