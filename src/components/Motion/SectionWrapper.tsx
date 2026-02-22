import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function SectionWrapper({
  children,
  className = '',
  id,
}: SectionWrapperProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 20, // reduced from 50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.1 }} // trigger earlier
      transition={{
        duration: 0.35, // faster than 0.6
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.section>
  );
}