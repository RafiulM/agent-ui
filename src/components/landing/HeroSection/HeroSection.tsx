'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import styles from './HeroSection.module.css'

export interface HeroSectionProps {
  headline?: string
  description?: string
  ctaLabel?: string
  onCTAClick?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  headline = "Welcome to Agent UI",
  description = "Experience the power of AI-driven conversations with our intuitive chat interface. Start chatting with intelligent agents and explore endless possibilities.",
  ctaLabel = "Start Chatting",
  onCTAClick
}) => {
  const handleCTAClick = () => {
    if (onCTAClick) {
      onCTAClick()
    }
  }

  return (
    <section className={styles.heroSection} role="banner">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            {headline}
          </h1>
          <p className={styles.description}>
            {description}
          </p>
          <Button
            size="lg"
            className={styles.ctaButton}
            onClick={handleCTAClick}
            aria-label={`${ctaLabel} - Navigate to chat interface`}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection