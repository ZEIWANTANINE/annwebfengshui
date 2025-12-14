'use client';

import { useI18n } from '@/app/i18n/context';
import clsx from 'clsx';

const LanguageSwitcher = ({ scrolled, isOpen }: { scrolled: boolean; isOpen: boolean }) => {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('vi')}
        className={clsx(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-300',
          scrolled || isOpen ? 'text-gray-700 hover:bg-ann-ivory' : 'text-white hover:bg-white/10',
          language === 'vi' && (scrolled || isOpen ? 'bg-ann-gold text-ann-dark' : 'bg-white/20 text-white'),
          'md:hover:text-ann-gold'
        )}
      >
        VI
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={clsx(
          'px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-300',
          scrolled || isOpen ? 'text-gray-700 hover:bg-ann-ivory' : 'text-white hover:bg-white/10',
          language === 'en' && (scrolled || isOpen ? 'bg-ann-gold text-ann-dark' : 'bg-white/20 text-white'),
          'md:hover:text-ann-gold'
        )}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;

