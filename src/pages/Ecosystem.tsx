import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { universes, roadmapStages } from '../data';
import type { Lang } from '../types';
import UniverseLogo from '../components/UniverseLogo';

interface EcosystemProps {
  lang: Lang;
}

export default function Ecosystem({ lang }: EcosystemProps) {
  const t = lang === 'en' ? {
    title: 'Our Ecosystem',
    subtitle: 'One Ecosystem. Six Worlds. Limitless Impact.',
    description: 'AURYN is building a connected ecosystem of technological universes, each addressing fundamental human needs while contributing to a greater whole.',
    explore: 'Explore',
    status: 'Status',
    flowTitle: 'How It Works',
    flowDesc: 'AURYN → Six Worlds → Products → Users → Impact'
  } : {
    title: 'Notre Écosystème',
    subtitle: 'Un Écosystème. Six Univers. Impact Illimité.',
    description: 'AURYN construit un écosystème connecté d\'univers technologiques, chacun répondant à des besoins humains fondamentaux tout en contribuant à un tout plus grand.',
    explore: 'Explorer',
    status: 'Statut',
    flowTitle: 'Comment ça marche',
    flowDesc: 'AURYN → Six Univers → Produits → Utilisateurs → Impact'
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 relative grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-amber-400 font-medium mb-4">{t.subtitle}</p>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Flow Visualization */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {['AURYN', 'Six Worlds', 'Products', 'Users', 'Impact'].map((step, i) => (
              <div key={step} className="flex items-center gap-3 sm:gap-4">
                <motion.div
                  className="px-4 py-2 rounded-lg glass-light text-sm font-medium"
                  style={{ 
                    color: i === 0 ? '#c9a84c' : '#a0a0b0',
                    border: i === 0 ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(255,255,255,0.05)'
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  {step}
                </motion.div>
                {i < 4 && (
                  <ArrowRight size={14} className="text-gray-600 hidden sm:block" />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Universe Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universes.map((universe, i) => (
              <motion.div
                key={universe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/universe/${universe.id}`}
                  className="group block p-8 rounded-2xl glass-light hover:bg-white/[0.04] transition-all duration-300 h-full relative overflow-hidden"
                >
                  {/* Background glow */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ background: universe.color }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <UniverseLogo universe={universe} size="lg" />
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{ color: universe.color, background: `${universe.color}15` }}
                      >
                        {universe.status}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-semibold text-xl mb-2" style={{ color: universe.color }}>
                      {universe.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{universe.domain}</p>
                    <p className="text-sm text-gray-300 italic mb-4">"{universe.signature}"</p>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">{universe.mission}</p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style={{ color: universe.color }}>
                      <span>{t.explore}</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-display text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Roadmap
          </motion.h2>
          
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/5 hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {roadmapStages.map((stage, i) => (
                <motion.div
                  key={stage.id}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center relative"
                    style={{
                      background: stage.progress > 0 ? `rgba(201,168,76,${stage.progress / 100 * 0.3})` : 'rgba(255,255,255,0.03)',
                      border: `2px solid ${stage.progress > 0 ? `rgba(201,168,76,${stage.progress / 100})` : 'rgba(255,255,255,0.1)'}`
                    }}
                  >
                    {stage.progress > 0 && (
                      <span className="text-xs font-bold text-amber-400">{stage.progress}%</span>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-gray-200 mb-1">{stage.label}</h4>
                  <p className="text-[10px] text-gray-500">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
