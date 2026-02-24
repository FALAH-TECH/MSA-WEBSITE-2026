import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface GalleryImage {
    id: string;
    imageUrl: string;
    title?: string;
}

interface GalleryPreviewProps {
    images: GalleryImage[];
}

export default function GalleryPreview({ images }: GalleryPreviewProps) {
    const displayImages = images.slice(0, 6);

    return (
        <section className="relative py-24 md:py-36 bg-gradient-to-b from-[#050810] via-[#081221] to-[#050810] overflow-hidden">
            {/* Subtle radial glow behind heading without overflowing harsh cutoff */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,120,212,0.15)_0%,_transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#50A0E8] to-[#0078D4]">Gallery</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            Explore the latest highlights from our events, workshops, and meetups.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <Link
                            to="/gallery"
                            className="group inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#0078D4]/50 hover:bg-[#0078D4]/10 transition-all duration-300 backdrop-blur-sm"
                        >
                            <span className="text-white group-hover:text-[#50A0E8] font-medium transition-colors">View All</span>
                            <span className="text-white group-hover:text-[#50A0E8] group-hover:translate-x-1 transition-all duration-300">
                                →
                            </span>
                        </Link>
                    </motion.div>
                </div>

                {displayImages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {displayImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                    y: { type: "spring", stiffness: 300, damping: 20 },
                                    scale: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-[0_20px_40px_rgba(0,120,212,0.2)]"
                            >
                                {/* Soft cyan glow border effect (via pseudo-element padding) */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#50A0E8]/50 transition-colors duration-500 z-20 pointer-events-none box-border" />
                                <div className="absolute inset-0 bg-[#0078D4]/0 group-hover:bg-[#0078D4]/10 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay blur-md" />

                                <img
                                    src={image.imageUrl}
                                    alt={image.title || "Gallery image"}
                                    loading="lazy"
                                    className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Dark gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/90 via-[#050810]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                {/* Centered title appears on hover */}
                                {image.title && (
                                    <div className="absolute inset-0 flex items-center justify-center p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                        <h3 className="text-white text-xl font-semibold text-center tracking-tight shadow-black/50 drop-shadow-md">
                                            {image.title}
                                        </h3>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <p className="text-gray-400">No images available yet.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
