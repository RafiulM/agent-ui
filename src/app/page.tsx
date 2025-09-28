'use client'
import Sidebar from '@/components/playground/Sidebar/Sidebar'
import { ChatArea } from '@/components/playground/ChatArea'
import { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-1 bg-background/80">
        <Sidebar />
        <ChatArea />
      </div>
    </Suspense>
  )
}
