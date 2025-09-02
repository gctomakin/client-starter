import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "../domain/entities/site-config"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/api/"],
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  }
}
