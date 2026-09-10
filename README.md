# AURYN - Site Web Officiel

## Architecture du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Layout.tsx       # Layout principal (navbar + footer)
│   ├── Logo.tsx         # Logo AURYN
│   ├── UniverseLogo.tsx # Logos des univers
│   ├── HeroVisual.tsx   # Visualisation hero animée
│   └── ScrollToTop.tsx  # Scroll to top
├── pages/              # Pages de l'application
│   ├── Home.tsx        # Page d'accueil
│   ├── About.tsx       # À propos
│   ├── Ecosystem.tsx   # Écosystème complet
│   ├── UniversePage.tsx # Page détaillée d'un univers
│   ├── Innovation.tsx  # Innovation
│   ├── Careers.tsx     # Carrières
│   ├── Contact.tsx     # Contact
│   ├── Insights.tsx    # Journal/Insights
│   ├── JoinAuryn.tsx   # Waitlist
│   └── Partnerships.tsx # Partenariats
├── data/               # Données et constantes
│   ├── index.ts        # Export principal
│   ├── universes.ts    # Données des univers
│   ├── constants.ts    # Constantes globales
│   └── translations.ts # Traductions FR/EN
├── types/              # Types TypeScript
│   └── index.ts        # Définitions de types
├── hooks/              # Hooks personnalisés
│   └── useTranslation.ts # Hook de traduction
├── App.tsx             # Composant racine
├── main.tsx            # Point d'entrée
└── index.css           # Styles globaux
```

## Les 6 Univers AURYN

1. **AURYN LEARN** (Cyan) - Éducation, formation, compétences
2. **AURYN CAREER** (Turquoise) - Carrière, emploi, talents
3. **AURYN HEALTH** (Rose) - Santé, prévention, bien-être
4. **AURYN MIND** (Violet) - Esprit, psychologie, équilibre
5. **AURYN EARTH & SEA** (Émeraude) - Terre, océans, environnement
6. **AURYN LIFE** (Or) - Vie quotidienne, organisation, productivité

## Fonctionnalités

- ✅ Design premium et futuriste
- ✅ Interface bilingue (FR/EN)
- ✅ Responsive design (mobile-first)
- ✅ Animations fluides (Framer Motion)
- ✅ Logos uniques pour chaque univers
- ✅ Système de statuts (FOUNDATION, BUILDING, BETA, LIVE, SCALING, COMING SOON)
- ✅ Formulaire de contact complet
- ✅ Système de liste d'attente (waitlist)
- ✅ Navigation intuitive avec menu déroulant
- ✅ Optimisations SEO et accessibilité

## Stack Technique

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## Développement

```bash
# Installation
npm install

# Développement
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Déploiement

Le site est optimisé pour le déploiement sur :
- Vercel
- Netlify
- Cloudflare Pages
- Tout hébergeur statique

## Licence

© 2026 AURYN. Tous droits réservés.
