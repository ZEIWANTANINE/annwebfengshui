"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from '@/app/i18n/context';

const CraftAndAuthenticity = () => {
  const { t } = useI18n();
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-ann-dark leading-snug">{t.craft.title}</h2>
          <p className="text-lg text-ann-stone mt-4">{t.craft.description}</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="relative h-[500px] max-w-5xl mx-auto"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-10 w-1/3"
          >
            <Image src="/product/Thạch anh Hồng.jpg" alt="Craftsmanship 1" width={400} height={400} className="rounded-lg shadow-2xl object-cover" />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-1/3 w-1/2 z-10"
          >
            <Image src="/product/Thạch anh Vàng.jpg" alt="Craftsmanship 2" width={500} height={500} className="rounded-lg shadow-2xl object-cover" />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.5 }}
            className="absolute top-10 right-0 w-1/3"
          >
            <Image src="/product/Thạch anh xanh.jpg" alt="Craftsmanship 3" width={400} height={400} className="rounded-lg shadow-2xl object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftAndAuthenticity;
