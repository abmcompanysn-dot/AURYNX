import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { partnerTypes } from '../data';
import type { Lang } from '../types';

interface PartnershipsProps {
  lang: Lang;
}

export default function Partnerships({ lang }: PartnershipsProps) {
  const t = lang === 'en' ? {
    title: 'Partnerships',
    subtitle: 'Together, we can build technologies that create lasting impact.',
    description: 'AURYN is open to collaborations with organizations that share our vision of building meaningful technology for people and the planet.',
    partnerTypes: 'Types of Partners',
    cta: 'Start a conversation',
    ctaDesc: 'Interested in partnering with AURYN? Let\'s explore how we can create value together.',
    becomePartner: 'Become a partner'
  } : {
    title: 'Partenariats',
    subtitle: 'Ensemble, nous pouvons construire des technologies qui créent un impact durable.',
    description: 'AURYN est ouvert aux collaborations avec des organisations qui partagent notre vision de construire une technologie significative pour les personnes et la planète.',
    partnerTypes: 'Types de Partenaires',
    cta: 'Démarrer une conversation',
    ctaDesc: 'Intéressé par un partenariat avec AURYN ? Explorons comment nous pouvons créer de la valeur ensemble.',
    becomePartner: 'Devenir partenaire'
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 relative grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-400 mb-4">{t.subtitle}</p>
            <p className="text-gray-500 max-w-2xl mx-auto">{t.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-display text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t.partnerTypes}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partnerTypes.map((partner, i) => (
              <motion.div
                key={partner.type}
                className="p-6 rounded-2xl glass-light hover:bg-white/[0.04] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-semibold text-gray-100 mb-2">{partner.type}</h3>
                <p className="text-sm text-gray-400">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="p-10 rounded-2xl glass-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold mb-3">{t.cta}</h2>
            <p className="text-gray-400 mb-8">{t.ctaDesc}</p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              {t.becomePartner}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
