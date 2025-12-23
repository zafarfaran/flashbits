import { motion } from 'framer-motion'
import { 
  UserIcon, 
  CodeIcon, 
  TerminalIcon, 
  LaptopIcon, 
  ShieldIcon, 
  MaskIcon, 
  CrownIcon 
} from './Icons'

const ranks = [
  { name: 'n00b', xp: '0 XP', Icon: UserIcon, color: '#606068' },
  { name: 'Script Kiddie', xp: '5 XP', Icon: CodeIcon, color: '#00FF94' },
  { name: 'Code Monkey', xp: '15 XP', Icon: TerminalIcon, color: '#00D4FF' },
  { name: 'Hacktivist', xp: '30 XP', Icon: LaptopIcon, color: '#a855f7' },
  { name: 'White Hat', xp: '50 XP', Icon: ShieldIcon, color: '#FFB800' },
  { name: 'Black Hat', xp: '100 XP', Icon: MaskIcon, color: '#FF4D6A' },
  { name: 'Elite', xp: '200 XP', Icon: CrownIcon, color: '#ffd700' }
]

function Ranks() {
  return (
    <section className="ranks-section" id="ranks">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Climb The <span className="gradient-text">Hacker Ranks</span>
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Earn XP by answering questions correctly and unlock prestigious ranks
        </motion.p>
        
        <div className="ranks-grid">
          {ranks.map((rank, index) => {
            const IconComponent = rank.Icon
            return (
              <motion.div 
                key={index}
                className="rank-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.05, borderColor: rank.color }}
                style={{ '--rank-color': rank.color }}
              >
                <div className="rank-icon">
                  <IconComponent size={32} color={rank.color} />
                </div>
                <div className="rank-name" style={{ color: rank.color }}>{rank.name}</div>
                <div className="rank-xp">{rank.xp}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Ranks

