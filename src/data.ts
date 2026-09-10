export type UniverseId = 'learn' | 'career' | 'health' | 'mind' | 'earth' | 'life';

export type Status = 'FOUNDATION' | 'BUILDING' | 'BETA' | 'LIVE' | 'SCALING' | 'COMING SOON';

export interface Universe {
  id: UniverseId;
  name: string;
  domain: string;
  signature: string;
  mission: string;
  color: string;
  colorClass: string;
  glowClass: string;
  gradientFrom: string;
  gradientTo: string;
  status: Status;
  icon: string;
}

export const universes: Universe[] = [
  {
    id: 'learn',
    name: 'AURYN LEARN',
    domain: 'Education, Training, Skills',
    signature: 'Learn. Understand. Create.',
    mission: 'Facilitating learning, training and skill development through intelligent technology.',
    color: '#06b6d4',
    colorClass: 'text-cyan-400',
    glowClass: 'glow-learn',
    gradientFrom: '#06b6d4',
    gradientTo: '#3b82f6',
    status: 'FOUNDATION',
    icon: '📚'
  },
  {
    id: 'career',
    name: 'AURYN CAREER',
    domain: 'Career, Employment, Talent',
    signature: 'Connect. Develop. Succeed.',
    mission: 'Connecting talents, organizations and professional opportunities.',
    color: '#14b8a6',
    colorClass: 'text-teal-400',
    glowClass: 'glow-career',
    gradientFrom: '#14b8a6',
    gradientTo: '#06b6d4',
    status: 'FOUNDATION',
    icon: '💼'
  },
  {
    id: 'health',
    name: 'AURYN HEALTH',
    domain: 'Health, Prevention, Well-being',
    signature: 'Prevent. Care. Protect.',
    mission: 'Developing useful technologies for prevention, access to information and improved health journeys.',
    color: '#f43f5e',
    colorClass: 'text-rose-400',
    glowClass: 'glow-health',
    gradientFrom: '#f43f5e',
    gradientTo: '#ec4899',
    status: 'FOUNDATION',
    icon: '❤️'
  },
  {
    id: 'mind',
    name: 'AURYN MIND',
    domain: 'Mind, Psychology, Balance',
    signature: 'Balance. Grow. Thrive.',
    mission: 'Developing tools to better understand, organize and improve mental and emotional well-being.',
    color: '#a855f7',
    colorClass: 'text-purple-400',
    glowClass: 'glow-mind',
    gradientFrom: '#a855f7',
    gradientTo: '#7c3aed',
    status: 'FOUNDATION',
    icon: '🧠'
  },
  {
    id: 'earth',
    name: 'AURYN EARTH & SEA',
    domain: 'Earth, Oceans, Environment & Data',
    signature: 'Explore. Preserve. Transform.',
    mission: 'GeoTech, geospatial data, natural resources, environment, oceanography, remote sensing, smart agriculture, climate intelligence.',
    color: '#10b981',
    colorClass: 'text-emerald-400',
    glowClass: 'glow-earth',
    gradientFrom: '#10b981',
    gradientTo: '#0ea5e9',
    status: 'FOUNDATION',
    icon: '🌍'
  },
  {
    id: 'life',
    name: 'AURYN LIFE',
    domain: 'Daily Life, Organization, Productivity',
    signature: 'Organize. Manage. Achieve.',
    mission: 'Your life, intelligently organized. Personal finance, productivity and daily organization tools.',
    color: '#f59e0b',
    colorClass: 'text-amber-400',
    glowClass: 'glow-life',
    gradientFrom: '#f59e0b',
    gradientTo: '#d97706',
    status: 'FOUNDATION',
    icon: '✨'
  }
];

export const roadmapStages = [
  { id: 'foundation', label: 'FOUNDATION', description: 'Building the core identity and infrastructure', progress: 70 },
  { id: 'build', label: 'BUILD', description: 'Developing the first products and platforms', progress: 30 },
  { id: 'launch', label: 'LAUNCH', description: 'Releasing initial products to early users', progress: 0 },
  { id: 'scale', label: 'SCALE', description: 'Growing across markets and user bases', progress: 0 },
  { id: 'africa', label: 'AFRICA', description: 'Pan-African expansion and impact', progress: 0 },
  { id: 'global', label: 'GLOBAL', description: 'International presence and ecosystem maturity', progress: 0 }
];

