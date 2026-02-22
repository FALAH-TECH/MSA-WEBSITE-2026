import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  ANIMATION_CONFIG,
  ANIMATION_VARIANTS,
  TRANSITION_CONFIG,
} from '@/utils/animations';
import { useReducedMotion } from '@/hooks/useScrollAnimation';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: boolean;
}

export function FadeInUp({
  children,
  delay = 0,
  duration = ANIMATION_CONFIG.durations.base,
  className,
  staggerChildren = false,
}: FadeInUpProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants = staggerChildren
    ? {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: ANIMATION_CONFIG.stagger.base,
            delayChildren: delay,
          },
        },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: duration / 1000,
          ease: ANIMATION_CONFIG.easing.smooth,
          delay,
        },
      };

  const itemVariants = staggerChildren
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: duration / 1000,
          ease: ANIMATION_CONFIG.easing.smooth,
        },
      }
    : undefined;

  return (
    <motion.div
      className={className}
      initial={containerVariants.initial}
      animate={containerVariants.animate}
      transition={containerVariants.transition}
    >
      {staggerChildren ? (
        Array.isArray(children) ? (
          (children as ReactNode[]).map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={itemVariants}>{children}</motion.div>
        )
      ) : (
        children
      )}
    </motion.div>
  );
}
