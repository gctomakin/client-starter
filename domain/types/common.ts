// Core domain types for the static website
export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
}

export interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon?: string
  features?: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
}
