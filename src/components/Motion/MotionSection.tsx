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
 * For Events section: opacity 0→1, y: 40→0, scale: 0.94→1
 */
export default function MotionSection({
  children,
  className = '',
  as: Component = 'section',
  id,
  slideOffset = 20,
  scaleFrom = 1,
  enableScale = false,
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();
  // Use longer duration for section entry (0.6s), normal for others
  const isEventsSection = id === 'events';
  const duration = isEventsSection ? 0.6 : motionConfig.duration.normal;
  const MotionEl = Component === 'section' ? motion.section : motion.div;

  return (
    <MotionEl
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : slideOffset,
        // Scale animation for Events section: 0.94 → 1
        scale: reduceMotion || !enableScale ? 1 : scaleFrom,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
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
