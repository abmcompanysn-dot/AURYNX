import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { universes, type Lang } from '../data';

interface JoinAurynProps {
  lang: Lang;
}

export default function JoinAuryn({ lang }: JoinAurynProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    country: '',
    interests: [] as string[]
  });

  const t = lang === 'en' ? {
    title: 'Join AURYN',
    subtitle: 'Be among the first to discover our ecosystem. Join the waitlist and stay updated on our progress.',
    firstName: 'First Name',
    email: 'Email Address',
    country: 'Country',
    interests: 'Universes of Interest',
    interestsDesc: 'Select one or more universes that interest you.',
    join: 'Join the Waitlist',
    success: 'Welcome to AURYN!',
    successDesc: 'You\'ve been added to our waitlist. We\'ll keep you updated on our progress and let you know when new universes open.',
    another: 'Register another person'
  } : {
    title: 'Rejoindre AURYN',
    subtitle: 'Soyez parmi les premiers à découvrir notre écosystème. Rejoignez la liste d\'attente et restez informé de notre progression.',
    firstName: 'Prénom',
    email: 'Adresse email',
    country: 'Pays',
    interests: 'Univers d\'intérêt',
    interestsDesc: 'Sélectionnez un ou plusieurs univers qui vous intéressent.',
    join: 'Rejoindre la liste d\'attente',
    success: 'Bienvenue chez AURYN !',
    successDesc: 'Vous avez été ajouté à notre liste d\'attente. Nous vous tiendrons informé de notre progression et vous préviendrons lorsque de nouveaux univers s\'ouvriront.',
    another: 'Inscrire une autre personne'
  };

  const toggleInterest = (id: string) => {
    setForm(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-24">
        <motion.div
          className="text-center p-8 max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="w-20 h-20 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center mx-auto mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="text-amber-400" size={32} />
          </motion.div>
          <h2 className="font-display text-2xl font-bold mb-3">{t.success}</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">{t.successDesc}</p>
          <button
            onClick={() => { setSubmitted(false); setForm({ firstName: '', email: '', country: '', interests: [] }); }}
            className="btn-secondary text-sm"
          >
            {t.another}
          </button>
        </motion.div>
      </div>
    );
  }

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
              <Sparkles size={14} className="text-amber-400" />
              <span className="text-xs font-medium text-amber-400">Waitlist</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.firstName} *</label>
              <input
                type="text"
                required
                value={form.firstName}
                onChange={(e) => setForm({...form, firstName: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.email} *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.country} *</label>
              <input
                type="text"
                required
                value={form.country}
                onChange={(e) => setForm({...form, country: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.interests}</label>
              <p className="text-xs text-gray-500 mb-3">{t.interestsDesc}</p>
              <div className="grid grid-cols-2 gap-2">
                {universes.map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => toggleInterest(u.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm transition-all ${
                      form.interests.includes(u.id)
                        ? 'border-opacity-50 bg-opacity-10'
                        : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                    style={form.interests.includes(u.id) ? {
                      borderColor: `${u.color}50`,
                      background: `${u.color}10`,
                      color: u.color
                    } : {}}
                  >
                    <span>{u.icon}</span>
                    <span className="truncate">{u.name.replace('AURYN ', '')}</span>
                    {form.interests.includes(u.id) && <Check size={14} className="ml-auto" />}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
              <Sparkles size={16} />
              {t.join}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
