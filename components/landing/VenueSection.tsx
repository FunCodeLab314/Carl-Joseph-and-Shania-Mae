"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Utensils, ExternalLink } from "lucide-react";

export function VenueSection() {
    const images = [
        "/photos/front.jpg",
        "/photos/venue side0.jpg",
        "/photos/venue side1.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-cycle images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="venue" className="bg-wedding-cream relative">
            {/* Hero Image with Auto-Cycling Fade Animation */}
            <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
                {/* Image Carousel with Fade */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={images[currentIndex]}
                            alt={`Venue ${currentIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-wedding-ivory text-5xl md:text-7xl lg:text-8xl mb-6"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        The Venue
                    </motion.h2>

                    {/* Dots Indicator */}
                    <div className="flex gap-2 mb-8">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-wedding-gold w-6"
                                        : "bg-white/50 hover:bg-white/80"
                                    }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Details Content */}
            <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Ceremony */}
                    <div className="text-center md:text-right border-b md:border-b-0 md:border-r border-wedding-gold/20 pb-10 md:pb-0 md:pr-12">
                        <div className="flex flex-col items-center md:items-end gap-3 mb-4">
                            <Heart className="text-wedding-gold" size={28} />
                            <h3 className="text-2xl md:text-3xl text-wedding-charcoal" style={{ fontFamily: "var(--font-heading)" }}>
                                Ceremony
                            </h3>
                        </div>
                        <p className="text-wedding-gold font-medium mb-2 tracking-widest text-sm">3:00 PM</p>
                        <p className="text-wedding-slate text-base md:text-lg mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                            San Lorenzo Ruiz Parish Church
                            <br />
                            San Vicente, Tarlac City
                        </p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=San+Lorenzo+Ruiz+Parish+Church+San+Vicente+Tarlac+City"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-wedding-gold text-wedding-ivory px-5 py-3 rounded-md text-xs tracking-[0.15em] uppercase hover:bg-wedding-antique transition-colors shadow-md font-medium"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            View Map <ExternalLink size={14} />
                        </a>
                    </div>

                    {/* Reception */}
                    <div className="text-center md:text-left pt-10 md:pt-0 md:pl-12">
                        <div className="flex flex-col items-center md:items-start gap-3 mb-4">
                            <Utensils className="text-wedding-gold" size={28} />
                            <h3 className="text-2xl md:text-3xl text-wedding-charcoal" style={{ fontFamily: "var(--font-heading)" }}>
                                Reception
                            </h3>
                        </div>
                        <p className="text-wedding-gold font-medium mb-2 tracking-widest text-sm">5:00 PM</p>
                        <p className="text-wedding-slate text-base md:text-lg mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                            The Bella Plaza
                            <br />
                            San Sebastian Village, Tarlac City
                        </p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=The+Bella+Plaza+San+Sebastian+Village+Tarlac+City"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-wedding-gold text-wedding-ivory px-5 py-3 rounded-md text-xs tracking-[0.15em] uppercase hover:bg-wedding-antique transition-colors shadow-md font-medium"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            View Map <ExternalLink size={14} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
