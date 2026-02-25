import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  MotionItem,
  SectionWrapper,
  useReducedMotion,
  motionConfig,
  scrollReveal,
} from "./Motion";
import { supabase } from "../lib/supabase";

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

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { data: existing } = await supabase
      .from('newsletter')
      .select('id')
      .eq('email', email)
      .single()

    if (existing) {
      setError('This email is already subscribed!')
      setLoading(false)
      return
    }

    const { error: insertError } = await supabase
      .from('newsletter')
      .insert({ name, email })

    if (insertError) {
      setError('Something went wrong. Please try again.')
    } else {
      setSuccess(true)
      setName('')
      setEmail('')
    }

    setLoading(false)
  }

  return (
    <SectionWrapper
      id="join"
      className="relative py-32 bg-gradient-to-b from-[#0a0f1e] to-[#050810]"
    >
      {/* Static glow */}
      {!reduceMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#0078D4]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-[#50A0E8]/8 rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">

        {/* Heading */}
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

        {/* Benefits + Buttons */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-6 shadow-lg"
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

        {/* Newsletter Signup */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-[#0078D4]/20 rounded-2xl p-8 md:p-10"
          initial={scrollReveal.initial}
          whileInView={scrollReveal.whileInView}
          viewport={scrollReveal.viewport}
          transition={{
            duration: motionConfig.sectionEntry.duration,
            ease: motionConfig.premiumEasing,
            delay: 0.12,
          }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
              <span className="text-[#50A0E8] text-sm font-medium tracking-wide uppercase">
                Email Updates
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Get updates in your inbox
            </h3>
            <p className="text-gray-400 text-sm">
              No spam — only MSA announcements and event alerts.
            </p>
          </div>

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-3 py-4"
            >
              <CheckCircle2 className="w-10 h-10 text-green-400" />
              <p className="text-white font-semibold">You're subscribed!</p>
              <p className="text-gray-400 text-sm">We'll keep you posted on everything </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#0078D4] transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#0078D4] transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded-xl bg-[#0078D4] hover:bg-[#0066B5] text-white text-sm font-semibold transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {loading ? 'Subscribing...' : 'Subscribe →'}
              </button>
            </form>
          )}
          {error && <p className="text-red-400 text-sm text-center mt-3">{error}</p>}
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
