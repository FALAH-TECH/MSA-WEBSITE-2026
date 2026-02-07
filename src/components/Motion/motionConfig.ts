/**
 * Shared motion config: durations and easing for consistent, clearly visible animations.
 * Use with useReducedMotion() to disable when user prefers reduced motion.
 */

// Premium easing curve for smooth, intentional motion (like Limitless reference)
const premiumEasing = [0.22, 1, 0.36, 1] as const;

export const motionConfig = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.7,
  },
  easing: premiumEasing,
  premiumEasing, // Explicitly export premium easing for high-impact animations
  viewport: { once: true, amount: 0.25 },
  // Hover animation timing for cards and interactive elements
  hoverDuration: 0.28,
  // Section entry: stronger, more noticeable
  sectionEntry: {
    duration: 0.7,
    easing: premiumEasing,
  },
  // Card stagger timing for cascade effect
  cardStagger: 0.12,
  // Button animation values for premium feel
  button: {
    hoverScale: 1.05,
    tapScale: 0.95,
    duration: 0.24,
  },
  // Link smooth transitions
  link: {
    duration: 0.3,
    easing: premiumEasing,
  },
};
