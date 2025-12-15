'use client';

import Image from "next/image";
import { useI18n } from '@/app/i18n/context';

const ProductGallery = () => {
  const { t } = useI18n();
  
  const products = [
    {
      name: t.productItems.fengshuiBracelet,
      message: t.productItems.fengshuiBraceletDesc,
      image: '/product1.jpg',
    },
    {
      name: t.productItems.gemstonePainting,
      message: t.productItems.gemstonePaintingDesc,
      image: '/product2.jpg',
    },
    {
      name: t.productItems.fengshuiWishJar,
      message: t.productItems.fengshuiWishJarDesc,
      image: '/product3.jpg',
    },
    {
      name: t.productItems.energyItem,
      message: t.productItems.energyItemDesc,
      image: '/product4.jpg',
    },
    {
      name: t.productItems.designerCollection,
      message: t.productItems.designerCollectionDesc,
      image: '/product5.jpg',
    },
    {
      name: t.productItems.designerCollection,
      message: t.productItems.designerCollectionDesc,
      image: '/product5.jpg',
    },
  ];

  return (
    <section id="products" className="py-20 bg-ann-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ann-dark">{t.products.title}</h2>
          <p className="text-lg text-ann-stone mt-4 max-w-2xl mx-auto">{t.products.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 aspect-w-1 aspect-h-1">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <h3 className="text-2xl font-bold font-serif">{product.name}</h3>
                  <p className="mt-2 text-lg opacity-90">{product.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
