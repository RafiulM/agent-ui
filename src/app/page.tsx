'use client'
import Sidebar from '@/components/playground/Sidebar/Sidebar'
import { ChatArea } from '@/components/playground/ChatArea'
import HeroSection from '@/components/playground/HeroSection'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-background/80 flex flex-col">
        <HeroSection />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <ChatArea />
        </div>
      </div>
    </Suspense>
  )
}
