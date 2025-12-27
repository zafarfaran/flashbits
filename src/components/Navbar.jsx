import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hash link clicks - navigate to home if needed, then scroll
  const handleHashLink = (e, hash) => {
    e.preventDefault()
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
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <img src={`${import.meta.env.BASE_URL}flashbits.png`} alt="flashbits" className="logo-img" />
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
      </div>
    </motion.nav>
  )
}

export default Navbar

