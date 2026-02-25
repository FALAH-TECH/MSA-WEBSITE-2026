import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { SectionWrapper } from "./Motion";
import { supabase } from "../lib/supabase";

export default function Footer() {
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
      setError('Already subscribed!')
      setLoading(false)
      return
    }

    const { error: insertError } = await supabase
      .from('newsletter')
      .insert({ name, email })

    if (insertError) {
      setError('Something went wrong.')
    } else {
      setSuccess(true)
      setName('')
      setEmail('')
    }

    setLoading(false)
  }

  return (
    <SectionWrapper
      id="contact"
      className="relative bg-[#050810] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Branding */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/LOGO.svg"
                alt="MSA LBSCEK Logo"
                className="w-12 h-12 rounded-lg object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold tracking-tight text-lg">
                  MSA LBSCEK
                </span>
                <span className="text-gray-400 text-sm">
                  Microsoft Student Ambassadors
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Building the next generation of tech leaders through community,
              learning, and innovation.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">
              Get in Touch
            </h3>
            <motion.a
              href="mailto:mlsalbscek@gmail.com"
              className="flex items-center space-x-3 text-gray-400 hover:text-[#50A0E8] transition-colors group"
              whileHover={{ x: 5 }}
            >
              <Mail className="w-5 h-5" />
              <span>mlsalbscek@gmail.com</span>
            </motion.a>
            <motion.div
              className="flex items-start space-x-3 text-gray-400"
              whileHover={{ x: 5 }}
            >
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>
                Lal Bahadur Shastri College of Engineering
                <br />
                Kasaragod, Kerala, India
              </span>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Stay Updated
            </h3>
            {success ? (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                ✅ You're subscribed! We'll keep you posted.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  required
                  className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#0078D4] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                  className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#0078D4] transition-colors"
                />
                {error && <p className="text-red-400 text-xs">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="py-2.5 rounded-lg bg-[#0078D4] hover:bg-[#0066B5] text-white text-sm font-semibold transition-colors disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Admin Access */}
        <div className="flex justify-center mb-8">
          <a
            href="/admin"
            className="text-xs px-4 py-2 rounded-lg border transition-colors"
            style={{
              color: '#0078D4',
              borderColor: '#0078D4',
              backgroundColor: 'rgba(0, 120, 212, 0.05)'
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(0, 120, 212, 0.15)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(0, 120, 212, 0.05)')}
          >
            Admin Portal
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Microsoft Student Ambassadors LBSCEK. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://www.instagram.com/msa.lbscek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MSA LBSCEK Instagram"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0078D4] hover:border-[#0078D4] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/mlsalbscek/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MSA LBSCEK LinkedIn"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0078D4] hover:border-[#0078D4] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}
