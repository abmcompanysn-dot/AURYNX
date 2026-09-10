import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { contactTypes, universes } from '../data';
import type { Lang } from '../types';

interface ContactProps {
  lang: Lang;
}

export default function Contact({ lang }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', organization: '',
    country: '', type: '', universe: '', message: ''
  });

  const t = lang === 'en' ? {
    title: 'Contact AURYN',
    subtitle: 'Have a question, partnership idea or just want to say hello? We\'d love to hear from you.',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    organization: 'Organization',
    country: 'Country',
    type: 'Type of Request',
    universe: 'Universe of Interest',
    message: 'Message',
    send: 'Send Message',
    success: 'Message sent successfully!',
    successDesc: 'We will get back to you as soon as possible.',
    selectType: 'Select a type',
    selectUniverse: 'Select a universe',
    anyUniverse: 'Any / General'
  } : {
    title: 'Contacter AURYN',
    subtitle: 'Une question, une idée de partenariat ou simplement envie de dire bonjour ? Nous serions ravis de vous entendre.',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    organization: 'Organisation',
    country: 'Pays',
    type: 'Type de demande',
    universe: 'Univers concerné',
    message: 'Message',
    send: 'Envoyer le message',
    success: 'Message envoyé avec succès !',
    successDesc: 'Nous vous répondrons dans les plus brefs délais.',
    selectType: 'Sélectionner un type',
    selectUniverse: 'Sélectionner un univers',
    anyUniverse: 'Aucun / Général'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          className="text-center p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
            <Check className="text-green-400" size={28} />
          </div>
          <h2 className="font-display text-2xl font-bold mb-2">{t.success}</h2>
          <p className="text-gray-400">{t.successDesc}</p>
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
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-gray-400">{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.firstName}</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({...form, firstName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.lastName}</label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={(e) => setForm({...form, lastName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.email}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.organization}</label>
                <input
                  type="text"
                  value={form.organization}
                  onChange={(e) => setForm({...form, organization: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.country}</label>
                <input
                  type="text"
                  value={form.country}
                  onChange={(e) => setForm({...form, country: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.type}</label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({...form, type: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
                >
                  <option value="" className="bg-gray-900">{t.selectType}</option>
                  {contactTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-900">{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.universe}</label>
                <select
                  value={form.universe}
                  onChange={(e) => setForm({...form, universe: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors"
                >
                  <option value="" className="bg-gray-900">{t.anyUniverse}</option>
                  {universes.map((u) => (
                    <option key={u.id} value={u.id} className="bg-gray-900">{u.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">{t.message}</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-500 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Send size={16} />
              {t.send}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
