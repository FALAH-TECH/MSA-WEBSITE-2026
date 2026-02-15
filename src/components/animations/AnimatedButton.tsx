import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ANIMATION_CONFIG } from '@/utils/animations';
import { useReducedMotion } from '@/hooks/useScrollAnimation';

interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const baseStyles = 'font-semibold transition-colors duration-300 inline-flex items-center justify-center rounded-lg';

const variantStyles = {
  primary: 'bg-[#0078D4] text-white hover:bg-[#005fa3]',
  secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
  ghost: 'text-white hover:text-[#50A0E8]',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-6 py-3 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2',
};

export function AnimatedButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: AnimatedButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (prefersReducedMotion) {
    return (
      <button className={buttonClasses} {...props}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      initial={{ scale: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
        y: -2,
      }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{
        duration: ANIMATION_CONFIG.durations.short / 1000,
        ease: ANIMATION_CONFIG.easing.smoothOut,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
