import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar-content">
        <a href="#" className="logo">
          <img src={`${import.meta.env.BASE_URL}flashbits.png`} alt="flashbits" className="logo-img" />
          <span>flashbits</span>
        </a>

        <ul className="nav-links">
          <li><a href="#problem-sets" className="nav-featured">Blind 75</a></li>
          <li><a href="#why">Why flashbits</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#topics">Topics</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-cta">
          <a href="#download" className="btn btn-secondary">Download</a>
          <a href="#get-started" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

