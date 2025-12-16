"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useI18n } from '@/app/i18n/context';
import LanguageSwitcher from './LanguageSwitcher';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, scrolled, children, onClick }: { href: string; scrolled: boolean; children: React.ReactNode; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className={clsx(
      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
      scrolled ? "text-gray-700 hover:bg-ann-ivory" : "text-white hover:bg-white/10",
      "md:hover:text-ann-gold"
    )}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Keep header in "scrolled" state when on product pages so it remains
      // visible over light backgrounds even when scrolled to the top.
      setScrolled(window.scrollY > 10 || (pathname?.startsWith?.('/products') ?? false));
    };

    window.addEventListener('scroll', handleScroll);
    // Run once to initialize state from current scroll + pathname
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <>
      <nav
        className={clsx(
          "fixed w-full z-50 top-0 transition-all duration-300",
          scrolled || isOpen ? "bg-white/95 shadow-md backdrop-blur-md border-b border-gray-200/75" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className={clsx("text-2xl font-serif font-bold transition-colors", scrolled || isOpen ? "text-ann-dark" : "text-white")}>
                Ann Gem & Fengshui
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                <NavLink href="#story" scrolled={scrolled}>{t.nav.ourStory}</NavLink>
                <NavLink href="/products" scrolled={scrolled}>{t.nav.products}</NavLink>
                <NavLink href="#finder" scrolled={scrolled}>{t.nav.energyFinder}</NavLink>
                <NavLink href="#contact" scrolled={scrolled}>{t.nav.contact}</NavLink>
                <div className="ml-4">
                  <LanguageSwitcher scrolled={scrolled} isOpen={isOpen} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="md:hidden">
                <LanguageSwitcher scrolled={scrolled} isOpen={isOpen} />
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className={clsx("inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors", scrolled || isOpen ? "text-ann-dark hover:bg-ann-ivory" : "text-white hover:bg-white/10")}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className={clsx("md:hidden", { 'block': isOpen, 'hidden': !isOpen })} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#story" scrolled={true} onClick={() => setIsOpen(false)}>{t.nav.ourStory}</NavLink>
            <NavLink href="/products" scrolled={true} onClick={() => setIsOpen(false)}>{t.nav.products}</NavLink>
            <NavLink href="#finder" scrolled={true} onClick={() => setIsOpen(false)}>{t.nav.energyFinder}</NavLink>
            <NavLink href="#contact" scrolled={true} onClick={() => setIsOpen(false)}>{t.nav.contact}</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
