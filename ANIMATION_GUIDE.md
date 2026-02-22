# Animation System Guide

A comprehensive, performance-optimized animation system for your React + Tailwind website. Built with Framer Motion, respecting user preferences, and following Microsoft Fluent design principles.

## Core Principles

- **Minimal & Subtle**: No heavy parallax or infinite animations
- **Premium Feel**: Smooth cubic-bezier easing, not bouncy springs
- **Accessible**: Respects `prefers-reduced-motion` user preference
- **Performance**: No layout shifts, efficient animations under 600ms
- **Consistent**: Unified timing and easing across the app

## Installation

```bash
npm install framer-motion lucide-react
```

## Core Files

### Configuration (`src/utils/animations.ts`)

Central configuration for all timing, easing, and animation variants:

```typescript
import {
  ANIMATION_CONFIG,
  ANIMATION_VARIANTS,
  TRANSITION_CONFIG,
} from '@/utils/animations';

// Access easing functions
ANIMATION_CONFIG.easing.smooth         // [0.32, 0.72, 0.06, 1]
ANIMATION_CONFIG.easing.smoothOut      // [0.25, 0.46, 0.45, 0.94]
ANIMATION_CONFIG.easing.smoothIn       // [0.33, 0.66, 0.66, 1]
ANIMATION_CONFIG.easing.premium        // [0.4, 0, 0.2, 1]

// Durations (in milliseconds)
ANIMATION_CONFIG.durations.short   // 300ms
ANIMATION_CONFIG.durations.base    // 400ms
ANIMATION_CONFIG.durations.medium  // 500ms
ANIMATION_CONFIG.durations.long    // 600ms

// Stagger values for child animations
ANIMATION_CONFIG.stagger.short     // 0.05
ANIMATION_CONFIG.stagger.base      // 0.1
ANIMATION_CONFIG.stagger.medium    // 0.15
```

### Hooks (`src/hooks/useScrollAnimation.ts`)

#### `useScrollAnimation()`

Detects when a section enters the viewport and provides animation state:

```typescript
const { ref, isInView, animationConfig } = useScrollAnimation({
  margin: '-80px',    // Trigger animation 80px before entering viewport
  once: true,         // Animate only once
  amount: 'some',     // Trigger when some of element is visible
  delayOffset: 0.1,   // Add delay to staggered animations
});

return (
  <div ref={ref}>
    {isInView && <animated-content />}
  </div>
);
```

#### `useReducedMotion()`

Returns `true` if user has enabled "Prefer reduced motion" in OS settings:

```typescript
const prefersReducedMotion = useReducedMotion();

if (prefersReducedMotion) {
  // Render without animations
}
```

## Animation Components

### 1. SectionReveal

Reveals entire sections with fade + upward motion on scroll:

```typescript
import { SectionReveal } from '@/components/animations';

<SectionReveal
  className="space-y-4"
  variant="fadeInUp"        // Options: fadeInUp, fadeInDown, scaleIn, etc.
  delay={0.2}               // Initial delay
  staggerChildren={true}    // Stagger child animations
  childDelay={0.1}          // Delay between children
>
  <h2>Section Title</h2>
  <p>Section content...</p>
</SectionReveal>
```

**Variants:**
- `fadeInUp` - Fade in while moving up (default)
- `fadeInDown` - Fade in while moving down
- `scaleIn` - Fade in while scaling from 0.95
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right

### 2. AnimatedText

Adds subtle fade + upward motion to headings and text:

```typescript
import { AnimatedText } from '@/components/animations';

<AnimatedText
  as="h1"                    // HTML element type
  className="text-4xl"
  delay={0.1}                // Delay before animation
  staggerWords={false}       // Animate each word separately
>
  Beautiful Heading
</AnimatedText>
```

**Use Cases:**
- Page titles
- Section headings
- Body paragraphs
- Any text-heavy content

### 3. AnimatedButton

Interactive button with micro-animations on hover/tap:

```typescript
import { AnimatedButton } from '@/components/animations';

<AnimatedButton
  variant="primary"          // Options: primary, secondary, ghost
  size="md"                  // Options: sm, md, lg
  onClick={handleClick}
>
  Click Me
</AnimatedButton>
```

**Animations:**
- Scale 1.02 on hover
- Y-offset -2px on hover
- Scale 0.98 on tap
- Smooth transitions (300ms)

### 4. FadeInUp

Lower-level wrapper for custom fade + upward animations:

```typescript
import { FadeInUp } from '@/components/animations';

<FadeInUp
  delay={0.1}
  duration={500}
  staggerChildren={true}
  className="space-y-4"
>
  {items.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}
</FadeInUp>
```

## Usage Patterns

### Pattern 1: Full Section Animation

