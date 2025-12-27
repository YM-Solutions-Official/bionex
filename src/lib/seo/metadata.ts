/**
 * @file lib/seo/metadata.ts
 * @description SEO metadata definitions for all pages
 */

export interface PageMetadata {
  title: string
  description: string
  canonicalPath: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  keywords?: string
}

const BASE_URL = 'https://bionex.com'
const BRAND_NAME = 'Bionex'
const BRAND_DESCRIPTION =
  'High-efficiency bioprocessing and bioreactor solutions engineered for precision and innovation'

export const PAGE_METADATA: Record<string, PageMetadata> = {
  home: {
    title: `${BRAND_NAME} - Next-Gen Bioprocessing Solutions & Bioreactor Systems`,
    description:
      'Innovate bioprocessing with precision bioreactor technology. Explore cutting-edge automation systems, quantum biology research, and scalable bioprocess solutions for industry leaders.',
    canonicalPath: '/',
    ogTitle: `${BRAND_NAME} - Innovate Bioprocessing with Precision Technology`,
    ogDescription: BRAND_DESCRIPTION,
    ogImage: `${BASE_URL}/images/ourapproach.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'bioreactor, bioprocessing, automation, scientific research, molecular dynamics, chemical synthesis',
  },
  about: {
    title: `About ${BRAND_NAME} - Making Frugal Innovation a Global Success`,
    description:
      'Learn about Bionex: We blend engineering, biology, and software to build sustainable bioreactor systems and intelligent automation. Discover our mission to scale lab-stage ideas into products.',
    canonicalPath: '/about',
    ogTitle: `About ${BRAND_NAME} - Engineering Biology & Bioreactors`,
    ogDescription:
      'Bionex develops next-gen bioreactor systems and precision-engineered solutions for global scientific innovation.',
    ogImage: `${BASE_URL}/images/bio.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'bioprocessing company, bioreactor manufacturer, automation technology, scientific engineering',
  },
  services: {
    title: `Services - ${BRAND_NAME} Bioprocessing & Automation Solutions`,
    description:
      'Explore Bionex services: Biophysics research, chemical synthesis, quantum biology analysis, and smart lab automation. End-to-end biotech and web solutions to grow your business.',
    canonicalPath: '/services',
    ogTitle: `${BRAND_NAME} Services - Bioprocessing, Automation & Chemistry`,
    ogDescription:
      'Professional bioprocessing services including biophysics, quantum biology, chemical intelligence, and lab automation.',
    ogImage: `${BASE_URL}/images/ourapproach.jpg`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'bioprocess consulting, bioreactor design, lab automation, chemical analysis, molecular dynamics',
  },
  projects: {
    title: `Featured Projects - ${BRAND_NAME} Biotech Portfolio`,
    description:
      'Discover Bionex case studies: Photosynthesis efficiency optimization, ChemiCompute cloud platform, and Bio-Crystal X-Ray imaging. See measurable outcomes in biotech innovation.',
    canonicalPath: '/projects',
    ogTitle: `${BRAND_NAME} Projects - Biotech Case Studies & Innovations`,
    ogDescription:
      'Portfolio of completed biotech projects showcasing precision bioprocessing, quantum simulation, and innovation.',
    ogImage: `${BASE_URL}/images/project-1.webp`,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    keywords:
      'biotech projects, case studies, bioreactor systems, research innovations, laboratory solutions',
  },
  contact: {
    title: `Contact ${BRAND_NAME} - Get Started with Bioprocessing Solutions`,
    description:
      'Ready to revolutionize your bioprocessing? Contact Bionex today. Schedule a demo or discuss your project with our precision engineering team.',
    canonicalPath: '/contact',
    ogTitle: `Contact ${BRAND_NAME} - Schedule Your Demo`,
    ogDescription:
      'Get in touch with Bionex for bioreactor systems, automation solutions, and biotech consulting.',
    ogImage: `${BASE_URL}/images/ourapproach.jpg`,
    ogType: 'website',
    twitterCard: 'summary',
    keywords:
      'contact bionex, bioprocessing consultation, demo request, bioreactor inquiry',
  },
}

/**
 * Get metadata for a specific page
 */
export function getPageMetadata(
  page: keyof typeof PAGE_METADATA,
): PageMetadata {
  return PAGE_METADATA[page]
}

/**
 * Generate full canonical URL
 */
export function getCanonicalUrl(path: string): string {
  return `${BASE_URL}${path}`
}
