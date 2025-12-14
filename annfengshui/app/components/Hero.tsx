'use client';

import React from 'react';
import Image from "next/image";
import { useI18n } from '@/app/i18n/context';

const Hero = () => {
  const { t } = useI18n();
  
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white text-center px-4 pt-16">
      {/* Background Image */}
      <Image
        src="/hero.webp" // Thay bằng ảnh tay đeo vòng dưới ánh nến
        alt="Tay đeo vòng đá tự nhiên dưới ánh nến"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        priority
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight">
          {t.hero.title}
        </h1>
        <p className="text-xl mb-8 opacity-90">{t.hero.subtitle}</p>
        <a
          href="#finder"
          className="inline-block bg-ann-gold hover:bg-opacity-90 text-ann-dark font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;
