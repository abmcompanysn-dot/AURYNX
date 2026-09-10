import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { universes } from '../data';
import type { Lang } from '../types';
import Logo from './Logo';
import UniverseLogo from './UniverseLogo';

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
                          <UniverseLogo universe={u} size="sm" showGlow={false} />
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
                      <UniverseLogo universe={u} size="sm" showGlow={false} />
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
                <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="text-sm">◉</span>
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
