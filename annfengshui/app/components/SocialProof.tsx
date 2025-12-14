'use client';

import { useI18n } from '@/app/i18n/context';

const SocialProof = () => {
  const { t } = useI18n();
  
  const reviews = [
    {
      quote: t.socialProof.review1,
      author: t.socialProof.review1Author,
    },
    {
      quote: t.socialProof.review2,
      author: t.socialProof.review2Author,
    },
    {
      quote: t.socialProof.review3,
      author: t.socialProof.review3Author,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ann-dark">{t.socialProof.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.author} className="bg-ann-ivory p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
              <p className="text-lg text-ann-stone mb-4 flex-grow">"{review.quote}"</p>
              <p className="text-right font-bold text-ann-dark">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
