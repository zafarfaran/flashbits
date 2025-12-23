import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Animated topic tags component
function TopicTags() {
  const topics = [
    { name: 'Arrays', color: '#FF6B6B' },
    { name: 'Graphs', color: '#DDA0DD' },
    { name: 'Dynamic Programming', color: '#F38181' },
    { name: 'Trees & BST', color: '#95E1D3' },
    { name: 'Linked Lists', color: '#AA96DA' },
    { name: 'Sorting', color: '#FFE66D' },
    { name: 'Recursion', color: '#FCE38A' },
  ]

  return (
    <div className="topics-visual">
      {topics.map((topic, index) => (
        <motion.div
          key={topic.name}
          className="topic-pill"
          style={{ 
            borderColor: topic.color,
            color: topic.color
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          {topic.name}
        </motion.div>
      ))}
    </div>
  )
}

// Animated bar chart component
function StatsChart() {
  const [animate, setAnimate] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const bars = [
    { label: 'Day 1', value: 15 },
    { label: 'Day 3', value: 35 },
    { label: 'Day 7', value: 55 },
    { label: 'Day 14', value: 72 },
    { label: 'Day 21', value: 85 },
    { label: 'Day 30', value: 94 },
  ]

  return (
    <div className="chart-visual">
      <div className="chart-header">
        <span className="chart-label">Accuracy %</span>
        <span className="chart-trend">+79% improvement</span>
      </div>
      <div className="chart-bars">
        {bars.map((bar, index) => (
          <div key={bar.label} className="chart-bar-container">
            <motion.div
              className="chart-bar"
              initial={{ height: 0 }}
              whileInView={{ height: `${bar.value}%` }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: 'easeOut'
              }}
            />
            <span className="chart-bar-label">{bar.label}</span>
          </div>
        ))}
      </div>
      <div className="chart-line" />
    </div>
  )
}

// Success notification component
function SuccessNotification() {
  return (
    <div className="notification-visual">
      <motion.div
        className="notification-card"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="notification-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00FF94" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <div className="notification-content">
          <div className="notification-title">Interview Passed!</div>
          <div className="notification-subtitle">Congratulations on your new role</div>
        </div>
        <div className="notification-time">now</div>
      </motion.div>
      
      <motion.div
        className="notification-card secondary"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="notification-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFB800" strokeWidth="2">
            <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
          </svg>
        </div>
        <div className="notification-content">
          <div className="notification-title">Rank Up: White Hat</div>
          <div className="notification-subtitle">You've reached 50 XP!</div>
        </div>
        <div className="notification-time">2m ago</div>
      </motion.div>
    </div>
  )
}

function WhyFlashbits() {
  return (
    <section className="why-section" id="why">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why <span className="gradient-text">flashbits</span>?
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          In the age of AI, the knowledge round will be the
          <span className="highlight-text"> defacto technical screen.</span> Stay ahead of the competition!
        </motion.p>
        
        <div className="why-grid">
          {/* Card 1: Topics */}
          <motion.div 
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="why-card-visual">
              <TopicTags />
            </div>
            <div className="why-card-content">
              <h3>1000+ curated problems</h3>
              <p>
                Our library covers every major DSA topic from arrays to advanced 
                algorithms. Questions sourced from real FAANG interviews and 
                verified by experienced engineers.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Progress Chart */}
          <motion.div 
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="why-card-visual">
              <StatsChart />
            </div>
            <div className="why-card-content">
              <h3>Track your growth</h3>
              <p>
                See exactly where you stand with detailed analytics. Track your 
                accuracy, speed, and topic mastery. Watch yourself improve from 
                day one.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Success */}
          <motion.div 
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="why-card-visual">
              <SuccessNotification />
            </div>
            <div className="why-card-content">
              <h3>Proven results</h3>
              <p>
                Join developers who've landed roles at top companies. 
                A few minutes of daily practice leads to life-changing 
                offers and career growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyFlashbits

