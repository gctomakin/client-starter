import type { Metadata } from "next"
import { MainLayout } from "../../presentation/components/layout/main-layout"
import { HeroSection } from "../../presentation/components/common/hero-section"
import { ServiceDetail } from "../../presentation/components/services/service-detail"
import { ServiceBenefits } from "../../presentation/components/services/service-benefits"
import { ProcessSteps } from "../../presentation/components/services/process-steps"
import { TestimonialsSection } from "../../presentation/components/home/testimonials-section"
import { CTASection } from "../../presentation/components/common/cta-section"
import { SEOService } from "../../application/services/seo-service"
import { DETAILED_SERVICES, SERVICE_BENEFITS, PROCESS_STEPS } from "../../domain/data/services-data"
import { HOME_TESTIMONIALS } from "../../domain/data/home-data"
import { SITE_CONFIG } from "../../domain/entities/site-config"

export async function generateMetadata(): Promise<Metadata> {
  const seoData = SEOService.generateMetadata({
    title: "Our Services - Business Consulting, Digital Transformation & Project Management",
    description:
      "Comprehensive business services including strategic consulting, digital transformation, and expert project management. Proven solutions that drive growth and success.",
    keywords: [
      "business consulting services",
      "digital transformation",
      "project management",
      "strategic planning",
      "business solutions",
      "process optimization",
    ],
    canonicalUrl: `${SITE_CONFIG.url}/services`,
  })

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: seoData.canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: seoData.ogImage || SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} Services`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seoData.title,
      description: seoData.description,
      images: [seoData.ogImage || SITE_CONFIG.ogImage],
    },
    alternates: {
      canonical: seoData.canonicalUrl,
    },
  }
}

export default function ServicesPage() {
  const webPageStructuredData = SEOService.generateStructuredData("WebPage", {
    title: "Our Services - Business Consulting, Digital Transformation & Project Management",
    description:
      "Comprehensive business services including strategic consulting, digital transformation, and expert project management.",
    url: `${SITE_CONFIG.url}/services`,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageStructuredData),
        }}
      />
      <MainLayout>
        {/* Hero Section */}
        <HeroSection
          title="Comprehensive Business Solutions"
          subtitle="Our Services"
          description="From strategic consulting to digital transformation, we provide the expertise and solutions your business needs to thrive in today's competitive landscape."
          primaryCTA={{
            text: "Get Started Today",
            href: "/contact",
          }}
          secondaryCTA={{
            text: "Schedule Consultation",
            href: "/contact",
          }}
          backgroundVariant="gradient"
          image={{
            src: "/images/hero-image.png",
            alt: "Professional team providing business consulting services",
          }}
        />

        {/* Service Benefits */}
        <ServiceBenefits benefits={SERVICE_BENEFITS} />

        {/* Detailed Services */}
        {DETAILED_SERVICES.map((service, index) => (
          <ServiceDetail key={service.id} service={service} isReversed={index % 2 === 1} />
        ))}

        {/* Process Steps */}
        <ProcessSteps steps={PROCESS_STEPS} />

        {/* Testimonials */}
        <TestimonialsSection
          testimonials={HOME_TESTIMONIALS}
          title="Client Success Stories"
          subtitle="Real results from real clients"
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to Get Started?"
          description="Let's discuss your business needs and create a customized solution that drives real results. Our team is ready to help you succeed."
          primaryCTA={{
            text: "Contact Us Today",
            href: "/contact",
          }}
          secondaryCTA={{
            text: "Learn About Us",
            href: "/about",
          }}
          variant="primary"
        />
      </MainLayout>
    </>
  )
}
