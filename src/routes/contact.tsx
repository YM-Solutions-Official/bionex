// src/routes/contact.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ContactForm, ContactInfo } from '@/features/contact'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <main className="bg-white">
      <section className="mx-auto flex max-w-7xl mt-10 flex-col gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:py-20 xl:px-0">
        <div className="flex-1 lg:w-3/5">
          <ContactForm />
        </div>
        <div className="flex-1 lg:w-2/5">
          <ContactInfo />
        </div>
      </section>
    </main>
  )
}
