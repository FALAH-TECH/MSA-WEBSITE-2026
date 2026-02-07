import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';
import { motionConfig } from './motionConfig';

type AnimatedHeadingProps = {
  children: React.ReactNode;
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

/**
 * Heading with animated underline accent bar reveal.
 * Heading slides up (y: 20→0) and fades in.
 * Underline bar reveals from left to right (scaleX: 0→1).
 * Respects prefers-reduced-motion (fade only, no slide or scale).
 */
export default function AnimatedHeading({
  children,
  className = '',
  level = 'h2',
}: AnimatedHeadingProps) {
  const reduceMotion = useReducedMotion();
  const Component = level as keyof JSX.IntrinsicElements;

  const headingVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 25 },
    visible: { opacity: 1, y: 0 },
  };

  const underlineVariants = {
    hidden: reduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1 },
  };

  return (
    <div>
      {/* Heading with slide-up and fade-in animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={motionConfig.viewport}
        variants={headingVariants}
        transition={{
          duration: reduceMotion ? 0.2 : 0.55,
          ease: motionConfig.easing,
        }}
      >
        <Component className={className}>{children}</Component>
      </motion.div>

      {/* Animated underline accent bar reveal (scaleX: 0 → 1) */}
      <motion.div
        className="h-1.5 bg-gradient-to-r from-[#0078D4] via-[#50A0E8] to-[#50A0E8] rounded-full"
        style={{ originX: 0 }}
        initial="hidden"
        whileInView="visible"
        viewport={motionConfig.viewport}
        variants={underlineVariants}
        transition={{
          duration: reduceMotion ? 0.2 : 0.6,
          delay: 0.15,
          ease: motionConfig.easing,
        }}
      />
    </div>
  );
}
