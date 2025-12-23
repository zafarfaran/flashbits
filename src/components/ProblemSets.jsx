import { motion } from 'framer-motion'
import { CodeIcon } from './Icons'

// Check icon
const CheckIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

// List icon
const ListIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
)

// Clock icon for coming soon
const ClockIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const problemSets = [
  {
    name: 'Blind 75',
    count: 75,
    description: 'The most essential LeetCode problems curated by a Blind engineer. Covers all major patterns.',
    status: 'available',
    color: '#00FF94',
    topics: ['Arrays', 'Trees', 'Graphs', 'DP', 'Strings']
  },
  {
    name: 'NeetCode 150',
    count: 150,
    description: 'Expanded list with more comprehensive coverage. Perfect after completing Blind 75.',
    status: 'coming',
    color: '#FF6B6B',
    topics: ['Backtracking', 'Tries', 'Heap', 'Intervals', 'Math']
  },
  {
    name: 'LeetCode 75',
    count: 75,
    description: 'Official LeetCode study plan. Great for structured preparation with milestone tracking.',
    status: 'coming',
    color: '#FFB800',
    topics: ['Binary Search', 'Stack', 'Queue', 'Bit Manipulation']
  }
]

function ProblemSets() {
  return (
    <section className="problem-sets-section" id="problem-sets">
      <div className="container">
        <motion.div
          className="problem-sets-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="problem-sets-badge">
            <CodeIcon size={14} /> Interview Must-Haves
          </div>
          <h2 className="section-title">
            Curated <span className="gradient-text">Problem Sets</span>
          </h2>
          <p className="section-subtitle">
            Master the problems that actually appear in FAANG interviews.
            MCQ format lets you practice anywhere, anytime.
          </p>
        </motion.div>

        <div className="problem-sets-grid">
          {problemSets.map((set, index) => (
            <motion.div
              key={set.name}
              className={`problem-set-card ${set.status === 'available' ? 'available' : 'coming-soon'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {set.status === 'available' ? (
                <div className="set-status available">
                  <CheckIcon size={12} /> Available Now
                </div>
              ) : (
                <div className="set-status coming">
                  <ClockIcon size={12} /> Coming Soon
                </div>
              )}
              
              <div className="set-header">
                <div className="set-icon" style={{ background: `${set.color}15`, color: set.color }}>
                  <ListIcon size={28} color={set.color} />
                </div>
                <div className="set-count" style={{ color: set.color }}>
                  {set.count}
                  <span>problems</span>
                </div>
              </div>
              
              <h3 className="set-name" style={{ color: set.color }}>{set.name}</h3>
              <p className="set-description">{set.description}</p>
              
              <div className="set-topics">
                {set.topics.map((topic, i) => (
                  <span 
                    key={i} 
                    className="set-topic"
                    style={{ 
                      borderColor: `${set.color}40`,
                      color: set.color
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {set.status === 'available' && (
                <motion.a 
                  href="#download" 
                  className="set-cta"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ background: set.color }}
                >
                  Start Practicing
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="problem-sets-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="note-icon">💡</span>
          <span>All problems are converted to MCQ format — perfect for quick review sessions during commute or breaks.</span>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSets

