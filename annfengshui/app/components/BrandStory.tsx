'use client';

import { useI18n } from '@/app/i18n/context';

const BrandStory = () => {
  const { t } = useI18n();

  return (
    <section id="story" className="py-20 bg-ann-ivory overflow-x-hidden">
      
      {/* TEXT – GIỮ CONTAINER */}
      <div className="w-[90vw] max-w-[1400px] mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-ann-dark leading-snug">
          {t.brandStory.title}
        </h2>
        <p className="text-lg text-ann-stone mt-4">
          {t.brandStory.description}
        </p>
      </div>

      {/* VIDEO – FULL WIDTH 80% VIEWPORT */}
      <div className="flex justify-center ">
  <div className="w-[90vw] max-w-[1400px]">
    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
      <video
        className="w-full object-cover"
        controls
      >
        <source src="/product/7333124976286.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
    </div>
  </div>
</div>

    </section>
  );
};

export default BrandStory;
