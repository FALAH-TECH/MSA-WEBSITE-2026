import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useReducedMotion, motionConfig, heroHeading, heroSubheading, heroCTA } from './Motion';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050810]">
      {/* Background: static when reduced motion, gentle drift otherwise */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0f1e_1px,transparent_1px),linear-gradient(to_bottom,#0a0f1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {!reduceMotion && (
          <>
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-[#0078D4] rounded-full mix-blend-multiply filter blur-3xl opacity-15"
              animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-96 h-96 bg-[#50A0E8] rounded-full mix-blend-multiply filter blur-3xl opacity-15"
              animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Badge fade + slide */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : motionConfig.duration.normal,
              ease: motionConfig.premiumEasing,
            }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="text-[#50A0E8] font-medium tracking-wide text-sm">
              Microsoft Student Ambassadors
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 text-sm">LBSCEK</span>
          </motion.div>

          {/* Main heading with premium scale + fade */}
          <motion.h1
            initial={heroHeading.initial}
            animate={heroHeading.animate}
            transition={{
              ...heroHeading.transition,
              duration: reduceMotion ? 0.2 : motionConfig.duration.slow,
              ease: motionConfig.premiumEasing,
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none"
          >
            Backed by Microsoft
            <br />
            <span className="bg-gradient-to-r from-[#0078D4] to-[#50A0E8] bg-clip-text text-transparent">
              Driven by builders.
            </span>
          </motion.h1>

          {/* Subheading fade + slide */}
          <motion.p
            initial={heroSubheading.initial}
            animate={heroSubheading.animate}
            transition={{
              duration: reduceMotion ? 0.2 : motionConfig.duration.normal,
              ease: motionConfig.premiumEasing,
              delay: reduceMotion ? 0 : 0.2,
            }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build student developers through workshops, projects, and
            community-driven learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={heroCTA.initial}
            animate={heroCTA.animate}
            transition={{
              duration: reduceMotion ? 0.2 : motionConfig.duration.normal,
              ease: motionConfig.premiumEasing,
              delay: reduceMotion ? 0 : 0.4,
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-[#0078D4] to-[#50A0E8] text-white font-semibold rounded-lg hover:shadow-2xl transition-shadow cursor-pointer inline-flex items-center justify-center gap-2 group"
              whileHover={!reduceMotion ? { scale: motionConfig.button.hoverScale } : undefined}
              whileTap={!reduceMotion ? { scale: motionConfig.button.tapScale } : undefined}
              transition={{ duration: motionConfig.button.duration }}
            >
              Learn More
              <motion.div
                initial={{ x: 0 }}
                whileHover={!reduceMotion ? { x: 4 } : undefined}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://chat.whatsapp.com/JN4rgEDWxXN7fC0B4WIUAQ?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all cursor-pointer inline-flex items-center justify-center"
              whileHover={!reduceMotion ? { scale: motionConfig.button.hoverScale } : undefined}
              whileTap={!reduceMotion ? { scale: motionConfig.button.tapScale } : undefined}
              transition={{ duration: motionConfig.button.duration }}
            >
              Join Community
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
