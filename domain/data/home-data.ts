import type { Service } from "../types/common"

export const HOME_SERVICES: Service[] = [
  {
    id: "consulting",
    title: "Business Consulting",
    description: "Strategic guidance to help your business grow and overcome challenges with expert insights.",
    icon: "💼",
    features: [
      "Strategic planning and analysis",
      "Market research and competitive analysis",
      "Process optimization",
      "Growth strategy development",
    ],
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology solutions and digital strategies.",
    icon: "🚀",
    features: [
      "Technology assessment and roadmap",
      "Digital workflow automation",
      "Cloud migration services",
      "Data analytics implementation",
    ],
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Expert project leadership to ensure your initiatives are delivered on time and within budget.",
    icon: "📊",
    features: [
      "Agile project methodology",
      "Risk assessment and mitigation",
      "Team coordination and leadership",
      "Quality assurance and delivery",
    ],
  },
]

export const HOME_STATS = [
  {
    label: "Projects Completed",
    value: "500+",
    description: "Successfully delivered",
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    description: "Average rating",
  },
  {
    label: "Years Experience",
    value: "15+",
    description: "Industry expertise",
  },
  {
    label: "Team Members",
    value: "50+",
    description: "Expert professionals",
  },
]

export const HOME_TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "Their strategic consulting transformed our business operations. We saw a 40% increase in efficiency within the first quarter.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Operations Director, Global Solutions",
    content:
      "The digital transformation project exceeded our expectations. The team's expertise and dedication were outstanding.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Founder, Innovation Labs",
    content:
      "Professional, reliable, and results-driven. They helped us scale our operations seamlessly during rapid growth.",
    rating: 5,
  },
]
