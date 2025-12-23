import { motion } from 'framer-motion'

function PhoneMockup() {
  return (
    <section className="mockup-section" id="how-it-works">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          See It In <span className="gradient-text">Action</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A beautiful, intuitive interface designed for focused learning
        </motion.p>
        
        <div className="mockup-container">
          <motion.div 
            className="mockup-phone left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.7, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mockup-screen">
              <picture>
                <source 
                  srcSet={`${import.meta.env.BASE_URL}screenshots/settings-page.webp`}
                  type="image/webp"
                />
                <img 
                  src={`${import.meta.env.BASE_URL}screenshots/settings-page.png`}
                  alt="Settings"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </motion.div>
          
          <motion.div 
            className="mockup-phone center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: -20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mockup-screen">
              <picture>
                <source 
                  srcSet={`${import.meta.env.BASE_URL}screenshots/question-feed-page.webp`}
                  type="image/webp"
                />
                <img 
                  src={`${import.meta.env.BASE_URL}screenshots/question-feed-page.png`}
                  alt="Question Feed"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </motion.div>
          
          <motion.div 
            className="mockup-phone right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.7, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mockup-screen">
              <picture>
                <source 
                  srcSet={`${import.meta.env.BASE_URL}screenshots/stats-page.webp`}
                  type="image/webp"
                />
                <img 
                  src={`${import.meta.env.BASE_URL}screenshots/stats-page.png`}
                  alt="Stats"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PhoneMockup

