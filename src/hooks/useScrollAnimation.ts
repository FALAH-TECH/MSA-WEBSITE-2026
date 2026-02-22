import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/utils/animations';

interface UseScrollAnimationProps {
  margin?: string;
  once?: boolean;
  amount?: 'some' | 'all';
  delayOffset?: number;
}

export function useScrollAnimation({
  margin = '-80px',
  once = true,
  amount = 'some',
  delayOffset = 0,
}: UseScrollAnimationProps = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin,
    amount,
  });

  const shouldPrefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return {
    ref,
    isInView: shouldPrefersReducedMotion ? true : isInView,
    animationConfig: {
      duration: ANIMATION_CONFIG.durations.base / 1000,
      ease: ANIMATION_CONFIG.easing.smooth,
      delay: delayOffset,
    },
  };
}

export function useReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
