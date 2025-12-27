import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSets from './components/ProblemSets'
import WhyFlashbits from './components/WhyFlashbits'
import Features from './components/Features'
import PhoneMockup from './components/PhoneMockup'
import Stats from './components/Stats'
import Ranks from './components/Ranks'
import Topics from './components/Topics'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import SocialProof from './components/SocialProof'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Handle hash scrolling when component mounts or hash changes
  useEffect(() => {
    if (isLoaded && location.hash) {
      // Map #download to #get-started since there's no #download section
      const hash = location.hash === '#download' ? '#get-started' : location.hash
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300) // Wait for page to render
    }
  }, [isLoaded, location.hash])

  return (
    <div className="app">
      {/* Animated background with 3D effects - optimized for performance */}
      <div className="background-effects">
        <div className="grid-overlay"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="floating-particles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${12.5 * i}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: '18s',
              opacity: 0.25
            }}></div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main>
              <Hero />
              <ProblemSets />
              <WhyFlashbits />
              <Features />
              <PhoneMockup />
              <Stats />
              <Ranks />
              <Topics />
              {/* <Pricing /> */}
              <FAQ />
              <CTA />
            </main>
            <Footer />
            <SocialProof />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

