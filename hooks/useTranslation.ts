
import { useState, useCallback } from 'react';
import { translations, Language } from '../translations';

export const useTranslation = () => {
  // Default to Korean as requested
  const [lang, setLang] = useState<Language>('ko');

  const t = useCallback((keyPath: string) => {
    const keys = keyPath.split('.');
    let current: any = translations[lang];

    for (const key of keys) {
      if (current[key] === undefined) {
        return keyPath; // Fallback to key if not found
      }
      current = current[key];
    }

    return current as string;
  }, [lang]);

  return { t, lang, setLang };
};
