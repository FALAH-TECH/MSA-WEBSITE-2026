import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ANIMATION_CONFIG } from '@/utils/animations';
import { useScrollAnimation, useReducedMotion } from '@/hooks/useScrollAnimation';

interface AnimatedTextProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  delay?: number;
  staggerWords?: boolean;
}

export function AnimatedText({
  children,
  as = 'p',
  className,
  delay = 0,
  staggerWords = false,
}: AnimatedTextProps) {
  const { ref, isInView } = useScrollAnimation({ delayOffset: delay });
  const prefersReducedMotion = useReducedMotion();

  const Component = as as any;

  if (prefersReducedMotion) {
    return (
      <Component ref={ref} className={className}>
        {children}
      </Component>
    );
  }

  if (staggerWords && typeof children === 'string') {
    const words = (children as string).split(' ');

    return (
      <Component
        ref={ref}
        className={className}
        style={{ overflow: 'hidden' }}
      >
        <motion.span
          style={{ display: 'inline-block' }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            staggerChildren: ANIMATION_CONFIG.stagger.short,
            delayChildren: delay,
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: ANIMATION_CONFIG.durations.base / 1000,
                ease: ANIMATION_CONFIG.easing.smooth,
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </Component>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ overflow: 'hidden' }}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{
        duration: ANIMATION_CONFIG.durations.base / 1000,
        ease: ANIMATION_CONFIG.easing.smooth,
        delay,
      }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
}
