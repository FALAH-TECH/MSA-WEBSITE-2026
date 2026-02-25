import GalleryManager from './GalleryManager'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Mail, Copy, Check } from 'lucide-react'

type Announcement = {
  id: number
  title: string
  body: string
  category: string
  image_url: string | null
  created_at: string
}

type Subscriber = {
  id: number
  name: string
  email: string
  created_at: string
}

export default function AdminDashboard() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)
  const [subLoading, setSubLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('General')
  const [imageUrl, setImageUrl] = useState('')
  const [posting, setPosting] = useState(false)

  useEffect(() => {
    fetchAnnouncements()
    fetchSubscribers()
  }, [])

  const fetchAnnouncements = async () => {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) console.error(error)
    else setAnnouncements(data || [])
    setLoading(false)
  }

  const fetchSubscribers = async () => {
    const { data, error } = await supabase
      .from('newsletter')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) console.error(error)
    else setSubscribers(data || [])
    setSubLoading(false)
  }

  const copyAllEmails = () => {
    const emails = subscribers.map(s => s.email).join(', ')
    navigator.clipboard.writeText(emails)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault()
    setPosting(true)
    const { error } = await supabase.from('announcements').insert({
      title, body, category,
      image_url: imageUrl || null,
    })
    if (error) {
      console.error(error)
      alert('Failed to post announcement')
    } else {
      setTitle('')
      setBody('')
      setCategory('General')
      setImageUrl('')
      fetchAnnouncements()
    }
    setPosting(false)
  }

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm('Delete this announcement?')
    if (!confirmed) return
    const { error } = await supabase.from('announcements').delete().eq('id', id)
    if (error) console.error(error)
    else fetchAnnouncements()
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm"
          >
            Logout
          </button>
        </div>

        {/* Create Announcement Form */}
        <div className="bg-gray-900 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Post New Announcement</h2>
          <form onSubmit={handlePost} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700"
              required
            />
            <textarea
              placeholder="Body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 h-32"
              required
            />
            <select
              title="Category"
              value={category}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700"
            >
              <option>General</option>
              <option>Event</option>
              <option>Notice</option>
            </select>
            <input
              type="url"
              placeholder="Image URL (optional)"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700"
            />
            <button
              type="submit"
              disabled={posting}
              className="bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
            >
              {posting ? 'Posting...' : 'Post Announcement'}
            </button>
          </form>
        </div>

        {/* Announcements List */}
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-xl font-semibold">All Announcements</h2>
          {loading && <p className="text-gray-400">Loading...</p>}
          {!loading && announcements.length === 0 && (
            <p className="text-gray-400">No announcements yet.</p>
          )}
          {announcements.map((a) => (
            <div key={a.id} className="bg-gray-900 rounded-xl p-5 flex justify-between items-start">
              <div>
                <span className="text-xs text-blue-400 uppercase font-semibold">{a.category}</span>
                <h3 className="text-lg font-bold mt-1">{a.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{a.body}</p>
                <p className="text-gray-600 text-xs mt-2">{new Date(a.created_at).toLocaleDateString()}</p>
              </div>
              <button
                onClick={() => handleDelete(a.id)}
                className="text-red-400 hover:text-red-300 text-sm ml-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {/* Newsletter Subscribers */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Newsletter Subscribers</h2>
              <p className="text-gray-500 text-sm mt-0.5">
                {subscribers.length} subscriber{subscribers.length !== 1 ? 's' : ''}
              </p>
            </div>
            {subscribers.length > 0 && (
              <button
                onClick={copyAllEmails}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy all emails'}
              </button>
            )}
          </div>

          {subLoading && <p className="text-gray-400">Loading...</p>}

          {!subLoading && subscribers.length === 0 && (
            <div className="bg-gray-900 rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-400">No subscribers yet.</p>
            </div>
          )}

          <div className="flex flex-col gap-2">
            {subscribers.map((s) => (
              <div key={s.id} className="bg-gray-900 rounded-xl p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0078D4]/20 border border-[#0078D4]/30 flex items-center justify-center text-[#50A0E8] text-sm font-semibold">
                    {s.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{s.name}</p>
                    <p className="text-gray-400 text-xs">{s.email}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-xs">
                  {new Date(s.created_at).toLocaleDateString('en-IN', {
                    day: 'numeric', month: 'short', year: 'numeric'
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Manager */}
        <GalleryManager />

      </div>
    </div>
  )
}
