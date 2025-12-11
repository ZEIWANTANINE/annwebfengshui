const EnergyFinder = () => {
  return (
    <section id="finder" className="py-20 bg-ann-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-ann-dark">Tìm viên đá mang năng lượng của riêng bạn.</h2>
          <p className="text-lg text-ann-stone mt-4 max-w-2xl mx-auto">Trả lời một vài câu hỏi đơn giản để Ann giúp bạn tìm ra vật phẩm phong thủy phù hợp nhất với năng lượng và mục tiêu của bạn.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="birth-year" className="block text-sm font-medium text-ann-dark">Năm sinh</label>
              <input type="text" id="birth-year" placeholder="Ví dụ: 1990" className="mt-1 block w-full rounded-lg border-gray-200 bg-white shadow-sm focus:border-ann-gold focus:ring-ann-gold sm:text-sm" />
            </div>
            <div>
              <label htmlFor="element" className="block text-sm font-medium text-ann-dark">Mệnh</label>
              <select id="element" className="mt-1 block w-full rounded-lg border-gray-200 bg-white shadow-sm focus:border-ann-gold focus:ring-ann-gold sm:text-sm">
                <option>Kim</option>
                <option>Mộc</option>
                <option>Thủy</option>
                <option>Hỏa</option>
                <option>Thổ</option>
              </select>
            </div>
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-ann-dark">Mục tiêu</label>
              <select id="goal" className="mt-1 block w-full rounded-lg border-gray-200 bg-white shadow-sm focus:border-ann-gold focus:ring-ann-gold sm:text-sm">
                <option>Tài Lộc</option>
                <option>Tình Duyên</option>
                <option>Bình An</option>
                <option>Sức Khỏe</option>
              </select>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-ann-gold hover:bg-opacity-90 text-ann-dark font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">Khám phá ngay</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyFinder;
