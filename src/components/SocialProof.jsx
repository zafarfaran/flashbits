import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Fallback notifications for when there's no real data
const fallbackNotifications = [
  { name: 'Alex', country: 'United States', action: 'just started practicing', time: '2 minutes ago', flag: '🇺🇸' },
  { name: 'Priya', country: 'India', action: 'reached White Hat rank', time: '5 minutes ago', flag: '🇮🇳' },
  { name: 'Marcus', country: 'Germany', action: 'completed 50 questions', time: '8 minutes ago', flag: '🇩🇪' },
  { name: 'Sarah', country: 'Canada', action: 'started a practice session', time: '12 minutes ago', flag: '🇨🇦' },
  { name: 'Chen', country: 'Singapore', action: 'reached Script Kiddie rank', time: '15 minutes ago', flag: '🇸🇬' },
  { name: 'Emma', country: 'UK', action: 'started a practice session', time: '18 minutes ago', flag: '🇬🇧' },
  { name: 'Raj', country: 'India', action: 'completed 25 questions', time: '22 minutes ago', flag: '🇮🇳' },
  { name: 'Mike', country: 'Australia', action: 'started a practice session', time: '25 minutes ago', flag: '🇦🇺' },
]

function SocialProof() {
  const [notifications, setNotifications] = useState(fallbackNotifications)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  // Lazy load Firebase and fetch activities after initial render
  useEffect(() => {
    // Delay Firebase loading to after page is interactive
    const loadFirebaseAndActivities = async () => {
      try {
        // Dynamic import - Firebase only loads when this runs
        const { fetchRecentActivities } = await import('../firebase')
        const activities = await fetchRecentActivities(20)
        
        if (activities && activities.length > 0) {
          setNotifications(activities)
        }
      } catch (error) {
        console.error('Error loading activities:', error)
      } finally {
        setIsLoading(false)
      }
    }

    // Wait 3 seconds before loading Firebase to prioritize page load
    const timeoutId = setTimeout(loadFirebaseAndActivities, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  // Cycle through notifications every 1 minute
  useEffect(() => {
    if (notifications.length === 0) return
    
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length)
        setIsVisible(true)
      }, 500)
    }, 60000) // 60 seconds = 1 minute

    return () => clearInterval(interval)
  }, [notifications.length])

  // Don't show anything while loading initially
  if (isLoading && notifications === fallbackNotifications) {
    return null
  }

  const notification = notifications[currentIndex]
  
  if (!notification) return null

  return (
    <div className="social-proof-container">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={currentIndex}
            className="social-proof-popup"
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -10, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="social-proof-flag">{notification.flag}</div>
            <div className="social-proof-content">
              <div className="social-proof-text">
                <strong>{notification.name}</strong> from <strong>{notification.country}</strong>
              </div>
              <div className="social-proof-action">{notification.action}</div>
            </div>
            <div className="social-proof-time">{notification.time}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SocialProof

