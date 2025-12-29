import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FireIcon, PhoneIcon, PlayIcon } from './Icons'

function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Swipe-Based'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="hero-badge float-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FireIcon size={14} color="#00FF94" /> Blind 75 Now Available
            </motion.div>
            
            <h1>
              Master Coding Interviews with{' '}
              <span className="gradient-text">{typedText}</span>
              <span className="terminal-cursor"></span>{' '}
              Learning
            </h1>
            
            <p>
              Transform your interview preparation with an intuitive, swipe-based learning platform. 
              Practice coding questions on the go, track your progress, and master the algorithms 
              that matter most in technical interviews.
            </p>
            
            <div className="hero-cta">
              <motion.a 
                href="#download" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PhoneIcon size={16} /> Download App
              </motion.a>
              <motion.a 
                href="#demo" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlayIcon size={16} /> Watch Demo
              </motion.a>
            </div>
            
            <div className="hero-stats">
              <motion.div 
                className="hero-stat hero-stat-featured"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="hero-stat-value">Blind 75</div>
                <div className="hero-stat-label">LeetCode Classics</div>
              </motion.div>
              <motion.div 
                className="hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="hero-stat-value">1,000+</div>
                <div className="hero-stat-label">DSA Questions</div>
              </motion.div>
              <motion.div 
                className="hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="hero-stat-value">14</div>
                <div className="hero-stat-label">Topic Categories</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-phone perspective-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="phone-wrapper">
              <img 
                src={`${import.meta.env.BASE_URL}screenshots/question-feed-page.webp`}
                alt="flashbits App - Question Feed"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                className="phone-mockup-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

