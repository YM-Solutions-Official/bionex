// src/routes/contact.tsx
import { createFileRoute } from '@tanstack/react-router'
import { ContactForm, ContactInfo } from '@/features/contact'
import { ScrollToTop } from '@/components/scrolltop'
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateWebPageSchema,
  useSchemaMarkup,
} from '@/lib/seo'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  // Inject breadcrumb schema
  useSchemaMarkup(
    generateBreadcrumbSchema([
      { name: 'Home', url: 'https://bionex.com' },
      { name: 'Contact', url: 'https://bionex.com/contact' },
    ]),
    'breadcrumb-contact',
  )

  // Inject webpage schema
  useSchemaMarkup(
    generateWebPageSchema(
      'Contact Bionex - Get Started with Bioprocessing Solutions',
      'Ready to revolutionize your bioprocessing? Contact Bionex today to schedule a demo or discuss your project.',
      'https://bionex.com/contact',
    ),
    'webpage-contact',
  )

  // Inject local business schema for better local SEO
  useSchemaMarkup(generateLocalBusinessSchema(), 'local-business')

  return (
    <main className="bg-white">
      <ScrollToTop />
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
