"use client";

import { motion } from "framer-motion";

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
        <section id="dress-code" className="py-16 md:py-24 bg-wedding-pearl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-wedding-gold/20" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p
                        className="text-wedding-burgundy text-xs tracking-[0.3em] mb-4"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        ATTIRE
                    </p>
                    <h2 id="dress-code-title" className="text-wedding-charcoal text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16" style={{ fontFamily: "var(--font-display)" }}>
                        Dress Code: Semi-Formal
                    </h2>

                    {/* Two Columns: Guests | Principal Sponsors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Guests Section */}
                        <div className="bg-white/50 rounded-xl p-6 border border-wedding-burgundy/10 shadow-lg">
                            <h3 className="text-lg md:text-xl text-wedding-charcoal mb-4 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                                Guests
                            </h3>
                            <div className="space-y-4 text-left">
                                <div>
                                    <span className="block text-wedding-charcoal text-sm font-medium mb-1">Gentlemen:</span>
                                    <span className="text-wedding-slate text-xs">Semi-formal attire in Burgundy and Black</span>
                                </div>
                                <div>
                                    <span className="block text-wedding-charcoal text-sm font-medium mb-1">Ladies:</span>
                                    <span className="text-wedding-slate text-xs block mb-2">Semi-formal attire in Burgundy and Black</span>
                                    <span className="text-wedding-dove text-[9px] uppercase tracking-wider block mb-3">
                                        (Burgundy, Black)
                                    </span>
                                </div>

                                {/* Guest Palette */}
                                <div className="flex flex-wrap gap-1 border border-wedding-gold/20 rounded-md overflow-hidden bg-white/30 p-1">
                                    {guestPalette.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-sm flex-1 border border-wedding-gold/10"
                                            style={{ backgroundColor: color.hex }}
                                            title={`${color.name}: ${color.hex}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Principal Sponsors Section */}
                        <div className="bg-white/50 rounded-xl p-6 border border-wedding-burgundy/10 shadow-lg">
                            <h3 className="text-lg md:text-xl text-wedding-charcoal mb-4 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                                Principal Sponsors
                            </h3>
                            <div className="space-y-4 text-left">
                                <div>
                                    <span className="block text-wedding-charcoal text-sm font-medium mb-1">Gentlemen:</span>
                                    <span className="text-wedding-slate text-xs">Formal attire in Beige, Nude, or Cream tones</span>
                                </div>
                                <div>
                                    <span className="block text-wedding-charcoal text-sm font-medium mb-1">Ladies:</span>
                                    <span className="text-wedding-slate text-xs">Formal attire in Beige, Nude, or Cream</span>
                                </div>
                                <span className="text-wedding-dove text-[9px] uppercase tracking-wider block">
                                    (Beige, Nude, Cream)
                                </span>

                                {/* Sponsor Palette */}
                                <div className="flex gap-1 border border-wedding-gold/20 rounded-md overflow-hidden bg-white/30 p-1 max-w-[120px]">
                                    {sponsorPalette.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-8 rounded-sm flex-1 border border-wedding-gold/10"
                                            style={{ backgroundColor: color.hex }}
                                            title={`${color.name}: ${color.hex}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 md:mt-16 p-5 md:p-6 bg-wedding-jet/5 rounded-lg border border-wedding-gold/20 inline-block max-w-md">
                        <p className="text-wedding-charcoal text-xs md:text-sm italic leading-relaxed" style={{ fontFamily: "var(--font-heading)" }}>
                            "We kindly ask our guests to strictly follow the dress code."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
