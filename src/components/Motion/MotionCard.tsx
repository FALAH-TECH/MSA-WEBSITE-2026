import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

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
 * Values: y: -12, scale: 1.06 for dramatically visible, premium feel
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

  // Stronger hover: y -12 and scale 1.06 for clearly noticeable lift and growth
  const transition = { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] as const };
  const base = { className, transition };

  if (Component === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        {...base}
        {...(reduceMotion ? {} : { whileHover: { y: -12, scale: 1.06 }, whileTap: { scale: 0.97 } })}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      {...base}
      {...(reduceMotion ? {} : { whileHover: { y: -12, scale: 1.06 }, whileTap: { scale: 0.97 } })}
    >
      {children}
    </motion.div>
  );
}
