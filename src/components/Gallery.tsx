import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GalleryImage } from "./GalleryPreview";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { supabase } from "../lib/supabase";

export default function Gallery() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchImages() {
            try {
                const { data, error } = await supabase
                    .from('gallery')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (error) {
                    console.error("Failed to fetch gallery images", error);
                } else if (data) {
                    // Map to match GalleryImage interface
                    const mappedData = data.map(item => ({
                        id: item.id.toString(),
                        imageUrl: item.image_url,
                        title: item.event_tag || item.caption || undefined
                    }));
                    setImages(mappedData);
                }
            } catch (error) {
                console.error("Error fetching gallery:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#050810] via-[#081221] to-[#050810] flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                {/* Decorative background glow */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0078D4]/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/30 mb-6 backdrop-blur-sm">
                            <span className="text-[#50A0E8] font-semibold text-xs tracking-widest uppercase">Moments</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50A0E8] to-[#0078D4]">Gallery</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Explore our complete collection of highlights from past events, workshops, hackathons, and community meetups.
                        </p>
                    </motion.div>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="w-12 h-12 border-4 border-[#0078D4]/30 border-t-[#50A0E8] rounded-full animate-spin" />
                        </div>
                    ) : images.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {images.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.5), ease: "easeOut" }}
                                    className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full"
                                >
                                    {/* Soft cyan glow border effect (via pseudo-element padding) */}
                                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#50A0E8]/30 transition-colors duration-500 z-20 pointer-events-none box-border" />
                                    <div className="absolute inset-0 bg-[#0078D4]/0 group-hover:bg-[#0078D4]/10 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay blur-md" />

                                    <img
                                        src={image.imageUrl}
                                        alt={image.title || "Gallery image"}
                                        loading="lazy"
                                        className="w-full flex-1 object-cover transform transition-transform duration-700 ease-out group-hover:scale-110 bg-white/5"
                                    />

                                    {/* Dark gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/95 via-[#050810]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                    {/* Centered title appears on hover */}
                                    {image.title && (
                                        <div className="absolute inset-0 flex items-center justify-center p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                            <h3 className="text-white text-lg font-semibold text-center tracking-tight shadow-black/50 drop-shadow-md px-4">
                                                {image.title}
                                            </h3>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center py-32 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-sm">
                            <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-white mb-2">No moments captured yet</h3>
                            <p className="text-gray-400 max-w-sm">Check back later for photos and highlights from our latest events.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
