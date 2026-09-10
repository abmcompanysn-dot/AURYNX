import { motion } from 'framer-motion';
import { innovationDomains } from '../data';
import type { Lang } from '../types';

interface InnovationProps {
  lang: Lang;
}

export default function Innovation({ lang }: InnovationProps) {
  const t = lang === 'en' ? {
    title: 'Innovation',
    subtitle: 'Technologies that power the AURYN ecosystem.',
    description: 'AURYN leverages cutting-edge technologies across multiple domains to build intelligent solutions that address real human needs.',
    domains: 'Technology Domains',
    approach: 'Our Approach',
    approachText: 'We don\'t adopt technology for its own sake. Every tool, framework and methodology we use is chosen for its ability to create genuine value for people and organizations.'
  } : {
    title: 'Innovation',
    subtitle: 'Les technologies qui alimentent l\'écosystème AURYN.',
    description: 'AURYN utilise des technologies de pointe dans de multiples domaines pour construire des solutions intelligentes qui répondent aux besoins humains réels.',
    domains: 'Domaines Technologiques',
    approach: 'Notre Approche',
    approachText: 'Nous n\'adoptons pas la technologie pour elle-même. Chaque outil, framework et méthodologie que nous utilisons est choisi pour sa capacité à créer une valeur réelle pour les personnes et les organisations.'
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 relative grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-xl text-gray-400 mb-4">{t.subtitle}</p>
            <p className="text-gray-500 max-w-2xl mx-auto">{t.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Technology Domains */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-display text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.domains}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {innovationDomains.map((domain, i) => (
              <motion.div
                key={domain.name}
                className="p-6 rounded-2xl glass-light hover:bg-white/[0.04] transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="text-2xl mb-3">{domain.icon}</div>
                <h3 className="font-semibold text-gray-100 mb-2 group-hover:text-amber-400 transition-colors">
                  {domain.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="p-8 rounded-2xl glass-light text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-semibold mb-4 text-amber-400">{t.approach}</h3>
            <p className="text-gray-300 leading-relaxed">{t.approachText}</p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Visualization */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex flex-wrap justify-center gap-3">
              {innovationDomains.map((d, i) => (
                <motion.span
                  key={d.name}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-white/[0.03] border border-white/10 text-gray-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ borderColor: 'rgba(201,168,76,0.4)', color: '#c9a84c' }}
                >
                  {d.icon} {d.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
