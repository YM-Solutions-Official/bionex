/**
 * @file lib/seo/schema.ts
 * @description JSON-LD Schema markup generators for rich snippets
 */

/**
 * Organization Schema - For the company/brand
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bionex',
    alternateName: 'Bionex Systems',
    url: 'https://bionex.com',
    logo: 'https://bionex.com/images/logo.jpeg',
    description:
      'High-efficiency bioprocessing and bioreactor solutions engineered for precision and innovation',
    sameAs: [
      'https://www.linkedin.com/company/bionex',
      'https://twitter.com/bionex',
      'https://github.com/bionex',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'KH. NO. 134/10 & 134/11, Ground Floor Street No. 75, A Blk‑B Sant Nagar Village, Burari',
      addressLocality: 'Delhi',
      postalCode: '110084',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-99717-49689',
      contactType: 'Customer Support',
      email: 'contact@projectbionex.com',
    },
  }
}

/**
 * Service Schema - For individual services
 */
export function generateServiceSchema(
  name: string,
  description: string,
  category: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Bionex',
      url: 'https://bionex.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    category: category,
  }
}

/**
 * BreadcrumbList Schema - For navigation clarity
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * LocalBusiness Schema - For local SEO
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://bionex.com',
    name: 'Bionex',
    image: 'https://bionex.com/images/logo.jpeg',
    description:
      'High-efficiency bioprocessing and bioreactor solutions engineered for precision and innovation',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'KH. NO. 134/10 & 134/11, Ground Floor Street No. 75, A Blk‑B Sant Nagar Village, Burari',
      addressLocality: 'Delhi',
      postalCode: '110084',
      addressCountry: 'IN',
    },
    telephone: '+91-99717-49689',
    email: 'contact@projectbionex.com',
    url: 'https://bionex.com',
    priceRange: '$$',
  }
}

/**
 * FAQPage Schema - For FAQ rich snippets
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Product/Service Schema - For rich search results
 */
export function generateProductSchema(
  name: string,
  description: string,
  image: string,
  rating?: { ratingValue: number; ratingCount: number },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: image,
    brand: {
      '@type': 'Brand',
      name: 'Bionex',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Bionex',
      url: 'https://bionex.com',
    },
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.ratingValue,
        ratingCount: rating.ratingCount,
      },
    }),
  }
}

/**
 * WebPage Schema - For general page optimization
 */
export function generateWebPageSchema(
  title: string,
  description: string,
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Bionex',
      url: 'https://bionex.com',
    },
  }
}
