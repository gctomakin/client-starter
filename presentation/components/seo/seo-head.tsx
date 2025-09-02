import Head from "next/head"
import type { SEOMetadata } from "../../../domain/types/common"

interface SEOHeadProps {
  metadata: SEOMetadata
  structuredData?: any
}

export function SEOHead({ metadata, structuredData }: SEOHeadProps) {
  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {metadata.keywords && metadata.keywords.length > 0 && (
        <meta name="keywords" content={metadata.keywords.join(", ")} />
      )}
      {metadata.canonicalUrl && <link rel="canonical" href={metadata.canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      {metadata.ogImage && <meta property="og:image" content={metadata.ogImage} />}
      {metadata.canonicalUrl && <meta property="og:url" content={metadata.canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      {metadata.ogImage && <meta name="twitter:image" content={metadata.ogImage} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
    </Head>
  )
}
