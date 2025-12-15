export type Language = 'en' | 'vi';

export interface Translations {
  // Navbar
  nav: {
    ourStory: string;
    products: string;
    energyFinder: string;
    contact: string;
  };
  
  // Hero
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  
  // Brand Story
  brandStory: {
    title: string;
    description: string;
  };
  
  // Craft & Authenticity
  craft: {
    title: string;
    description: string;
  };
  
  // Product Gallery
  products: {
    title: string;
    subtitle: string;
    viewDetails: string;
    productsTitle: string;
    productsSubtitle: string;
    previous: string;
    next: string;
    showing: string;
    of: string;
    products: string;
    notFound: string;
    notFoundDesc: string;
    viewAllProducts: string;
    backToHome: string;
  };
  
  // Product items
  productItems: {
    fengshuiBracelet: string;
    fengshuiBraceletDesc: string;
    gemstonePainting: string;
    gemstonePaintingDesc: string;
    fengshuiWishJar: string;
    fengshuiWishJarDesc: string;
    energyItem: string;
    energyItemDesc: string;
    designerCollection: string;
    designerCollectionDesc: string;
    fengshuiStatue: string;
    fengshuiStatueDesc: string;
  };
  
  // Ann Energy Sets
  energySets: {
    title: string;
    subtitle: string;
    energyVitality: string;
    energyVitalityDesc: string;
    peaceSleep: string;
    peaceSleepDesc: string;
    beautyGlow: string;
    beautyGlowDesc: string;
    successFocus: string;
    successFocusDesc: string;
    buyNow: string;
  };
  
  // Energy Finder
  energyFinder: {
    title: string;
    subtitle: string;
    birthYear: string;
    birthYearPlaceholder: string;
    element: string;
    elementOptions: {
      metal: string;
      wood: string;
      water: string;
      fire: string;
      earth: string;
    };
    goal: string;
    goalOptions: {
      wealth: string;
      love: string;
      peace: string;
      health: string;
    };
    discover: string;
  };
  
  // Social Proof
  socialProof: {
    title: string;
    review1: string;
    review1Author: string;
    review2: string;
    review2Author: string;
    review3: string;
    review3Author: string;
  };
  
  // CTA
  cta: {
    title: string;
    subtitle: string;
    explore: string;
    consult: string;
  };
  
  // Footer
  footer: {
    tagline: string;
    allRightsReserved: string;
  };
  
  // Product Detail Page
  productDetail: {
    home: string;
    products: string;
    price: string;
    inStock: string;
    priceIncludes: string;
    naturalStone: string;
    warranty: string;
    freeShipping: string;
    freeConsultation: string;
    orderNow: string;
    favorite: string;
    share: string;
    hotline: string;
    hotlineDesc: string;
    fengshuiMeaning: {
      bracelet: {
        title: string;
        description: string;
        items: string[];
      };
      painting: {
        title: string;
        description: string;
        items: string[];
      };
      item: {
        title: string;
        description: string;
        items: string[];
      };
      energy: {
        title: string;
        description: string;
        items: string[];
      };
      statue: {
        title: string;
        description: string;
        items: string[];
      };
      designer: {
        title: string;
        description: string;
        items: string[];
      };
    };
    aboutProduct: string;
    benefits: string;
    benefitsSubtitle: string;
    howToUse: string;
    usage: string;
    usageItems: string[];
    care: string;
    careItems: string[];
    specifications: string;
    material: string;
    size: string;
    weight: string;
    origin: string;
    guarantee: string;
    guaranteeItems: {
      natural: string;
      naturalDesc: string;
      warranty: string;
      warrantyDesc: string;
      shipping: string;
      shippingDesc: string;
    };
    orderProcess: string;
    orderProcessSubtitle: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
    finalCta: string;
    finalCtaDesc: string;
    finalCtaHotline: string;
    finalCtaMessage: string;
    orderNowButton: string;
    viewMoreProducts: string;
    specialOffer: string;
    relatedProducts: string;
    relatedProductsSubtitle: string;
    viewAllProducts: string;
  };
}

