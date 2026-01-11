"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Utensils, ExternalLink } from "lucide-react";

export function VenueSection() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="venue" className="bg-wedding-cream relative">
            {/* Top - Main Image (The 'Biggest Front') */}
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0">
                    <img
                        src="/photos/front.jpg"
                        alt="Wedding Venue"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-wedding-cream via-transparent to-transparent opacity-90" />
                </motion.div>

                {/* Floating Title Over Image */}
                <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center justify-end h-full bg-gradient-to-t from-wedding-cream/90 to-transparent">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-wedding-charcoal text-5xl md:text-7xl mb-4 text-center"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        The Venue
                    </motion.h2>
                </div>
            </div>

            {/* Bottom - Details Content */}
            <div className="max-w-5xl mx-auto px-6 py-20">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Ceremony */}
                    <div className="text-center md:text-right border-b md:border-b-0 md:border-r border-wedding-gold/20 pb-10 md:pb-0 md:pr-16">
                        <div className="flex flex-col items-center md:items-end gap-4 mb-4">
                            <Heart className="text-wedding-gold" size={32} />
                            <h3 className="text-3xl text-wedding-charcoal" style={{ fontFamily: "var(--font-heading)" }}>
                                Ceremony
                            </h3>
                        </div>
                        <p className="text-wedding-gold font-medium mb-2 tracking-widest">3:00 PM</p>
                        <p className="text-wedding-slate text-lg mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                            San Lorenzo Ruiz Parish Church
                            <br />
                            San Vicente, Tarlac City
                        </p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=San+Lorenzo+Ruiz+Parish+Church+San+Vicente+Tarlac+City"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-wedding-gold text-wedding-ivory px-4 py-2 rounded-sm text-xs tracking-[0.15em] uppercase hover:bg-wedding-antique transition-colors shadow-sm"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            View Map <ExternalLink size={14} />
                        </a>
                    </div>

                    {/* Reception */}
                    <div className="text-center md:text-left pt-10 md:pt-0 md:pl-16">
                        <div className="flex flex-col items-center md:items-start gap-4 mb-4">
                            <Utensils className="text-wedding-gold" size={32} />
                            <h3 className="text-3xl text-wedding-charcoal" style={{ fontFamily: "var(--font-heading)" }}>
                                Reception
                            </h3>
                        </div>
                        <p className="text-wedding-gold font-medium mb-2 tracking-widest">5:00 PM</p>
                        <p className="text-wedding-slate text-lg mb-6 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                            The Bella Plaza
                            <br />
                            San Sebastian Village, Tarlac City
                        </p>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=The+Bella+Plaza+San+Sebastian+Village+Tarlac+City"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-wedding-gold text-wedding-ivory px-4 py-2 rounded-sm text-xs tracking-[0.15em] uppercase hover:bg-wedding-antique transition-colors shadow-sm"
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
