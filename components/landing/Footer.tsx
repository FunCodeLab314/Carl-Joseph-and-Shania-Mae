"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-wedding-black py-12 md:py-16 border-t border-wedding-gold/10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p
                    className="text-wedding-gold/60 text-3xl md:text-4xl mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    C <span className="text-wedding-burgundy">&</span> S
                </p>
                <p
                    className="text-wedding-dove text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    June 20, 2026
                </p>
                <p
                    className="text-wedding-dove/50 text-xs mt-6 flex items-center justify-center gap-2"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    Made with <Heart className="text-wedding-burgundy" size={12} fill="currentColor" /> for our special day
                </p>
            </div>
        </footer>
    );
}
