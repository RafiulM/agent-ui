'use client'

import Link from 'next/link'
import { MessageSquare, ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()
  const isPlayground = pathname === '/playground'

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">Agent UI</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {isPlayground ? (
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            ) : (
              <Link
                href="/playground"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Try Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}