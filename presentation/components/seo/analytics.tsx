"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { AnalyticsService } from "../../../application/services/analytics-service"

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views
    AnalyticsService.trackPageView(window.location.href, document.title)
  }, [pathname])

  // Google Analytics 4 script
  if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) {
    return null
  }

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}
