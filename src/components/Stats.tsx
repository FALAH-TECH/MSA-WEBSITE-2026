import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 9, suffix: '+', label: 'Events Hosted' },
  { value: 180, suffix: '+', label: 'Active Members' },
  { value: 1, suffix: '', label: 'Landmark Workshop' },
  { value: 2025, suffix: '', label: 'Est. Year' },
]

// Animated number counter
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 1500
    const step = Math.ceil(value / (duration / 16))

    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative bg-gradient-to-b from-[#081221] to-[#050810] border-t border-white/10 pt-16 pb-24 md:pt-24 md:pb-32">
      {/* Animated divider separating Stats from Announcements */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-center"
      />
      {/* Subtle blue glow in background */}
      <div className="absolute inset-0 bg-[#0078D4]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 justify-center mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
          <span className="text-[#50A0E8] text-sm font-medium tracking-wide uppercase">
            Our Impact
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                y: { type: "spring", stiffness: 300, damping: 20 },
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#0078D4]/40 hover:bg-[#0078D4]/5 hover:shadow-[0_0_30px_rgba(0,120,212,0.15)] transition-colors duration-300"
            >
              {/* Animated number */}
              <span className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-[#50A0E8] transition-colors duration-300"
                style={{ fontVariantNumeric: 'tabular-nums' }}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>

              {/* Label */}
              <span className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors">
                {stat.label}
              </span>

              {/* Blue underline accent */}
              <div className="w-8 h-0.5 bg-[#0078D4] rounded-full mt-3 opacity-60 group-hover:w-16 group-hover:opacity-100 group-hover:bg-[#50A0E8] transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Landmark workshop callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-8 p-5 rounded-2xl bg-[#0078D4]/10 border border-[#0078D4]/20 text-center max-w-2xl mx-auto"
        >
          <p className="text-[#50A0E8] text-sm font-medium">
            Proud hosts of a workshop on assistive technology — conducted for students with visual impairments, featuring industry professionals.

          </p>
        </motion.div>

      </div>
    </section>
  )
}