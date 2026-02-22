export const ANIMATION_CONFIG = {
  easing: {
    smooth: [0.32, 0.72, 0.06, 1],
    smoothOut: [0.25, 0.46, 0.45, 0.94],
    smoothIn: [0.33, 0.66, 0.66, 1],
    premium: [0.4, 0, 0.2, 1],
  },
  durations: {
    instant: 150,
    short: 300,
    base: 400,
    medium: 500,
    long: 600,
  },
  stagger: {
    short: 0.05,
    base: 0.1,
    medium: 0.15,
  },
  delay: {
    none: 0,
    short: 0.05,
    base: 0.1,
    medium: 0.15,
    long: 0.2,
  },
};

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },

  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },

  slideInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },

  buttonHover: {
    rest: {
      scale: 1,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
    },
  },

  textHover: {
    rest: { color: '#ffffff' },
    hover: { color: '#50A0E8' },
  },
};

export const SPRING_CONFIG = {
  gentle: {
    type: 'spring',
    stiffness: 100,
    damping: 20,
  },
  smooth: {
    type: 'spring',
    stiffness: 120,
    damping: 25,
  },
  snappy: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
  },
};

export const TRANSITION_CONFIG = {
  default: {
    duration: ANIMATION_CONFIG.durations.base / 1000,
    ease: ANIMATION_CONFIG.easing.smooth,
  },
  smooth: {
    duration: ANIMATION_CONFIG.durations.medium / 1000,
    ease: ANIMATION_CONFIG.easing.smoothOut,
  },
  quick: {
    duration: ANIMATION_CONFIG.durations.short / 1000,
    ease: ANIMATION_CONFIG.easing.smoothOut,
  },
  long: {
    duration: ANIMATION_CONFIG.durations.long / 1000,
    ease: ANIMATION_CONFIG.easing.smooth,
  },
};
