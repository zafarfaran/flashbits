import { motion } from 'framer-motion'
import { 
  ZapIcon, 
  TargetIcon, 
  TrophyIcon, 
  ChartIcon, 
  BrainIcon, 
  BuildingIcon,
  CodeIcon,
} from './Icons'

// Plus icon for new content
const PlusIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)



const features = [
  {
    Icon: CodeIcon,
    title: 'Blind 75 Questions',
    description: 'The famous Blind 75 LeetCode problems in MCQ format. Master the most asked interview questions.',
    featured: true,
    badge: 'Popular'
  },
  {
    Icon: ZapIcon,
    title: 'Swipe to Learn',
    description: 'Intuitive swipe-based interface designed for efficient learning. Build pattern recognition through natural, engaging practice sessions.'
  },
  {
    Icon: TargetIcon,
    title: 'Instant Feedback',
    description: 'Know immediately if your answer is right or wrong. Get detailed explanations for every question.'
  },
  {
    Icon: PlusIcon,
    title: 'New Questions Monthly',
    description: 'Fresh content added every month. Stay up-to-date with the latest interview trends and question patterns.',
    highlight: true
  },
  {
    Icon: TrophyIcon,
    title: 'Earn XP & Level Up',
    description: 'Gamified progression system that motivates consistent practice. Earn experience points, unlock achievement ranks, and track your development journey.'
  },
  {
    Icon: BrainIcon,
    title: 'Spaced Repetition',
    description: 'Intelligent algorithm that reinforces learning through strategic question repetition. Focus on areas that need improvement for optimal retention.'
  },
  {
    Icon: ChartIcon,
    title: 'Track Progress',
    description: 'Comprehensive performance analytics provide detailed insights into your strengths and identify areas requiring additional focus.'
  },
  {
    Icon: BuildingIcon,
    title: 'Company-Specific Prep',
    description: 'Filter questions by company. Practice with questions from Google, Meta, Amazon, Apple, and more.',
    comingSoon: true
  }
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Powerful <span className="gradient-text">Features</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Everything you need to ace your technical interviews
        </motion.p>
        
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon
            return (
              <motion.div 
                key={index}
                className={`feature-card tilt-card ${feature.highlight ? 'feature-highlight' : ''} ${feature.comingSoon ? 'feature-coming-soon' : ''} ${feature.featured ? 'feature-featured' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  rotateX: 5,
                  rotateY: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {feature.highlight && <div className="feature-badge">Pro</div>}
                {feature.comingSoon && <div className="feature-badge coming-soon">Coming Soon</div>}
                {feature.featured && <div className="feature-badge featured">{feature.badge}</div>}
                <div className="feature-icon">
                  <IconComponent size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features

