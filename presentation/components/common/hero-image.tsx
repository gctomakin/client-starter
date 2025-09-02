"use client"

import Image from "next/image"
import { useState } from "react"

interface HeroImageProps {
  image: {
    src: string
    alt: string
  }
}

export function HeroImage({ image }: HeroImageProps) {
  const [imageSrc, setImageSrc] = useState(image.src || "/placeholder.svg")
  const [hasError, setHasError] = useState(false)

  const handleImageError = () => {
    if (!hasError) {
      console.log("[v0] Image failed to load:", image.src)
      setImageSrc(`/placeholder.svg?height=600&width=600&query=${encodeURIComponent(image.alt)}`)
      setHasError(true)
    }
  }

  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
      <Image
        src={imageSrc}
        alt={image.alt}
        fill
        className="object-cover"
        priority
        onError={handleImageError}
      />
    </div>
  )
} 