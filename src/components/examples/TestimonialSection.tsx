import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { SectionReveal, AnimatedText } from '@/components/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ANIMATION_CONFIG } from '@/utils/animations';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Designer',
    quote:
      'The animation system transformed how we think about motion in our product. Everything feels smooth and purposeful.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Chen',
    role: 'Frontend Developer',
    quote:
      'Clean, reusable components that respect accessibility. This is how animation systems should be built.',
    rating: 5,
    avatar: '👨‍💻',
  },
  {
    name: 'Emma Davis',
    role: 'UX Engineer',
    quote:
      'Finally, a system that doesn\'t sacrifice performance for aesthetics. Highly recommended.',
    rating: 5,
    avatar: '👩‍🔬',
  },
];

export function TestimonialSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-[#050810] to-[#0a0f1e]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-16" variant="fadeInUp">
          <div className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 mb-6">
            <span className="text-[#50A0E8] font-medium text-sm tracking-wide">
              WHAT PEOPLE SAY
            </span>
          </div>
          <AnimatedText
            as="h2"
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            delay={0.1}
          >
            Loved by Teams
          </AnimatedText>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: ANIMATION_CONFIG.durations.base / 1000,
                ease: ANIMATION_CONFIG.easing.smooth,
                delay: 0.2 + index * ANIMATION_CONFIG.stagger.base,
              }}
              whileHover={{
                y: -4,
                boxShadow: '0 20px 40px rgba(0, 120, 212, 0.1)',
              }}
              transition={{
                duration: ANIMATION_CONFIG.durations.short / 1000,
                ease: ANIMATION_CONFIG.easing.smoothOut,
              }}
              className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-[#0078D4]/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: ANIMATION_CONFIG.durations.short / 1000,
                      ease: ANIMATION_CONFIG.easing.smooth,
                      delay:
                        0.3 +
                        index * ANIMATION_CONFIG.stagger.base +
                        i * 0.05,
                    }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-gray-300 text-base leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: ANIMATION_CONFIG.durations.base / 1000,
                  ease: ANIMATION_CONFIG.easing.smooth,
                  delay: 0.35 + index * ANIMATION_CONFIG.stagger.base,
                }}
              >
                "{testimonial.quote}"
              </motion.p>

              <motion.div
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: ANIMATION_CONFIG.durations.base / 1000,
                  ease: ANIMATION_CONFIG.easing.smooth,
                  delay: 0.4 + index * ANIMATION_CONFIG.stagger.base,
                }}
              >
                <div className="text-2xl">{testimonial.avatar}</div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
