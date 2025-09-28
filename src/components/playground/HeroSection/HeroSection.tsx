import React from 'react'

export interface HeroSectionProps {
  title?: string
  subtitle?: string
  className?: string
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "AI Chat Playground",
  subtitle = "Experience the power of conversational AI with our interactive playground. Start chatting with intelligent agents that understand context and provide meaningful responses.",
  className = ""
}) => {
  return (
    <section 
      className={`relative w-full bg-gradient-to-br from-primary/5 via-primary/10 to-background py-16 px-6 ${className}`}
      aria-label="Hero section"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          {subtitle}
        </p>
        <div className="mt-8 flex justify-center animate-fade-in-up animation-delay-200">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection