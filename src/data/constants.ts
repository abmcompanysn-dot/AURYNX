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
  { name: 'Artificial Intelligence', icon: 'https://image.qwenlm.ai/generated-images/12bf759f-437f-4037-9770-6831377ad175/_result.png', description: 'Intelligent systems that learn, adapt and assist.' },
  { name: 'Machine Learning', icon: 'https://image.qwenlm.ai/generated-images/d00ee403-1eb4-4047-8006-95af04c489ec/_result.png', description: 'Models that improve through data and experience.' },
  { name: 'SaaS', icon: 'https://image.qwenlm.ai/generated-images/b2759c43-3981-4dcf-a2c9-2ed1a6d1fe13/_result.png', description: 'Scalable software delivered as a service.' },
  { name: 'Data', icon: 'https://image.qwenlm.ai/generated-images/9c829ef3-4864-4a53-81b4-8789db9fcf4b/_result.png', description: 'Turning raw information into actionable intelligence.' },
  { name: 'Automation', icon: 'https://image.qwenlm.ai/generated-images/745e11d6-81c7-479f-b7ee-6f5d438c5975/_result.png', description: 'Streamlining processes for efficiency and impact.' },
  { name: 'Geospatial Technology', icon: 'https://image.qwenlm.ai/generated-images/d768d6bf-f428-47c2-b0cd-256a5f692f6b/_result.png', description: 'Understanding our planet through spatial data.' },
  { name: 'Cloud', icon: 'https://image.qwenlm.ai/generated-images/fed634bc-562c-49a2-be2f-cca9e8d0bc5f/_result.png', description: 'Infrastructure that scales with ambition.' },
  { name: 'Mobile', icon: 'https://image.qwenlm.ai/generated-images/7cc59c8d-905b-4c82-be3b-5fcc12bf7ed2/_result.png', description: 'Technology in the hands of every user.' },
  { name: 'Digital Platforms', icon: 'https://image.qwenlm.ai/generated-images/20dbd4db-d2a9-471e-97f5-5f8ae6f91ed0/_result.png', description: 'Connecting people, data and opportunities.' },
  { name: 'Decision Intelligence', icon: 'https://image.qwenlm.ai/generated-images/709c2967-4794-4bdd-ba97-1409ae35cf33/_result.png', description: 'Smarter decisions through data-driven insights.' }
];

export const INSIGHTS_COMING_SOON_IMAGE = 'https://image.qwenlm.ai/generated-images/a6cea4fb-32af-4def-8556-cecff48da64b/_result.png';

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
