import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

interface OfficeLocation {
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  email: string
}

interface OfficeLocationsProps {
  locations: OfficeLocation[]
  title?: string
  subtitle?: string
}

export function OfficeLocations({
  locations,
  title = "Our Locations",
  subtitle = "Find us near you",
}: OfficeLocationsProps) {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">{subtitle}</p>
          <h2 className="text-3xl font-bold text-balance">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{location.name}</CardTitle>
                <CardDescription>Our {location.city} office</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>{location.address}</p>
                    <p>
                      {location.city}, {location.state} {location.zip}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-sm hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-sm hover:text-primary transition-colors">
                    {location.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
