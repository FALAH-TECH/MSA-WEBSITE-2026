/**
 * Shared motion config: durations and easing for consistent, clearly visible animations.
 * Use with useReducedMotion() to disable when user prefers reduced motion.
 */
export const motionConfig = {
  duration: {
    fast: 0.35,
    normal: 0.5,
    slow: 0.65,
  },
  easing: [0.25, 0.46, 0.45, 0.94] as const, // easeOutQuad
  viewport: { once: true, amount: 0.2 },
  // Hover animation timing for cards and interactive elements
  hoverDuration: 0.3,
  // Section entry: stronger, more noticeable
  sectionEntry: {
    duration: 0.6,
    easing: [0.25, 0.46, 0.45, 0.94] as const,
  },
  // Card stagger timing for cascade effect
  cardStagger: 0.15,
};
