"use client";

import { motion } from "framer-motion";
import { OrnateFrame, FloralScroll, OrnateDecorator } from "@/components/ui/OrnateFrame";
import { CandleGlowSpots } from "@/components/ui/CandlelightParticles";

export function DressCodeSection() {
    // Guest Palette: Burgundy and Black
    const guestPalette = [
        { name: "Burgundy", hex: "#800020" },
        { name: "Dark Burgundy", hex: "#722F37" },
        { name: "Black", hex: "#1a1a1a" },
    ];

    // Principal Sponsors: Beige, Nude, Cream
    const sponsorPalette = [
        { name: "Beige", hex: "#F5F5DC" },
        { name: "Nude", hex: "#E3BC9A" },
        { name: "Cream", hex: "#FFFDD0" },
    ];

    return (
        <section id="dress-code" className="relative py-16 md:py-24 overflow-hidden">
            {/* Victorian Burgundy Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-wedding-maroon via-wedding-burgundy to-wedding-burgundy-dark" />

            {/* Velvet texture overlay */}
            <div className="absolute inset-0 velvet-texture opacity-20" />

            {/* Candlelight glow spots */}
            <CandleGlowSpots count={6} />

            {/* Chandelier light from top */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center top, rgba(212, 175, 55, 0.12) 0%, transparent 45%)"
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p
                        className="text-wedding-champagne text-xs tracking-[0.4em] uppercase mb-4"
                        style={{ fontFamily: "var(--font-ornate)" }}
                    >
                        Attire
                    </p>
                    <h2
                        id="dress-code-title"
                        className="text-wedding-gold text-3xl md:text-4xl lg:text-5xl mb-6"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Dress Code
                    </h2>
                    <FloralScroll className="w-32 md:w-48 h-6 mx-auto mb-12 md:mb-16" />

                    {/* Two Columns: Guests | Principal Sponsors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Guests Section */}
                        <OrnateFrame variant="secondary" animate={false}>
                            <div className="text-center">
                                <h3
                                    className="text-wedding-gold text-lg md:text-xl mb-4"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    Guests
                                </h3>
                                <OrnateDecorator className="mb-4" />

                                <div className="space-y-4 text-left">
                                    <div>
                                        <span className="block text-wedding-champagne text-sm font-medium mb-1">Gentlemen:</span>
                                        <span className="text-wedding-pearl/80 text-xs">Semi-formal attire in Burgundy and Black</span>
                                    </div>
                                    <div>
                                        <span className="block text-wedding-champagne text-sm font-medium mb-1">Ladies:</span>
                                        <span className="text-wedding-pearl/80 text-xs block mb-2">Semi-formal attire in Burgundy and Black</span>
                                        <span className="text-wedding-gold/70 text-[9px] uppercase tracking-wider block mb-3">
                                            (Burgundy, Black)
                                        </span>
                                    </div>

                                    {/* Guest Palette */}
                                    <div className="flex flex-wrap gap-2 border border-wedding-gold/30 rounded-md overflow-hidden bg-wedding-burgundy-dark/30 p-2">
                                        {guestPalette.map((color, i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded flex-1 border-2 border-wedding-gold/40 shadow-md"
                                                style={{ backgroundColor: color.hex }}
                                                title={`${color.name}: ${color.hex}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </OrnateFrame>

                        {/* Principal Sponsors Section */}
                        <OrnateFrame variant="secondary" animate={false}>
                            <div className="text-center">
                                <h3
                                    className="text-wedding-gold text-lg md:text-xl mb-4"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    Principal Sponsors
                                </h3>
                                <OrnateDecorator className="mb-4" />

                                <div className="space-y-4 text-left">
                                    <div>
                                        <span className="block text-wedding-champagne text-sm font-medium mb-1">Gentlemen:</span>
                                        <span className="text-wedding-pearl/80 text-xs">Formal attire in Beige, Nude, or Cream tones</span>
                                    </div>
                                    <div>
                                        <span className="block text-wedding-champagne text-sm font-medium mb-1">Ladies:</span>
                                        <span className="text-wedding-pearl/80 text-xs">Formal attire in Beige, Nude, or Cream</span>
                                    </div>
                                    <span className="text-wedding-gold/70 text-[9px] uppercase tracking-wider block">
                                        (Beige, Nude, Cream)
                                    </span>

                                    {/* Sponsor Palette */}
                                    <div className="flex gap-2 border border-wedding-gold/30 rounded-md overflow-hidden bg-wedding-burgundy-dark/30 p-2">
                                        {sponsorPalette.map((color, i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded flex-1 border-2 border-wedding-gold/40 shadow-md"
                                                style={{ backgroundColor: color.hex }}
                                                title={`${color.name}: ${color.hex}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </OrnateFrame>
                    </div>

                    {/* Quote at bottom */}
                    <div className="mt-12 md:mt-16 p-5 md:p-6 bg-wedding-burgundy-dark/40 rounded-lg border border-wedding-gold/30 inline-block max-w-md">
                        <p
                            className="text-wedding-champagne text-xs md:text-sm italic leading-relaxed"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            &ldquo;We kindly ask our guests to strictly follow the dress code.&rdquo;
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wedding-gold/40 to-transparent" />
        </section>
    );
}
