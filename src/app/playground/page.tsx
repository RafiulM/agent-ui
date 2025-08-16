'use client'
import Sidebar from '@/components/playground/Sidebar/Sidebar'
import { ChatArea } from '@/components/playground/ChatArea'
import { Suspense } from 'react'
import Navigation from '@/components/common/Navigation'

export default function PlaygroundPage() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex h-screen bg-background/80 pt-16">
          <Sidebar />
          <ChatArea />
        </div>
      </Suspense>
    </>
  )
}