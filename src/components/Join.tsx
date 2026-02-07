import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MotionItem, SectionWrapper, useReducedMotion } from './Motion';

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#50A0E8] mx-auto mb-8 origin-center" />

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
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <MotionItem key={benefit} index={index} staggerDelay={0.08} yOffset={12}>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#50A0E8] flex-shrink-0 mt-0.5" />
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
              className="group relative px-8 py-4 bg-[#0078D4] text-white font-semibold rounded-lg overflow-hidden inline-flex items-center justify-center"
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Join our Community</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {!reduceMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0078D4] to-[#50A0E8]"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>

            <motion.a
              href="#events"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
            >
              View Events
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-500 text-sm">
            Stay updated with the latest events, workshops, and community news.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0078D4] to-transparent origin-center" />
    </SectionWrapper>
  );
}
