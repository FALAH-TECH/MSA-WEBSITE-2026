import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';
import { motionConfig } from './motionConfig';

type MotionSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'section' | 'div';
  id?: string;
  /** Optional: slide direction (y: offset) */
  slideOffset?: number;
  /** Optional: scale from value for entry animation */
  scaleFrom?: number;
  /** Optional: enable scale animation */
  enableScale?: boolean;
};

/**
 * Wrapper that fades + slides + scales in when scrolled into view.
 * Respects prefers-reduced-motion (fade only, no slide or scale).
 * Premium motion: opacity 0→1, y: 50→0, scale: 0.94→1
 * Uses premium easing curve for intentional, smooth motion.
 */
export default function MotionSection({
  children,
  className = '',
  as: Component = 'section',
  id,
  slideOffset = 50,
  scaleFrom = 0.94,
  enableScale = true,
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();
  const MotionEl = Component === 'section' ? motion.section : motion.div;

  return (
    <MotionEl
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : slideOffset,
        scale: reduceMotion || !enableScale ? 1 : scaleFrom,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={motionConfig.viewport}
      transition={{
        duration: reduceMotion ? 0.2 : motionConfig.sectionEntry.duration,
        ease: motionConfig.premiumEasing,
      }}
    >
      {children}
    </MotionEl>
  );
}
