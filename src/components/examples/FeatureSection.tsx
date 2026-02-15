import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionReveal, AnimatedText, AnimatedButton } from '@/components/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ANIMATION_CONFIG } from '@/utils/animations';

const features = [
  {
    icon: '✨',
    title: 'Beautiful Design',
    description: 'Crafted with attention to detail and modern design principles.',
  },
  {
    icon: '⚡',
    title: 'High Performance',
    description: 'Optimized for speed with animations under 600ms.',
  },
  {
    icon: '♿',
    title: 'Accessible',
    description: 'Respects user motion preferences and keyboard navigation.',
  },
  {
    icon: '🎯',
    title: 'Easy to Use',
    description: 'Simple components with comprehensive documentation.',
  },
];

export function FeatureSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-[#0a0f1e] to-[#050810]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal className="text-center mb-16" variant="fadeInUp">
          <div className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 mb-6">
            <span className="text-[#50A0E8] font-medium text-sm tracking-wide">
              KEY FEATURES
            </span>
          </div>
          <AnimatedText
            as="h2"
            className="text-4xl md:text-5xl font-bold text-white mt-4"
            delay={0.1}
          >
            Everything You Need
          </AnimatedText>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: ANIMATION_CONFIG.durations.base / 1000,
                ease: ANIMATION_CONFIG.easing.smooth,
                delay: 0.2 + index * ANIMATION_CONFIG.stagger.base,
              }}
              className="relative p-8 rounded-xl bg-white/5 border border-white/10 group hover:border-[#0078D4]/50 transition-all duration-300"
            >
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-[#0078D4] rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />

              <div className="relative">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <motion.div
                  className="mt-4 flex items-center space-x-2 text-[#50A0E8] opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">Included</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionReveal variant="fadeInUp" delay={0.5} className="text-center">
          <AnimatedButton variant="primary" size="lg">
            Explore All Features
          </AnimatedButton>
        </SectionReveal>
      </div>
    </section>
  );
}
