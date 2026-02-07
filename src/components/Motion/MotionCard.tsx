import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';
import { motionConfig } from './motionConfig';

type MotionCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Optional: use as anchor (e.g. motion.a) */
  as?: 'div' | 'a';
  href?: string;
  target?: string;
  rel?: string;
};

/**
 * Card wrapper: hover lift + scale + shadow transition.
 * Premium hover: y: -10, scale: 1.05, with clear shadow increase.
 * Respects reduced motion (fade only).
 */
export default function MotionCard({
  children,
  className = '',
  as: Component = 'div',
  href,
  target,
  rel,
}: MotionCardProps) {
  const reduceMotion = useReducedMotion();

  // Premium hover: y -10 and scale 1.05 for clearly noticeable lift and growth
  const transition = { duration: motionConfig.hoverDuration, ease: motionConfig.easing };
  const base = { className, transition };

  if (Component === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        {...base}
        {...(!reduceMotion && {
          whileHover: { y: -10, scale: 1.05 },
          whileTap: { scale: 0.97 },
        })}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      {...base}
      {...(!reduceMotion && {
        whileHover: { y: -10, scale: 1.05 },
        whileTap: { scale: 0.97 },
      })}
    >
      {children}
    </motion.div>
  );
}
