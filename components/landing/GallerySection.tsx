"use client";

import { motion } from "framer-motion";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { useRef, useEffect, useState } from "react";

export function GallerySection() {
    const galleryImages = [
        { label: "Garden Dreams", variant: "gallery" as const },
        { label: "First Dance", variant: "story" as const },
        { label: "Details", variant: "venue" as const },
        { label: "Forever Yours", variant: "hero" as const },
        { label: "Blushing Blooms", variant: "gallery" as const },
        { label: "Celebration", variant: "story" as const },
        { label: "Sweet Moments", variant: "venue" as const },
        { label: "Golden Hour", variant: "hero" as const },
    ];

    // Duplicate items for seamless loop
    const marqueeItems = [...galleryImages, ...galleryImages, ...galleryImages];

    return (
        <section id="gallery" className="bg-wedding-ivory py-16 md:py-24 lg:py-32 overflow-hidden">
            {/* Header */}
            <motion.div
                className="text-center mb-12 md:mb-16 px-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <p
                    className="text-wedding-gold text-xs tracking-[0.3em] mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    MOMENTS
                </p>
                <h2
                    className="text-wedding-charcoal text-4xl md:text-5xl lg:text-6xl mb-8"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Our Gallery
                </h2>
                <div className="w-16 h-[1px] bg-wedding-gold mx-auto" />
            </motion.div>

            {/* Marquee Container */}
            <div className="w-full relative">
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-wedding-ivory to-transparent" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-wedding-ivory to-transparent" />

                <motion.div
                    className="flex gap-4 md:gap-6"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity
                    }}
                >
                    {marqueeItems.map((image, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[250px] md:w-[350px] aspect-[3/4] rounded-lg overflow-hidden relative group"
                        >
                            <PlaceholderImage
                                className="w-full h-full group-hover:scale-[1.05] transition-transform duration-700"
                                label={image.label}
                                variant={image.variant}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