```typescript
import { SectionReveal, AnimatedText, AnimatedButton } from '@/components/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function HeroSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32">
      <SectionReveal variant="fadeInUp" delay={0.1}>
        <AnimatedText as="h1" className="text-5xl font-bold">
          Welcome
        </AnimatedText>
      </SectionReveal>

      <SectionReveal variant="fadeInUp" delay={0.2}>
        <AnimatedText as="p" className="text-xl text-gray-400 mt-4">
          Explore our amazing features
        </AnimatedText>
      </SectionReveal>

      <SectionReveal variant="fadeInUp" delay={0.3}>
        <AnimatedButton variant="primary" onClick={handleCTA}>
          Get Started
        </AnimatedButton>
      </SectionReveal>
    </section>
  );
}
```

### Pattern 2: List with Staggered Children

```typescript
<SectionReveal
  variant="fadeInUp"
  staggerChildren={true}
  childDelay={0.08}
>
  {items.map((item) => (
    <div key={item.id} className="p-4 bg-white/5 rounded-lg">
      {item.name}
    </div>
  ))}
</SectionReveal>
```

### Pattern 3: Card Grid with Individual Animations

```typescript
export function CardGrid({ items }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div ref={ref} className="grid grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION_CONFIG.durations.base / 1000,
            ease: ANIMATION_CONFIG.easing.smooth,
            delay: index * ANIMATION_CONFIG.stagger.base,
          }}
          className="p-6 bg-white/5 rounded-lg"
        >
          {item.content}
        </motion.div>
      ))}
    </div>
  );
}
```

## Micro-Interactions

### Icon Hover Animation

```typescript
import { motion } from 'framer-motion';
import { ANIMATION_CONFIG } from '@/utils/animations';

<motion.div
  whileHover={{ scale: 1.1, rotate: 5 }}
  whileTap={{ scale: 0.95 }}
  transition={{
    duration: ANIMATION_CONFIG.durations.short / 1000,
    ease: ANIMATION_CONFIG.easing.smoothOut,
  }}
>
  <Icon className="w-6 h-6" />
</motion.div>
```

### Text Color Fade

```typescript
<motion.a
  className="text-white hover:text-[#50A0E8]"
  whileHover={{ color: '#50A0E8' }}
  transition={{
    duration: ANIMATION_CONFIG.durations.short / 1000,
  }}
>
  Link Text
</motion.a>
```

### Underline Expand

```typescript
<motion.div
  className="relative inline-block"
  whileHover="hover"
  initial="rest"
>
  <span>Hover me</span>
  <motion.div
    className="absolute bottom-0 left-0 h-0.5 bg-[#0078D4]"
    variants={{
      rest: { width: '0%' },
      hover: { width: '100%' },
    }}
    transition={{
      duration: ANIMATION_CONFIG.durations.short / 1000,
      ease: ANIMATION_CONFIG.easing.smooth,
    }}
  />
</motion.div>
```

## Accessibility

All animation components automatically:

- Respect `prefers-reduced-motion` setting
- Disable animations if user has motion preferences enabled
- Maintain full functionality without animations
- Keep interactive elements keyboard-accessible

**Testing for accessibility:**

```bash
# macOS: Accessibility > Display > Reduce motion
# Windows: Settings > Ease of Access > Display > Show animations
# Linux: varies by desktop environment
```

## Performance Tips

1. **Keep animations under 600ms** - Anything longer feels sluggish
2. **Use `once={true}`** on scroll animations to prevent re-triggers
3. **Stagger child animations** instead of animating them all at once
4. **Avoid animating large background elements** - causes repaints
5. **Use `will-change` sparingly** - only for frequently animated elements
6. **Batch animations** with `initial` and `animate` rather than multiple triggers

## Common Pitfalls

❌ **Don't:**
- Use infinite animations that distract from content
- Animate large background gradients or blur filters
- Create parallax scrolling that feels heavy
- Ignore `prefers-reduced-motion` preference
- Use animations longer than 600ms
- Animate layout properties that cause repaints

✅ **Do:**
- Keep animations subtle and purposeful
- Use animations to guide user attention
- Respect user motion preferences
- Test performance with DevTools
- Use cubic-bezier easing for smooth, premium feel
- Test animations at 6x CPU throttle to ensure performance

## Customization

### Change Global Easing

Edit `src/utils/animations.ts`:

```typescript
export const ANIMATION_CONFIG = {
  easing: {
    smooth: [0.32, 0.72, 0.06, 1],  // Adjust these values
    // ...
  },
};
```

### Change Global Duration

```typescript
durations: {
  short: 300,    // Change from 300ms
  base: 400,     // to something else
  medium: 500,
  long: 600,
},
```

### Add New Variants

```typescript
export const ANIMATION_VARIANTS = {
  // ... existing variants
  spinIn: {
    initial: { opacity: 0, rotate: -180 },
    animate: { opacity: 1, rotate: 0 },
  },
};
```

## Browser Support

- Chrome: Full support (90+)
- Firefox: Full support (88+)
- Safari: Full support (14+)
- Edge: Full support (90+)

Framer Motion uses CSS transforms and opacity, which are hardware-accelerated in all modern browsers.

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Cubic-Bezier Generator](https://cubic-bezier.com/)
- [Web Animations Performance](https://web.dev/animations-guide/)
- [Accessibility: Prefers Reduced Motion](https://www.a11y-101.com/design/animations)
