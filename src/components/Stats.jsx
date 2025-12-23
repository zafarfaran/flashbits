import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { fetchQuestionCount } from '../firebase'

function AnimatedNumber({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const defaultStats = [
  { value: 1000, suffix: '+', label: 'Questions', isLive: true },
  { value: 14, suffix: '', label: 'Topics' },
  { value: 4, suffix: '', label: 'Difficulty Levels' },
  { value: 18, suffix: '+', label: 'Tech Companies' }
]

function Stats() {
  const [stats, setStats] = useState(defaultStats)

  useEffect(() => {
    const loadQuestionCount = async () => {
      const count = await fetchQuestionCount()
      if (count !== null) {
        setStats(prev => prev.map(stat => 
          stat.isLive ? { ...stat, value: count, suffix: '+' } : stat
        ))
      }
    }
    loadQuestionCount()
  }, [])

  return (
    <section className="stats-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          By The <span className="gradient-text">Numbers</span>
        </motion.h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-value">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

