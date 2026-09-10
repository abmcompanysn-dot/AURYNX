import { motion } from 'framer-motion';
import { universes } from '../data';

export default function HeroVisual() {
  const radius = 140;
  
  return (
    <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] mx-auto">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-white/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Middle ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-white/[0.07]"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Inner ring */}
      <motion.div
        className="absolute inset-16 rounded-full border border-white/[0.1]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {universes.map((u, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const x = 200 + radius * Math.cos(angle);
          const y = 200 + radius * Math.sin(angle);
          return (
            <motion.line
              key={u.id}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke={u.color}
              strokeWidth="0.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
          );
        })}
      </svg>

      {/* Center core - AURYN */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.3) 0%, rgba(201,168,76,0.05) 70%, transparent 100%)',
          boxShadow: '0 0 60px rgba(201,168,76,0.2), 0 0 120px rgba(201,168,76,0.1)'
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/10 border border-amber-400/30 flex items-center justify-center">
          <span className="font-display font-bold text-amber-400 text-lg">A</span>
        </div>
      </motion.div>

      {/* Universe nodes */}
      {universes.map((u, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const x = 50 + (radius / 2) * Math.cos(angle);
        const y = 50 + (radius / 2) * Math.sin(angle);
        return (
          <motion.div
            key={u.id}
            className="absolute w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
              background: `radial-gradient(circle, ${u.color}20 0%, transparent 70%)`,
              border: `1px solid ${u.color}40`,
              boxShadow: `0 0 20px ${u.color}20`
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            whileHover={{ scale: 1.3 }}
          >
            <span className="text-sm">{u.icon}</span>
          </motion.div>
        );
      })}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-amber-400/30"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
