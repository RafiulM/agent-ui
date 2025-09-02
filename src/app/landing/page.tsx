'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Heading from '@/components/ui/typography/Heading'
import Paragraph from '@/components/ui/typography/Paragraph'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background/80 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <Heading size={1} className="text-primary text-4xl font-semibold">
            Agent UI
          </Heading>
          <Heading size={2} className="text-secondary">
            Interactive AI Chat Playground
          </Heading>
        </div>

        <Paragraph size="lg" className="text-muted-foreground max-w-2xl mx-auto">
          A modern chat interface for AI agents built with Next.js, Tailwind CSS, and TypeScript. 
          Experience real-time AI interactions with a clean, intuitive interface.
        </Paragraph>

        <div className="space-y-6 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="space-y-3 p-6 bg-background border border-border rounded-lg">
              <div className="text-2xl">💬</div>
              <Heading size={3}>Real-time Chat</Heading>
              <Paragraph size="sm" className="text-muted-foreground">
                Engage in seamless conversations with AI agents with instant responses and streaming capabilities.
              </Paragraph>
            </div>

            <div className="space-y-3 p-6 bg-background border border-border rounded-lg">
              <div className="text-2xl">🎨</div>
              <Heading size={3}>Modern Interface</Heading>
              <Paragraph size="sm" className="text-muted-foreground">
                Clean, accessible design built with modern web technologies and responsive layouts.
              </Paragraph>
            </div>

            <div className="space-y-3 p-6 bg-background border border-border rounded-lg">
              <div className="text-2xl">⚡</div>
              <Heading size={3}>Fast & Efficient</Heading>
              <Paragraph size="sm" className="text-muted-foreground">
                Optimized performance with efficient state management and smooth user experiences.
              </Paragraph>
            </div>
          </div>

          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/" data-testid="start-chatting-button">
              Start Chatting
            </Link>
          </Button>
        </div>

        <Paragraph size="sm" className="text-muted-foreground pt-12">
          Built with Next.js, Tailwind CSS, TypeScript, and modern web standards.
        </Paragraph>
      </div>
    </div>
  )
}