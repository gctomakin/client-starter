import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  image?: {
    src: string
    alt: string
  }
  backgroundVariant?: "default" | "gradient" | "pattern"
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  backgroundVariant = "default",
}: HeroSectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    gradient: "bg-gradient-to-br from-primary/5 to-secondary/5",
    pattern:
      "bg-background bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.15)_1px,_transparent_0)] bg-[length:20px_20px]",
  }

  return (
    <section className={`py-20 lg:py-32 ${backgroundClasses[backgroundVariant]}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary uppercase tracking-wide">{subtitle}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">{title}</h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">{description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
              </Button>
              {secondaryCTA && (
                <Button asChild variant="outline" size="lg">
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {image ? (
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-square rounded-2xl bg-muted flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">Hero Image Placeholder</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
