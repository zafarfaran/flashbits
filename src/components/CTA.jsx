import { motion } from 'framer-motion'
import { AppleIcon, AndroidIcon } from './Icons'

function CTA() {
  return (
    <section className="cta-section" id="get-started">
      <div className="container">
        <motion.div 
          className="cta-card animated-border"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', damping: 20 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to <span className="gradient-text">Ace Your Interview</span>?
            </h2>
            <p className="cta-subtitle">
              Join thousands of developers who are leveling up their interview skills
            </p>
            <div className="cta-buttons">
              <motion.a 
                href="#download" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AppleIcon size={16} /> Download for iOS
              </motion.a>
              <motion.a 
                href="#android" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AndroidIcon size={16} /> Android Coming Soon
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA

