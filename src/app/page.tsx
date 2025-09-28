'use client'
import Sidebar from '@/components/playground/Sidebar/Sidebar'
import { ChatArea } from '@/components/playground/ChatArea'
import HeroSection from '@/components/playground/HeroSection/HeroSection'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen bg-background/80">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <HeroSection />
          <ChatArea />
        </div>
      </div>
    </Suspense>
  )
}
