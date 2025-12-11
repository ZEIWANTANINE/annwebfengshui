import Image from "next/image";

const products = [
  {
    name: 'Vòng đá phong thủy',
    message: 'Mang năng lượng bên mình mỗi ngày.',
    image: '/product1.jpg',
  },
  {
    name: 'Tranh đá quý',
    message: 'Tác phẩm phong thủy cho không gian sống.',
    image: '/product2.jpg',
  },
  {
    name: 'Lọ ước phong thủy',
    message: 'Lời chúc an lành trong chiếc lọ nhỏ.',
    image: '/product3.jpg',
  },
  {
    name: 'Vật phẩm năng lượng',
    message: 'Tăng tần số năng lượng cho ngôi nhà bạn.',
    image: '/product4.jpg',
  },
  {
    name: 'Dòng Designer độc bản',
    message: 'Tác phẩm độc bản – dành cho người sưu tầm năng lượng.',
    image: '/product5.jpg',
  },
];

const ProductGallery = () => {
  return (
    <section id="products" className="py-20 bg-ann-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ann-dark">Sản phẩm năng lượng</h2>
          <p className="text-lg text-ann-stone mt-4 max-w-2xl mx-auto">Khám phá bộ sưu tập các vật phẩm phong thủy được chế tác tinh xảo, mỗi sản phẩm là một nguồn năng lượng độc đáo cho cuộc sống của bạn.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.name} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 aspect-w-1 aspect-h-1">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold font-serif">{product.name}</h3>
                  <p className="mt-2 text-base opacity-90">{product.message}</p>
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
