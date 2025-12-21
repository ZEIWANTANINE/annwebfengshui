'use client';

import { useI18n } from '../i18n/context';

const GemstoneDistinction = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-ann-ivory">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ann-dark mb-6 leading-tight">
            {t.gemstoneDistinction.title}
          </h2>
          <p className="text-lg text-ann-stone max-w-3xl mx-auto">
            {t.gemstoneDistinction.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section I */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-ann-dark mb-8 border-l-4 border-ann-gold pl-6">
              {t.gemstoneDistinction.section1.title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-ann-dark flex items-center">
                  <span className="text-ann-gold text-2xl mr-3">💎</span>
                  {t.gemstoneDistinction.section1.precious.title}
                </h4>
                <p className="text-ann-stone leading-relaxed">
                  {t.gemstoneDistinction.section1.precious.description}
                </p>
                <div>
                  <p className="font-semibold text-ann-dark mb-3">{t.gemstoneDistinction.section1.precious.big4}</p>
                  <ol className="list-decimal list-inside space-y-1 text-ann-stone">
                    {t.gemstoneDistinction.section1.precious.big4List.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="font-semibold text-ann-dark mb-3">{t.gemstoneDistinction.section1.precious.features}</p>
                  <ul className="list-disc list-inside space-y-1 text-ann-stone">
                    {t.gemstoneDistinction.section1.precious.featuresList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg font-semibold text-ann-gold bg-ann-ivory p-4 rounded-lg">
                  {t.gemstoneDistinction.section1.precious.note}
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-ann-dark flex items-center">
                  <span className="text-ann-gold text-2xl mr-3">✨</span>
                  {t.gemstoneDistinction.section1.semiPrecious.title}
                </h4>
                <p className="text-ann-stone leading-relaxed">
                  {t.gemstoneDistinction.section1.semiPrecious.description}
                </p>
                <div>
                  <p className="font-semibold text-ann-dark mb-3">{t.gemstoneDistinction.section1.semiPrecious.examples}</p>
                  <ul className="list-disc list-inside space-y-1 text-ann-stone columns-2">
                    {t.gemstoneDistinction.section1.semiPrecious.examplesList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-ann-dark mb-3">{t.gemstoneDistinction.section1.semiPrecious.features}</p>
                  <ul className="list-disc list-inside space-y-1 text-ann-stone">
                    {t.gemstoneDistinction.section1.semiPrecious.featuresList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-lg font-semibold text-ann-gold bg-ann-ivory p-4 rounded-lg">
                  {t.gemstoneDistinction.section1.semiPrecious.note}
                </p>
              </div>
            </div>
          </div>

          {/* Section II */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-ann-dark mb-8 border-l-4 border-ann-gold pl-6">
              {t.gemstoneDistinction.section2.title}
            </h3>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-ann-dark text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">{t.gemstoneDistinction.section2.table.criteria}</th>
                    <th className="px-6 py-4 text-left font-semibold">{t.gemstoneDistinction.section2.table.precious}</th>
                    <th className="px-6 py-4 text-left font-semibold">{t.gemstoneDistinction.section2.table.semiPrecious}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-ann-dark">{t.gemstoneDistinction.section2.table.rows.frequency.criteria}</td>
                    <td className="px-6 py-4 text-ann-stone">{t.gemstoneDistinction.section2.table.rows.frequency.precious}</td>
                    <td className="px-6 py-4 text-ann-stone">{t.gemstoneDistinction.section2.table.rows.frequency.semiPrecious}</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-ann-dark">{t.gemstoneDistinction.section2.table.rows.impact.criteria}</td>
                    <td className="px-6 py-4 text-ann-stone">{t.gemstoneDistinction.section2.table.rows.impact.precious}</td>
                    <td className="px-6 py-4 text-ann-stone">{t.gemstoneDistinction.section2.table.rows.impact.semiPrecious}</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-ann-dark">{t.gemstoneDistinction.section2.table.rows.suitable.criteria}</td>
                    <td className="px-6 py-4 text-ann-stone">{t.gemstoneDistinction.section2.table.rows.suitable.precious}</td>
                    <td className="px-6 py-4 text-ann-stone">{t.gemstoneDistinction.section2.table.rows.suitable.semiPrecious}</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-ann-dark">{t.gemstoneDistinction.section2.table.rows.purpose.criteria}</td>
                    <td className="px-6 py-4 text-ann-stone">{t.gemstoneDistinction.section2.table.rows.purpose.precious}</td>
                    <td className="px-6 py-4 text-ann-stone">{t.gemstoneDistinction.section2.table.rows.purpose.semiPrecious}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-sm text-yellow-800 italic">
                {t.gemstoneDistinction.section2.note}
              </p>
            </div>
          </div>

          {/* Section III */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-ann-dark mb-8 border-l-4 border-ann-gold pl-6">
              {t.gemstoneDistinction.section3.title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-ann-dark flex items-center">
                  <span className="text-ann-gold text-2xl mr-3">💎</span>
                  {t.gemstoneDistinction.section3.precious.title}
                </h4>
                <ul className="space-y-2 text-ann-stone">
                  {t.gemstoneDistinction.section3.precious.list.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ann-gold mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-ann-dark flex items-center">
                  <span className="text-ann-gold text-2xl mr-3">✨</span>
                  {t.gemstoneDistinction.section3.semiPrecious.title}
                </h4>
                <ul className="space-y-2 text-ann-stone">
                  {t.gemstoneDistinction.section3.semiPrecious.list.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-ann-gold mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section IV */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-ann-dark mb-8 border-l-4 border-ann-gold pl-6">
              {t.gemstoneDistinction.section4.title}
            </h3>
            
            <div className="text-center mb-8">
              <p className="text-2xl font-bold text-red-600 mb-4">
                {t.gemstoneDistinction.section4.warning}
              </p>
              <p className="text-lg text-ann-stone mb-6">
                {t.gemstoneDistinction.section4.inFengshui}
              </p>
              <div className="bg-gradient-to-r from-ann-gold to-yellow-400 text-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <p className="text-xl font-bold">
                  {t.gemstoneDistinction.section4.principle}
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-ann-stone mb-4">
                {t.gemstoneDistinction.section4.example}
              </p>
              <p className="text-xl font-semibold text-ann-gold bg-ann-ivory p-4 rounded-lg inline-block">
                {t.gemstoneDistinction.section4.comparison}
              </p>
            </div>
          </div>

          {/* Section V */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-ann-dark mb-8 border-l-4 border-ann-gold pl-6">
              {t.gemstoneDistinction.section5.title}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-ann-dark flex items-center">
                  <span className="text-red-500 mr-2">⚠️</span>
                  {t.gemstoneDistinction.section5.precious.title}
                </h4>
                <ul className="space-y-2 text-ann-stone">
                  {t.gemstoneDistinction.section5.precious.list.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-ann-dark flex items-center">
                  <span className="text-green-500 mr-2">✅</span>
                  {t.gemstoneDistinction.section5.semiPrecious.title}
                </h4>
                <ul className="space-y-2 text-ann-stone">
                  {t.gemstoneDistinction.section5.semiPrecious.list.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GemstoneDistinction;