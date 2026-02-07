import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';
import { motionConfig } from './motionConfig';

type MotionItemProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
  /** Stagger delay per item (seconds) */
  staggerDelay?: number;
  /** Slight y offset on enter */
  yOffset?: number;
};

/**
 * Staggered list/grid child: fades + slides in with delay based on index.
 * Use inside a container that has whileInView (e.g. MotionSection or parent with viewport).
 */
export default function MotionItem({
  children,
  className = '',
  index = 0,
  staggerDelay = 0.08,
  yOffset = 16,
}: MotionItemProps) {
  const reduceMotion = useReducedMotion();
  const duration = motionConfig.duration.normal;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : yOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
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
