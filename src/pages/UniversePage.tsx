import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { universes, type Lang } from '../data';

interface UniversePageProps {
  lang: Lang;
}

export default function UniversePage({ lang }: UniversePageProps) {
  const { id } = useParams<{ id: string }>();
  const universe = universes.find(u => u.id === id);

  if (!universe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Universe not found</h1>
          <Link to="/ecosystem" className="text-amber-400 hover:underline">Back to Ecosystem</Link>
        </div>
      </div>
    );
  }

  const t = lang === 'en' ? {
    back: 'Back to Ecosystem',
    domain: 'Domain',
    mission: 'Mission',
    status: 'Status',
    comingSoon: 'This universe is currently in development. Products and platforms will be revealed progressively.',
    exploreOther: 'Explore other universes',
    joinWaitlist: 'Join the waitlist',
    focus: 'Focus Areas',
    statusDesc: 'Current development stage'
  } : {
    back: 'Retour à l\'Écosystème',
    domain: 'Domaine',
    mission: 'Mission',
    status: 'Statut',
    comingSoon: 'Cet univers est actuellement en développement. Les produits et plateformes seront révélés progressivement.',
    exploreOther: 'Explorer d\'autres univers',
    joinWaitlist: 'Rejoindre la liste d\'attente',
    focus: 'Domaines d\'intérêt',
    statusDesc: 'Étape actuelle de développement'
  };

  const focusAreas: Record<string, string[]> = {
    learn: ['Online Learning', 'Skill Assessment', 'Knowledge Management', 'Training Platforms', 'Certification'],
    career: ['Job Matching', 'Talent Discovery', 'Professional Development', 'Recruitment', 'Career Planning'],
    health: ['Health Information', 'Prevention Tools', 'Wellness Tracking', 'Health Access', 'Awareness'],
    mind: ['Mental Well-being', 'Emotional Intelligence', 'Mindfulness', 'Self-understanding', 'Balance'],
    earth: ['GeoTech', 'Geospatial Data', 'Remote Sensing', 'Smart Agriculture', 'Climate Intelligence', 'Oceanography'],
    life: ['Personal Finance', 'Productivity', 'Daily Organization', 'Goal Tracking', 'Life Management']
  };

  const otherUniverses = universes.filter(u => u.id !== universe.id);

  return (
    <div>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ background: `radial-gradient(circle at 50% 50%, ${universe.color}, transparent 70%)` }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/ecosystem" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={14} />
            {t.back}
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: `${universe.color}15`, border: `1px solid ${universe.color}30` }}
              >
                {universe.icon}
              </div>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: universe.color }}>
                  {universe.name}
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 italic mb-4">"{universe.signature}"</p>
            <p className="text-sm text-gray-500">{universe.domain}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="p-6 rounded-2xl glass-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">{t.domain}</h3>
              <p className="text-gray-200">{universe.domain}</p>
            </motion.div>
            
            <motion.div
              className="p-6 rounded-2xl glass-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">{t.status}</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: universe.color }} />
                <span className="font-medium" style={{ color: universe.color }}>{universe.status}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{t.statusDesc}</p>
            </motion.div>
          </div>

          <motion.div
            className="p-8 rounded-2xl glass-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: universe.color }}>{t.mission}</h3>
            <p className="text-gray-300 leading-relaxed">{universe.mission}</p>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-semibold mb-6">{t.focus}</h3>
            <div className="flex flex-wrap gap-2">
              {(focusAreas[universe.id] || []).map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-lg text-sm"
                  style={{ background: `${universe.color}10`, border: `1px solid ${universe.color}20`, color: universe.color }}
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Coming Soon Notice */}
          <motion.div
            className="p-6 rounded-2xl border border-dashed mb-12"
            style={{ borderColor: `${universe.color}30`, background: `${universe.color}05` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-center">{t.comingSoon}</p>
            <div className="text-center mt-4">
              <Link to="/join" className="btn-primary inline-flex items-center gap-2 text-sm">
                {t.joinWaitlist}
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Other Universes */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-center">{t.exploreOther}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {otherUniverses.map((u) => (
                <Link
                  key={u.id}
                  to={`/universe/${u.id}`}
                  className="p-3 rounded-xl glass-light text-center hover:bg-white/[0.04] transition-colors"
                >
                  <span className="text-xl block mb-1">{u.icon}</span>
                  <span className="text-xs font-medium" style={{ color: u.color }}>{u.name.replace('AURYN ', '')}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
