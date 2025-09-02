import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Benefit {
  title: string
  description: string
  icon: string
}

interface ServiceBenefitsProps {
  benefits: Benefit[]
  title?: string
  subtitle?: string
}

export function ServiceBenefits({
  benefits,
  title = "Why Choose Us",
  subtitle = "The advantages of working with our team",
}: ServiceBenefitsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">{subtitle}</p>
          <h2 className="text-3xl font-bold text-balance">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
