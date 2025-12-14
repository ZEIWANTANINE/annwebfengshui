'use client';

import { useI18n } from '@/app/i18n/context';

const EnergyFinder = () => {
  const { t } = useI18n();
  
  return (
    <section id="finder" className="py-20 bg-ann-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ann-dark">{t.energyFinder.title}</h2>
          <p className="text-lg text-ann-stone mt-4 max-w-2xl mx-auto">{t.energyFinder.subtitle}</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="birth-year" className="block text-sm font-medium text-ann-dark">{t.energyFinder.birthYear}</label>
              <input type="text" id="birth-year" placeholder={t.energyFinder.birthYearPlaceholder} className="mt-1 block w-full rounded-lg border-gray-200 bg-white shadow-sm focus:border-ann-gold focus:ring-ann-gold sm:text-sm" />
            </div>
            <div>
              <label htmlFor="element" className="block text-sm font-medium text-ann-dark">{t.energyFinder.element}</label>
              <select id="element" className="mt-1 block w-full rounded-lg border-gray-200 bg-white shadow-sm focus:border-ann-gold focus:ring-ann-gold sm:text-sm">
                <option>{t.energyFinder.elementOptions.metal}</option>
                <option>{t.energyFinder.elementOptions.wood}</option>
                <option>{t.energyFinder.elementOptions.water}</option>
                <option>{t.energyFinder.elementOptions.fire}</option>
                <option>{t.energyFinder.elementOptions.earth}</option>
              </select>
            </div>
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-ann-dark">{t.energyFinder.goal}</label>
              <select id="goal" className="mt-1 block w-full rounded-lg border-gray-200 bg-white shadow-sm focus:border-ann-gold focus:ring-ann-gold sm:text-sm">
                <option>{t.energyFinder.goalOptions.wealth}</option>
                <option>{t.energyFinder.goalOptions.love}</option>
                <option>{t.energyFinder.goalOptions.peace}</option>
                <option>{t.energyFinder.goalOptions.health}</option>
              </select>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-ann-gold hover:bg-opacity-90 text-ann-dark font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">{t.energyFinder.discover}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyFinder;
