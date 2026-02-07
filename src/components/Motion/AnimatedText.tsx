import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';
import { motionConfig } from './motionConfig';

type AnimatedTextProps = {
  children: string;
  className?: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  highlightGradient?: boolean;
};

/**
 * Staggered character reveal for headings.
 * Each character fades + slides up from y: 20.
 * Creates dramatic text entry effect.
 */
export default function AnimatedText({
  children,
  className = '',
  level = 'h2',
  highlightGradient = false,
}: AnimatedTextProps) {
  const reduceMotion = useReducedMotion();
  const Component = level as keyof JSX.IntrinsicElements;
  const characters = children.split('');

  const charVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: reduceMotion ? 0 : i * 0.02,
        duration: reduceMotion ? 0.1 : 0.3,
        ease: motionConfig.easing,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.02,
      },
    },
  };

  const textClass = highlightGradient
    ? 'bg-gradient-to-r from-[#0078D4] to-[#50A0E8] bg-clip-text text-transparent'
    : '';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Component className={`${className} ${textClass}`}>
        {characters.map((char, i) => (
          <motion.span key={i} variants={charVariants} custom={i}>
            {char}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
