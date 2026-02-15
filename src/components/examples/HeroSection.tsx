import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { SectionReveal, AnimatedText, AnimatedButton } from '@/components/animations';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ANIMATION_CONFIG } from '@/utils/animations';

export function HeroSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-b from-[#050810] via-[#0a0f1e] to-[#050810] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#0078D4] rounded-full filter blur-3xl opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#50A0E8] rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
        <SectionReveal className="mb-8" variant="fadeInUp" delay={0.1}>
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: ANIMATION_CONFIG.durations.short / 1000,
              ease: ANIMATION_CONFIG.easing.smooth,
              delay: 0.1,
            }}
          >
            <span className="text-[#50A0E8] font-medium text-sm tracking-wide">
              Welcome to the Future
            </span>
          </motion.div>
        </SectionReveal>

        <SectionReveal className="mb-6" variant="fadeInUp" delay={0.2}>
          <AnimatedText
            as="h1"
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
            delay={0.2}
            staggerWords={false}
          >
            Beautiful Animations Made Simple
          </AnimatedText>
        </SectionReveal>

        <SectionReveal className="mb-8" variant="fadeInUp" delay={0.3}>
          <AnimatedText
            as="p"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            delay={0.35}
          >
            Create smooth, performant animations that respect user preferences. Perfect for modern web applications.
          </AnimatedText>
        </SectionReveal>

        <SectionReveal variant="fadeInUp" delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center">
          <AnimatedButton variant="primary" size="lg">
            <span>Get Started</span>
            <ChevronRight className="w-5 h-5" />
          </AnimatedButton>
          <AnimatedButton variant="secondary" size="lg">
            View Docs
          </AnimatedButton>
        </SectionReveal>

        <motion.div
          className="mt-16 pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{
            duration: ANIMATION_CONFIG.durations.base / 1000,
            ease: ANIMATION_CONFIG.easing.smooth,
            delay: 0.5,
          }}
        >
          <p className="text-gray-500 text-sm mb-8">Trusted by teams worldwide</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {['Feature', 'Fast', 'Accessible', 'Easy'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: ANIMATION_CONFIG.durations.base / 1000,
                  ease: ANIMATION_CONFIG.easing.smooth,
                  delay: 0.55 + index * 0.05,
                }}
                className="text-gray-400 text-sm font-medium"
              >
                ✓ {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
