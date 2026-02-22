import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 9,    suffix: '+', label: 'Events Hosted' },
  { value: 180,   suffix: '+', label: 'Active Members' },
  { value: 1,    suffix: '',  label: 'Landmark Workshop' },
  { value: 2025, suffix: '',  label: 'Est. Year' },
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
    <section className="relative bg-[#050810] border-y border-white/10 py-16">

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#0078D4]/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* Animated number */}
              <span className="text-4xl md:text-5xl font-bold text-white mb-2"
                style={{ fontVariantNumeric: 'tabular-nums' }}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>

              {/* Label */}
              <span className="text-gray-400 text-sm font-medium">
                {stat.label}
              </span>

              {/* Blue underline accent */}
              <div className="w-8 h-0.5 bg-[#0078D4] rounded-full mt-3 opacity-60" />
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
            🌟 Proud hosts of a workshop for visually impaired students —
            <span className="text-white"> taught by blind software developers.</span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}