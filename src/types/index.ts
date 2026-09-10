export type UniverseId = 'learn' | 'career' | 'health' | 'mind' | 'earth' | 'life';

export type Status = 'FOUNDATION' | 'BUILDING' | 'BETA' | 'LIVE' | 'SCALING' | 'COMING SOON';

export type Lang = 'en' | 'fr';

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
  logo: string;
}

export interface RoadmapStage {
  id: string;
  label: string;
  description: string;
  progress: number;
}

export interface InnovationDomain {
  name: string;
  icon: string;
  description: string;
}

export interface Value {
  name: string;
  description: string;
}

export interface PartnerType {
  type: string;
  description: string;
}

export interface Translations {
  nav: {
    ecosystem: string;
    innovation: string;
    about: string;
    insights: string;
    careers: string;
    contact: string;
    join: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  ecosystem: {
    title: string;
    subtitle: string;
    description: string;
    explore: string;
    status: string;
  };
  about: {
    title: string;
    vision: string;
    visionText: string;
    mission: string;
    missionText: string;
    values: string;
  };
  footer: {
    tagline: string;
    ecosystem: string;
    company: string;
    social: string;
    legal: string;
    rights: string;
  };
}
