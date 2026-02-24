import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { Calendar } from 'lucide-react'

type Announcement = {
  id: number
  title: string
  body: string
  category: string
  created_at: string
}

const categoryStyle: Record<string, { bg: string; text: string; dot: string }> = {
  General: { bg: 'bg-white/5', text: 'text-gray-300', dot: 'bg-gray-400' },
  Event: { bg: 'bg-[#0078D4]/10', text: 'text-[#50A0E8]', dot: 'bg-[#0078D4]' },
  Notice: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', dot: 'bg-yellow-400' },
}

export default function AnnouncementsPreview() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3)
      setAnnouncements(data || [])
      setLoading(false)
    }
    fetchData()
  }, [])



  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#050810] via-[#081221]/50 to-[#050810] overflow-hidden">
      {/* Animated subtle top border glow */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0078D4]/30 to-transparent"
      />
      {/* Animated subtle bottom border glow */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0.5 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0078D4]/30 to-transparent"
      />
      {/* Subtle radial glow matching Gallery */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,120,212,0.15)_0%,_transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
              <span className="text-[#50A0E8] text-sm font-medium tracking-wide uppercase">
                Latest Updates
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50A0E8] to-[#0078D4]">News</span>
            </h2>
          </div>

          {/* View All button — desktop/tablet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden sm:block"
          >
            <a
              href="/announcements"
              className="group inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#0078D4]/50 hover:bg-[#0078D4]/10 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-white group-hover:text-[#50A0E8] font-medium transition-colors">View All</span>
              <span className="text-white group-hover:text-[#50A0E8] group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Loading skeleton */}
        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl h-48 animate-pulse backdrop-blur-sm" />
            ))}
          </div>
        ) : announcements.length === 0 ? (
          <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
            <p className="text-gray-400">No announcements available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((a, index) => {
              const style = categoryStyle[a.category] || categoryStyle.General
              return (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                    y: { type: "spring", stiffness: 300, damping: 20 },
                    scale: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="group relative flex flex-col p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#50A0E8]/40 hover:bg-[#0078D4]/5 hover:shadow-[0_0_40px_rgba(0,120,212,0.1)] transition-colors duration-500 overflow-hidden"
                >
                  {/* Soft background glow matching gallery cards */}
                  <div className="absolute inset-0 bg-[#0078D4]/0 group-hover:bg-[#0078D4]/5 transition-colors duration-500 pointer-events-none mix-blend-overlay blur-md" />

                  {/* Category badge */}
                  <span className={`relative z-10 self-start inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-white/10 mb-4 ${style.bg} ${style.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${style.dot} shadow-sm`} />
                    {a.category}
                  </span>

                  {/* Title */}
                  <h3 className="relative z-10 text-white font-bold text-xl leading-snug mb-3 group-hover:text-[#50A0E8] transition-colors duration-300">
                    {a.title}
                  </h3>

                  {/* Body - truncated */}
                  <p className="relative z-10 text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
                    {a.body}
                  </p>

                  {/* Footer metadata */}
                  <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                      <Calendar className="w-4 h-4" />
                      {new Date(a.created_at).toLocaleDateString('en-IN', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </span>
                    <span className="text-[#50A0E8] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xs font-medium">
                      Read
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* View All button — mobile */}
        <div className="flex justify-center mt-10 sm:hidden relative z-10">
          <a
            href="/announcements"
            className="group inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#0078D4]/50 hover:bg-[#0078D4]/10 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-white font-medium">View All News</span>
            <span className="text-white group-hover:text-[#50A0E8] group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}
