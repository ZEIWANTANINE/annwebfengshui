"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { allProducts } from "@/app/data/products";

const ITEMS_PER_PAGE = 9;

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = allProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-ann-ivory pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-ann-dark mb-4">
            Sản phẩm năng lượng
          </h1>
          <p className="text-lg text-ann-stone max-w-2xl mx-auto">
            Khám phá bộ sưu tập các vật phẩm phong thủy được chế tác tinh xảo, 
            mỗi sản phẩm là một nguồn năng lượng độc đáo cho cuộc sống của bạn.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-ann-gold text-ann-dark px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-ann-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-ann-stone text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-ann-gold">
                    {product.price} đ
                  </span>
                  <Link 
                    href={`/products/${product.id}`}
                    className="bg-ann-dark text-white px-6 py-2 rounded-md hover:bg-ann-stone transition-colors duration-300 inline-block text-center"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-white border border-ann-stone text-ann-dark disabled:opacity-50 disabled:cursor-not-allowed hover:bg-ann-ivory transition-colors duration-300"
            >
              Trước
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  currentPage === page
                    ? 'bg-ann-gold text-ann-dark font-bold'
                    : 'bg-white border border-ann-stone text-ann-dark hover:bg-ann-ivory'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-white border border-ann-stone text-ann-dark disabled:opacity-50 disabled:cursor-not-allowed hover:bg-ann-ivory transition-colors duration-300"
            >
              Sau
            </button>
          </div>
        )}

        {/* Info text */}
        <div className="text-center mt-8 text-ann-stone text-sm">
          Hiển thị {startIndex + 1}-{Math.min(endIndex, allProducts.length)} trong tổng số {allProducts.length} sản phẩm
        </div>
      </div>
    </div>
  );
}

