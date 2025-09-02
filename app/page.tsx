import type { Metadata } from "next"
import { MainLayout } from "../presentation/components/layout/main-layout"
import { HeroSection } from "../presentation/components/common/hero-section"
import { ServiceCard } from "../presentation/components/common/service-card"
import { StatsSection } from "../presentation/components/common/stats-section"
import { TestimonialsSection } from "../presentation/components/home/testimonials-section"
import { CTASection } from "../presentation/components/common/cta-section"
import { SEOService } from "../application/services/seo-service"
import { HOME_SERVICES, HOME_STATS, HOME_TESTIMONIALS } from "../domain/data/home-data"
import { SITE_CONFIG } from "../domain/entities/site-config"

export async function generateMetadata(): Promise<Metadata> {
  const seoData = SEOService.generateMetadata({
    title: "Professional Business Services & Solutions",
    description:
      "Transform your business with our expert consulting, digital transformation, and project management services. Trusted by 500+ companies worldwide.",
    keywords: [
      "business consulting",
      "digital transformation",
      "project management",
      "business solutions",
      "strategic planning",
    ],
    canonicalUrl: SITE_CONFIG.url,
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
          alt: SITE_CONFIG.name,
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

export default function HomePage() {
  const webPageStructuredData = SEOService.generateStructuredData("WebPage", {
    title: "Professional Business Services & Solutions",
    description:
      "Transform your business with our expert consulting, digital transformation, and project management services.",
    url: SITE_CONFIG.url,
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
          title="Transform Your Business with Expert Solutions"
          subtitle="Professional Services"
          description="We help businesses grow and thrive through strategic consulting, digital transformation, and expert project management. Partner with us to unlock your company's full potential."
          primaryCTA={{
            text: "Get Started Today",
            href: "/contact",
          }}
          secondaryCTA={{
            text: "View Our Services",
            href: "/services",
          }}
          backgroundVariant="gradient"
          image={{
            src: "/images/hero-image.png",
            alt: "Professional business team collaborating",
          }}
        />

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">Our Expertise</p>
              <h2 className="text-3xl font-bold text-balance mb-4">Services That Drive Results</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                From strategic planning to digital transformation, we provide comprehensive solutions tailored to your
                business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {HOME_SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  showCTA={true}
                  ctaText="Learn More"
                  ctaHref={`/services#${service.id}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection title="Proven Track Record" subtitle="By the Numbers" stats={HOME_STATS} />

        {/* Testimonials */}
        <TestimonialsSection
          testimonials={HOME_TESTIMONIALS}
          title="What Our Clients Say"
          subtitle="Trusted by businesses worldwide"
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to Transform Your Business?"
          description="Join hundreds of successful companies that have partnered with us to achieve their goals. Let's discuss how we can help you grow."
          primaryCTA={{
            text: "Start Your Project",
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
