import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Service } from "../../../domain/types/common"

interface ServiceCardProps {
  service: Service
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
}

export function ServiceCard({
  service,
  showCTA = false,
  ctaText = "Learn More",
  ctaHref = `/services/${service.id}`,
}: ServiceCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        {service.icon && (
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">{service.icon}</span>
          </div>
        )}
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>

      {service.features && service.features.length > 0 && (
        <CardContent>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      )}

      {showCTA && (
        <CardContent className="pt-0">
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link href={ctaHref}>{ctaText}</Link>
          </Button>
        </CardContent>
      )}
    </Card>
  )
}
