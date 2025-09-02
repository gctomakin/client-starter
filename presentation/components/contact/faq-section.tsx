"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  items: FAQItem[]
  title?: string
  subtitle?: string
}

export function FAQSection({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Common questions",
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">{subtitle}</p>
          <h2 className="text-3xl font-bold text-balance">{title}</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </div>
              </button>
              {openItems.includes(index) && (
                <CardContent className="pt-0 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
