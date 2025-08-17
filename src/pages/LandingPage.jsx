'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card'
import { Carousel } from '../components/Carousel'
import { Footer } from '../components/Footer'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  const router = useRouter()

  const handleCTAClick = () => {
    router.push('/signup')
  }

  return (
    <div className={styles.landingPage}>
      {/* Hero Section */}
      <section className={styles.heroSection} aria-label="Hero section">
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>Welcome to YourApp</h1>
          <p className={styles.subheadline}>
            Discover the power of AI-driven solutions that transform the way you work and connect.
          </p>
          <Button 
            size="lg" 
            onClick={handleCTAClick}
            aria-label="Get started with YourApp"
            className={styles.ctaButton}
          >
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection} aria-label="Features section">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Choose YourApp?</h2>
          <div className={styles.featuresGrid}>
            <Card className={styles.featureCard}>
              <CardHeader>
                <CardTitle>AI-Powered Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Harness the power of advanced AI to streamline your workflow and boost productivity.</p>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <CardTitle>Seamless Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with your favorite tools and platforms without any hassle or complex setup.</p>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <CardTitle>Real-time Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Work together with your team in real-time, no matter where you are in the world.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection} aria-label="Testimonials section">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>What Our Users Say</h2>
          <Carousel className={styles.testimonialsCarousel} autoPlay={true}>
            <div className={styles.testimonial}>
              <blockquote>
                "YourApp has completely transformed how our team collaborates. The AI features are incredible!"
              </blockquote>
              <cite>— Sarah Johnson, Product Manager</cite>
            </div>
            <div className={styles.testimonial}>
              <blockquote>
                "The seamless integration with our existing tools saved us weeks of migration time."
              </blockquote>
              <cite>— Michael Chen, Technical Lead</cite>
            </div>
            <div className={styles.testimonial}>
              <blockquote>
                "Customer support is outstanding, and the platform is incredibly intuitive to use."
              </blockquote>
              <cite>— Emily Rodriguez, Design Director</cite>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage