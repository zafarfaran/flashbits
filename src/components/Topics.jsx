import { motion } from 'framer-motion'

const topics = [
  { name: 'Arrays', highlight: true },
  { name: 'Strings', highlight: false },
  { name: 'Linked Lists', highlight: true },
  { name: 'Stacks & Queues', highlight: false },
  { name: 'Trees', highlight: true },
  { name: 'Graphs', highlight: false },
  { name: 'Heaps', highlight: true },
  { name: 'Dynamic Programming', highlight: true },
  { name: 'Greedy Algorithms', highlight: false },
  { name: 'Recursion', highlight: false },
  { name: 'Sorting', highlight: true },
  { name: 'Searching', highlight: false },
  { name: 'Bit Manipulation', highlight: false },
  { name: 'Math & Number Theory', highlight: true },
  { name: 'Advanced Data Structures', highlight: false },
  { name: 'Advanced Algorithms', highlight: true }
]

function Topics() {
  return (
    <section className="topics-section" id="topics">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Master Every <span className="gradient-text">Topic</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From arrays to advanced algorithms, we've got you covered
        </motion.p>
        
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <motion.div 
              key={index}
              className={`topic-tag ${topic.highlight ? 'highlight' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {topic.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Topics

