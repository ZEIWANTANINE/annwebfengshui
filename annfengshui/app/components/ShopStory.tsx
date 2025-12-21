'use client';

import Image from 'next/image';

const ShopStory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ann-ivory via-white to-ann-ivory">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-ann-dark to-ann-stone text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
              ANN GEM & FENGSHUI
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
              Không gian phong thủy cao cấp dành cho người tìm kiếm sự cân bằng và thịnh vượng.
            </p>
            <div className="w-24 h-1 bg-ann-gold mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-medium">
              Gian hàng giới thiệu các dòng đá quý, vòng tay phong thủy, lọ ước, lucky stone, linh vật và vật phẩm phong thủy được tuyển chọn kỹ lưỡng theo chuẩn năng lượng quốc tế.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-slate-800 mb-6 tracking-wide">
              Về Chúng Tôi
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
              Hành trình mang năng lượng từ đất mẹ đến trái tim con người
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-ann-gold to-transparent mx-auto mt-8"></div>
          </div>

          {/* Story Section */}
          <div className="max-w-7xl mx-auto mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-medium">
                  <div className="w-2 h-2 bg-ann-gold rounded-full mr-3"></div>
                  Nguồn Gốc & Câu Chuyện
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-slate-800 leading-tight">
                  Hành Trình 30 Năm
                  <br />
                  <span className="text-slate-600 font-normal">Với Năng Lượng</span>
                </h3>
                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                  <p>
                    <span className="font-medium text-slate-800">Ann Gem & Fengshui</span> ra đời từ niềm đam mê mãnh liệt với nghệ thuật phong thủy và sức mạnh của đá quý tự nhiên.
                    Chúng tôi tin rằng mỗi viên đá đều mang trong mình một linh hồn, một nguồn năng lượng vô hạn từ trái đất mẹ.
                  </p>
                  <p>
                    Với hơn 30 năm kinh nghiệm trong lĩnh vực phong thủy và đá quý, đội ngũ của chúng tôi đã chứng kiến
                    hàng nghìn câu chuyện thay đổi cuộc đời khi con người kết nối đúng cách với năng lượng tự nhiên.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 text-white shadow-2xl">
                  <div className="text-center">
                    <div className="text-6xl mb-6 opacity-80">✨</div>
                    <h4 className="text-2xl font-light mb-4">30+ Năm</h4>
                    <p className="text-slate-300 text-lg">Kinh Nghiệm Chuyên Môn</p>
                    <p className="text-slate-400 text-base mt-2">Trong Nghệ Thuật Phong Thủy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mr-6 border border-blue-200">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-light text-slate-800 mb-2">Sứ Mệnh</h3>
                    <div className="w-8 h-0.5 bg-blue-400"></div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Mang đến cho mỗi người một công cụ để kết nối với nguồn năng lượng tự nhiên,
                  giúp cân bằng cuộc sống, thu hút tài lộc và đạt được sự bình an nội tâm.
                  Chúng tôi cam kết mỗi sản phẩm đều là cầu nối chân thực giữa con người và vũ trụ.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center mr-6 border border-emerald-200">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-light text-slate-800 mb-2">Tầm Nhìn</h3>
                    <div className="w-8 h-0.5 bg-emerald-400"></div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Trở thành thương hiệu phong thủy hàng đầu Việt Nam, nơi mọi người có thể tìm thấy
                  giải pháp năng lượng phù hợp với mệnh – cung – mục tiêu của mình.
                  Chúng tôi hướng đến việc nâng cao chất lượng cuộc sống thông qua sự hài hòa với tự nhiên.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-serif font-light text-slate-800 mb-4">Giá Trị Cốt Lõi</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                Những nguyên tắc dẫn dắt mọi hoạt động của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-yellow-200">
                    <span className="text-3xl">💎</span>
                  </div>
                  <h4 className="text-xl font-serif font-light text-slate-800 mb-4">Chất Lượng Tối Thượng</h4>
                  <p className="text-slate-600 leading-relaxed">
                    100% đá quý tự nhiên, được tuyển chọn kỹ càng theo tiêu chuẩn quốc tế.
                    Không thỏa hiệp với chất lượng để đảm bảo năng lượng tinh khiết.
                  </p>
                </div>
              </div>

              <div className="group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-200">
                    <span className="text-3xl">🧘</span>
                  </div>
                  <h4 className="text-xl font-serif font-light text-slate-800 mb-4">Tâm Huyết & Chuyên Nghiệp</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Đội ngũ chuyên gia với 30+ năm kinh nghiệm, kết hợp kiến thức cổ truyền
                    và khoa học hiện đại để mang đến giải pháp phong thủy tối ưu.
                  </p>
                </div>
              </div>

              <div className="group text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-rose-200">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h4 className="text-xl font-serif font-light text-slate-800 mb-4">Tôn Trọng & Chân Thành</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Luôn đặt lợi ích khách hàng lên hàng đầu, tư vấn trung thực,
                    không cường ép bán hàng. Mỗi khách hàng là một phần của hành trình năng lượng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-serif font-light mb-4">Tại Sao Chọn Ann Gem & Fengshui?</h3>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
                Những cam kết vững chắc cho trải nghiệm phong thủy cao cấp
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-ann-gold rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <span className="text-lg font-bold text-slate-900">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Đá Quý 100% Tự Nhiên</h4>
                    <p className="text-slate-300 leading-relaxed">Không sử dụng đá tổng hợp hay nhân tạo, đảm bảo năng lượng tinh khiết từ thiên nhiên.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-ann-gold rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <span className="text-lg font-bold text-slate-900">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Tư Vấn Cá Nhân Hóa</h4>
                    <p className="text-slate-300 leading-relaxed">Phân tích mệnh – cung – ngũ hành để chọn sản phẩm phù hợp nhất với từng khách hàng.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-ann-gold rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <span className="text-lg font-bold text-slate-900">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Chế Tác Thủ Công</h4>
                    <p className="text-slate-300 leading-relaxed">Mọi sản phẩm đều được gia công thủ công tại Việt Nam bởi đội ngũ nghệ nhân tài ba.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-ann-gold rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <span className="text-lg font-bold text-slate-900">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Bảo Hành Trọn Đời</h4>
                    <p className="text-slate-300 leading-relaxed">Cam kết chất lượng với chính sách bảo hành và bảo quản trọn đời sản phẩm.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-ann-gold rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <span className="text-lg font-bold text-slate-900">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Giao Hàng Toàn Quốc</h4>
                    <p className="text-slate-300 leading-relaxed">Miễn phí vận chuyển, đóng gói cẩn thận, giao hàng tận nơi trên toàn quốc.</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-10 h-10 bg-ann-gold rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                    <span className="text-lg font-bold text-slate-900">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Hỗ Trợ 24/7</h4>
                    <p className="text-slate-300 leading-relaxed">Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ann-dark mb-4">
              Bộ Sưu Tập Sản Phẩm Năng Lượng
            </h2>
            <p className="text-lg text-ann-stone max-w-2xl mx-auto">
              Mỗi sản phẩm là một tác phẩm năng lượng: tinh xảo, chuẩn mệnh – chuẩn khí, gia công thủ công tại Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vòng tay phong thủy */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/product/Vòng tay thạch anh đỏ (3).jpg"
                  alt="Vòng tay phong thủy thạch anh tím"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ann-dark mb-3">Vòng Tay Phong Thủy</h3>
                <p className="text-ann-stone leading-relaxed mb-4">
                  Được chế tác từ đá quý thiên nhiên, mỗi vòng tay là một "trường năng lượng cá nhân" giúp cân bằng cảm xúc, bảo hộ năng lượng và kích hoạt tài lộc theo mệnh – cung của từng khách hàng.
                </p>
                <div className="text-sm text-ann-gold font-semibold">
                  • Độ trong – màu sắc – năng lượng – xuất xứ – chế tác
                </div>
              </div>
            </div>

            {/* Lọ ước */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/product/Hộp giấy đựng lọ ước phong thủy (4).jpg"
                  alt="Lọ ước phong thủy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ann-dark mb-3">Lọ Ước (Wishing Jars)</h3>
                <p className="text-ann-stone leading-relaxed mb-4">
                  Phiên bản lọ năng lượng đặc trưng của Ann Gem & Fengshui, nơi tinh thể đá quý được phối hợp theo bộ tài lộc – bình an – tình duyên – sức khỏe – sự nghiệp.
                </p>
                <div className="text-sm text-ann-gold font-semibold">
                  • Điểm neo năng lượng • Khuếch tán trường khí tích cực
                </div>
              </div>
            </div>

            {/* Lucky Stone */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/product/Đá may mắn (3).jpg"
                  alt="Đá may mắn lucky stone"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ann-dark mb-3">Lucky Stone – Đá May Mắn</h3>
                <p className="text-ann-stone leading-relaxed mb-4">
                  Những viên đá nhỏ gọn nhưng mang năng lượng mạnh mẽ, được chọn theo tần số rung động phù hợp từng mục tiêu: tập trung – may mắn – an tâm – thu hút cơ hội.
                </p>
                <div className="text-sm text-ann-gold font-semibold">
                  • Dễ mang theo • Ổn định năng lượng cá nhân
                </div>
              </div>
            </div>

            {/* Linh vật phong thủy */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/product/Long quy ngọc hoàng Long tự nhiên (2).jpg"
                  alt="Linh vật phong thủy Long Quy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ann-dark mb-3">Linh Vật Phong Thủy</h3>
                <p className="text-ann-stone leading-relaxed mb-4">
                  Được điêu khắc từ đá tự nhiên hoặc onyx marble cao cấp, mỗi linh vật mang biểu tượng đặc biệt như: Hồ Ly (tình duyên), Tỳ Hưu (tài lộc), Long Quy (bảo hộ), Thiềm thừ (thịnh vượng)...
                </p>
                <div className="text-sm text-ann-gold font-semibold">
                  • Tăng vận tài chính • Nâng cao bảo hộ cá nhân
                </div>
              </div>
            </div>

            {/* Vật phẩm phong thủy */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/product/Cây đào ngọc hoàng long 18 quả (2).jpg"
                  alt="Cây đào ngọc hoàng long"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-ann-dark mb-3">Vật Phẩm Phong Thủy</h3>
                <p className="text-ann-stone leading-relaxed mb-4">
                  Bộ sưu tập các sản phẩm năng lượng như mặt dây chuyền đá quý, cụm đá trưng bày, đá tháp năng lượng, được thiết kế theo nguyên lý cân bằng âm – dương và điều hòa ngũ hành.
                </p>
                <div className="text-sm text-ann-gold font-semibold">
                  • Nâng cao chất lượng sống • Thanh lọc không gian
                </div>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="bg-gradient-to-br from-ann-gold to-yellow-500 rounded-xl shadow-lg overflow-hidden text-white md:col-span-2 lg:col-span-1">
              <div className="p-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Triết Lý Của Chúng Tôi</h3>
                <p className="leading-relaxed mb-4">
                  Mỗi sản phẩm là một tác phẩm năng lượng: tinh xảo, chuẩn mệnh – chuẩn khí, gia công thủ công tại Việt Nam, mang lại tài lộc – bình an – thu hút may mắn.
                </p>
                <div className="text-lg font-semibold">
                  🌟 Đẹp – Chuẩn – Có Năng Lượng Thật
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ann-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Bước Vào Thế Giới Phong Thủy Tinh Tế
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nơi đẹp – chuẩn – có năng lượng thật.
          </p>
          <button className="bg-ann-gold hover:bg-opacity-90 text-ann-dark font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Khám Phá & Mua Ngay Hôm Nay
          </button>
          <div className="mt-8 text-sm text-gray-300 max-w-4xl mx-auto">
            <p className="mb-4">
              #phongthuy #daphongthuy #vongtayphongthuy #vongda #daquy #locuoc #wishingjar #luckystone #linhvatphongthuy #vatphamphongthuy #thachanh #hoLy #tyHuu #ngocHoangLong #nangluongtichcuc #chieutai #tailoc #annGem #annFengshui #tinhduyen
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopStory;