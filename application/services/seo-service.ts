import type { SEOMetadata } from "../../domain/types/common"
import { SITE_CONFIG } from "../../domain/entities/site-config"

export class SEOService {
  static generateMetadata(pageData: Partial<SEOMetadata>): SEOMetadata {
    return {
      title: pageData.title ? `${pageData.title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name,
      description: pageData.description || SITE_CONFIG.description,
      keywords: pageData.keywords || [],
      ogImage: pageData.ogImage || SITE_CONFIG.ogImage,
      canonicalUrl: pageData.canonicalUrl,
    }
  }

  static generateStructuredData(type: "Organization" | "WebSite" | "WebPage", data: any) {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
    }

    switch (type) {
      case "Organization":
        return {
          ...baseData,
          name: SITE_CONFIG.name,
          description: SITE_CONFIG.description,
          url: SITE_CONFIG.url,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: SITE_CONFIG.contact.phone,
            contactType: "customer service",
            email: SITE_CONFIG.contact.email,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: SITE_CONFIG.contact.address,
          },
          ...data,
        }
      case "WebSite":
        return {
          ...baseData,
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          description: SITE_CONFIG.description,
          ...data,
        }
      case "WebPage":
        return {
          ...baseData,
          name: data.title,
          description: data.description,
          url: data.url,
          isPartOf: {
            "@type": "WebSite",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          },
          ...data,
        }
      default:
        return baseData
    }
  }
}
