"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, PlayCircle } from "lucide-react";
import { Countdown } from "@/components/ui/Countdown";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { OrnateFrame, FloralScroll } from "@/components/ui/OrnateFrame";
import { CandleGlowSpots } from "@/components/ui/CandlelightParticles";
import { VideoModal } from "@/components/ui/VideoModal";

export function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showVideo, setShowVideo] = useState(false);

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
                <VideoModal
                    isOpen={showVideo}
                    onClose={() => setShowVideo(false)}
                    videoSrc="/wedding_vid.mp4"
                />

                {/* Victorian Burgundy Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-wedding-burgundy-dark via-wedding-maroon to-wedding-wine" />

                {/* Background Video (Low Opacity) */}
                <div className="absolute inset-0 overflow-hidden">
                    <video
                        src="/wedding_vid.mp4"
                        className="w-full h-full object-cover opacity-70 mix-blend-overlay"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>

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

                {/* Content - FRAME CENTERED, COUNTDOWN/HASHTAGS AT BOTTOM */}
                <div className="absolute inset-0 flex items-center justify-center px-4 md:px-12 lg:px-24 pt-20 md:pt-24 pb-28 md:pb-36 overflow-hidden">
                    <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl hero-frame-content">
                        <OrnateFrame variant="primary" className="w-full mx-auto">
                            {/* Welcome Text */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-wedding-gold text-xl md:text-2xl lg:text-3xl tracking-wider mb-2 text-center"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Welcome
                            </motion.p>

                            {/* To The Wedding Of */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-wedding-champagne text-xs md:text-sm tracking-[0.4em] uppercase mb-4 md:mb-6 text-center"
                                style={{ fontFamily: "var(--font-ornate)" }}
                            >
                                To The Wedding Of
                            </motion.p>

                            {/* Names - Script Style */}
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7, duration: 1 }}
                                className="text-wedding-gold text-4xl md:text-6xl lg:text-7xl mb-1 md:mb-2 text-center"
                                style={{ fontFamily: "var(--font-script)" }}
                            >
                                Carl Joseph
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                                className="text-wedding-champagne text-2xl md:text-3xl my-1 md:my-2 text-center"
                                style={{ fontFamily: "var(--font-script)" }}
                            >
                                &
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.1, duration: 1 }}
                                className="text-wedding-gold text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-center"
                                style={{ fontFamily: "var(--font-script)" }}
                            >
                                Shania Mae
                            </motion.h1>

                            {/* Decorative Divider */}
                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ delay: 1.3, duration: 0.8 }}
                                className="mb-4 md:mb-6 flex justify-center"
                            >
                                <FloralScroll className="w-40 md:w-56 h-5 md:h-6" />
                            </motion.div>

                            {/* Date */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.6 }}
                                className="text-wedding-champagne text-xs md:text-base tracking-[0.3em] mb-3 md:mb-4 text-center"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                JUNE 20, 2026
                            </motion.p>

                            {/* Quote */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.5, duration: 0.8 }}
                                className="text-wedding-pearl/80 text-xs md:text-sm lg:text-base italic font-light max-w-md mx-auto mb-1 text-center"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                &ldquo;Therefore what GOD has joined together, let no one separate&rdquo;
                            </motion.p>

                            {/* Attribution */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.6, duration: 0.6 }}
                                className="text-wedding-gold/70 text-[10px] md:text-xs text-center"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                — Mark 10:9
                            </motion.p>
                        </OrnateFrame>
                    </div>
                </div>

                {/* Bottom section - Countdown, Hashtags, Scroll (positioned absolutely) */}
                <div className="absolute bottom-0 left-0 right-0 pb-6 md:pb-8 px-4">
                    {/* Countdown */}
                    <div className="flex justify-center mb-3 md:mb-4">
                        <Countdown />
                    </div>

                    {/* Hashtags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6"
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
                        className="flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-wedding-gold/60 text-[10px] tracking-widest uppercase mb-1" style={{ fontFamily: "var(--font-body)" }}>
                                Scroll
                            </span>
                            <ChevronDown className="text-wedding-gold/60" size={20} />
                        </motion.div>
                    </motion.div>

                    {/* Play Video Button (Bottom Right) */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2, duration: 0.6 }}
                        onClick={() => setShowVideo(true)}
                        className="absolute bottom-8 right-4 md:right-8 flex items-center gap-2 px-4 py-2 bg-wedding-black/40 hover:bg-wedding-black/60 backdrop-blur-sm border border-wedding-gold/30 rounded-full group transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-wedding-gold/20 rounded-full animate-ping" />
                            <PlayCircle className="text-wedding-gold w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <span className="text-wedding-gold/80 text-[10px] md:text-xs tracking-widest uppercase font-medium group-hover:text-wedding-gold transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                            Watch Film
                        </span>
                    </motion.button>
                </div>
            </section>
        </>
    );
}
