'use client';

import { useI18n } from '@/app/i18n/context';

const BrandStory = () => {
  const { t } = useI18n();
  
  return (
    <section id="story" className="py-20 bg-ann-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-ann-dark leading-snug">{t.brandStory.title}</h2>
          <p className="text-lg text-ann-stone mt-4">{t.brandStory.description}</p>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/product/Long quy ngọc hoàng Long tự nhiên (2).jpg"
              >
                <source src="/product/Clip về Long quy.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ thẻ video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
