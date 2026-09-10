import { useState } from 'react';
import type { Lang } from '../types';
import { translations } from '../data/translations';

export function useTranslation(initialLang: Lang = 'en') {
  const [lang, setLang] = useState<Lang>(initialLang);

  const t = translations[lang];

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fr' : 'en');
  };

  return { lang, setLang, toggleLang, t };
}
