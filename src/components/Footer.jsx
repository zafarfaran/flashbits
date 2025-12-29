import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  // Handle hash link clicks - navigate to home if needed, then scroll
  const handleHashLink = (e, hash) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate(`/${hash}`)
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // Update URL hash
      window.history.pushState(null, '', hash)
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="footer-content">
          <Link to="/" className="footer-logo">
            <img 
              src={`${import.meta.env.BASE_URL}flashbits.webp`} 
              alt="flashbits" 
              className="logo-img"
              loading="lazy"
              decoding="async"
            />
            <span>flashbits</span>
          </Link>
          
          <ul className="footer-links">
            <li><a href="#features" onClick={(e) => handleHashLink(e, '#features')}>Features</a></li>
            <li><a href="#topics" onClick={(e) => handleHashLink(e, '#topics')}>Topics</a></li>
            <li><a href="#faq" onClick={(e) => handleHashLink(e, '#faq')}>FAQ</a></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 flashbits. Built for developers, by developers.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

