# Animation System Implementation Checklist

## Phase 1: Setup (5 minutes)

- [ ] Install Framer Motion: `npm install framer-motion lucide-react`
- [ ] Copy all files from `src/utils/animations.ts`
- [ ] Copy all files from `src/hooks/useScrollAnimation.ts`
- [ ] Copy all components from `src/components/animations/`
- [ ] Create `tsconfig.json` path alias for `@` if not exists:
  ```json
  {
    "compilerOptions": {
      "paths": {
        "@/*": ["./src/*"]
      }
    }
  }
  ```

## Phase 2: Update Existing Components (Priority Order)

### High Priority (Most Visible)

- [ ] **Hero Section**
  - [ ] Wrap main heading in `AnimatedText`
  - [ ] Wrap subheading in `AnimatedText` with delay
  - [ ] Update CTA button to `AnimatedButton`
  - [ ] Add `useScrollAnimation` hook for scroll detection
  - [ ] Increase delay incrementally: 0.1, 0.2, 0.3, etc.

- [ ] **Features Section** (if exists)
  - [ ] Wrap section in `SectionReveal` with `staggerChildren={true}`
  - [ ] Update feature cards to use motion.div
  - [ ] Add hover scale effect (1.02)
  - [ ] Animate feature icons

- [ ] **Events Page** (`src/components/Events.tsx`)
  - [ ] ✅ Already implemented with complete animation system
  - [ ] Use as reference for other components

### Medium Priority

- [ ] **Navigation/Header**
  - [ ] Animate navigation menu items on page load
  - [ ] Add micro-hover effects on nav links
  - [ ] Smooth background color transitions

- [ ] **Services/Pricing Section**
  - [ ] Use `SectionReveal` with `staggerChildren`
  - [ ] Animate price cards on scroll
  - [ ] Add hover lift effect (y: -4px)

- [ ] **Team/About Section**
  - [ ] Wrap in `SectionReveal`
  - [ ] Stagger team member cards
  - [ ] Add image hover zoom effects

### Lower Priority

- [ ] **Footer**
  - [ ] Simple fade-in on scroll
  - [ ] Link hover effects
  - [ ] No complex animations needed

## Phase 3: Adding New Sections

For any new sections you add:

1. **Import Components**
   ```typescript
   import { SectionReveal, AnimatedText, AnimatedButton } from '@/components/animations';
   ```

2. **Wrap Section Content**
   ```typescript
   <SectionReveal variant="fadeInUp" delay={0.1}>
     {/* Your content */}
   </SectionReveal>
   ```

3. **Animate Headings**
   ```typescript
   <AnimatedText as="h2" className="text-4xl font-bold">
     Section Title
   </AnimatedText>
   ```

4. **Update Buttons**
   ```typescript
   <AnimatedButton variant="primary">Click Me</AnimatedButton>
   ```

## Phase 4: Testing & Optimization

### Accessibility Testing
- [ ] Test with `prefers-reduced-motion` enabled
  - macOS: System Preferences → Accessibility → Display → Reduce motion
  - Windows: Settings → Ease of Access → Display → Show animations
  - Firefox: `about:config` → search "reduce" → set to true
- [ ] All animations should disable smoothly
- [ ] Page should remain fully functional

### Performance Testing
- [ ] Open Chrome DevTools → Performance tab
- [ ] Record page load and scroll
- [ ] Check for FPS consistency (should be 60fps)
- [ ] Look for paint/reflow (should be minimal)
- [ ] Test on 6x CPU throttle

### Browser Testing
- [ ] Chrome/Edge (90+)
- [ ] Firefox (88+)
- [ ] Safari (14+)
- [ ] Mobile browsers

### Content Testing
- [ ] Test with actual content (images, text)
- [ ] Verify no layout shifts during animations
- [ ] Check animation timing feels natural
- [ ] Ensure text is readable during transitions

## Phase 5: Customization

- [ ] Review `src/utils/animations.ts`
- [ ] Adjust timing if needed:
  ```typescript
  durations: {
    short: 300,   // Hover effects
    base: 400,    // Main animations
    medium: 500,  // Longer reveals
    long: 600,    // Max duration
  }
  ```
- [ ] Adjust easing if desired:
  ```typescript
  easing: {
    smooth: [0.32, 0.72, 0.06, 1],
    smoothOut: [0.25, 0.46, 0.45, 0.94],
    premium: [0.4, 0, 0.2, 1],
  }
  ```
- [ ] Update button styles if needed in `AnimatedButton.tsx`

## Phase 6: Documentation

- [ ] Add this system to your project README
- [ ] Document custom animations you create
- [ ] Add animation guidelines to team style guide
- [ ] Link to `ANIMATION_GUIDE.md` in project docs

## Component Implementation Template

Use this template for adding animations to any component:

```typescript
import { motion } from 'framer-motion';
import { SectionReveal, AnimatedText, AnimatedButton } from '@/components/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ANIMATION_CONFIG } from '@/utils/animations';

export function MyComponent() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32">
      {/* Wrapper for entire section */}
      <SectionReveal variant="fadeInUp" delay={0.1}>
        {/* Heading */}
        <AnimatedText as="h2" className="text-4xl font-bold" delay={0.15}>
          Section Title
        </AnimatedText>
      </SectionReveal>

      {/* Content section */}
      <SectionReveal variant="fadeInUp" delay={0.2}>
        <p>Your content here...</p>
      </SectionReveal>

      {/* CTA section */}
      <SectionReveal variant="fadeInUp" delay={0.3}>
        <AnimatedButton variant="primary">Action</AnimatedButton>
      </SectionReveal>
    </section>
  );
}
```

## Common Questions

**Q: Should I animate everything?**
A: No. Animate entry points, CTAs, and important content. Keep navigation and supporting elements subtle.

**Q: What if animations feel too slow?**
A: Reduce `ANIMATION_CONFIG.durations.base` from 400 to 350, or reduce delays.

**Q: Can I use Spring animations?**
A: Optional. Use `SPRING_CONFIG` from config, but cubic-bezier is recommended for premium feel.

**Q: What about mobile?**
A: All animations are responsive. Keep them the same across devices.

**Q: How do I disable animations for specific users?**
A: The system automatically respects `prefers-reduced-motion`. No additional work needed.

## Performance Budget

- Framer Motion library: ~15KB gzipped
- Animation utilities: ~3KB
- Example components: ~8KB (reference only, remove after implementation)
- **Total impact**: ~3KB on production (utilities only)

## Rollout Strategy

1. **Week 1**: Hero section + CTA buttons
2. **Week 2**: Features section + service cards
3. **Week 3**: Testimonials + team section
4. **Week 4**: Footer + navigation (optional)
5. **Ongoing**: Monitor performance and user feedback

## Support & Resources

- **Quick Start**: Read `ANIMATIONS_QUICK_START.md` (3 min read)
- **Full Docs**: Read `ANIMATION_GUIDE.md` (15 min read)
- **Examples**: Review `src/components/examples/` (10 min)
- **Production Code**: Study `src/components/Events.tsx` (10 min)

---

**Next Step**: Start with Phase 1 setup, then implement Phase 2 components in priority order.

Good luck! 🚀
