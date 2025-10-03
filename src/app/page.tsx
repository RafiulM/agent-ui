'use client'
import { HeroSection } from '@/components/landing/HeroSection'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleCTAClick = () => {
    router.push('/playground')
  }

  return (
    <main>
      <HeroSection onCTAClick={handleCTAClick} />
    </main>
  )
}
