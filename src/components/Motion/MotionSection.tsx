import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';
import { motionConfig } from './motionConfig';

type MotionSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
  /** Optional: slide direction (y: small offset) */
  slideOffset?: number;
};

/**
 * Wrapper that fades + slides in when scrolled into view.
 * Respects prefers-reduced-motion (fade only, no slide).
 */
export default function MotionSection({
  children,
  className = '',
  as: Component = 'section',
  id,
  slideOffset = 20,
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();
  const duration = motionConfig.duration.normal;
  const MotionEl = Component === 'section' ? motion.section : motion.div;

  return (
    <MotionEl
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : slideOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={motionConfig.viewport}
      transition={{
        duration: reduceMotion ? 0.2 : duration,
        ease: motionConfig.easing,
      }}
    >
      {children}
    </MotionEl>
  );
}
