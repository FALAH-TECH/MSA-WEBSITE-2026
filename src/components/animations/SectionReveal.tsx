import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import {
  ANIMATION_CONFIG,
  ANIMATION_VARIANTS,
  TRANSITION_CONFIG,
} from '@/utils/animations';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useScrollAnimation';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeInUp' | 'fadeInDown' | 'scaleIn' | 'slideInLeft' | 'slideInRight';
  staggerChildren?: boolean;
  childDelay?: number;
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  variant = 'fadeInUp',
  staggerChildren = false,
  childDelay = ANIMATION_CONFIG.stagger.base,
}: SectionRevealProps) {
  const { ref, isInView, animationConfig } = useScrollAnimation({
    delayOffset: delay,
  });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  const selectedVariant = ANIMATION_VARIANTS[variant as keyof typeof ANIMATION_VARIANTS];

  const containerVariants = staggerChildren
    ? {
        initial: { opacity: 0 },
        animate: isInView
          ? {
              opacity: 1,
              transition: {
                staggerChildren: childDelay,
                delayChildren: delay,
              },
            }
          : {},
      }
    : selectedVariant;

  const itemVariants = staggerChildren
    ? {
        initial: selectedVariant.initial,
        animate: { ...selectedVariant.animate },
        transition: {
          duration: ANIMATION_CONFIG.durations.base / 1000,
          ease: ANIMATION_CONFIG.easing.smooth,
        },
      }
    : undefined;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={containerVariants.initial}
      animate={isInView ? containerVariants.animate : containerVariants.initial}
      transition={
        staggerChildren
          ? undefined
          : {
              duration: animationConfig.duration,
              ease: ANIMATION_CONFIG.easing.smooth,
              delay: animationConfig.delay,
            }
      }
    >
      {staggerChildren && Array.isArray(children)
        ? (children as ReactNode[]).map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : staggerChildren
          ? (
              <motion.div variants={itemVariants}>{children}</motion.div>
            )
          : (
              children
            )}
    </motion.div>
  );
}
