"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Venue", href: "#venue" },
        { name: "Story", href: "#story" },
        { name: "Entourage", href: "#entourage" },
        { name: "Gallery", href: "#gallery" },
        { name: "RSVP", href: "#rsvp" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-wedding-burgundy-dark/95 backdrop-blur-md shadow-lg shadow-wedding-gold/10 border-b-2 border-wedding-gold/40"
                    : "bg-gradient-to-b from-wedding-burgundy-dark/70 to-transparent border-b border-wedding-gold/20"
                    }`}
            >
                {/* Top decorative gold line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-wedding-gold/60 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Desktop Left Links */}
                        <div className="hidden md:flex items-center space-x-10">
                            {navLinks.slice(0, 3).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-wedding-gold text-xs tracking-[0.3em] uppercase transition-all duration-300 hover:text-wedding-gold-light relative group"
                                    style={{ fontFamily: "var(--font-ornate)" }}
                                >
                                    {link.name}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-wedding-gold origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Logo - C & S Monogram */}
                        <a
                            href="#home"
                            className="relative group"
                        >
                            {/* Decorative ring around monogram */}
                            <motion.div
                                className="absolute -inset-3 rounded-full border border-wedding-gold/30 pointer-events-none"
                                whileHover={{ scale: 1.1, rotate: 180 }}
                                transition={{ duration: 0.8 }}
                            />
                            <span
                                className="text-wedding-gold text-3xl md:text-4xl tracking-tight"
                                style={{ fontFamily: "var(--font-script)" }}
                            >
                                C <span className="text-wedding-champagne text-xl">&</span> S
                            </span>
                        </a>

                        {/* Desktop Right Links */}
                        <div className="hidden md:flex items-center space-x-10">
                            {navLinks.slice(3).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-wedding-gold text-xs tracking-[0.3em] uppercase transition-all duration-300 hover:text-wedding-gold-light relative group"
                                    style={{ fontFamily: "var(--font-ornate)" }}
                                >
                                    {link.name}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-wedding-gold origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 text-wedding-gold border border-wedding-gold/40 rounded-full hover:bg-wedding-gold/10 transition-colors"
                            aria-label="Open menu"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Victorian Style */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
                    >
                        {/* Burgundy background with candlelight effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-wedding-burgundy-dark via-wedding-maroon to-wedding-wine" />
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.1) 0%, transparent 50%)"
                            }}
                        />

                        {/* Close button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-wedding-gold p-2 border border-wedding-gold/40 rounded-full hover:bg-wedding-gold/10 transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>

                        {/* Monogram */}
                        <motion.p
                            className="text-wedding-gold text-4xl mb-8"
                            style={{ fontFamily: "var(--font-script)" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            C & S
                        </motion.p>

                        {/* Navigation Links */}
                        <div className="relative z-10 flex flex-col items-center space-y-6">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.08 + 0.2, duration: 0.4 }}
                                    className="text-wedding-champagne text-2xl tracking-[0.2em] uppercase hover:text-wedding-gold transition-colors"
                                    style={{ fontFamily: "var(--font-ornate)" }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* Decorative bottom element */}
                        <motion.div
                            className="absolute bottom-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <svg className="w-24 h-6 text-wedding-gold/50" viewBox="0 0 100 24" fill="currentColor">
                                <path d="M10 12 Q25 6 40 12 T70 12" fill="none" stroke="currentColor" strokeWidth="1" />
                                <circle cx="50" cy="12" r="3" />
                                <path d="M60 12 Q75 6 90 12" fill="none" stroke="currentColor" strokeWidth="1" />
                            </svg>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
