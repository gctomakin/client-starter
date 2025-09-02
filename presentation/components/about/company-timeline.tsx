interface Milestone {
  year: string
  title: string
  description: string
}

interface CompanyTimelineProps {
  milestones: Milestone[]
  title?: string
  subtitle?: string
}

export function CompanyTimeline({
  milestones,
  title = "Our Journey",
  subtitle = "Milestones that shaped us",
}: CompanyTimelineProps) {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">{subtitle}</p>
          <h2 className="text-3xl font-bold text-balance">{title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} ml-16 md:ml-0`}>
                    <div className="bg-card rounded-lg p-6 shadow-sm border">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
