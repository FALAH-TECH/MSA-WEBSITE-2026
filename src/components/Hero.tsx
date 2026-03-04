import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, X } from "lucide-react";
import { useReducedMotion, motionConfig } from "./Motion";

const VIDEO_URL = "https://lkkgsyrslwhftokiofmy.supabase.co/storage/v1/object/public/gallery/msa-reel.mp4.mp4"

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050810]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0f1e_1px,transparent_1px),linear-gradient(to_bottom,#0a0f1e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
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
            transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: motionConfig.premiumEasing }}
            style={{ willChange: "transform, opacity" }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="text-[#50A0E8] font-medium tracking-wide text-sm">Microsoft Student Ambassadors</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 text-sm">LBSCEK</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 36, scale: reduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.75, ease: motionConfig.premiumEasing }}
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
            transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: motionConfig.premiumEasing, delay: reduceMotion ? 0 : 0.12 }}
            style={{ willChange: "transform, opacity" }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We build student developers through workshops, projects, and community-driven learning.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.6, ease: motionConfig.premiumEasing, delay: reduceMotion ? 0 : 0.22 }}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-[#0078D4] to-[#50A0E8] text-white font-semibold rounded-lg hover:shadow-2xl transition-shadow cursor-pointer inline-flex items-center justify-center gap-2 group"
              whileHover={!reduceMotion ? { y: -3, scale: 1.03 } : undefined}
              whileTap={!reduceMotion ? { scale: 0.98 } : undefined}
              transition={!reduceMotion ? { type: "spring", stiffness: 300, damping: 22 } : undefined}
              style={{ willChange: "transform" }}
            >
              Learn More
              <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
            </motion.a>

            <motion.a
              href="https://chat.whatsapp.com/JN4rgEDWxXN7fC0B4WIUAQ?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all cursor-pointer inline-flex items-center justify-center"
              whileHover={!reduceMotion ? { y: -3, scale: 1.03 } : undefined}
              whileTap={!reduceMotion ? { scale: 0.98 } : undefined}
              transition={!reduceMotion ? { type: "spring", stiffness: 300, damping: 22 } : undefined}
              style={{ willChange: "transform" }}
            >
              Join Community
            </motion.a>
          </motion.div>

          {/* Watch reel — minimal text link below buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.5 }}
            className="mt-8"
          >
            <button
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              <div className="w-5 h-5 rounded-full border border-gray-600 group-hover:border-[#50A0E8] flex items-center justify-center transition-colors duration-200">
                <Play size={8} className="text-gray-500 group-hover:text-[#50A0E8] ml-px transition-colors duration-200" fill="currentColor" />
              </div>
              <span className="text-sm">Watch our story</span>
            </button>
          </motion.div>

        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-sm rounded-2xl overflow-hidden"
              style={{ aspectRatio: '9/16', maxHeight: '85vh' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                title="Close video"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/20 bg-black/60 border border-white/10"
              >
                <X size={16} className="text-white" />
              </button>
              <video
                src={VIDEO_URL}
                autoPlay
                loop
                playsInline
                controls
                className="w-full h-full object-cover bg-black"
              />
            </motion.div>
            <p className="absolute bottom-6 text-gray-600 text-xs">
              Click anywhere to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
