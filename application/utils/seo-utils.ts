// SEO utility functions for optimization
export class SEOUtils {
  // Generate meta description from content
  static generateMetaDescription(content: string, maxLength = 160): string {
    const cleanContent = content
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim()
    if (cleanContent.length <= maxLength) return cleanContent

    const truncated = cleanContent.substring(0, maxLength)
    const lastSpace = truncated.lastIndexOf(" ")
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + "..." : truncated + "..."
  }

  // Generate keywords from content
  static extractKeywords(content: string, maxKeywords = 10): string[] {
    const commonWords = new Set([
      "the",
      "a",
      "an",
      "and",
      "or",
      "but",
      "in",
      "on",
      "at",
      "to",
      "for",
      "of",
      "with",
      "by",
      "is",
      "are",
      "was",
      "were",
      "be",
      "been",
      "have",
      "has",
      "had",
      "do",
      "does",
      "did",
      "will",
      "would",
      "could",
      "should",
    ])

    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/)
      .filter((word) => word.length > 3 && !commonWords.has(word))

    const wordCount = words.reduce(
      (acc, word) => {
        acc[word] = (acc[word] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return Object.entries(wordCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word)
  }

  // Validate SEO requirements
  static validateSEO(pageData: {
    title?: string
    description?: string
    keywords?: string[]
    headings?: string[]
  }) {
    const issues: string[] = []

    if (!pageData.title) {
      issues.push("Missing page title")
    } else if (pageData.title.length > 60) {
      issues.push("Title too long (should be under 60 characters)")
    }

    if (!pageData.description) {
      issues.push("Missing meta description")
    } else if (pageData.description.length > 160) {
      issues.push("Meta description too long (should be under 160 characters)")
    }

    if (!pageData.keywords || pageData.keywords.length === 0) {
      issues.push("No keywords specified")
    }

    if (!pageData.headings || pageData.headings.length === 0) {
      issues.push("No headings found")
    }

    return {
      isValid: issues.length === 0,
      issues,
      score: Math.max(0, 100 - issues.length * 20),
    }
  }
}
