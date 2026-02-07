import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';
import { motionConfig } from './motionConfig';

type MotionItemProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  /** Stagger delay per item (seconds) */
  staggerDelay?: number;
  /** Y offset on enter (clearly visible) */
  yOffset?: number;
  /** Scale from value (adds noticeable scale-in effect) */
  scaleFrom?: number;
};

/**
 * Staggered list/grid child: fades + slides + scales in with delay based on index.
 * Scale-in (0.95 → 1) combined with fade and vertical movement for noticeable entry.
 * Use inside a container that has whileInView (e.g. MotionSection or parent with viewport).
 */
export default function MotionItem({
  children,
  className = '',
  index = 0,
  staggerDelay = 0.12,
  yOffset = 35,
  scaleFrom = 0.95,
}: MotionItemProps) {
  const reduceMotion = useReducedMotion();
  const duration = motionConfig.duration.normal;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : yOffset,
        // Scale-in animation for noticeable entry (0.95 → 1)
        scale: reduceMotion ? 1 : scaleFrom,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={motionConfig.viewport}
      transition={{
        duration: reduceMotion ? 0.2 : duration,
        delay: reduceMotion ? 0 : index * staggerDelay,
        ease: motionConfig.easing,
      }}
    >
      {children}
    </motion.div>
  );
}
