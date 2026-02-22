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


function PublicSite() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <AnnouncementsPreview /> 
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
  <Route path="/admin" element={
    session ? <AdminDashboard /> : <AdminLogin />
  } />
</Routes>
    </BrowserRouter>
  )
}