"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Countdown } from "@/components/ui/Countdown";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { OrnateFrame, FloralScroll } from "@/components/ui/OrnateFrame";
import { CandleGlowSpots } from "@/components/ui/CandlelightParticles";

export function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const hashtags = [
        "#GodsRemarCARLbleGiftforSHANIA",
        "#SaksiAngLangitSatin",
    ];

    // Image carousel auto-cycling (placeholder version - just cycles through indices)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % 3);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section id="home" className="relative h-screen w-full overflow-hidden">
                {/* Victorian Burgundy Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-wedding-burgundy-dark via-wedding-maroon to-wedding-wine" />

                {/* Background Placeholder with dark overlay */}
                <PlaceholderImage
                    className="absolute inset-0 w-full h-full opacity-30"
                    label="Hero Background"
                    variant="hero"
                />

                {/* Velvet texture overlay */}
                <div className="absolute inset-0 velvet-texture opacity-30" />

                {/* Chandelier light effect from top */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse at center top, rgba(212, 175, 55, 0.15) 0%, transparent 50%)"
                    }}
                />

                {/* Candlelight glow spots */}
                <CandleGlowSpots count={6} />

                {/* Corner candle glows */}
                <motion.div
                    className="absolute bottom-20 left-10 w-40 h-40 rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent 70%)",
                        filter: "blur(30px)"
                    }}
                    animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-40 h-40 rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, rgba(212, 175, 55, 0.3), transparent 70%)",
                        filter: "blur(30px)"
                    }}
                    animate={{ opacity: [0.5, 0.8, 0.5], scale: [1.1, 1.3, 1.1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Vignette overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse at center, transparent 40%, rgba(10, 10, 10, 0.6) 100%)"
                    }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24">
                    <OrnateFrame variant="primary" className="max-w-lg md:max-w-2xl lg:max-w-3xl w-full mx-auto">
                        {/* Welcome Text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-wedding-gold text-xl md:text-2xl lg:text-3xl tracking-wider mb-2"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Welcome
                        </motion.p>

                        {/* To The Wedding Of */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-wedding-champagne text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
                            style={{ fontFamily: "var(--font-ornate)" }}
                        >
                            To The Wedding Of
                        </motion.p>

                        {/* Names - Script Style */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 1 }}
                            className="text-wedding-gold text-5xl md:text-7xl lg:text-8xl mb-2"
                            style={{ fontFamily: "var(--font-script)" }}
                        >
                            Carl Joseph
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="text-wedding-champagne text-3xl md:text-4xl my-2"
                            style={{ fontFamily: "var(--font-script)" }}
                        >
                            &
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1, duration: 1 }}
                            className="text-wedding-gold text-5xl md:text-7xl lg:text-8xl mb-6"
                            style={{ fontFamily: "var(--font-script)" }}
                        >
                            Shania Mae
                        </motion.h1>

                        {/* Decorative Divider */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 1.3, duration: 0.8 }}
                            className="mb-6"
                        >
                            <FloralScroll className="w-48 md:w-64 h-6 mx-auto" />
                        </motion.div>

                        {/* Date */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                            className="text-wedding-champagne text-sm md:text-lg tracking-[0.3em] mb-4"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            JUNE 20, 2026
                        </motion.p>

                        {/* Quote */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="text-wedding-pearl/80 text-sm md:text-base lg:text-lg italic font-light max-w-xl mx-auto mb-1"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            &ldquo;Therefore what GOD has joined together, let no one separate&rdquo;
                        </motion.p>

                        {/* Attribution */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6, duration: 0.6 }}
                            className="text-wedding-gold/70 text-xs md:text-sm"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            — Mark 10:9
                        </motion.p>
                    </OrnateFrame>

                    {/* Countdown - outside frame */}
                    <Countdown />

                    {/* Hashtags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-3 md:gap-6 mt-4"
                    >
                        {hashtags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-wedding-champagne/80 text-[10px] md:text-xs tracking-wide italic"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.6 }}
                        className="absolute bottom-8"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-wedding-gold/60 text-[10px] tracking-widest uppercase mb-2" style={{ fontFamily: "var(--font-body)" }}>
                                Scroll
                            </span>
                            <ChevronDown className="text-wedding-gold/60" size={24} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
