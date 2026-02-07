import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';
import { motionConfig } from './motionConfig';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

/**
 * MASTER WRAPPER: Controls section-wide entry animations site-wide.
 * opacity: 0→1, y: 50→0, scale: 0.94→1 (0.6s, easeOut)
 * Respects prefers-reduced-motion (fade only).
 * Used by: About, Team, Events, Join, Footer sections.
 */
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
        y: reduceMotion ? 0 : 50,
        scale: reduceMotion ? 1 : 0.94,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: reduceMotion ? 0.3 : 0.6,
        ease: motionConfig.easing,
      }}
    >
      {children}
    </motion.section>
  );
}
