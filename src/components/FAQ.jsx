import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const ChevronIcon = ({ isOpen }) => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease'
    }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const faqs = [
  {
    question: 'Is flashbits free to use?',
    answer: 'Yes! flashbits offers a free tier with access to hundreds of questions across all topics. Premium features like unlimited questions, company-specific prep, and advanced analytics are available with a Pro subscription.'
  },
  {
    question: 'What topics are covered?',
    answer: 'We cover all major DSA topics including Arrays, Strings, Hashmaps, Trees, Graphs, Dynamic Programming, Linked Lists, Recursion, Stacks & Queues, Heaps, Binary Search, Sorting, and System Design concepts.'
  },
  {
    question: 'How is flashbits different from LeetCode?',
    answer: 'flashbits is designed for mobile-first, bite-sized learning. Instead of writing full code solutions, you focus on understanding concepts through MCQs. It\'s perfect for commutes, breaks, or quick review sessions. Think of it as the TikTok of interview prep!'
  },
  {
    question: 'Can I track my progress?',
    answer: 'Absolutely! flashbits tracks your XP, accuracy by topic, questions answered, and more. You\'ll unlock hacker ranks as you progress from n00b to Elite status.'
  },
  {
    question: 'Are the questions updated regularly?',
    answer: 'Yes! We add new questions every month to keep the content fresh and aligned with current interview trends. Pro users get early access to new question packs.'
  },
  {
    question: 'Which companies\' questions are covered?',
    answer: 'Our questions are inspired by real interviews from top tech companies including Google, Meta, Amazon, Apple, Microsoft, Netflix, and many more. Company-specific filtering is coming soon!'
  },
  {
    question: 'Is there an Android version?',
    answer: 'flashbits is currently available on iOS. Android version is in development and coming soon! Sign up for our newsletter to be notified when it launches.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team through the Contact page or directly from the app settings. We typically respond within 24 hours.'
  }
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div 
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button 
        className={`faq-question ${isOpen ? 'open' : ''}`}
        onClick={onClick}
      >
        <span>{faq.question}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked <span className="gradient-text">Questions</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Got questions? We've got answers
        </motion.p>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <motion.div 
          className="faq-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>Still have questions?</p>
          <a href="/contact" className="btn btn-secondary">Contact Us</a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

