/**
 * Reusable motion variants for consistent, premium animations across the site.
 * Inspired by premium design systems (e.g., Limitless).
 */
import { motionConfig } from './motionConfig';

const { easing, duration, premiumEasing } = motionConfig;

/**
 * FADE & SCALE VARIANTS
 */
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease: easing },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: duration.slow, ease: premiumEasing },
};

export const fadeDown = {
  initial: { opacity: 0, y: -24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease: easing },
};

/**
 * DIRECTIONAL SLIDE VARIANTS
 */
export const slideLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: duration.normal, ease: easing },
};

export const slideRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: duration.normal, ease: easing },
};

/**
 * SCROLL REVEAL VARIANTS (whileInView)
 */
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: motionConfig.sectionEntry.duration, ease: premiumEasing },
};

export const scrollRevealScale = {
  initial: { opacity: 0, y: 50, scale: 0.94 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: motionConfig.sectionEntry.duration, ease: premiumEasing },
};

/**
 * CONTAINER & STAGGER VARIANTS
 */
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: motionConfig.cardStagger,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease: easing },
};

/**
 * HOVER & TAP VARIANTS FOR BUTTONS
 */
export const buttonVariants = {
  initial: { scale: 1 },
  whileHover: { scale: motionConfig.button.hoverScale },
  whileTap: { scale: motionConfig.button.tapScale },
  transition: { duration: motionConfig.button.duration, ease: easing },
};

/**
 * HOVER & TAP VARIANTS FOR CARDS
 */
export const cardVariants = {
  initial: { y: 0 },
  whileHover: { y: -10, scale: 1.05 },
  whileTap: { scale: 0.97 },
  transition: { duration: motionConfig.hoverDuration, ease: easing },
};

/**
 * LINK UNDERLINE REVEAL (for smooth underline animation)
 */
export const linkUnderline = {
  initial: { scaleX: 0, opacity: 0 },
  animate: { scaleX: 1, opacity: 1 },
  transition: { duration: motionConfig.link.duration, ease: premiumEasing },
};

/**
 * HERO STAGGER: Sequenced reveals for main heading + subheading + buttons
 */
export const heroHeading = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: duration.slow, ease: premiumEasing },
};

export const heroSubheading = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease: easing, delay: 0.15 },
};

export const heroCTA = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease: easing, delay: 0.3 },
};

/**
 * NAVBAR: Slide down + fade
 */
export const navbarVariant = {
  initial: { opacity: 0, y: -24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: duration.normal, ease: easing },
};

/**
 * FADE ONLY (for reduced motion fallback)
 */
export const fadeOnly = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: duration.fast, ease: 'easeOut' },
};
