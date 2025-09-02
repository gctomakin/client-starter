interface Stat {
  label: string
  value: string
  description?: string
}

interface StatsSectionProps {
  title?: string
  subtitle?: string
  stats: Stat[]
}

export function StatsSection({ title, subtitle, stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">{subtitle}</p>}
            {title && <h2 className="text-3xl font-bold text-balance">{title}</h2>}
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              {stat.description && <div className="text-xs text-muted-foreground">{stat.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
