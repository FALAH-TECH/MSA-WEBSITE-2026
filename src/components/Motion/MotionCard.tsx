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
 * Card wrapper: hover lift + slight scale + shadow transition.
 * When reduced motion is preferred, only subtle opacity/scale is applied.
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

  const transition = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const };
  const base = { className, transition };

  if (Component === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        {...base}
        {...(reduceMotion ? {} : { whileHover: { y: -4, scale: 1.02 }, whileTap: { scale: 0.99 } })}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      {...base}
      {...(reduceMotion ? {} : { whileHover: { y: -4, scale: 1.02 }, whileTap: { scale: 0.99 } })}
    >
      {children}
    </motion.div>
  );
}
