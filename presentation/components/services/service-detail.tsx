import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check } from "lucide-react"
import type { Service } from "../../../domain/types/common"

interface ServiceDetailProps {
  service: Service
  isReversed?: boolean
}

export function ServiceDetail({ service, isReversed = false }: ServiceDetailProps) {
  return (
    <section id={service.id} className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Content */}
          <div className={`space-y-6 ${isReversed ? "lg:col-start-2" : ""}`}>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
            </div>

            {/* Features */}
            {service.features && service.features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">What's Included:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative ${isReversed ? "lg:col-start-1" : ""}`}>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold">Ready to Transform?</h3>
                  <p className="text-muted-foreground">
                    Let's discuss how our {service.title.toLowerCase()} services can help your business achieve its
                    goals.
                  </p>
                </div>
                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
