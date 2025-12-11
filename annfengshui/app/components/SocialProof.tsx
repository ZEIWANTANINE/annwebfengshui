const reviews = [
  {
    quote: 'Tôi không chỉ mua vòng, mà là mua lại sự bình an trong tâm mình.',
    author: 'Thu Trang, Hà Nội',
  },
  {
    quote: 'Tranh đá phong thủy của Ann khiến căn phòng tôi sáng bừng mỗi sáng.',
    author: 'Nguyễn Minh, Đà Nẵng',
  },
  {
    quote: 'Dịch vụ tư vấn rất chuyên nghiệp, tôi đã tìm được vật phẩm hợp mệnh.',
    author: 'Lê An, TP.HCM',
  },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ann-dark">Khách hàng nói gì về Ann Gem & Fengshui</h2>
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
