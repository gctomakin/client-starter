import type { Metadata } from "next"
import { MainLayout } from "../../presentation/components/layout/main-layout"
import { HeroSection } from "../../presentation/components/common/hero-section"
import { MissionVision } from "../../presentation/components/about/mission-vision"
import { CompanyValues } from "../../presentation/components/about/company-values"
import { CompanyTimeline } from "../../presentation/components/about/company-timeline"
import { TeamMemberCard } from "../../presentation/components/common/team-member-card"
import { StatsSection } from "../../presentation/components/common/stats-section"
import { CTASection } from "../../presentation/components/common/cta-section"
import { SEOService } from "../../application/services/seo-service"
import { COMPANY_STORY, TEAM_MEMBERS, COMPANY_MILESTONES } from "../../domain/data/about-data"
import { HOME_STATS } from "../../domain/data/home-data"
import { SITE_CONFIG } from "../../domain/entities/site-config"

export async function generateMetadata(): Promise<Metadata> {
  const seoData = SEOService.generateMetadata({
    title: "About Us - Our Story, Mission & Expert Team",
    description:
      "Learn about our journey since 2008, meet our expert team, and discover the values that drive our commitment to helping businesses succeed.",
    keywords: [
      "about us",
      "company story",
      "business consulting team",
      "mission vision",
      "company values",
      "expert consultants",
    ],
    canonicalUrl: `${SITE_CONFIG.url}/about`,
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
          alt: `About ${SITE_CONFIG.name}`,
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

export default function AboutPage() {
  const webPageStructuredData = SEOService.generateStructuredData("WebPage", {
    title: "About Us - Our Story, Mission & Expert Team",
    description:
      "Learn about our journey since 2008, meet our expert team, and discover the values that drive our commitment to helping businesses succeed.",
    url: `${SITE_CONFIG.url}/about`,
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
          title="About Our Company"
          subtitle="Our Story"
          description="Since 2008, we've been dedicated to helping businesses transform and grow. Our team of experts combines deep industry knowledge with innovative solutions to deliver exceptional results."
          primaryCTA={{
            text: "Work With Us",
            href: "/contact",
          }}
          secondaryCTA={{
            text: "View Our Services",
            href: "/services",
          }}
          backgroundVariant="pattern"
          image={{
            src: "/images/about-hero.png",
            alt: "Our team collaborating in a modern office environment",
          }}
        />

        {/* Mission & Vision */}
        <MissionVision mission={COMPANY_STORY.mission} vision={COMPANY_STORY.vision} founded={COMPANY_STORY.founded} />

        {/* Company Values */}
        <CompanyValues values={COMPANY_STORY.values} />

        {/* Stats Section */}
        <StatsSection title="Our Impact" subtitle="Proven Results" stats={HOME_STATS} />

        {/* Company Timeline */}
        <CompanyTimeline milestones={COMPANY_MILESTONES} />

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">Meet the Team</p>
              <h2 className="text-3xl font-bold text-balance mb-4">Expert Professionals</h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Our diverse team brings together decades of experience across various industries and specializations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Work Together?"
          description="Let's discuss how our experienced team can help your business achieve its goals and reach new heights."
          primaryCTA={{
            text: "Get In Touch",
            href: "/contact",
          }}
          secondaryCTA={{
            text: "See Our Work",
            href: "/services",
          }}
          variant="muted"
        />
      </MainLayout>
    </>
  )
}