export const innovationDomains = [
  { name: 'Artificial Intelligence', icon: '🤖', description: 'Intelligent systems that learn, adapt and assist.' },
  { name: 'Machine Learning', icon: '⚙️', description: 'Models that improve through data and experience.' },
  { name: 'SaaS', icon: '☁️', description: 'Scalable software delivered as a service.' },
  { name: 'Data', icon: '📊', description: 'Turning raw information into actionable intelligence.' },
  { name: 'Automation', icon: '🔄', description: 'Streamlining processes for efficiency and impact.' },
  { name: 'Geospatial Technology', icon: '🛰️', description: 'Understanding our planet through spatial data.' },
  { name: 'Cloud', icon: '🌐', description: 'Infrastructure that scales with ambition.' },
  { name: 'Mobile', icon: '📱', description: 'Technology in the hands of every user.' },
  { name: 'Digital Platforms', icon: '🔗', description: 'Connecting people, data and opportunities.' },
  { name: 'Decision Intelligence', icon: '🎯', description: 'Smarter decisions through data-driven insights.' }
];

export const values = [
  { name: 'Excellence', description: 'We pursue the highest standards in everything we build.' },
  { name: 'Innovation', description: 'We challenge conventions and create what doesn\'t yet exist.' },
  { name: 'Integrity', description: 'We operate with transparency, honesty and ethical commitment.' },
  { name: 'Impact', description: 'We measure success by the positive change we create.' },
  { name: 'Humanity', description: 'People are at the center of every technology we develop.' },
  { name: 'Long-term Vision', description: 'We build for decades, not quarters.' }
];

export const contactTypes = [
  'Partnership',
  'Business',
  'Investment',
  'Media',
  'Careers',
  'Technology',
  'General inquiry'
];

export const partnerTypes = [
  { type: 'Technological', description: 'Technology companies and platforms' },
  { type: 'Academic', description: 'Universities and research institutions' },
  { type: 'Enterprise', description: 'Organizations seeking digital transformation' },
  { type: 'Institutional', description: 'Government bodies and international organizations' },
  { type: 'Investors', description: 'Venture capital and impact investors' },
  { type: 'Scientific', description: 'Research labs and scientific communities' }
];

export type Lang = 'en' | 'fr';

export const translations = {
  en: {
    nav: {
      ecosystem: 'Ecosystem',
      innovation: 'Innovation',
      about: 'About',
      insights: 'Insights',
      careers: 'Careers',
      contact: 'Contact',
      join: 'Join AURYN'
    },
    hero: {
      title: 'Technology for Life.',
      subtitle: 'Building intelligent technologies for people, organizations and the world around us.',
      cta1: 'Explore the ecosystem',
      cta2: 'Discover AURYN'
    },
    ecosystem: {
      title: 'One Ecosystem. Six Worlds.',
      subtitle: 'Limitless Impact.',
      description: 'AURYN is the parent company of a technological ecosystem composed of six specialized universes, each addressing fundamental human needs.',
      explore: 'Explore',
      status: 'Status'
    },
    about: {
      title: 'About AURYN',
      vision: 'Vision',
      visionText: 'Building technologies that improve the way people learn, work, take care of themselves, develop their minds, understand their environment and organize their lives.',
      mission: 'Mission',
      missionText: 'Transforming complex problems into simple, useful and accessible technologies.',
      values: 'Values'
    },
    footer: {
      tagline: 'Technology for Life.',
      ecosystem: 'Ecosystem',
      company: 'Company',
      social: 'Social',
      legal: 'Legal',
      rights: '© 2026 AURYN. All rights reserved.'
    }
  },
  fr: {
    nav: {
      ecosystem: 'Écosystème',
      innovation: 'Innovation',
      about: 'À propos',
      insights: 'Journal',
      careers: 'Carrières',
      contact: 'Contact',
      join: 'Rejoindre AURYN'
    },
    hero: {
      title: 'Technology for Life.',
      subtitle: 'Construire des technologies intelligentes pour les personnes, les organisations et le monde qui nous entoure.',
      cta1: 'Explorer l\'écosystème',
      cta2: 'Découvrir AURYN'
    },
    ecosystem: {
      title: 'Un Écosystème. Six Univers.',
      subtitle: 'Impact Illimité.',
      description: 'AURYN est la maison mère d\'un écosystème technologique composé de six univers spécialisés, chacun répondant à des besoins humains fondamentaux.',
      explore: 'Explorer',
      status: 'Statut'
    },
    about: {
      title: 'À propos d\'AURYN',
      vision: 'Vision',
      visionText: 'Construire des technologies qui améliorent la manière dont les personnes apprennent, travaillent, prennent soin d\'elles-mêmes, développent leur esprit, comprennent leur environnement et organisent leur vie.',
      mission: 'Mission',
      missionText: 'Transformer des problèmes complexes en technologies simples, utiles et accessibles.',
      values: 'Valeurs'
    },
    footer: {
      tagline: 'Technology for Life.',
      ecosystem: 'Écosystème',
      company: 'Entreprise',
      social: 'Social',
      legal: 'Légal',
      rights: '© 2026 AURYN. Tous droits réservés.'
    }
  }
};
