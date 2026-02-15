import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useReducedMotion, motionConfig } from "./Motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050810]">
      {/* Background (lightweight + smooth) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0f1e_1px,transparent_1px),linear-gradient(to_bottom,#0a0f1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Soft static glows (no infinite animation -> removes lag) */}
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] bg-[#0078D4]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-[#50A0E8]/12 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              ease: motionConfig.premiumEasing,
            }}
            style={{ willChange: "transform, opacity" }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="text-[#50A0E8] font-medium tracking-wide text-sm">
              Microsoft Student Ambassadors
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 text-sm">LBSCEK</span>
          </motion.div>

          {/* Heading (bolder motion, but still clean) */}
          <motion.h1
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 36,
              scale: reduceMotion ? 1 : 0.98,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.75,
              ease: motionConfig.premiumEasing,
            }}
            style={{ willChange: "transform, opacity" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none"
          >
            Backed by Microsoft
            <br />
            <span className="bg-gradient-to-r from-[#0078D4] to-[#50A0E8] bg-clip-text text-transparent">
              Driven by builders.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              ease: motionConfig.premiumEasing,
              delay: reduceMotion ? 0 : 0.12,
            }}
            style={{ willChange: "transform, opacity" }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build student developers through workshops, projects, and
            community-driven learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.2 : 0.6,
              ease: motionConfig.premiumEasing,
              delay: reduceMotion ? 0 : 0.22,
            }}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-[#0078D4] to-[#50A0E8] text-white font-semibold rounded-lg hover:shadow-2xl transition-shadow cursor-pointer inline-flex items-center justify-center gap-2 group"
              whileHover={!reduceMotion ? { y: -3, scale: 1.03 } : undefined}
              whileTap={!reduceMotion ? { scale: 0.98 } : undefined}
              transition={
                !reduceMotion ? { type: "spring", stiffness: 300, damping: 22 } : undefined
              }
              style={{ willChange: "transform" }}
            >
              Learn More
              <ArrowRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="https://chat.whatsapp.com/JN4rgEDWxXN7fC0B4WIUAQ?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all cursor-pointer inline-flex items-center justify-center"
              whileHover={!reduceMotion ? { y: -3, scale: 1.03 } : undefined}
              whileTap={!reduceMotion ? { scale: 0.98 } : undefined}
              transition={
                !reduceMotion ? { type: "spring", stiffness: 300, damping: 22 } : undefined
              }
              style={{ willChange: "transform" }}
            >
              Join Community
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
