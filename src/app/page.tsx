'use client'

import Link from 'next/link'
import { ArrowRight, MessageSquare, Brain, Zap, Shield, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Experience the Future of
            <span className="text-blue-600"> AI Conversations</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of developers, researchers, and creators who use Agent UI to explore 
            cutting-edge AI capabilities through an intuitive, responsive interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/playground"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Start Chatting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Powerful Features for Modern AI
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Built with the latest technologies to provide a seamless AI interaction experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Real-time Chat</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Experience smooth, real-time conversations with instant responses and seamless message streaming.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900 mb-4">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI-Powered</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Leverage state-of-the-art AI models for intelligent, contextual responses across various domains.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Clean Interface</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Intuitive design that's easy to use, with dark mode support and customizable themes.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900 mb-4">
                <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Mobile Responsive</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Fully responsive design that works perfectly on desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Flow Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Get started in just a few simple steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Type Your Message</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Enter any question, prompt, or idea you want to explore
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Send to AI</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Your message is instantly sent to our advanced AI system
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI Processes</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  The AI analyzes and generates a thoughtful response
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Get Response</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Receive your AI-generated response in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Usage Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Explore real examples of how users interact with Agent UI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Creative Writing</h3>
              <div className="space-y-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 text-sm">
                  <p className="text-slate-800 dark:text-slate-200">"Write a short story about AI helping humanity"</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 text-sm">
                  <p className="text-slate-800 dark:text-slate-200">AI generates an inspiring 500-word story</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Technical Help</h3>
              <div className="space-y-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 text-sm">
                  <p className="text-slate-800 dark:text-slate-200">"How do I optimize my React app performance?"</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 text-sm">
                  <p className="text-slate-800 dark:text-slate-200">Step-by-step optimization guide with code examples</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Brainstorming</h3>
              <div className="space-y-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 text-sm">
                  <p className="text-slate-800 dark:text-slate-200">"I need startup ideas for sustainable tech"</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 text-sm">
                  <p className="text-slate-800 dark:text-slate-200">10 innovative eco-friendly business concepts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already exploring the possibilities of AI with Agent UI
          </p>
          <Link
            href="/playground"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
          >
            Launch Playground
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-4">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-slate-900 dark:text-white">Agent UI</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-center">
              Built for developers, by developers. Open source and community-driven.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}