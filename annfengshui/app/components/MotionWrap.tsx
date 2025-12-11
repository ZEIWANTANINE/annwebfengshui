"use client";

import { motion, Variants } from "framer-motion";

interface MotionWrapProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  transition?: object;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const MotionWrap: React.FC<MotionWrapProps> = ({ children, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={defaultVariants}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrap;
