"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Countdown } from "@/components/ui/Countdown";

const carouselImages = [
    "/photos/homepage/1.jpg",
    "/photos/homepage/2.jpg",
    "/photos/homepage/3.jpg",
];

export function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const hashtags = [
        "#NESAtamangtaonasiGODFREY",
        "#ForeverHappiNESniNARDS",
        "#ELLAveyou14nityGODFREY",
    ];

    // Image carousel auto-cycling
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section id="home" className="relative h-screen w-full overflow-hidden bg-[#1a1a1a]">
                {/* Background Image Carousel with Crossfade */}
                {carouselImages.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Wedding background ${index + 1}`}
                            fill
                            priority={index === 0}
                            className="object-cover object-center"
                            sizes="100vw"
                        />
                    </div>
                ))}

                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.7) 100%)"
                    }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    {/* Date */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-white/80 text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 font-light"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        FEBRUARY 14, 2026
                    </motion.p>

                    {/* Names */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-white text-4xl md:text-6xl lg:text-8xl tracking-tight mb-4 font-light"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Godfrey{" "}
                        <span className="text-[#DC2626] inline-block mx-2 md:mx-4">&</span>{" "}
                        Vanesa
                    </motion.h1>

                    {/* Quote */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-white/90 text-base md:text-lg lg:text-xl italic font-light max-w-2xl mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        &ldquo;I have found the one whom my soul loves&rdquo;
                    </motion.p>

                    {/* Attribution */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                        className="text-white/70 text-sm font-light"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        — Song of Solomon 3:4
                    </motion.p>

                    {/* Countdown */}
                    <Countdown />

                    {/* Hashtags */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6"
                    >
                        {hashtags.map((tag, index) => (
                            <span
                                key={index}
                                className="text-[#DC2626] text-[10px] md:text-xs tracking-wide"
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
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className="absolute bottom-8"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        >
                            <ChevronDown className="text-white/70" size={32} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
