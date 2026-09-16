import { motion } from 'framer-motion';
import type { Lang } from '../types';
import { INSIGHTS_COMING_SOON_IMAGE } from '../data/constants';

interface InsightsProps {
  lang: Lang;
}

export default function Insights({ lang }: InsightsProps) {
  const t = lang === 'en' ? {
    title: 'Insights',
    subtitle: 'Perspectives on technology, innovation and the future we\'re building.',
    comingSoon: 'Our editorial content is coming soon.',
    comingSoonDesc: 'We are preparing articles, analyses and reflections on technology, AI, education, health, environment and innovation.',
    categories: 'Topics',
    categoryList: ['Technology', 'AI', 'Education', 'Career', 'Health', 'Mind', 'Earth & Sea', 'Life', 'Africa', 'Innovation']
  } : {
    title: 'Journal',
    subtitle: 'Perspectives sur la technologie, l\'innovation et l\'avenir que nous construisons.',
    comingSoon: 'Notre contenu éditorial arrive bientôt.',
    comingSoonDesc: 'Nous préparons des articles, analyses et réflexions sur la technologie, l\'IA, l\'éducation, la santé, l\'environnement et l\'innovation.',
    categories: 'Thématiques',
    categoryList: ['Technologie', 'IA', 'Éducation', 'Carrière', 'Santé', 'Esprit', 'Terre & Mer', 'Vie', 'Afrique', 'Innovation']
  };

  const categories = t.categoryList;

  return (
    <div>
      {/* Hero */}
      <section className="py-24 relative grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-400">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="p-10 rounded-2xl glass-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 flex items-center justify-center">
              <img 
                src={INSIGHTS_COMING_SOON_IMAGE} 
                alt="Editorial content coming soon"
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
            </div>
            <h2 className="font-display text-xl font-semibold mb-3">{t.comingSoon}</h2>
            <p className="text-gray-400 leading-relaxed">{t.comingSoonDesc}</p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-display text-xl font-semibold text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.categories}
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <motion.span
                key={cat}
                className="px-4 py-2 rounded-full text-sm bg-white/[0.03] border border-white/10 text-gray-300 hover:border-amber-400/30 hover:text-amber-400 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                {cat}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
