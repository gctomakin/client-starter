"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
}

export function TestimonialsSection({
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Trusted by businesses worldwide",
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  if (!testimonials.length) return null

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">{subtitle}</p>
          <h2 className="text-3xl font-bold text-balance">{title}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-foreground text-balance leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="space-y-1">
                  <p className="font-semibold text-lg">{currentTestimonial.name}</p>
                  <p className="text-muted-foreground">{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Navigation */}
              {testimonials.length > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="rounded-full bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="rounded-full bg-transparent"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
