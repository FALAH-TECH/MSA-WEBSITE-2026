import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { Mail, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Check if email already subscribed
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
      console.error(insertError)
    } else {
      setSuccess(true)
      setName('')
      setEmail('')
    }

    setLoading(false)
  }

  return (
    <section className="relative py-24 bg-[#050810] border-t border-white/10">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,120,212,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <div className="w-14 h-14 rounded-2xl bg-[#0078D4]/10 border border-[#0078D4]/20 flex items-center justify-center">
            <Mail className="w-6 h-6 text-[#50A0E8]" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
            <span className="text-[#50A0E8] text-sm font-medium tracking-wide uppercase">
              Stay Updated
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Never Miss an Update
          </h2>
          <p className="text-gray-400 text-lg">
            Get notified about upcoming events, workshops, and announcements from MSA LBSCEK.
          </p>
        </motion.div>

        {/* Success state */}
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-6 rounded-2xl bg-green-500/10 border border-green-500/20 flex flex-col items-center gap-3"
          >
            <CheckCircle className="w-10 h-10 text-green-400" />
            <p className="text-white font-semibold text-lg">You're subscribed!</p>
            <p className="text-gray-400 text-sm">We'll keep you posted on everything MSA.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8 flex flex-col gap-3"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0078D4] transition-colors"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#0078D4] transition-colors"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#0078D4] hover:bg-[#0066B5] text-white font-semibold transition-colors disabled:opacity-50"
            >
              {loading ? 'Subscribing...' : 'Subscribe to Updates'}
            </button>

            <p className="text-gray-600 text-xs">
              No spam, ever. Only MSA updates and event announcements.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
