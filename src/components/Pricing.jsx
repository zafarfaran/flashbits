import { motion } from 'framer-motion'
import { CheckCircleIcon } from './Icons'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '100 practice questions',
      'Basic progress tracking',
      'All DSA topics',
      '4 difficulty levels',
      'XP & rank system',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'For serious interview prep',
    features: [
      '1000+ questions & growing',
      'New questions added monthly',
      'Detailed explanations',
      'Advanced analytics',
      'Priority support',
      'Early access to new features',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Lifetime',
    price: '$49',
    period: 'one-time',
    description: 'Best value for career growth',
    features: [
      'Everything in Pro',
      'Lifetime access',
      'All future updates',
      'No recurring fees',
      'Exclusive Discord community',
      'Resume review (1x)',
    ],
    cta: 'Get Lifetime Access',
    highlighted: false,
    badge: 'Best Value',
  },
]

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Simple <span className="gradient-text">Pricing</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Choose the plan that fits your interview prep journey
        </motion.p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.highlighted ? 'pricing-highlighted' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
              
              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircleIcon size={16} color="#00FF94" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#download"
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="pricing-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          All plans include a 7-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing

