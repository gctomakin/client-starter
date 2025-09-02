import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTASectionProps {
  title: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  variant?: "default" | "primary" | "muted"
}

export function CTASection({ title, description, primaryCTA, secondaryCTA, variant = "default" }: CTASectionProps) {
  const variantClasses = {
    default: "bg-background border-t",
    primary: "bg-primary text-primary-foreground",
    muted: "bg-muted/50",
  }

  const textClasses = {
    default: "text-foreground",
    primary: "text-primary-foreground",
    muted: "text-foreground",
  }

  const descriptionClasses = {
    default: "text-muted-foreground",
    primary: "text-primary-foreground/80",
    muted: "text-muted-foreground",
  }

  return (
    <section className={`py-16 ${variantClasses[variant]}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className={`text-3xl md:text-4xl font-bold text-balance ${textClasses[variant]}`}>{title}</h2>
            <p className={`text-xl text-pretty ${descriptionClasses[variant]}`}>{description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant={variant === "primary" ? "secondary" : "default"}>
              <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
            </Button>
            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant={variant === "primary" ? "outline" : "outline"}
                className={
                  variant === "primary"
                    ? "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    : ""
                }
              >
                <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
