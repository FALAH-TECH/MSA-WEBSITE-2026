# Animation System - Quick Start

## 3-Minute Setup

### 1. Install Dependencies

```bash
npm install framer-motion lucide-react
```

### 2. Use in Your Component

```typescript
import { SectionReveal, AnimatedText, AnimatedButton } from '@/components/animations';

export default function MySection() {
  return (
    <section className="py-32">
      <SectionReveal variant="fadeInUp" delay={0.1}>
        <AnimatedText as="h2" className="text-4xl font-bold">
          Hello World
        </AnimatedText>
      </SectionReveal>

      <SectionReveal variant="fadeInUp" delay={0.2}>
        <p>Your content here...</p>
      </SectionReveal>

      <SectionReveal variant="fadeInUp" delay={0.3}>
        <AnimatedButton variant="primary">
          Click Me
        </AnimatedButton>
      </SectionReveal>
    </section>
  );
}
```

Done! Your section now has smooth fade-in animations.

## Common Use Cases

### Entire Section Animates on Scroll

```typescript
<SectionReveal variant="fadeInUp" delay={0.2}>
  <YourContent />
</SectionReveal>
```

### List Items Animate One by One

```typescript
<SectionReveal
  variant="fadeInUp"
  staggerChildren={true}
  childDelay={0.08}
>
  {items.map(item => (
    <div key={item.id}>{item.name}</div>
  ))}
</SectionReveal>
```

### Animated Heading

```typescript
<AnimatedText as="h1" className="text-5xl font-bold" delay={0.1}>
  Beautiful Heading
</AnimatedText>
```

### Interactive Button

```typescript
<AnimatedButton variant="primary" size="lg">
  Get Started
</AnimatedButton>
```

## Animation Variants

- `fadeInUp` - Fade in while moving up (recommended for most sections)
- `fadeInDown` - Fade in while moving down
- `scaleIn` - Fade in while scaling from 0.95
- `slideInLeft` - Slide in from the left
- `slideInRight` - Slide in from the right

## Timing

All animations are **under 400ms** for a premium feel:

- Quick hover effects: 300ms
- Section reveals: 400-500ms
- Staggered children: 80-100ms delay between items

## Button Variants

```typescript
<AnimatedButton variant="primary">     {/* Blue */}
<AnimatedButton variant="secondary">   {/* Light white */}
<AnimatedButton variant="ghost">       {/* Text only */}
<AnimatedButton size="sm">             {/* Small */}
<AnimatedButton size="md">             {/* Medium */}
<AnimatedButton size="lg">             {/* Large */}
```

## Tips

✅ **Do:**
- Wrap entire sections in `<SectionReveal>`
- Use `delay` to stagger multiple section reveals
- Set `staggerChildren={true}` for lists
- Use semantic HTML with animation components

❌ **Don't:**
- Animate background gradients (causes repaints)
- Create animations longer than 600ms
- Ignore users with `prefers-reduced-motion` enabled
- Animate large elements in rapid succession

## File Structure

```
src/
├── components/
│   ├── animations/          ← Use these components
│   │   ├── index.ts
│   │   ├── SectionReveal.tsx
│   │   ├── AnimatedText.tsx
│   │   ├── AnimatedButton.tsx
│   │   └── FadeInUp.tsx
│   └── examples/            ← Reference implementations
│       └── FeatureSection.tsx
├── hooks/
│   └── useScrollAnimation.ts
└── utils/
    └── animations.ts        ← Global config here
```

## Customization

### Change Global Duration

Edit `src/utils/animations.ts`:

```typescript
durations: {
  short: 300,    // Hover effects
  base: 400,     // Main animations
  medium: 500,   // Longer reveals
  long: 600,     // Max duration
},
```

### Change Easing

```typescript
easing: {
  smooth: [0.32, 0.72, 0.06, 1],    // Bouncy
  smoothOut: [0.25, 0.46, 0.45, 0.94],  // Sharp
  premium: [0.4, 0, 0.2, 1],        // Premium
},
```

## Performance

All animations use GPU-accelerated properties:
- `opacity` - No repaints
- `transform` (translate, scale, rotate) - No repaints
- Hardware accelerated on all modern browsers

## Accessibility

Animations automatically disable for users who have:
- `prefers-reduced-motion: reduce` enabled in OS settings
- No JavaScript enabled
- Older browsers without animation support

## Next Steps

1. Check `ANIMATION_GUIDE.md` for detailed documentation
2. Review example components in `src/components/examples/`
3. Reference `Events.tsx` for production implementation
4. Customize `src/utils/animations.ts` for your brand

## Need Help?

- Hover effect not working? → Check `AnimatedButton` component
- Section not animating on scroll? → Ensure you're using `SectionReveal`
- Want to animate a custom element? → Use `motion.div` from Framer Motion
- Accessibility issues? → Components automatically respect `prefers-reduced-motion`

---

That's it! You have a complete animation system ready to use. Start by adding `<SectionReveal>` to your sections and enjoy smooth, professional animations.
