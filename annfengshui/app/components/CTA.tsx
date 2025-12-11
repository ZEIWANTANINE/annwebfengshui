const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-ann-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold text-ann-dark mb-4">Bắt đầu hành trình cân bằng của bạn.</h2>
        <p className="text-lg text-ann-stone mt-4 max-w-2xl mx-auto">Khám phá các sản phẩm được chế tác dành riêng cho bạn hoặc nhận tư vấn miễn phí từ các chuyên gia phong thủy của chúng tôi.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <a
            href="#products"
            className="inline-block bg-ann-gold hover:bg-opacity-90 text-ann-dark font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            💎 Khám phá vòng đá hợp mệnh
          </a>
          <a
            href="#finder"
            className="inline-block bg-ann-dark hover:bg-black text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            ☯️ Đặt tư vấn phong thủy (Miễn phí)
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