export const translations: Record<Language, Translations> = {
  vi: {
    nav: {
      ourStory: 'Câu chuyện',
      products: 'Sản phẩm',
      energyFinder: 'Tìm năng lượng',
      contact: 'Liên hệ',
    },
    hero: {
      title: 'Khơi dậy năng lượng từ lòng đất – Mang bình an đến trái tim bạn.',
      subtitle: 'Ann Gem & Fengshui – Energy from the Earth',
      cta: 'Khám phá năng lượng của bạn',
    },
    brandStory: {
      title: 'Mỗi viên đá là một linh hồn – được đánh thức bởi bàn tay con người.',
      description: 'Ann Gem & Fengshui ra đời từ triết lý của sự hài hòa: kết hợp giữa năng lượng tự nhiên và tinh thần thiền Nhật Bản. Mỗi sản phẩm không chỉ là món quà phong thủy, mà là biểu tượng của một lối sống an nhiên – nơi vật chất, tinh thần và năng lượng gặp nhau.',
    },
    craft: {
      title: 'Năng lượng chỉ thật khi được tạo bằng đôi tay chân thật.',
      description: 'Từ khối đá thô đến viên ngọc sáng, mọi sản phẩm của Ann Gem & Fengshui đều trải qua quá trình tẩy tịnh – niêm phong năng lượng – chứng nhận độc bản. Mỗi vật phẩm đi kèm tem VOID 3 lớp, mã QR xác thực, và phiếu chứng nhận năng lượng song ngữ.',
    },
    products: {
      title: 'Sản phẩm năng lượng',
      subtitle: 'Khám phá bộ sưu tập các vật phẩm phong thủy được chế tác tinh xảo, mỗi sản phẩm là một nguồn năng lượng độc đáo cho cuộc sống của bạn.',
      viewDetails: 'Xem chi tiết',
      productsTitle: 'Sản phẩm năng lượng',
      productsSubtitle: 'Khám phá bộ sưu tập các vật phẩm phong thủy được chế tác tinh xảo, mỗi sản phẩm là một nguồn năng lượng độc đáo cho cuộc sống của bạn.',
      previous: 'Trước',
      next: 'Sau',
      showing: 'Hiển thị',
      of: 'trong tổng số',
      products: 'sản phẩm',
      notFound: 'Không tìm thấy sản phẩm',
      notFoundDesc: 'Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.',
      viewAllProducts: 'Xem tất cả sản phẩm',
      backToHome: 'Về trang chủ',
    },
    productItems: {
      fengshuiBracelet: 'Vòng đá phong thủy',
      fengshuiBraceletDesc: 'Mang năng lượng bên mình mỗi ngày.',
      gemstonePainting: 'Tranh đá quý',
      gemstonePaintingDesc: 'Tác phẩm phong thủy cho không gian sống.',
      fengshuiWishJar: 'Lọ ước phong thủy',
      fengshuiWishJarDesc: 'Lời chúc an lành trong chiếc lọ nhỏ.',
      energyItem: 'Vật phẩm năng lượng',
      energyItemDesc: 'Tăng tần số năng lượng cho ngôi nhà bạn.',
      designerCollection: 'Dòng thiết kế độc bản',
      designerCollectionDesc: 'Tác phẩm độc bản – dành cho người sưu tầm năng lượng.',
      fengshuiStatue: 'Tượng phong thủy',
      fengshuiStatueDesc: 'Tượng thần tài và các linh vật phong thủy.',
    },
    energySets: {
      title: 'Ann Energy Collection',
      subtitle: 'Các bộ sản phẩm được thiết kế đặc biệt để cân bằng và nâng cao các khía cạnh khác nhau trong cuộc sống của bạn.',
      energyVitality: '🌞 Energy & Vitality Set',
      energyVitalityDesc: 'Khơi dậy sức sống và sự tự tin nội tại',
      peaceSleep: '🌙 Peace & Sleep Set',
      peaceSleepDesc: 'Ngủ sâu – tĩnh tâm – an nhiên',
      beautyGlow: '🌸 Beauty & Glow Set',
      beautyGlowDesc: 'Tỏa sáng từ năng lượng yêu thương',
      successFocus: '💼 Success & Focus Set',
      successFocusDesc: 'Tập trung và thu hút vận khí may mắn',
      buyNow: 'Mua ngay',
    },
    energyFinder: {
      title: 'Tìm viên đá mang năng lượng của riêng bạn.',
      subtitle: 'Trả lời một vài câu hỏi đơn giản để Ann giúp bạn tìm ra vật phẩm phong thủy phù hợp nhất với năng lượng và mục tiêu của bạn.',
      birthYear: 'Năm sinh',
      birthYearPlaceholder: 'Ví dụ: 1990',
      element: 'Mệnh',
      elementOptions: {
        metal: 'Kim',
        wood: 'Mộc',
        water: 'Thủy',
        fire: 'Hỏa',
        earth: 'Thổ',
      },
      goal: 'Mục tiêu',
      goalOptions: {
        wealth: 'Tài Lộc',
        love: 'Tình Duyên',
        peace: 'Bình An',
        health: 'Sức Khỏe',
      },
      discover: 'Khám phá ngay',
    },
    socialProof: {
      title: 'Khách hàng nói gì về Ann Gem & Fengshui',
      review1: 'Tôi không chỉ mua vòng, mà là mua lại sự bình an trong tâm mình.',
      review1Author: 'Thu Trang, Hà Nội',
      review2: 'Tranh đá phong thủy của Ann khiến căn phòng tôi sáng bừng mỗi sáng.',
      review2Author: 'Nguyễn Minh, Đà Nẵng',
      review3: 'Dịch vụ tư vấn rất chuyên nghiệp, tôi đã tìm được vật phẩm hợp mệnh.',
      review3Author: 'Lê An, TP.HCM',
    },
    cta: {
      title: 'Bắt đầu hành trình cân bằng của bạn.',
      subtitle: 'Khám phá các sản phẩm được chế tác dành riêng cho bạn hoặc nhận tư vấn miễn phí từ các chuyên gia phong thủy của chúng tôi.',
      explore: '💎 Khám phá vòng đá hợp mệnh',
      consult: '☯️ Đặt tư vấn phong thủy (Miễn phí)',
    },
    footer: {
      tagline: 'Energy from the Earth',
      allRightsReserved: '© 2025 Ann Gem & Fengshui. All rights reserved.',
    },
    productDetail: {
      home: 'Trang chủ',
      products: 'Sản phẩm',
      price: 'Giá sản phẩm',
      inStock: 'Còn hàng',
      priceIncludes: '💰 Giá đã bao gồm VAT và vận chuyển',
      naturalStone: 'Đá tự nhiên 100%',
      warranty: 'Bảo hành 1 năm',
      freeShipping: 'Miễn phí vận chuyển',
      freeConsultation: 'Tư vấn miễn phí',
      orderNow: 'Đặt hàng ngay - Tư vấn miễn phí',
      favorite: 'Yêu thích',
      share: 'Chia sẻ',
      hotline: '📞 Hotline tư vấn 24/7:',
      hotlineDesc: 'Hoặc nhắn tin Zalo/Facebook để được tư vấn nhanh nhất',
      fengshuiMeaning: {
        bracelet: {
          title: 'Ý nghĩa phong thủy của vòng tay đá quý',
          description: 'Vòng tay đá quý không chỉ là món trang sức mà còn là vật phẩm phong thủy mạnh mẽ, mang năng lượng tích cực bên mình mỗi ngày. Khi đeo trên tay, năng lượng của đá sẽ tác động trực tiếp đến cơ thể và tinh thần của người đeo.',
          items: [
            'Tăng cường năng lượng cá nhân',
            'Bảo vệ khỏi tà khí và năng lượng tiêu cực',
            'Mang lại may mắn trong công việc và cuộc sống',
            'Cân bằng âm dương trong cơ thể',
          ],
        },
        painting: {
          title: 'Ý nghĩa phong thủy của tranh đá quý',
          description: 'Tranh phong thủy đá quý là vật phẩm trang trí cao cấp, không chỉ làm đẹp không gian mà còn điều hòa năng lượng trong nhà. Mỗi bức tranh được sắp xếp theo nguyên lý phong thủy để mang lại tài lộc, bình an và thịnh vượng.',
          items: [
            'Điều hòa năng lượng trong không gian sống',
            'Thu hút tài lộc và may mắn',
            'Tăng cường sự hòa thuận trong gia đình',
            'Bảo vệ ngôi nhà khỏi năng lượng tiêu cực',
          ],
        },
        item: {
          title: 'Ý nghĩa phong thủy của vật phẩm năng lượng',
          description: 'Vật phẩm phong thủy được chế tác từ đá quý tự nhiên, mang trong mình năng lượng mạnh mẽ của đất trời. Khi đặt đúng vị trí trong nhà, chúng sẽ phát huy tối đa khả năng điều hòa và tăng cường năng lượng tích cực.',
          items: [
            'Thanh lọc không gian và năng lượng',
            'Tăng cường sức khỏe và tinh thần',
            'Mang lại bình an và hạnh phúc',
            'Hỗ trợ thiền định và chữa lành',
          ],
        },
        energy: {
          title: 'Ý nghĩa phong thủy của vật phẩm năng lượng',
          description: 'Vật phẩm năng lượng được chế tác từ các loại đá quý có tần số rung động cao, có khả năng khuếch đại và thanh lọc năng lượng. Chúng là công cụ mạnh mẽ trong việc cải thiện môi trường sống và làm việc.',
          items: [
            'Khuếch đại năng lượng tích cực',
            'Thanh lọc năng lượng tiêu cực',
            'Tăng cường sự tập trung và sáng suốt',
            'Mang lại cảm giác bình yên và thư giãn',
          ],
        },
        statue: {
          title: 'Ý nghĩa phong thủy của tượng đá quý',
          description: 'Tượng phong thủy không chỉ là tác phẩm nghệ thuật mà còn mang ý nghĩa tâm linh sâu sắc. Mỗi bức tượng được chế tác với sự tôn kính và tâm huyết, mang lại sự bảo vệ và phước lành cho gia đình.',
          items: [
            'Mang lại phước lành và bảo vệ',
            'Tăng cường tài lộc và thịnh vượng',
            'Tạo không gian tâm linh trong nhà',
            'Mang lại sự bình an và hạnh phúc',
          ],
        },
        designer: {
          title: 'Ý nghĩa phong thủy của bộ sưu tập Designer',
          description: 'Bộ sưu tập Designer là những tác phẩm độc bản, được thiết kế riêng với sự kết hợp tinh tế giữa nghệ thuật và phong thủy. Mỗi sản phẩm là một tác phẩm nghệ thuật độc đáo, mang lại giá trị cả về mặt thẩm mỹ lẫn năng lượng.',
          items: [
            'Tác phẩm độc bản, không trùng lặp',
            'Thiết kế theo nguyên lý phong thủy cổ truyền',
            'Mang lại giá trị sưu tầm cao',
            'Tăng cường năng lượng và phong cách cá nhân',
          ],
        },
      },
      aboutProduct: 'Về sản phẩm này',
      benefits: 'Lợi ích khi sở hữu sản phẩm',
      benefitsSubtitle: 'Mỗi sản phẩm của chúng tôi đều được chọn lọc kỹ càng để mang lại những giá trị tốt nhất cho bạn',
      howToUse: 'Cách sử dụng và bảo quản',
      usage: 'Cách sử dụng',
      usageItems: [
        'Đặt sản phẩm ở vị trí phù hợp theo hướng dẫn phong thủy',
        'Thường xuyên tiếp xúc với sản phẩm để tăng cường năng lượng',
        'Nên để sản phẩm ở nơi sạch sẽ, tránh bụi bẩn',
      ],
      care: 'Bảo quản',
      careItems: [
        'Lau chùi nhẹ nhàng bằng vải mềm, tránh hóa chất mạnh',
        'Phơi nắng nhẹ định kỳ để nạp năng lượng tự nhiên',
        'Bảo quản trong hộp mềm khi không sử dụng',
      ],
      specifications: 'Thông số kỹ thuật',
      material: 'Chất liệu',
      size: 'Kích thước',
      weight: 'Trọng lượng',
      origin: 'Xuất xứ',
      guarantee: 'Cam kết và bảo hành',
      guaranteeItems: {
        natural: '100% Đá tự nhiên',
        naturalDesc: 'Cam kết đá quý tự nhiên 100%, có giấy chứng nhận',
        warranty: 'Bảo hành 1 năm',
        warrantyDesc: 'Bảo hành chất lượng và hỗ trợ bảo quản miễn phí',
        shipping: 'Giao hàng nhanh',
        shippingDesc: 'Miễn phí vận chuyển toàn quốc, đóng gói cẩn thận',
      },
      orderProcess: 'Quy trình đặt hàng',
      orderProcessSubtitle: 'Đơn giản, nhanh chóng và an toàn - Chỉ 3 bước để sở hữu sản phẩm',
      step1: 'Liên hệ tư vấn',
      step1Desc: 'Gọi hotline hoặc nhắn tin để được tư vấn về sản phẩm phù hợp nhất',
      step2: 'Xác nhận đơn hàng',
      step2Desc: 'Xác nhận thông tin và địa chỉ giao hàng, thanh toán an toàn',
      step3: 'Nhận hàng',
      step3Desc: 'Nhận hàng tại nhà, kiểm tra và tận hưởng năng lượng tích cực',
      finalCta: 'Sẵn sàng mang năng lượng tích cực về nhà?',
      finalCtaDesc: 'Đừng bỏ lỡ cơ hội sở hữu {productName} - Vật phẩm phong thủy cao cấp mang lại may mắn và thịnh vượng cho bạn và gia đình',
      finalCtaHotline: 'Hotline 24/7',
      finalCtaMessage: 'Zalo / Facebook',
      orderNowButton: 'Đặt hàng ngay - Tư vấn miễn phí',
      viewMoreProducts: 'Xem thêm sản phẩm',
      specialOffer: '⚡ Đặt hàng ngay hôm nay để nhận ưu đãi đặc biệt và tư vấn phong thủy miễn phí',
      relatedProducts: 'Sản phẩm liên quan',
      relatedProductsSubtitle: 'Khám phá thêm các sản phẩm cùng danh mục để tìm được vật phẩm phong thủy phù hợp nhất với bạn',
      viewAllProducts: 'Xem tất cả sản phẩm →',
    },
  },
  en: {
    nav: {
      ourStory: 'Our Story',
      products: 'Products',
      energyFinder: 'Energy Finder',
      contact: 'Contact',
    },
    hero: {
      title: 'Awaken energy from the earth – Bring peace to your heart.',
      subtitle: 'Ann Gem & Fengshui – Energy from the Earth',
      cta: 'Discover Your Energy',
    },
    brandStory: {
      title: 'Each stone is a soul – awakened by human hands.',
      description: 'Ann Gem & Fengshui was born from the philosophy of harmony: combining natural energy with Japanese Zen spirit. Each product is not just a feng shui gift, but a symbol of a peaceful lifestyle – where material, spiritual, and energy meet.',
    },
    craft: {
      title: 'Energy is only real when created by real hands.',
      description: 'From rough stone to bright gem, every Ann Gem & Fengshui product goes through a process of purification – energy sealing – unique certification. Each item comes with a 3-layer VOID seal, authentic QR code, and bilingual energy certificate.',
    },
    products: {
      title: 'Energy Products',
      subtitle: 'Discover our collection of exquisitely crafted feng shui items, each product is a unique source of energy for your life.',
      viewDetails: 'View Details',
      productsTitle: 'Energy Products',
      productsSubtitle: 'Discover our collection of exquisitely crafted feng shui items, each product is a unique source of energy for your life.',
      previous: 'Previous',
      next: 'Next',
      showing: 'Showing',
      of: 'of',
      products: 'products',
      notFound: 'Product Not Found',
      notFoundDesc: 'The product you are looking for does not exist or has been removed.',
      viewAllProducts: 'View All Products',
      backToHome: 'Back to Home',
    },
    productItems: {
      fengshuiBracelet: 'Feng Shui Gemstone Bracelet',
      fengshuiBraceletDesc: 'Carry energy with you every day.',
      gemstonePainting: 'Gemstone Painting',
      gemstonePaintingDesc: 'Feng shui artwork for living spaces.',
      fengshuiWishJar: 'Feng Shui Wish Jar',
      fengshuiWishJarDesc: 'Wishes of peace in a small jar.',
      energyItem: 'Energy Item',
      energyItemDesc: 'Increase energy frequency for your home.',
      designerCollection: 'Designer Exclusive Collection',
      designerCollectionDesc: 'Unique pieces – for energy collectors.',
      fengshuiStatue: 'Feng Shui Statue',
      fengshuiStatueDesc: 'Wealth gods and feng shui spiritual figures.',
    },
    energySets: {
      title: 'Ann Energy Collection',
      subtitle: 'Product sets specially designed to balance and enhance different aspects of your life.',
      energyVitality: '🌞 Energy & Vitality Set',
      energyVitalityDesc: 'Awaken vitality and inner confidence',
      peaceSleep: '🌙 Peace & Sleep Set',
      peaceSleepDesc: 'Deep sleep – peace of mind – tranquility',
      beautyGlow: '🌸 Beauty & Glow Set',
      beautyGlowDesc: 'Radiate from loving energy',
      successFocus: '💼 Success & Focus Set',
      successFocusDesc: 'Focus and attract lucky energy',
      buyNow: 'Buy Now',
    },
    energyFinder: {
      title: 'Find the stone that carries your unique energy.',
      subtitle: 'Answer a few simple questions to let Ann help you find the feng shui item that best matches your energy and goals.',
      birthYear: 'Birth Year',
      birthYearPlaceholder: 'e.g., 1990',
      element: 'Element',
      elementOptions: {
        metal: 'Metal',
        wood: 'Wood',
        water: 'Water',
        fire: 'Fire',
        earth: 'Earth',
      },
      goal: 'Goal',
      goalOptions: {
        wealth: 'Wealth',
        love: 'Love',
        peace: 'Peace',
        health: 'Health',
      },
      discover: 'Discover Now',
    },
    socialProof: {
      title: 'What Customers Say About Ann Gem & Fengshui',
      review1: 'I didn\'t just buy a bracelet, I bought back peace in my heart.',
      review1Author: 'Thu Trang, Hanoi',
      review2: 'Ann\'s feng shui gemstone painting makes my room bright every morning.',
      review2Author: 'Nguyen Minh, Da Nang',
      review3: 'Very professional consultation service, I found the item that matches my element.',
      review3Author: 'Le An, Ho Chi Minh City',
    },
    cta: {
      title: 'Begin Your Balance Journey.',
      subtitle: 'Discover products crafted specifically for you or receive free consultation from our feng shui experts.',
      explore: '💎 Discover Your Element-Matching Bracelet',
      consult: '☯️ Book Feng Shui Consultation (Free)',
    },
    footer: {
      tagline: 'Energy from the Earth',
      allRightsReserved: '© 2025 Ann Gem & Fengshui. All rights reserved.',
    },
    productDetail: {
      home: 'Home',
      products: 'Products',
      price: 'Product Price',
      inStock: 'In Stock',
      priceIncludes: '💰 Price includes VAT and shipping',
      naturalStone: '100% Natural Stone',
      warranty: '1 Year Warranty',
      freeShipping: 'Free Shipping',
      freeConsultation: 'Free Consultation',
      orderNow: 'Order Now - Free Consultation',
      favorite: 'Favorite',
      share: 'Share',
      hotline: '📞 24/7 Consultation Hotline:',
      hotlineDesc: 'Or message Zalo/Facebook for fastest consultation',
      fengshuiMeaning: {
        bracelet: {
          title: 'Feng Shui Meaning of Gemstone Bracelets',
          description: 'Gemstone bracelets are not just jewelry but powerful feng shui items that carry positive energy with you every day. When worn on the wrist, the stone\'s energy directly affects the wearer\'s body and spirit.',
          items: [
            'Enhance personal energy',
            'Protect from negative energy and evil spirits',
            'Bring luck in work and life',
            'Balance yin and yang in the body',
          ],
        },
        painting: {
          title: 'Feng Shui Meaning of Gemstone Paintings',
          description: 'Feng shui gemstone paintings are premium decorative items that not only beautify space but also harmonize energy in the home. Each painting is arranged according to feng shui principles to bring wealth, peace, and prosperity.',
          items: [
            'Harmonize energy in living spaces',
            'Attract wealth and luck',
            'Enhance family harmony',
            'Protect the home from negative energy',
          ],
        },
        item: {
          title: 'Feng Shui Meaning of Energy Items',
          description: 'Feng shui items are crafted from natural gemstones, carrying the powerful energy of heaven and earth. When placed in the correct position at home, they maximize their ability to harmonize and enhance positive energy.',
          items: [
            'Purify space and energy',
            'Enhance health and spirit',
            'Bring peace and happiness',
            'Support meditation and healing',
          ],
        },
        energy: {
          title: 'Feng Shui Meaning of Energy Items',
          description: 'Energy items are crafted from gemstones with high vibrational frequencies, capable of amplifying and purifying energy. They are powerful tools in improving living and working environments.',
          items: [
            'Amplify positive energy',
            'Purify negative energy',
            'Enhance focus and clarity',
            'Bring feelings of peace and relaxation',
          ],
        },
        statue: {
          title: 'Feng Shui Meaning of Gemstone Statues',
          description: 'Feng shui statues are not just artworks but carry deep spiritual meaning. Each statue is crafted with respect and dedication, bringing protection and blessings to the family.',
          items: [
            'Bring blessings and protection',
            'Enhance wealth and prosperity',
            'Create spiritual space in the home',
            'Bring peace and happiness',
          ],
        },
        designer: {
          title: 'Feng Shui Meaning of Designer Collection',
          description: 'The Designer Collection consists of unique pieces, individually designed with a delicate combination of art and feng shui. Each product is a unique artwork, bringing value both aesthetically and energetically.',
          items: [
            'Unique pieces, no duplicates',
            'Designed according to traditional feng shui principles',
            'High collectible value',
            'Enhance energy and personal style',
          ],
        },
      },
      aboutProduct: 'About This Product',
      benefits: 'Benefits of Owning This Product',
      benefitsSubtitle: 'Each of our products is carefully selected to bring you the best values',
      howToUse: 'How to Use and Care',
      usage: 'Usage',
      usageItems: [
        'Place the product in the appropriate position according to feng shui guidance',
        'Regularly interact with the product to enhance energy',
        'Keep the product in a clean place, avoid dust',
      ],
      care: 'Care',
      careItems: [
        'Gently wipe with soft cloth, avoid strong chemicals',
        'Periodically expose to gentle sunlight to recharge natural energy',
        'Store in soft box when not in use',
      ],
      specifications: 'Specifications',
      material: 'Material',
      size: 'Size',
      weight: 'Weight',
      origin: 'Origin',
      guarantee: 'Commitment and Warranty',
      guaranteeItems: {
        natural: '100% Natural Stone',
        naturalDesc: 'Guaranteed 100% natural gemstone with certificate',
        warranty: '1 Year Warranty',
        warrantyDesc: 'Quality warranty and free maintenance support',
        shipping: 'Fast Shipping',
        shippingDesc: 'Free nationwide shipping, careful packaging',
      },
      orderProcess: 'Order Process',
      orderProcessSubtitle: 'Simple, fast and secure - Just 3 steps to own the product',
      step1: 'Contact Consultation',
      step1Desc: 'Call hotline or message to get advice on the most suitable product',
      step2: 'Confirm Order',
      step2Desc: 'Confirm information and delivery address, secure payment',
      step3: 'Receive Product',
      step3Desc: 'Receive at home, check and enjoy positive energy',
      finalCta: 'Ready to Bring Positive Energy Home?',
      finalCtaDesc: 'Don\'t miss the opportunity to own {productName} - Premium feng shui item that brings luck and prosperity to you and your family',
      finalCtaHotline: '24/7 Hotline',
      finalCtaMessage: 'Zalo / Facebook',
      orderNowButton: 'Order Now - Free Consultation',
      viewMoreProducts: 'View More Products',
      specialOffer: '⚡ Order today to receive special offers and free feng shui consultation',
      relatedProducts: 'Related Products',
      relatedProductsSubtitle: 'Explore more products in the same category to find the feng shui item that best suits you',
      viewAllProducts: 'View All Products →',
    },
  },
};

