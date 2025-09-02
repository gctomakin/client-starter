interface ProcessStep {
  step: string
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
  title?: string
  subtitle?: string
}

export function ProcessSteps({ steps, title = "Our Process", subtitle = "How we work with you" }: ProcessStepsProps) {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">{subtitle}</p>
          <h2 className="text-3xl font-bold text-balance">{title}</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border transform translate-x-4 -translate-y-0.5"></div>
                )}

                <div className="text-center space-y-4">
                  {/* Step number */}
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto relative z-10">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
