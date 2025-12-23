import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="app">
      {/* Animated background with 3D effects */}
      <div className="background-effects">
        <div className="grid-overlay tech-grid"></div>
        <div className="matrix-overlay"></div>
        <div className="glow glow-1 orb"></div>
        <div className="glow glow-2 orb"></div>
        <div className="glow glow-3 orb"></div>
        <div className="floating-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              opacity: 0.2 + Math.random() * 0.3
            }}></div>
          ))}
        </div>
        <div className="code-lines">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="code-line" style={{
              top: `${20 + i * 15}%`,
              width: `${100 + Math.random() * 200}px`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + Math.random() * 4}s`
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

