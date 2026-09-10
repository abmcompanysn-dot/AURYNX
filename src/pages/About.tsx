import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { values, type Lang } from '../data';

interface AboutProps {
  lang: Lang;
}

export default function About({ lang }: AboutProps) {
  const t = lang === 'en' ? {
    title: 'About AURYN',
    subtitle: 'We are building the technology ecosystem of tomorrow.',
    vision: 'Vision',
    visionText: 'Building technologies that improve the way people learn, work, take care of themselves, develop their minds, understand their environment and organize their lives.',
    mission: 'Mission',
    missionText: 'Transforming complex problems into simple, useful and accessible technologies.',
    valuesTitle: 'Values',
    positioning: 'Positioning',
    positioningText: 'AURYN is not a simple IT agency. We are a technology group building an ecosystem of products and platforms that address fundamental human needs across six domains.',
    approach: 'Our Approach',
    approachText: 'We believe in building progressively. First the brand. Then the ecosystem. Then the products. Then the users. Finally, the impact. Each step is deliberate, each universe is purposeful.',
    cta: 'Join the ecosystem'
  } : {
    title: 'À propos d\'AURYN',
    subtitle: 'Nous construisons l\'écosystème technologique de demain.',
    vision: 'Vision',
    visionText: 'Construire des technologies qui améliorent la manière dont les personnes apprennent, travaillent, prennent soin d\'elles-mêmes, développent leur esprit, comprennent leur environnement et organisent leur vie.',
    mission: 'Mission',
    missionText: 'Transformer des problèmes complexes en technologies simples, utiles et accessibles.',
    valuesTitle: 'Valeurs',
    positioning: 'Positionnement',
    positioningText: 'AURYN n\'est pas une simple agence informatique. Nous sommes un groupe technologique construisant un écosystème de produits et de plateformes qui répondent aux besoins humains fondamentaux dans six domaines.',
    approach: 'Notre Approche',
    approachText: 'Nous croyons en la construction progressive. D\'abord la marque. Puis l\'écosystème. Ensuite les produits. Puis les utilisateurs. Enfin, l\'impact. Chaque étape est délibérée, chaque univers est intentionnel.',
    cta: 'Rejoindre l\'écosystème'
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
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-400">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-2xl glass-light"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
                <span className="text-amber-400 text-lg">◈</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-amber-400">{t.vision}</h3>
              <p className="text-gray-300 leading-relaxed">{t.visionText}</p>
            </motion.div>
            
            <motion.div
              className="p-8 rounded-2xl glass-light"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4">
                <span className="text-amber-400 text-lg">◆</span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-amber-400">{t.mission}</h3>
              <p className="text-gray-300 leading-relaxed">{t.missionText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Positioning & Approach */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-xl font-semibold mb-3">{t.positioning}</h3>
              <p className="text-gray-400 leading-relaxed">{t.positioningText}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-amber-400">
                <span>Technology Company</span>
                <ArrowRight size={12} />
                <span>Product Company</span>
                <ArrowRight size={12} />
                <span>Innovation Group</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-display text-xl font-semibold mb-3">{t.approach}</h3>
              <p className="text-gray-400 leading-relaxed">{t.approachText}</p>
              <div className="mt-4 space-y-2">
                {['AURYN', 'Six Worlds', 'Products', 'Users', 'Impact'].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                    <span className={`text-sm ${i === 0 ? 'text-amber-400 font-medium' : 'text-gray-500'}`}>{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="font-display text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.valuesTitle}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.name}
                className="p-6 rounded-xl glass-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="font-semibold text-amber-400 mb-2">{value.name}</h4>
                <p className="text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/join" className="btn-primary inline-flex items-center gap-2">
              {t.cta}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
