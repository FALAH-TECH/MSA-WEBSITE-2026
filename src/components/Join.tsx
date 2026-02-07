import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  MotionItem,
  SectionWrapper,
  useReducedMotion,
  motionConfig,
  scrollReveal,
} from "./Motion";

const benefits = [
  "Access to exclusive Microsoft resources and tools",
  "Hands-on workshops and technical training",
  "Networking with industry professionals",
  "Leadership development opportunities",
  "Portfolio-building project experience",
  "Global MSA community connection",
];

export default function Join() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="join"
      className="relative py-32 bg-gradient-to-b from-[#0a0f1e] to-[#050810] overflow-hidden"
    >
      {/* Static glow (no infinite animation => removes lag) */}
      {!reduceMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#0078D4]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-[#50A0E8]/8 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={scrollReveal.initial}
          whileInView={scrollReveal.whileInView}
          viewport={scrollReveal.viewport}
          transition={{
            duration: motionConfig.sectionEntry.duration,
            ease: motionConfig.premiumEasing,
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#0078D4] to-[#50A0E8] mx-auto mb-8 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: motionConfig.premiumEasing, delay: 0.1 }}
            style={{ willChange: "transform" }}
          />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Stay connected with
            <br />
            <span className="bg-gradient-to-r from-[#0078D4] to-[#50A0E8] bg-clip-text text-transparent">
              events and updates.
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join our WhatsApp community to receive event announcements, workshops, and exclusive updates
            from Microsoft Student Ambassadors at LBSCEK.
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
            delay: 0.08,
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <MotionItem key={benefit} index={index} staggerDelay={motionConfig.cardStagger} yOffset={10}>
                <div className="flex items-start space-x-3">
                  {/* Static icon (smooth + cheaper) */}
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
              className="px-8 py-4 bg-gradient-to-r from-[#0078D4] to-[#50A0E8] text-white font-semibold rounded-lg hover:shadow-2xl transition-shadow cursor-pointer inline-flex items-center justify-center gap-2 group"
              style={{ willChange: "transform" }}
              whileHover={!reduceMotion ? { y: -3, scale: 1.03 } : undefined}
              whileTap={!reduceMotion ? { scale: 0.98 } : undefined}
              transition={!reduceMotion ? { type: "spring", stiffness: 300, damping: 22 } : undefined}
            >
              Join WhatsApp Group
              <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/msa_lbscek/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all cursor-pointer inline-flex items-center justify-center"
              style={{ willChange: "transform" }}
              whileHover={!reduceMotion ? { y: -3, scale: 1.03 } : undefined}
              whileTap={!reduceMotion ? { scale: 0.98 } : undefined}
              transition={!reduceMotion ? { type: "spring", stiffness: 300, damping: 22 } : undefined}
            >
              Follow on Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
