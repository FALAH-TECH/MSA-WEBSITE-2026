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

  // Don't render section at all if no announcements
  if (!loading && announcements.length === 0) return null

  return (
    <section className="relative py-24 bg-[#050810]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
              <span className="text-[#50A0E8] text-sm font-medium tracking-wide uppercase">
                Latest Updates
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Announcements
            </h2>
          </div>

          {/* View All button — desktop */}
          <a
            href="/announcements"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-[#0078D4]/50 hover:bg-[#0078D4]/10 transition-all duration-200 text-sm"
          >
            View All →
          </a>
        </motion.div>

        {/* Loading skeleton */}
        {loading && (
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-2xl h-48 animate-pulse" />
            ))}
          </div>
        )}

        {/* Announcements grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {announcements.map((a, index) => {
            const style = categoryStyle[a.category] || categoryStyle.General
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#0078D4]/30 hover:bg-white/[0.06] transition-all duration-300 flex flex-col gap-3"
              >
                {/* Category badge */}
                <span className={`self-start inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-white/10 ${style.bg} ${style.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                  {a.category}
                </span>

                {/* Title */}
                <h3 className="text-white font-bold text-lg leading-snug group-hover:text-[#50A0E8] transition-colors duration-200">
                  {a.title}
                </h3>

                {/* Body - truncated to 2 lines */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {a.body}
                </p>

                {/* Date */}
                <span className="flex items-center gap-1.5 text-gray-600 text-xs mt-auto">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(a.created_at).toLocaleDateString('en-IN', {
                    day: 'numeric', month: 'long', year: 'numeric'
                  })}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* View All button — mobile */}
        <div className="flex justify-center mt-8 sm:hidden">
          <a
            href="/announcements"
            className="px-6 py-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-[#0078D4]/50 text-sm transition-all duration-200"
          >
            View All Announcements →
          </a>
        </div>

      </div>
    </section>
  )
}
