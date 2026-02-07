import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MotionItem, SectionWrapper, useReducedMotion, motionConfig, scrollReveal } from './Motion';

const benefits = [
  'Access to exclusive Microsoft resources and tools',
  'Hands-on workshops and technical training',
  'Networking with industry professionals',
  'Leadership development opportunities',
  'Portfolio-building project experience',
  'Global MSA community connection',
];

export default function Join() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="join"
      className="relative py-32 bg-gradient-to-b from-[#0a0f1e] to-[#050810] overflow-hidden"
    >
      {!reduceMotion && (
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#0078D4] rounded-full filter blur-3xl opacity-10"
            animate={{
              scale: [1, 1.1, 1],
              x: ['-50%', '-48%', '-50%'],
              y: ['-50%', '-52%', '-50%'],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      )}

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={scrollReveal.initial}
          whileInView={scrollReveal.whileInView}
          viewport={scrollReveal.viewport}
          transition={{ duration: motionConfig.sectionEntry.duration, ease: motionConfig.premiumEasing }}
        >
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#50A0E8] mx-auto mb-8 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: motionConfig.premiumEasing, delay: 0.1 }}
          />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Stay connected with
            <br />
            <span className="bg-gradient-to-r from-[#0078D4] to-[#50A0E8] bg-clip-text text-transparent">
              events and updates.
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join our WhatsApp community to receive event announcements, workshops, and exclusive updates from Microsoft Student Ambassadors at LBSCEK.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12 shadow-lg"
          initial={scrollReveal.initial}
          whileInView={scrollReveal.whileInView}
          viewport={scrollReveal.viewport}
          transition={{
            duration: motionConfig.sectionEntry.duration,
            ease: motionConfig.premiumEasing,
            delay: 0.1,
          }}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <MotionItem
                key={benefit}
                index={index}
                staggerDelay={motionConfig.cardStagger}
                yOffset={12}
              >
                <div className="flex items-start space-x-3">
                  <motion.div
                    whileHover={!reduceMotion ? { scale: 1.2 } : undefined}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#50A0E8] flex-shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              </MotionItem>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://chat.whatsapp.com/JN4rgEDWxXN7fC0B4WIUAQ?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-[#0078D4] to-[#50A0E8] text-white font-semibold rounded-lg hover:shadow-2xl transition-shadow cursor-pointer inline-flex items-center justify-center gap-2"
              whileHover={!reduceMotion ? { scale: motionConfig.button.hoverScale } : undefined}
              whileTap={!reduceMotion ? { scale: motionConfig.button.tapScale } : undefined}
              transition={{ duration: motionConfig.button.duration }}
            >
              Join WhatsApp Group
              <motion.div
                initial={{ x: 0 }}
                whileHover={!reduceMotion ? { x: 4 } : undefined}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/msa_lbscek/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all cursor-pointer inline-flex items-center justify-center"
              whileHover={!reduceMotion ? { scale: motionConfig.button.hoverScale } : undefined}
              whileTap={!reduceMotion ? { scale: motionConfig.button.tapScale } : undefined}
              transition={{ duration: motionConfig.button.duration }}
            >
              Follow on Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
