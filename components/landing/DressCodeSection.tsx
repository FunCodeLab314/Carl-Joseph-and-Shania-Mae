"use client";

import { motion } from "framer-motion";

export function DressCodeSection() {
    // Exact Hex Codes provided by user
    // Guests (Ladies): Rosy Clay, Soft Peach, Light Apricot, Blush Nude, Soft Ivory
    const guestPalette = [
        { name: "Rosy Clay", hex: "#BC887A" },
        { name: "Soft Peach", hex: "#E8AF93" },
        { name: "Light Apricot", hex: "#EEC6B0" },
        { name: "Blush Nude", hex: "#F1D5C6" },
        { name: "Soft Ivory", hex: "#F4E8E1" },
    ];

    // Principal Sponsors: Champagne Cream, Warm Tan
    const sponsorPalette = [
        { name: "Champagne Cream", hex: "#F4F1D8" },
        { name: "Warm Tan", hex: "#D8B98F" },
    ];

    return (
        <section id="dress-code" className="py-16 md:py-24 bg-wedding-ivory relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-wedding-gold/20" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-wedding-charcoal text-3xl md:text-4xl lg:text-5xl mb-12 md:mb-16" style={{ fontFamily: "var(--font-display)" }}>
                        Dress Code: Formal
                    </h2>

                    <div className="space-y-12 md:space-y-16">
                        {/* Guests Section */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl md:text-2xl text-wedding-charcoal mb-6 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                                Guests
                            </h3>
                            <div className="space-y-6 text-center max-w-md mx-auto">
                                <div>
                                    <span className="block text-wedding-charcoal text-sm md:text-base font-medium mb-1">Gentlemen:</span>
                                    <span className="text-wedding-slate text-sm">Suit and Pants in any color</span>
                                </div>
                                <div>
                                    <span className="block text-wedding-charcoal text-sm md:text-base font-medium mb-1">Ladies:</span>
                                    <span className="text-wedding-slate text-sm block mb-2">Long gown in shades of Neutral Pink</span>
                                    <span className="text-wedding-slate/60 text-[10px] uppercase tracking-wider block mb-4">
                                        (Rosy Clay, Soft Peach, Light Apricot, Blush Nude, Soft Ivory)
                                    </span>
                                </div>

                                {/* Guest Palette - Flex Wrap for Mobile */}
                                <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-nowrap border border-wedding-gold/20 rounded-md overflow-hidden bg-white/50 p-2 md:p-0">
                                    {guestPalette.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 md:w-12 md:h-14 md:flex-1 rounded-md md:rounded-none border md:border-0 border-white/50"
                                            style={{ backgroundColor: color.hex }}
                                            title={`${color.name}: ${color.hex}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Principal Sponsors Section */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl md:text-2xl text-wedding-charcoal mb-6 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                                Principal Sponsors
                            </h3>
                            <div className="space-y-6 text-center max-w-md mx-auto">
                                <div className="space-y-4">
                                    <div>
                                        <span className="block text-wedding-charcoal text-sm md:text-base font-medium mb-1">Gentlemen:</span>
                                        <span className="text-wedding-slate text-sm">Suit and tie in Champagne tones</span>
                                    </div>
                                    <div>
                                        <span className="block text-wedding-charcoal text-sm md:text-base font-medium mb-1">Ladies:</span>
                                        <span className="text-wedding-slate text-sm">Evening gown in Beige or Tan</span>
                                    </div>
                                    <span className="text-wedding-slate/60 text-[10px] uppercase tracking-wider block mt-2">
                                        (Champagne Cream, Warm Tan)
                                    </span>
                                </div>

                                {/* Sponsor Palette - Flex Wrap for Mobile */}
                                <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-nowrap border border-wedding-gold/20 rounded-md overflow-hidden bg-white/50 p-2 md:p-0 max-w-[150px] mx-auto">
                                    {sponsorPalette.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 md:w-14 md:h-14 md:flex-1 rounded-md md:rounded-none border md:border-0 border-white/50"
                                            style={{ backgroundColor: color.hex }}
                                            title={`${color.name}: ${color.hex}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 md:mt-16 p-5 md:p-6 bg-wedding-cream/50 rounded-lg border border-wedding-gold/10 inline-block max-w-md">
                        <p className="text-wedding-slate text-xs md:text-sm italic leading-relaxed" style={{ fontFamily: "var(--font-heading)" }}>
                            "We kindly ask our guests to strictly follow the dress code."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
