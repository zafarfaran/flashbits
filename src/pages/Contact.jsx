import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

function Contact() {

  return (
    <div className="app">
      {/* Background effects */}
      <div className="background-effects">
        <div className="grid-overlay"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>

      <Navbar />
      
      <div className="contact-page">
        <div className="container">
          <Link to="/" className="back-link">
            <ArrowLeftIcon />
            <span>Back to Home</span>
          </Link>

        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Contact <span className="gradient-text">Support</span></h1>
        </motion.div>

        <motion.div 
          className="contact-content-simple"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-text">
            <p className="contact-intro">
              We are here to help. Ask product questions, report problems, or leave feedback.
            </p>
            
            <div className="contact-email">
              <p>Email us at: <a href="mailto:support@flashbits.co" className="email-link">support@flashbits.co</a></p>
            </div>
            
            <div className="contact-details">
              <p>Allow up to 24 hours for a response.</p>
              <p>Your question may be answered in our <Link to="/#faq" className="faq-link">FAQ section</Link>.</p>
            </div>

            <div className="contact-note">
              <p>If you're looking to delete your account, it's in the settings. Scroll down to find the delete button.</p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Contact

