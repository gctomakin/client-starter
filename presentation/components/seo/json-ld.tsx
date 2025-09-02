import { SITE_CONFIG } from "../../../domain/entities/site-config"

interface JsonLdProps {
  data: any
}

export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

// Pre-built structured data generators
export const StructuredDataGenerators = {
  // Local Business schema
  localBusiness: () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.address,
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  }),

  // Service schema
  service: (serviceName: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: "United States",
    serviceType: "Business Consulting",
  }),

  // FAQ schema
  faqPage: (faqs: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),

  // Breadcrumb schema
  breadcrumb: (items: Array<{ name: string; url: string }>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),
}
