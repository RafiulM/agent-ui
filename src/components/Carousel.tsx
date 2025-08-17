'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface CarouselProps {
  className?: string
  children: React.ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

export const Carousel: React.FC<CarouselProps> = ({ 
  className, 
  children, 
  autoPlay = false,
  autoPlayInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  React.useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % children.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, children.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + children.length) % children.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % children.length)
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div 
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      {children.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            ‹
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={goToNext}
            aria-label="Next slide"
          >
            ›
          </Button>
          
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
            {children.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'h-2 w-2 rounded-full transition-all',
                  currentIndex === index ? 'bg-primary' : 'bg-primary/30'
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}