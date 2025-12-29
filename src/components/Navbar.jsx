import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const HamburgerIcon = ({ isOpen }) => (
  <div className="hamburger-icon">
    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
    <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
  </div>
)

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Handle hash link clicks - navigate to home if needed, then scroll
  const handleHashLink = (e, hash) => {
    e.preventDefault()
    setIsMenuOpen(false) // Close menu on link click
    // Map #download to #get-started since there's no #download section
    const targetHash = hash === '#download' ? '#get-started' : hash
    if (location.pathname !== '/') {
      navigate(`/${targetHash}`)
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.querySelector(targetHash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // Update URL hash
      window.history.pushState(null, '', targetHash)
      const element = document.querySelector(targetHash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container navbar-content">
          <Link to="/" className="logo">
            <img 
              src={`${import.meta.env.BASE_URL}flashbits.webp`} 
              alt="flashbits" 
              className="logo-img"
              loading="eager"
              decoding="async"
            />
            <span>flashbits</span>
          </Link>

          <ul className="nav-links">
            <li><a href="#problem-sets" className="nav-featured" onClick={(e) => handleHashLink(e, '#problem-sets')}>Blind 75</a></li>
            <li><a href="#why" onClick={(e) => handleHashLink(e, '#why')}>Why flashbits</a></li>
            <li><a href="#features" onClick={(e) => handleHashLink(e, '#features')}>Features</a></li>
            <li><a href="#topics" onClick={(e) => handleHashLink(e, '#topics')}>Topics</a></li>
            <li><a href="#faq" onClick={(e) => handleHashLink(e, '#faq')}>FAQ</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="nav-cta">
            <a href="#download" className="btn btn-secondary" onClick={(e) => handleHashLink(e, '#download')}>Download</a>
            <a href="#get-started" className="btn btn-primary" onClick={(e) => handleHashLink(e, '#get-started')}>Get Started</a>
          </div>

          <button 
            className="hamburger-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Rendered outside navbar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 200,
                duration: 0.4
              }}
            >
              <div className="mobile-menu-content">
                <ul className="mobile-nav-links">
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <a href="#problem-sets" className="mobile-nav-link" onClick={(e) => handleHashLink(e, '#problem-sets')}>
                      <span className="mobile-nav-featured">Blind 75</span>
                    </a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <a href="#why" className="mobile-nav-link" onClick={(e) => handleHashLink(e, '#why')}>Why flashbits</a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <a href="#features" className="mobile-nav-link" onClick={(e) => handleHashLink(e, '#features')}>Features</a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <a href="#topics" className="mobile-nav-link" onClick={(e) => handleHashLink(e, '#topics')}>Topics</a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <a href="#faq" className="mobile-nav-link" onClick={(e) => handleHashLink(e, '#faq')}>FAQ</a>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                  >
                    <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                  </motion.li>
                </ul>

                <div className="mobile-nav-cta">
                  <motion.a
                    href="#download"
                    className="btn btn-primary mobile-cta-btn mobile-download-btn"
                    onClick={(e) => handleHashLink(e, '#download')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Download
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar

