"use client"

import React, { useState } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  sizes?: string
  onLoad?: () => void
  onError?: () => void
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fill = false,
  className = "",
  width,
  height,
  priority = false,
  quality = 85,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  onLoad,
  onError
}) => {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {
    setImageError(true)
    setIsLoading(false)
    onError?.()
  }

  // Fallback image
  const fallbackSrc = "/images/placeholder.png"

  if (imageError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">Image not available</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center ${className}`}>
          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
      )}
      <Image
        src={src || "/images/police-boot.jpg"}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={className}
        priority={priority}
        quality={quality}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        // Add these props for better mobile compatibility
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        // Force reload on mobile devices
        unoptimized={false}
        // Add cache busting for mobile
        loader={({ src, width, quality }) => {
          const params = new URLSearchParams()
          if (width) params.set('w', width.toString())
          if (quality) params.set('q', quality.toString())
          // Add timestamp for cache busting on mobile
          params.set('t', Date.now().toString())
          return `${src}?${params.toString()}`
        }}
      />
    </>
  )
}
