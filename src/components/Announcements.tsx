import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { motion } from 'framer-motion'
import { Calendar, Tag } from 'lucide-react'

type Announcement = {
  id: number
  title: string
  body: string
  category: string
  image_url: string | null
  created_at: string
}

// Category styles using your site's color palette
const categoryStyle: Record<string, { bg: string; text: string; dot: string }> = {
  General: {
    bg: 'bg-white/5',
    text: 'text-gray-300',
    dot: 'bg-gray-400',
  },
  Event: {
    bg: 'bg-[#0078D4]/10',
    text: 'text-[#50A0E8]',
    dot: 'bg-[#0078D4]',
  },
  Notice: {
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
    dot: 'bg-yellow-400',
  },
}

export default function Announcements() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('All')

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) console.error(error)
      else setAnnouncements(data || [])
      setLoading(false)
    }

    fetchAnnouncements()
  }, [])

  const filtered = filter === 'All'
    ? announcements
    : announcements.filter((a) => a.category === filter)

  return (
    <div className="min-h-screen bg-[#050810] text-white">

      {/* Hero header */}
      <div className="relative border-b border-white/10 bg-[#050810]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-12">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
            <span className="text-[#50A0E8] text-sm font-medium tracking-wide uppercase">
              MSA LBSCEK
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Announcements
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Stay up to date with the latest news, events, and notices from MSA.
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex gap-2 mt-8 flex-wrap"
          >
            {['All', 'Event', 'Notice', 'General'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
                  filter === cat
                    ? 'bg-[#0078D4] border-[#0078D4] text-white'
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">

        {/* Loading state */}
        {loading && (
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-2xl h-40 animate-pulse" />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
              <Tag className="w-5 h-5 text-gray-500" />
            </div>
            <p className="text-gray-400 font-medium">No announcements yet</p>
            <p className="text-gray-600 text-sm mt-1">Check back soon!</p>
          </div>
        )}

        {/* Announcements list */}
        <div className="flex flex-col gap-4">
          {filtered.map((a, index) => {
            const style = categoryStyle[a.category] || categoryStyle.General
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#0078D4]/30 rounded-2xl p-6 transition-all duration-300"
              >
                {/* Top row */}
                <div className="flex items-center justify-between gap-4 mb-3 flex-wrap">

                  {/* Category badge */}
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-white/10 ${style.bg} ${style.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                    {a.category}
                  </span>

                  {/* Date */}
                  <span className="flex items-center gap-1.5 text-gray-600 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(a.created_at).toLocaleDateString('en-IN', {
                      day: 'numeric', month: 'long', year: 'numeric'
                    })}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-white group-hover:text-[#50A0E8] transition-colors duration-200">
                  {a.title}
                </h2>

                {/* Body */}
                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {a.body}
                </p>

                {/* Image */}
                {a.image_url && (
                  <img
                    src={a.image_url}
                    alt={a.title}
                    className="mt-4 rounded-xl w-full object-cover max-h-64 border border-white/10"
                  />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
