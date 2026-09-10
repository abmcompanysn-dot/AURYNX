import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { values, type Lang } from '../data';

interface CareersProps {
  lang: Lang;
}

export default function Careers({ lang }: CareersProps) {
  const t = lang === 'en' ? {
    title: 'Build the future with AURYN.',
    subtitle: 'We are looking for passionate builders, thinkers and creators who want to shape the technology ecosystem of tomorrow.',
    openPositions: 'Open Positions',
    noPositions: 'We are currently building our founding team. No positions are open yet, but we are always interested in hearing from exceptional talent.',
    spontaneous: 'Spontaneous Application',
    spontaneousDesc: 'Don\'t see a role that fits? Send us your profile anyway. We review every application.',
    apply: 'Apply Now',
    culture: 'Our Culture',
    cultureDesc: 'We are a small, ambitious team building something meaningful. We value ownership, curiosity and impact.',
    benefits: 'What We Offer',
    benefitsList: ['Meaningful work', 'Remote-first culture', 'Equity participation', 'Learning budget', 'Flexible hours', 'Global impact']
  } : {
    title: 'Construisez l\'avenir avec AURYN.',
    subtitle: 'Nous recherchons des bâtisseurs, penseurs et créateurs passionnés qui veulent façonner l\'écosystème technologique de demain.',
    openPositions: 'Postes Ouverts',
    noPositions: 'Nous construisons actuellement notre équipe fondatrice. Aucun poste n\'est encore ouvert, mais nous sommes toujours intéressés par les talents exceptionnels.',
    spontaneous: 'Candidature Spontanée',
    spontaneousDesc: 'Vous ne voyez pas de poste qui vous correspond ? Envoyez-nous quand même votre profil. Nous examinons chaque candidature.',
    apply: 'Postuler',
    culture: 'Notre Culture',
    cultureDesc: 'Nous sommes une petite équipe ambitieuse qui construit quelque chose de significatif. Nous valorisons l\'autonomie, la curiosité et l\'impact.',
    benefits: 'Ce que nous offrons',
    benefitsList: ['Travail significatif', 'Culture remote-first', 'Participation au capital', 'Budget formation', 'Horaires flexibles', 'Impact mondial']
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 relative grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold mb-6">{t.openPositions}</h2>
            <div className="p-8 rounded-2xl glass-light text-center">
              <p className="text-gray-400 mb-6">{t.noPositions}</p>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                {t.spontaneous}
                <ArrowRight size={16} />
              </Link>
              <p className="text-sm text-gray-500 mt-4">{t.spontaneousDesc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold mb-4">{t.culture}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{t.cultureDesc}</p>
              <div className="grid grid-cols-2 gap-3">
                {values.slice(0, 4).map((v) => (
                  <div key={v.name} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-sm text-gray-300">{v.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold mb-4">{t.benefits}</h2>
              <div className="space-y-3">
                {t.benefitsList.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-3 rounded-lg glass-light">
                    <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                    <span className="text-sm text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
