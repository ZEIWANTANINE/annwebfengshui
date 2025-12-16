'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useI18n } from '@/app/i18n/context';

const CraftAndAuthenticity = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-white">
      {/* Container giới hạn chiều rộng */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        
        {/* TEXT */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-ann-dark leading-snug">
            {t.craft.title}
          </h2>
          <p className="text-lg text-ann-stone mt-4">
            {t.craft.description}
          </p>
        </div>

        {/* IMAGE SHOWCASE CONTAINER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          // Chiều cao đủ để chứa ảnh trung tâm lớn hơn
          className="relative h-[480px] md:h-[600px] w-full mx-auto"
        >
          {/* LEFT IMAGE (Màu đỏ) - Nằm phía dưới và bên trái */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // Vị trí: Đặt thấp hơn (bottom-0) và ở góc trái
            // Kích thước: Nhỏ (40%) và z-index thấp (z-10)
            className="absolute bottom-0 left-0 md:left-[5%] w-[40%] max-w-[450px] z-10"
          >
            <Image 
              src="/product/download (1).jpg" 
              alt="Craftsmanship 1" 
              width={500} 
              height={500} 
              // Chiều cao hình ảnh
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-2xl" 
            />
          </motion.div>

          {/* CENTER IMAGE (MAIN - Màu xanh) - LỚN NHẤT & CHỒNG LÊN */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            // Vị trí: Đặt hơi cao (top-10) và ở giữa.
            // Kích thước: Lớn nhất (w-[60%])
            // z-index: Cao nhất (z-30) để che phủ cả hai ảnh kia
            className="absolute bottom-10 left-1/3 -translate-x-1/2 w-[50%] max-w-[750px] z-30"
          >
            <Image 
              src="/product/download (2).jpg" 
              alt="Craftsmanship 2" 
              width={640} 
              height={640} 
              // Chiềucao lớn nhất
              className="w-full h-[450px] md:h-[550px] object-cover rounded-xl shadow-2xl" 
            />
          </motion.div>

          {/* RIGHT IMAGE (Màu vàng) - Nằm phía dưới và bên phải */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // Vị trí: Đặt thấp hơn (bottom-0) và ở góc phải
            // Kích thước: Nhỏ (40%) và z-index thấp (z-10)
            className="absolute bottom-0 right-0 md:left-[75%] w-[40%] max-w-[450px] z-10"
          >
            <Image 
              src="/product/Citrine Point with Polished Sides - Large.jpg" 
              alt="Craftsmanship 3" 
              width={500} 
              height={500} 
              // Chiều cao hình ảnh
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-2xl" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftAndAuthenticity;