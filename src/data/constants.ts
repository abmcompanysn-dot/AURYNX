import type { RoadmapStage, InnovationDomain, Value, PartnerType } from '../types';

export const roadmapStages: RoadmapStage[] = [
  { id: 'foundation', label: 'FOUNDATION', description: 'Building the core identity and infrastructure', progress: 70 },
  { id: 'build', label: 'BUILD', description: 'Developing the first products and platforms', progress: 30 },
  { id: 'launch', label: 'LAUNCH', description: 'Releasing initial products to early users', progress: 0 },
  { id: 'scale', label: 'SCALE', description: 'Growing across markets and user bases', progress: 0 },
  { id: 'africa', label: 'AFRICA', description: 'Pan-African expansion and impact', progress: 0 },
  { id: 'global', label: 'GLOBAL', description: 'International presence and ecosystem maturity', progress: 0 }
];

export const innovationDomains: InnovationDomain[] = [
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

export const values: Value[] = [
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

export const partnerTypes: PartnerType[] = [
  { type: 'Technological', description: 'Technology companies and platforms' },
  { type: 'Academic', description: 'Universities and research institutions' },
  { type: 'Enterprise', description: 'Organizations seeking digital transformation' },
  { type: 'Institutional', description: 'Government bodies and international organizations' },
  { type: 'Investors', description: 'Venture capital and impact investors' },
  { type: 'Scientific', description: 'Research labs and scientific communities' }
];

export const AURYN_LOGO = 'https://image.qwenlm.ai/generated-images/cb513c8f-b2d2-4dc5-9231-8bed2924f9c5/_result.png';
