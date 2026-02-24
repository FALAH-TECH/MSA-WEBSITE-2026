import AnnouncementsPreview from "./components/AnnouncementsPreview";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Session } from '@supabase/supabase-js'
import { supabase } from "./lib/supabase";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Announcements from "./components/Announcements";
import Events from "./components/Events";
import Team from "./components/Team";
import Join from "./components/Join";
import Footer from "./components/Footer";
import GalleryPreview, { GalleryImage } from "./components/GalleryPreview";
import Gallery from "./components/Gallery";


function PublicSite() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(6)
      .then(({ data, error }) => {
        if (error) console.error("Error fetching gallery preview:", error);
        if (data) {
          setGalleryImages(data.map((item: any) => ({
            id: item.id.toString(),
            imageUrl: item.image_url,
            title: item.event_tag || item.caption || undefined
          })));
        }
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats /> 
      <AnnouncementsPreview />
      <GalleryPreview images={galleryImages} />
      <Events />
      <Team />
      <Join />
      <Footer />
    </>
  )
}

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    // Check if admin is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // Listen for login/logout changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicSite />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={
          session ? <AdminDashboard /> : <AdminLogin />
        } />
      </Routes>
    </BrowserRouter>
  )
}