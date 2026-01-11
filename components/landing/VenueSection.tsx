"use client";

import { motion } from "framer-motion";
import { Heart, Utensils, ExternalLink } from "lucide-react";

export function VenueSection() {
    return (
        <section id="venue" className="bg-wedding-cream relative">
            {/* Image Grid - Mobile: Stacked, Desktop: Artistic Grid */}
            <div className="px-4 pt-8 md:px-8 md:pt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {/* Main Image (Largest - spans 2 rows on desktop) */}
                    <motion.div
                        className="relative aspect-[3/4] md:row-span-2 md:col-span-2 overflow-hidden rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/photos/front.jpg"
                            alt="Wedding Venue Main"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </motion.div>

                    {/* Secondary Image 1 */}
                    <motion.div
                        className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <img
                            src="/photos/venue side0.jpg"
                            alt="Venue Detail 1"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Secondary Image 2 */}
                    <motion.div
                        className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src="/photos/venue side1.jpg"
                            alt="Venue Detail 2"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Title */}
            <motion.div
                className="text-center py-12 md:py-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2
                    className="text-wedding-charcoal text-4xl md:text-5xl lg:text-6xl"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    The Venue
                </h2>
            </motion.div>

            {/* Details Content */}
            <div className="max-w-5xl mx-auto px-6 pb-20">
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
