"use client";

import { motion } from "framer-motion";

export function DressCodeSection() {
    // Placeholders - User to update with actual hex codes
    const ladiesPalette = [
        "#E8C4C4", // Placeholder 1
        "#F7E7CE", // Placeholder 2
        "#D4C4A8", // Placeholder 3
        "#C9A86C", // Placeholder 4
        "#A89F91", // Placeholder 5
    ];

    const mensPalette = [
        "#2C3E50", // Placeholder 1
        "#34495E", // Placeholder 2
    ];

    return (
        <section id="dress-code" className="py-20 bg-wedding-ivory relative overflow-hidden">
            {/* Background decoration if needed */}
            <div className="absolute top-0 left-0 w-full h-px bg-wedding-gold/20" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-wedding-gold text-xs tracking-[0.3em] uppercase mb-4" style={{ fontFamily: "var(--font-body)" }}>
                        Wedding Attire
                    </p>
                    <h2 className="text-wedding-charcoal text-4xl md:text-5xl mb-12" style={{ fontFamily: "var(--font-display)" }}>
                        Dress Code
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                        {/* Ladies */}
                        <div className="space-y-6">
                            <h3 className="text-2xl text-wedding-charcoal" style={{ fontFamily: "var(--font-heading)" }}>
                                Ladies
                            </h3>
                            <p className="text-wedding-slate text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                                Long Dress in Shades of Neutral Pink, Champagne, or Beige.
                            </p>

                            {/* Palette */}
                            <div className="flex flex-col items-center gap-3">
                                <p className="text-[10px] uppercase tracking-widest text-wedding-gold/80">Theme Palette</p>
                                <div className="flex bg-white/50 p-2 rounded-full shadow-sm gap-2">
                                    {ladiesPalette.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full border border-black/5 shadow-inner"
                                            style={{ backgroundColor: color }}
                                            title={`Color ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Gentlemen */}
                        <div className="space-y-6">
                            <h3 className="text-2xl text-wedding-charcoal" style={{ fontFamily: "var(--font-heading)" }}>
                                Gentlemen
                            </h3>
                            <p className="text-wedding-slate text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                                Suit and Pants in designated colors.
                            </p>

                            {/* Palette */}
                            <div className="flex flex-col items-center gap-3">
                                <p className="text-[10px] uppercase tracking-widest text-wedding-gold/80">Theme Palette</p>
                                <div className="flex bg-white/50 p-2 rounded-full shadow-sm gap-2">
                                    {mensPalette.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full border border-black/5 shadow-inner"
                                            style={{ backgroundColor: color }}
                                            title={`Color ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 p-6 bg-wedding-cream/30 rounded-lg border border-wedding-gold/10 inline-block">
                        <p className="text-wedding-slate text-sm italic" style={{ fontFamily: "var(--font-heading)" }}>
                            "We kindly ask our guests to strictly follow the dress code."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
