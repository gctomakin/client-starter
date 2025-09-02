// Analytics and tracking service for SEO and performance monitoring
export class AnalyticsService {
  // Google Analytics 4 tracking
  static trackPageView(url: string, title: string) {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: title,
        page_location: url,
      })
    }
  }

  // Track custom events for conversion optimization
  static trackEvent(eventName: string, parameters: Record<string, any> = {}) {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", eventName, parameters)
    }
  }

  // Track form submissions
  static trackFormSubmission(formName: string, success = true) {
    this.trackEvent("form_submit", {
      form_name: formName,
      success: success,
    })
  }

  // Track CTA clicks
  static trackCTAClick(ctaText: string, ctaLocation: string) {
    this.trackEvent("cta_click", {
      cta_text: ctaText,
      cta_location: ctaLocation,
    })
  }
}
