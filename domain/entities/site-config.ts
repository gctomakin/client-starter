import type { NavigationItem, ContactInfo } from "../types/common"

export const SITE_CONFIG = {
  name: "Your Company",
  description: "Professional services and solutions for your business needs",
  url: "https://yourcompany.com",
  ogImage: "/og-image.jpg",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ] as NavigationItem[],
  contact: {
    email: "hello@yourcompany.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business St, City, State 12345",
  } as ContactInfo,
} as const
