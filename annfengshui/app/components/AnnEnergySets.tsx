'use client';

import Image from "next/image";
import { useI18n } from '@/app/i18n/context';

const AnnEnergySets = () => {
  const { t } = useI18n();
  
  const sets = [
    {
      name: t.energySets.energyVitality,
      description: t.energySets.energyVitalityDesc,
      image: '/product/Đá may mắn (3).jpg',
      color: 'bg-ann-gold',
    },
    {
      name: t.energySets.peaceSleep,
      description: t.energySets.peaceSleepDesc,
      image: '/product/ddcdce2c6843e41dbd52.jpg',
      color: 'bg-ann-green',
    },
    {
      name: t.energySets.beautyGlow,
      description: t.energySets.beautyGlowDesc,
      image: '/product/Vòng tay bản liền thạch anh dâu tây (3).jpg',
      color: 'bg-ann-green', // Replaced pink with a brand color
    },
    {
      name: t.energySets.successFocus,
      description: t.energySets.successFocusDesc,
      image: '/product/Saphir Ánh sao (8).jpg',
      color: 'bg-ann-stone',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full md:w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ann-dark">{t.energySets.title}</h2>
          <p className="text-lg text-ann-stone mt-4 max-w-2xl mx-auto">{t.energySets.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sets.map((set) => (
            <div key={set.name} className={`p-8 rounded-xl shadow-lg text-center bg-white border border-gray-100 hover:border-ann-gold hover:shadow-2xl transition-all duration-300 flex flex-col items-center`}>
              <div className="w-40 h-40 rounded-full mb-6 relative overflow-hidden">
                <Image src={set.image} alt={set.name} layout="fill" objectFit="cover" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-2 text-ann-dark">{set.name}</h3>
              <p className="text-ann-stone mb-6 text-sm flex-grow">{set.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnEnergySets;