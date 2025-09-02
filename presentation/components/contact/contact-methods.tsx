import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ContactMethod {
  title: string
  description: string
  value: string
  icon: string
  href: string | null
}

interface ContactMethodsProps {
  methods: ContactMethod[]
  title?: string
  subtitle?: string
}

export function ContactMethods({
  methods,
  title = "Get In Touch",
  subtitle = "Multiple ways to reach us",
}: ContactMethodsProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">{subtitle}</p>
          <h2 className="text-3xl font-bold text-balance">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => (
            <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{method.icon}</span>
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription className="text-sm">{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-medium text-foreground">{method.value}</p>
                {method.href && (
                  <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                    <Link href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined}>
                      {method.title.includes("Email") && "Send Email"}
                      {method.title.includes("Call") && "Call Now"}
                      {method.title.includes("Visit") && "Get Directions"}
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
