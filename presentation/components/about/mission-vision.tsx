import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface MissionVisionProps {
  mission: string
  vision: string
  founded?: string
}

export function MissionVision({ mission, vision, founded }: MissionVisionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <Card className="h-full">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">{mission}</CardDescription>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="h-full">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔮</span>
              </div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">{vision}</CardDescription>
            </CardContent>
          </Card>
        </div>

        {founded && (
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-primary">Founded in {founded}</span> with a commitment to excellence
              and innovation
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
