"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Utensils, ExternalLink, X } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function VenueSection() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <section id="venue" className="bg-wedding-jet">
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                    {/* Side-by-side layout: Images Left, Content Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                        {/* Left Side - Image Gallery Grid (2 placeholders) */}
                        <motion.div
                            className="grid grid-cols-2 gap-3"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Left Image Placeholder */}
                            <div className="rounded-xl overflow-hidden shadow-lg border border-wedding-gold/20">
                                <PlaceholderImage
                                    className="w-full h-full aspect-[3/4]"
                                    label="Church Photo"
                                    variant="venue"
                                />
                            </div>

                            {/* Right Image Placeholder */}
                            <div className="rounded-xl overflow-hidden shadow-lg border border-wedding-gold/20">
                                <PlaceholderImage
                                    className="w-full h-full aspect-[3/4]"
                                    label="Reception Venue"
                                    variant="venue"
                                />
                            </div>
                        </motion.div>

                        {/* Right Side - Content Area */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Title */}
                            <div className="text-center lg:text-left">
                                <h2
                                    id="venue-title"
                                    className="text-wedding-gold text-4xl md:text-5xl lg:text-6xl mb-4"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    The Venue
                                </h2>
                                <div className="w-16 h-[2px] bg-wedding-burgundy mx-auto lg:mx-0" />
                            </div>

                            {/* Venue Details - Two Columns (Ceremony | Reception) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Ceremony */}
                                <div className="bg-wedding-black/50 rounded-xl p-5 border border-wedding-gold/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Heart className="text-wedding-burgundy" size={20} />
                                        <h3 className="text-lg md:text-xl text-wedding-gold" style={{ fontFamily: "var(--font-heading)" }}>
                                            Ceremony
                                        </h3>
                                    </div>
                                    <p className="text-wedding-gold font-semibold mb-2 tracking-widest text-xs">2:30 PM</p>
                                    <p className="text-wedding-pearl text-sm md:text-base font-medium mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                                        St. Nicholas of Tolentine Parish Cathedral
                                    </p>
                                    <p className="text-wedding-dove text-xs mb-4" style={{ fontFamily: "var(--font-body)" }}>
                                        Del Pilar Corner Gen. Luna Street, Cabanatuan City, Nueva Ecija
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/nZcp5BmVfoTEuY478"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-wedding-burgundy text-wedding-gold px-3 py-2 rounded-md text-[10px] tracking-[0.1em] uppercase hover:bg-wedding-burgundy-dark transition-colors shadow-md font-medium"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        View Map <ExternalLink size={10} />
                                    </a>
                                </div>

                                {/* Reception */}
                                <div className="bg-wedding-black/50 rounded-xl p-5 border border-wedding-gold/10">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Utensils className="text-wedding-burgundy" size={20} />
                                        <h3 className="text-lg md:text-xl text-wedding-gold" style={{ fontFamily: "var(--font-heading)" }}>
                                            Reception
                                        </h3>
                                    </div>
                                    <p className="text-wedding-gold font-semibold mb-2 tracking-widest text-xs">4:30 PM</p>
                                    <p className="text-wedding-pearl text-sm md:text-base font-medium mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                                        Fave Events Place
                                    </p>
                                    <p className="text-wedding-dove text-xs mb-4" style={{ fontFamily: "var(--font-body)" }}>
                                        1st St, Hermogenes C. Concepcion Sr., Cabanatuan City, Nueva Ecija
                                    </p>
                                    <a
                                        href="https://maps.app.goo.gl/QPd9nM61tMhXFor28"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-wedding-burgundy text-wedding-gold px-3 py-2 rounded-md text-[10px] tracking-[0.1em] uppercase hover:bg-wedding-burgundy-dark transition-colors shadow-md font-medium"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        View Map <ExternalLink size={10} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal - kept for future use */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-wedding-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-wedding-pearl/80 hover:text-wedding-gold p-2 transition-colors"
                            aria-label="Close"
                        >
                            <X size={32} />
                        </button>

                        {/* Full Image */}
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            src={selectedImage}
                            alt="Venue Full View"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
