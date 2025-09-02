import type { Metadata } from "next"
import { MainLayout } from "../../presentation/components/layout/main-layout"
import { HeroSection } from "../../presentation/components/common/hero-section"
import { ContactForm } from "../../presentation/components/common/contact-form"
import { ContactMethods } from "../../presentation/components/contact/contact-methods"
import { OfficeLocations } from "../../presentation/components/contact/office-locations"
import { FAQSection } from "../../presentation/components/contact/faq-section"
import { SEOService } from "../../application/services/seo-service"
import { CONTACT_METHODS, OFFICE_LOCATIONS, FAQ_ITEMS } from "../../domain/data/contact-data"
import { SITE_CONFIG } from "../../domain/entities/site-config"

export async function generateMetadata(): Promise<Metadata> {
  const seoData = SEOService.generateMetadata({
    title: "Contact Us - Get In Touch for Business Consulting Services",
    description:
      "Ready to transform your business? Contact our expert team for a consultation. Multiple ways to reach us including phone, email, and office visits.",
    keywords: [
      "contact us",
      "business consultation",
      "get in touch",
      "business consulting contact",
      "schedule consultation",
      "contact information",
    ],
    canonicalUrl: `${SITE_CONFIG.url}/contact`,
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
          alt: `Contact ${SITE_CONFIG.name}`,
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

export default function ContactPage() {
  const webPageStructuredData = SEOService.generateStructuredData("WebPage", {
    title: "Contact Us - Get In Touch for Business Consulting Services",
    description:
      "Ready to transform your business? Contact our expert team for a consultation. Multiple ways to reach us including phone, email, and office visits.",
    url: `${SITE_CONFIG.url}/contact`,
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
          title="Let's Start Your Transformation"
          subtitle="Contact Us"
          description="Ready to take your business to the next level? Our team of experts is here to help. Reach out today for a consultation and discover how we can drive your success."
          primaryCTA={{
            text: "Schedule Consultation",
            href: "#contact-form",
          }}
          secondaryCTA={{
            text: "Call Us Now",
            href: "tel:+15551234567",
          }}
          backgroundVariant="gradient"
          image={{
            src: "/images/hero-image.png",
            alt: "Professional consultation meeting",
          }}
        />

        {/* Contact Methods */}
        <ContactMethods methods={CONTACT_METHODS} />

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">Send us a message</p>
                <h2 className="text-3xl font-bold text-balance mb-4">Start the Conversation</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your project.
                </p>
              </div>
              <ContactForm
                title="Get Your Free Consultation"
                description="Tell us about your business needs and we'll provide a customized solution."
              />
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <OfficeLocations locations={OFFICE_LOCATIONS} />

        {/* FAQ Section */}
        <FAQSection items={FAQ_ITEMS} />

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-balance mb-4">Find Us</h2>
              <p className="text-muted-foreground">Visit our headquarters for an in-person consultation</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                    <p className="text-muted-foreground">
                      Map integration would be implemented here
                      <br />
                      (Google Maps, Mapbox, etc.)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}
