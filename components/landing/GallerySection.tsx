"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function GallerySection() {
    // No real content yet - show "To follow" placeholder
    const hasContent = false;

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
                    className="text-wedding-charcoal text-3xl md:text-4xl lg:text-5xl mb-8"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    Our Gallery
                </h2>
                <div className="w-16 h-[1px] bg-wedding-gold mx-auto" />
            </motion.div>

            {/* Content */}
            {hasContent ? (
                // Placeholder for future real gallery
                <div>Gallery content here</div>
            ) : (
                // "To follow" Placeholder
                <motion.div
                    className="text-center px-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p
                        className="text-wedding-dove text-lg md:text-xl italic"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        To follow...
                    </p>
                    <Heart
                        className="text-wedding-gold/40 mx-auto mt-6"
                        size={28}
                        fill="currentColor"
                    />
                </motion.div>
            )}
        </section>
    );
}
