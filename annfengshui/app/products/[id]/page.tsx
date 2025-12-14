"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductById, allProducts } from "@/app/data/products";
import { useEffect, useState } from "react";
import { useI18n } from "@/app/i18n/context";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const [product, setProduct] = useState(getProductById(parseInt(id || "0")));
  const { t } = useI18n();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(parseInt(id));
      setProduct(foundProduct);
    }
  }, [id]);

  // Hàm tạo ý nghĩa phong thủy dựa trên category
  const getFengShuiMeaning = (category: string) => {
    const categoryMap: { [key: string]: keyof typeof t.productDetail.fengshuiMeaning } = {
      'Vòng tay': 'bracelet',
      'Tranh phong thủy': 'painting',
      'Vật phẩm phong thủy': 'item',
      'Vật phẩm năng lượng': 'energy',
      'Tượng phong thủy': 'statue',
      'Designer Collection': 'designer',
    };
    
    const key = categoryMap[category] || 'item';
    const meaning = t.productDetail.fengshuiMeaning[key];
    
    // Đảm bảo luôn trả về object hợp lệ
    if (!meaning || !meaning.title || !meaning.description) {
      return t.productDetail.fengshuiMeaning.item;
    }
    
    return meaning;
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-ann-ivory flex items-center justify-center pt-24 pb-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-serif font-bold text-ann-dark mb-4">
            404
          </h1>
          <h2 className="text-3xl font-serif font-bold text-ann-dark mb-4">
            {t.products.notFound}
          </h2>
          <p className="text-lg text-ann-stone mb-8 max-w-md mx-auto">
            {t.products.notFoundDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-ann-dark text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ann-stone transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              {t.products.viewAllProducts}
            </Link>
            <Link
              href="/"
              className="bg-white border-2 border-ann-dark text-ann-dark px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ann-ivory transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              {t.products.backToHome}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Lấy các sản phẩm liên quan (cùng category, loại trừ sản phẩm hiện tại)
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const fengShuiInfo = getFengShuiMeaning(product.category);

  return (
    <div className="min-h-screen bg-ann-ivory">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-ann-ivory via-white to-ann-ivory relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ann-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ann-green/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div className="relative">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-6 left-6 bg-gradient-to-r from-ann-gold to-ann-gold/90 text-ann-dark px-5 py-2.5 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm">
                ✨ {product.category}
              </div>
              {/* Trust badges */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-2">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-ann-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold text-ann-dark">Chứng nhận</span>
                </div>
                <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-ann-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold text-ann-dark">100% Tự nhiên</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 sticky top-24">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-ann-stone mb-4">
                <Link href="/" className="hover:text-ann-gold transition-colors">{t.productDetail.home}</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-ann-gold transition-colors">{t.productDetail.products}</Link>
                <span>/</span>
                <span className="text-ann-dark font-medium">{product.name}</span>
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-ann-dark mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-ann-stone leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Price with urgency */}
              <div className="bg-gradient-to-r from-ann-gold/10 to-ann-green/10 p-6 rounded-xl border-2 border-ann-gold/20">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-sm text-ann-stone">{t.productDetail.price}</span>
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">{t.productDetail.inStock}</span>
                </div>
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-3xl font-bold text-ann-stone line-through">
                    {product.retailPrice} đ
                  </span>
                </div>
                <div className="flex items-baseline space-x-3">
                  <span className="text-5xl font-bold text-ann-gold">
                    {product.marketPrice}
                  </span>
                  <span className="text-xl text-ann-stone">đ</span>
                </div>
                <p className="text-sm text-ann-stone mt-2">{t.productDetail.priceIncludes}</p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-ann-stone/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-ann-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-semibold text-ann-dark">{t.productDetail.naturalStone}</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-ann-stone/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-ann-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-semibold text-ann-dark">{t.productDetail.warranty}</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-ann-stone/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-ann-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-semibold text-ann-dark">{t.productDetail.freeShipping}</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-ann-stone/10">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-ann-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-semibold text-ann-dark">{t.productDetail.freeConsultation}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-4">
                <button className="w-full bg-gradient-to-r from-ann-dark to-ann-stone text-white px-8 py-5 rounded-xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t.productDetail.orderNow}
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-white border-2 border-ann-dark text-ann-dark px-6 py-4 rounded-xl font-semibold hover:bg-ann-ivory transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {t.productDetail.favorite}
                  </button>
                  <button className="bg-white border-2 border-ann-dark text-ann-dark px-6 py-4 rounded-xl font-semibold hover:bg-ann-ivory transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    {t.productDetail.share}
                  </button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-r from-ann-green/10 to-ann-gold/10 p-6 rounded-xl border border-ann-gold/20">
                <p className="text-sm text-ann-stone mb-3">{t.productDetail.hotline}</p>
                <p className="text-2xl font-bold text-ann-dark mb-2">0909.123.456</p>
                <p className="text-sm text-ann-stone">{t.productDetail.hotlineDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feng Shui Meaning Section */}
      <section className="py-16 bg-gradient-to-b from-white to-ann-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ann-gold/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-6xl">☯️</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-ann-dark mb-4">
                {fengShuiInfo.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-ann-gold to-ann-green mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-ann-stone/10">
              <p className="text-lg text-ann-stone leading-relaxed mb-8 text-center">
                {fengShuiInfo?.description || ''}
              </p>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Full Description Section */}
      {product.fullDescription && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-ann-dark mb-4">
                  {t.productDetail.aboutProduct}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-ann-gold to-ann-green mx-auto rounded-full"></div>
              </div>
              <div className="bg-ann-ivory rounded-2xl p-8 md:p-12 shadow-lg">
                <p className="text-lg text-ann-stone leading-relaxed whitespace-pre-line">
                  {product.fullDescription}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {product.benefits && product.benefits.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-ann-ivory to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-ann-dark mb-4">
                  {t.productDetail.benefits}
                </h2>
                <p className="text-lg text-ann-stone max-w-2xl mx-auto">
                  {t.productDetail.benefitsSubtitle}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-ann-gold to-ann-green mx-auto rounded-full mt-4"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-ann-stone/10 hover:border-ann-gold/50 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-ann-gold to-ann-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-ann-dark font-semibold text-lg leading-relaxed">{benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-ann-dark mb-4">
                {t.productDetail.howToUse}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-ann-gold to-ann-green mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-ann-ivory rounded-xl p-6 border border-ann-stone/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-ann-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-ann-dark">{t.productDetail.usage}</h3>
                </div>
                <ul className="space-y-2 text-ann-stone">
                  {t.productDetail.usageItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-ann-gold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-ann-ivory rounded-xl p-6 border border-ann-stone/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-ann-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-ann-dark">{t.productDetail.care}</h3>
                </div>
                <ul className="space-y-2 text-ann-stone">
                  {t.productDetail.careItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-ann-green mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      {product.specifications && (
        <section className="py-16 bg-gradient-to-b from-white to-ann-ivory">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-ann-dark mb-4">
                  {t.productDetail.specifications}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-ann-gold to-ann-green mx-auto rounded-full"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-ann-stone/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.specifications.material && (
                    <div className="flex items-start gap-4 p-4 bg-ann-ivory rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-ann-gold rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-ann-stone mb-1">{t.productDetail.material}</p>
                        <p className="text-lg font-bold text-ann-dark">
                          {product.specifications.material}
                        </p>
                      </div>
                    </div>
                  )}
                  {product.specifications.size && (
                    <div className="flex items-start gap-4 p-4 bg-ann-ivory rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-ann-green rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-ann-stone mb-1">{t.productDetail.size}</p>
                        <p className="text-lg font-bold text-ann-dark">
                          {product.specifications.size}
                        </p>
                      </div>
                    </div>
                  )}
                  {product.specifications.weight && (
                    <div className="flex items-start gap-4 p-4 bg-ann-ivory rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-ann-gold rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-ann-stone mb-1">{t.productDetail.weight}</p>
                        <p className="text-lg font-bold text-ann-dark">
                          {product.specifications.weight}
                        </p>
                      </div>
                    </div>
                  )}
                  {product.specifications.origin && (
                    <div className="flex items-start gap-4 p-4 bg-ann-ivory rounded-lg">
                      <div className="flex-shrink-0 w-12 h-12 bg-ann-green rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-ann-stone mb-1">{t.productDetail.origin}</p>
                        <p className="text-lg font-bold text-ann-dark">
                          {product.specifications.origin}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Guarantee Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-ann-dark mb-4">
                {t.productDetail.guarantee}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-ann-gold to-ann-green mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-ann-gold/10 to-ann-gold/5 rounded-xl p-6 text-center border border-ann-gold/20">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="font-bold text-ann-dark mb-2">{t.productDetail.guaranteeItems.natural}</h3>
                <p className="text-sm text-ann-stone">{t.productDetail.guaranteeItems.naturalDesc}</p>
              </div>
              <div className="bg-gradient-to-br from-ann-green/10 to-ann-green/5 rounded-xl p-6 text-center border border-ann-green/20">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="font-bold text-ann-dark mb-2">{t.productDetail.guaranteeItems.warranty}</h3>
                <p className="text-sm text-ann-stone">{t.productDetail.guaranteeItems.warrantyDesc}</p>
              </div>
              <div className="bg-gradient-to-br from-ann-gold/10 to-ann-green/10 rounded-xl p-6 text-center border border-ann-gold/20">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="font-bold text-ann-dark mb-2">{t.productDetail.guaranteeItems.shipping}</h3>
                <p className="text-sm text-ann-stone">{t.productDetail.guaranteeItems.shippingDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Process Section */}
      <section className="py-16 bg-gradient-to-b from-ann-ivory to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-ann-dark mb-4">
                {t.productDetail.orderProcess}
              </h2>
              <p className="text-lg text-ann-stone max-w-2xl mx-auto">
                {t.productDetail.orderProcessSubtitle}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-ann-gold to-ann-green mx-auto rounded-full mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ann-gold to-ann-gold/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-ann-dark mb-2">{t.productDetail.step1}</h3>
                <p className="text-ann-stone">{t.productDetail.step1Desc}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ann-green to-ann-green/80 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-ann-dark mb-2">{t.productDetail.step2}</h3>
                <p className="text-ann-stone">{t.productDetail.step2Desc}</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-ann-gold to-ann-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-ann-dark mb-2">{t.productDetail.step3}</h3>
                <p className="text-ann-stone">{t.productDetail.step3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ann-dark via-ann-stone to-ann-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-ann-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ann-green/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-6xl">✨</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {t.productDetail.finalCta}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t.productDetail.finalCtaDesc.replace('{productName}', product.name)}
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ann-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-ann-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{t.productDetail.finalCtaHotline}</p>
                    <p className="text-ann-gold text-xl font-bold">0909.123.456</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ann-green rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{t.productDetail.finalCtaMessage}</p>
                    <p className="text-ann-gold">Nhắn tin để được tư vấn nhanh</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-ann-gold to-ann-gold/90 text-ann-dark px-10 py-5 rounded-xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {t.productDetail.orderNowButton}
              </button>
              <Link
                href="/products"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
              >
                {t.productDetail.viewMoreProducts}
              </Link>
            </div>
            
            <p className="mt-6 text-sm opacity-75">
              {t.productDetail.specialOffer}
            </p>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-ann-ivory to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-ann-dark mb-4">
                {t.productDetail.relatedProducts}
              </h2>
              <p className="text-lg text-ann-stone max-w-2xl mx-auto">
                {t.productDetail.relatedProductsSubtitle}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-ann-gold to-ann-green mx-auto rounded-full mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border border-ann-stone/10"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-ann-gold to-ann-gold/90 text-ann-dark px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      {relatedProduct.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold">Xem chi tiết →</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-ann-dark mb-2 group-hover:text-ann-gold transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-ann-stone text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-ann-stone/10">
                      <span className="text-2xl font-bold text-ann-gold">
                        {relatedProduct.marketPrice}
                      </span>
                      <span className="text-sm text-ann-stone">đ</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-block bg-ann-dark text-white px-8 py-4 rounded-xl font-semibold hover:bg-ann-stone transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t.productDetail.viewAllProducts}
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

