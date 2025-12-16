'use client';

import { useI18n } from '@/app/i18n/context';

const SocialProof = () => {
  const { t } = useI18n();
  
  const reviews = [
    {
      quote: t.socialProof.review1,
      author: t.socialProof.review1Author,
      rating: 5,
    },
    {
      quote: t.socialProof.review2,
      author: t.socialProof.review2Author,
      rating: 5,
    },
    {
      quote: t.socialProof.review3,
      author: t.socialProof.review3Author,
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full md:w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ann-dark">{t.socialProof.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.author} className="bg-ann-ivory p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
              <p className="text-lg text-ann-stone mb-4 flex-grow">"{review.quote}"</p>
              <p className="text-right font-bold text-ann-dark">- {review.author}</p>
              <div className="mt-3 flex items-center justify-end gap-2 text-sm text-ann-stone">
                <span className="font-medium text-ann-dark">{t.socialProof.ratingLabel}:</span>
                <div className="flex items-center" aria-hidden="true">
                  {Array.from({ length: review.rating ?? 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-ann-gold mx-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.372 2.455a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.372 2.455c-.784.57-1.84-.197-1.54-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.638 9.382c-.784-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
