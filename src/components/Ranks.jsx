import { motion } from 'framer-motion'
import { 
  UserIcon, 
  CodeIcon, 
  TerminalIcon, 
  LaptopIcon, 
  ShieldIcon, 
  MaskIcon, 
  SkullIcon,
  EyeOffIcon,
  SparklesIcon,
  DiamondIcon
} from './Icons'

const ranks = [
  { name: 'n00b', xp: '0 XP', Icon: UserIcon, color: '#6B7280', description: 'Just getting started' },
  { name: 'Script Kiddie', xp: '50 XP', Icon: CodeIcon, color: '#10B981', description: 'Learning the basics' },
  { name: 'Code Monkey', xp: '150 XP', Icon: TerminalIcon, color: '#3B82F6', description: 'Writing code daily' },
  { name: 'Hacktivist', xp: '350 XP', Icon: LaptopIcon, color: '#8B5CF6', description: 'Fighting with code' },
  { name: 'White Hat', xp: '700 XP', Icon: ShieldIcon, color: '#F59E0B', description: 'Ethical hacker' },
  { name: 'Black Hat', xp: '1,500 XP', Icon: SkullIcon, color: '#EF4444', description: 'Elite programmer' },
  { name: 'Ghost', xp: '3,000 XP', Icon: EyeOffIcon, color: '#00FF94', description: 'Legendary status' },
  { name: 'Phantom', xp: '6,000 XP', Icon: SparklesIcon, color: '#A855F7', description: 'Mythical coder' },
  { name: 'Legend', xp: '12,000 XP', Icon: DiamondIcon, color: '#FFD700', description: 'Ultimate mastery' }
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

