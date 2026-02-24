import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { Upload, Link, Trash2, X } from 'lucide-react'

type GalleryItem = {
  id: number
  image_url: string
  caption: string | null
  event_tag: string | null
  date_taken: string | null
  uploaded_by: string | null
  created_at: string
}

type UploadMode = 'url' | 'file'

export default function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [mode, setMode] = useState<UploadMode>('url')

  // Form state
  const [imageUrl, setImageUrl] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [caption, setCaption] = useState('')
  const [eventTag, setEventTag] = useState('')
  const [dateTaken, setDateTaken] = useState('')

  useEffect(() => {
    fetchGallery()
  }, [])

  const fetchGallery = async () => {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) console.error(error)
    else setItems(data || [])
    setLoading(false)
  }

  // Upload file to Supabase Storage and get public URL
  const uploadFile = async (file: File): Promise<string | null> => {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`

    const { error } = await supabase.storage
      .from('gallery')
      .upload(fileName, file)

    if (error) {
      console.error(error)
      alert('Failed to upload image')
      return null
    }

    // Get public URL
    const { data } = supabase.storage
      .from('gallery')
      .getPublicUrl(fileName)

    return data.publicUrl
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)

    let finalUrl = imageUrl

    // If file mode, upload to storage first
    if (mode === 'file' && file) {
      const uploaded = await uploadFile(file)
      if (!uploaded) {
        setUploading(false)
        return
      }
      finalUrl = uploaded
    }

    if (!finalUrl) {
      alert('Please provide an image URL or upload a file')
      setUploading(false)
      return
    }

    // Get current admin email
    const { data: { user } } = await supabase.auth.getUser()

    const { error } = await supabase.from('gallery').insert({
      image_url: finalUrl,
      caption: caption || null,
      event_tag: eventTag || null,
      date_taken: dateTaken || null,
      uploaded_by: user?.email || null,
    })

    if (error) {
      console.error(error)
      alert('Failed to save to gallery')
    } else {
      // Reset form
      setImageUrl('')
      setFile(null)
      setCaption('')
      setEventTag('')
      setDateTaken('')
      fetchGallery()
    }

    setUploading(false)
  }

  const handleDelete = async (id: number, imageUrl: string) => {
    const confirmed = window.confirm('Delete this photo?')
    if (!confirmed) return

    // If it's a Supabase storage URL, delete the file too
    if (imageUrl.includes('supabase')) {
      const fileName = imageUrl.split('/').pop()
      if (fileName) {
        await supabase.storage.from('gallery').remove([fileName])
      }
    }

    const { error } = await supabase.from('gallery').delete().eq('id', id)
    if (error) console.error(error)
    else fetchGallery()
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Gallery Manager</h2>

      {/* Upload Form */}
      <div className="bg-gray-900 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Add New Photo</h3>

        {/* Mode Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setMode('url')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
              mode === 'url'
                ? 'bg-[#0078D4] border-[#0078D4] text-white'
                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <Link className="w-4 h-4" />
            Paste URL
          </button>
          <button
            type="button"
            onClick={() => setMode('file')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
              mode === 'file'
                ? 'bg-[#0078D4] border-[#0078D4] text-white'
                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <Upload className="w-4 h-4" />
            Upload File
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* URL or File input */}
          {mode === 'url' ? (
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              value={imageUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageUrl(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
            />
          ) : (
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e.target.files?.[0] || null)}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                {file ? (
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <Upload className="w-5 h-5" />
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={(e) => { e.preventDefault(); setFile(null) }}
                      className="text-gray-400 hover:text-red-400"
                      aria-label="Clear selected file"
                      title="Clear selected file"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-gray-400">
                    <Upload className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Click to upload an image</p>
                    <p className="text-xs text-gray-600 mt-1">PNG, JPG, WEBP up to 10MB</p>
                  </div>
                )}
              </label>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Event tag (e.g. MSA Carnival)"
              title="Event tag (e.g. MSA Carnival)"
              aria-label="Event tag"
              value={eventTag}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEventTag(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
            />
            <input
              type="date"
              title="Date taken"
              aria-label="Date taken"
              value={dateTaken}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateTaken(e.target.value)}
              className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          <input
            type="text"
            placeholder="Caption (optional)"
            value={caption}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCaption(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
          />

          <button
            type="submit"
            disabled={uploading}
            className="bg-[#0078D4] hover:bg-[#0066B5] text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {uploading ? 'Uploading...' : 'Add to Gallery'}
          </button>
        </form>
      </div>

      {/* Gallery Grid */}
      <h3 className="text-lg font-semibold text-white mb-4">
        All Photos ({items.length})
      </h3>

      {loading && <p className="text-gray-400">Loading...</p>}

      {!loading && items.length === 0 && (
        <p className="text-gray-400">No photos yet. Add your first one above!</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="group relative rounded-xl overflow-hidden bg-gray-900 border border-white/10">
            <img
              src={item.image_url}
              alt={item.caption || 'Gallery photo'}
              className="w-full h-48 object-cover"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
              <button
                onClick={() => handleDelete(item.id, item.image_url)}
                className="self-end bg-red-600 hover:bg-red-700 p-1.5 rounded-lg"
                aria-label="Delete photo"
                title="Delete photo"
              >
                <Trash2 className="w-4 h-4 text-white" />
              </button>

              <div>
                {item.event_tag && (
                  <span className="text-xs text-[#50A0E8] font-semibold">{item.event_tag}</span>
                )}
                {item.caption && (
                  <p className="text-white text-sm mt-1 line-clamp-2">{item.caption}</p>
                )}
                {item.uploaded_by && (
                  <p className="text-gray-400 text-xs mt-1">by {item.uploaded_by}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
