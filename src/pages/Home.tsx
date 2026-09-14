import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Hero3DVisual from '../components/Hero3DVisual';
import { LearnIcon, CareerIcon, HealthIcon, MindIcon, EarthIcon, LifeIcon } from '../components/icons/UniverseIcons';
import { universes } from '../data';
import type { Lang } from '../types';

interface HomeProps {
  lang: Lang;
}

function getIconForUniverse(id: string, size: number) {
  switch (id) {
    case 'learn': return <LearnIcon size={size} />;
    case 'career': return <CareerIcon size={size} />;
    case 'health': return <HealthIcon size={size} />;
    case 'mind': return <MindIcon size={size} />;
    case 'earth': return <EarthIcon size={size} />;
    case 'life': return <LifeIcon size={size} />;
    default: return null;
  }
}

export default function Home({ lang }: HomeProps) {
  const t = lang === 'en' ? {
    title: 'Technology for Life.',
    subtitle: 'Building intelligent technologies for people, organizations and the world around us.',
    cta1: 'Explore the ecosystem',
    cta2: 'Discover AURYN',
    ecosystemTitle: 'One Ecosystem. Six Worlds.',
    ecosystemSubtitle: 'Limitless Impact.',
    ecosystemDesc: 'AURYN is the parent company of a technological ecosystem composed of six specialized universes, each addressing fundamental human needs.',
    explore: 'Explore',
    status: 'Status',
    visionTitle: 'Our Vision',
    visionText: 'We believe technology should serve humanity — not the other way around. AURYN exists to build intelligent systems that improve how people learn, work, heal, think, explore and live.',
    ctaJoin: 'Join the journey'
  } : {
    title: 'Technology for Life.',
    subtitle: 'Construire des technologies intelligentes pour les personnes, les organisations et le monde qui nous entoure.',
    cta1: 'Explorer l\'écosystème',
    cta2: 'Découvrir AURYN',
    ecosystemTitle: 'Un Écosystème. Six Univers.',
    ecosystemSubtitle: 'Impact Illimité.',
    ecosystemDesc: 'AURYN est la maison mère d\'un écosystème technologique composé de six univers spécialisés, chacun répondant à des besoins humains fondamentaux.',
    explore: 'Explorer',
    status: 'Statut',
    visionTitle: 'Notre Vision',
    visionText: 'Nous croyons que la technologie doit servir l\'humanité — et non l\'inverse. AURYN existe pour construire des systèmes intelligents qui améliorent la façon dont les gens apprennent, travaillent, guérissent, pensent, explorent et vivent.',
    ctaJoin: 'Rejoindre l\'aventure'
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-400/[0.02] blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
                  <Sparkles size={14} className="text-amber-400" />
                  <span className="text-xs font-medium text-amber-400">One Ecosystem. Six Worlds.</span>
                </div>
              </motion.div>
              
              <motion.h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="gradient-text">AURYN</span>
              </motion.h1>
              
              <motion.p
                className="text-2xl sm:text-3xl font-light text-gray-200 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.title}
              </motion.p>
              
              <motion.p
                className="text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {t.subtitle}
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/ecosystem" className="btn-primary flex items-center justify-center gap-2">
                  {t.cta1}
                  <ArrowRight size={16} />
                </Link>
                <Link to="/about" className="btn-secondary flex items-center justify-center gap-2">
                  {t.cta2}
                </Link>
              </motion.div>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Hero3DVisual />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-amber-400/60" />
          </div>
        </motion.div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t.ecosystemTitle}
            </h2>
            <p className="text-xl text-amber-400 font-medium mb-4">{t.ecosystemSubtitle}</p>
            <p className="text-gray-400 max-w-2xl mx-auto">{t.ecosystemDesc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universes.map((universe, i) => (
              <motion.div
                key={universe.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/universe/${universe.id}`}
                  className="group block p-6 rounded-2xl glass-light hover:bg-white/[0.04] transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${universe.color}10`, border: `1px solid ${universe.color}30` }}
                    >
                      {getIconForUniverse(universe.id, 24)}
                    </div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full"
                      style={{ color: universe.color, background: `${universe.color}15` }}
                    >
                      {universe.status}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-semibold text-lg mb-1" style={{ color: universe.color }}>
                    {universe.name}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">{universe.domain}</p>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{universe.mission}</p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style={{ color: universe.color }}>
                    <span>{t.explore}</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 relative">
        <div className="section-divider mb-24" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">{t.visionTitle}</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">{t.visionText}</p>
            <Link to="/join" className="btn-primary inline-flex items-center gap-2">
              {t.ctaJoin}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold mb-3">Roadmap</h2>
            <p className="text-gray-400">Building the future, step by step.</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['FOUNDATION', 'BUILD', 'LAUNCH', 'SCALE', 'AFRICA', 'GLOBAL'].map((stage, i) => (
              <motion.div
                key={stage}
                className="px-5 py-3 rounded-xl glass-light text-sm font-medium"
                style={{ 
                  opacity: i === 0 ? 1 : i === 1 ? 0.7 : 0.4,
                  borderColor: i === 0 ? 'rgba(201,168,76,0.3)' : undefined,
                  border: i === 0 ? '1px solid rgba(201,168,76,0.3)' : '1px solid transparent'
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: i === 0 ? 1 : i === 1 ? 0.7 : 0.4, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {stage}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
