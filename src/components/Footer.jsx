import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Footer() {
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
          <div className="footer-logo">
            <img src={`${import.meta.env.BASE_URL}flashbits.png`} alt="flashbits" className="logo-img" />
            <span>flashbits</span>
          </div>
          
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#topics">Topics</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
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

