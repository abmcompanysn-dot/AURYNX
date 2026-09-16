import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { universes } from '../data';
import type { Lang } from '../types';
import Logo from './Logo';
import { LearnIcon, CareerIcon, HealthIcon, MindIcon, EarthIcon, LifeIcon } from './icons/UniverseIcons';

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

interface LayoutProps {
  children: React.ReactNode;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Layout({ children, lang, setLang }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const location = useLocation();

  const t = lang === 'en' ? {
    ecosystem: 'Ecosystem', innovation: 'Innovation', about: 'About',
    insights: 'Insights', careers: 'Careers', contact: 'Contact', join: 'Join AURYN',
    tagline: 'Technology for Life.', rights: '© 2026 AURYN. All rights reserved.',
    company: 'Company', legal: 'Legal', social: 'Social'
  } : {
    ecosystem: 'Écosystème', innovation: 'Innovation', about: 'À propos',
    insights: 'Journal', careers: 'Carrières', contact: 'Contact', join: 'Rejoindre AURYN',
    tagline: 'Technology for Life.', rights: '© 2026 AURYN. Tous droits réservés.',
    company: 'Entreprise', legal: 'Légal', social: 'Social'
  };

  const navLinks = [
    { to: '/ecosystem', label: t.ecosystem, hasDropdown: true },
    { to: '/innovation', label: t.innovation },
    { to: '/about', label: t.about },
    { to: '/partnerships', label: lang === 'en' ? 'Partnerships' : 'Partenariats' },
    { to: '/insights', label: t.insights },
    { to: '/careers', label: t.careers },
    { to: '/contact', label: t.contact },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Logo size="md" showText={true} linkable={true} />

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.to} className="relative">
                  <Link
                    to={link.to}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                      location.pathname === link.to
                        ? 'text-amber-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onMouseEnter={() => link.hasDropdown && setEcosystemOpen(true)}
                    onMouseLeave={() => link.hasDropdown && setEcosystemOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} />}
                  </Link>
                  {link.hasDropdown && ecosystemOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-64 glass rounded-xl p-2 shadow-2xl"
                      onMouseEnter={() => setEcosystemOpen(true)}
                      onMouseLeave={() => setEcosystemOpen(false)}
                    >
                      {universes.map((u) => (
                        <Link
                          key={u.id}
                          to={`/universe/${u.id}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                          onClick={() => setEcosystemOpen(false)}
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ background: `${u.color}10`, border: `1px solid ${u.color}30` }}
                          >
                            {getIconForUniverse(u.id, 20)}
                          </div>
                          <div>
                            <div className="text-sm font-medium" style={{ color: u.color }}>{u.name}</div>
                            <div className="text-xs text-gray-400">{u.domain}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
                className="text-xs font-medium px-2 py-1 rounded border border-white/10 hover:border-amber-400/50 transition-colors"
              >
                {lang === 'en' ? 'FR' : 'EN'}
              </button>
              <Link
                to="/join"
                className="hidden sm:inline-flex btn-primary text-sm"
              >
                {t.join}
              </Link>
              <button
                className="lg:hidden p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-white/5"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-2 border-t border-white/5 mt-2">
                  {universes.map((u) => (
                    <Link
                      key={u.id}
                      to={`/universe/${u.id}`}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {getIconForUniverse(u.id, 18)}
                      <span style={{ color: u.color }}>{u.name}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  to="/join"
                  className="block btn-primary text-center text-sm mt-3"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.join}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <Logo size="md" showText={true} linkable={false} />
              </div>
              <p className="text-gray-400 text-sm mb-4">{t.tagline}</p>
              <p className="text-gray-500 text-xs">One Ecosystem. Six Worlds. Limitless Impact.</p>
            </div>

            {/* Ecosystem */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-200">{t.ecosystem}</h4>
              <ul className="space-y-2">
                {universes.map((u) => (
                  <li key={u.id}>
                    <Link to={`/universe/${u.id}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {u.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-200">{t.company}</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">{t.about}</Link></li>
                <li><Link to="/innovation" className="text-sm text-gray-400 hover:text-white transition-colors">{t.innovation}</Link></li>
                <li><Link to="/insights" className="text-sm text-gray-400 hover:text-white transition-colors">{t.insights}</Link></li>
                <li><Link to="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">{t.careers}</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">{t.contact}</Link></li>
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="font-semibold text-sm mb-4 text-gray-200">{t.legal}</h4>
              <ul className="space-y-2 mb-6">
                <li><span className="text-sm text-gray-400">Privacy Policy</span></li>
                <li><span className="text-sm text-gray-400">Terms of Service</span></li>
              </ul>
              <h4 className="font-semibold text-sm mb-4 text-gray-200">{t.social}</h4>
              <div className="flex gap-3">
                <a href="#" aria-label="X (Twitter)" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="section-divider mt-12 mb-6" />
          <p className="text-center text-xs text-gray-500">{t.rights}</p>
        </div>
      </footer>
    </div>
  );
}
