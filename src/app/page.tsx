'use client'
import { useState } from 'react'
import Sidebar from '@/components/playground/Sidebar/Sidebar'
import { ChatArea } from '@/components/playground/ChatArea'
import HeroSection from '@/components/playground/HeroSection'
import { Suspense } from 'react'

export default function Home() {
  const [showHero, setShowHero] = useState(true)

  const handleStartChatting = () => {
    setShowHero(false)
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen bg-background/80">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          {showHero && (
            <div className="flex-shrink-0 px-4 py-6 md:py-8">
              <HeroSection onStartChatting={handleStartChatting} variant="full" />
            </div>
          )}
          <div className={`flex-1 ${showHero ? 'min-h-0' : ''}`}>
            <ChatArea />
          </div>
        </div>
      </div>
    </Suspense>
  )
}
