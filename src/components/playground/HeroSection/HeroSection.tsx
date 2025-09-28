'use client'

import { FC } from 'react'
import Heading from '@/components/ui/typography/Heading/Heading'
import Paragraph from '@/components/ui/typography/Paragraph/Paragraph'
import { Sparkles, MessageCircle, Zap, Settings } from 'lucide-react'

const HeroSection: FC = () => {
  return (
    <section 
      className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 bg-gradient-to-b from-background to-background/80 border-b border-border/20"
      aria-label="Welcome to AI Playground"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="p-3 sm:p-4 bg-primary/10 rounded-full animate-pulse">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
        </div>
        
        <Heading size={1} className="mb-3 sm:mb-4 text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
      >
          AI Playground
        </Heading>
        
        <Paragraph size="lg" className="mb-4 sm:mb-6 text-secondary/80 max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
   >
          Welcome to your interactive AI chat playground. Engage with advanced AI models, 
          explore different conversation modes, and experience the future of conversational AI.
        </Paragraph>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary/60">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Real-time conversations</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary/60">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Multiple AI models</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-secondary/60">
            <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Customizable settings</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection