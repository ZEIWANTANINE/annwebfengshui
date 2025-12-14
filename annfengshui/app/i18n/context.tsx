'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations, translations } from './translations';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('vi');

  useEffect(() => {
    // Load language from localStorage or detect from browser
    const savedLanguage = localStorage.getItem('language') as Language;
    let initialLang: Language = 'vi';
    
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'vi')) {
      initialLang = savedLanguage;
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      initialLang = browserLang === 'en' ? 'en' : 'vi';
    }
    
    setLanguageState(initialLang);
    document.documentElement.lang = initialLang;
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

