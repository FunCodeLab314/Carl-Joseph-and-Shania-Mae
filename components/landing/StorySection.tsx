"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronLeft, ChevronRight, X, Heart } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

// Story data - Messages/Letters format
const stories = [
    {
        title: "How We Met",
        subtitle: "Carl Joseph's POV",
        content: `(Message from Carl Joseph coming soon...)`,
        type: "letter"
    },
    {
        title: "How We Met",
        subtitle: "Shania's POV",
        content: `Parehas kaming working sa SM Store, first duty ko non after my prolonged leave due to unforeseen circumstances. I wasn't on myself by that time and wala akong pakealam to anyone and I was just making myself busy as much as possible.

But then one of my colleague called me and said "Tingnan mo si uratex diser kanina ko pa nakikitang nakatingin sayo" and I replied "so? wala akong pake" pero makulit si colleague at pinakilala pa din ako sa kanya.

Carl Joseph said "Hi po" while blushing, and I was trying to be nice and said "Hi" too in a nonchalant way. After that, our colleague teased us and said mag shake hands kami pero etong si Carl Joseph ay hiyang-hiya at kulang nalang lumubog na sa floor.

That's when I said "Ayoko ng shake hands gusto ko kiss agad" while grinning.`,
        type: "letter"
    },
    {
        title: "The First Date",
        subtitle: "Plaza Lucero, Cabanatuan City",
        content: `Our first date was at Plaza Lucero in front of St. Nicholas of Tolentine Cathedral, Cabanatuan City.

Nagtatanong siya that time ng gusto kong kainin dahil maraming choices of street foods sa location, pero ang gusto ko lang non is cotton candy.

Sabi niya bibili siya but here's the thing... kulang ng piso yung pambili niya at hiyang-hiya siya sabihin sakin dahil walang gcash si manong vendor 😂

Kaya ang ending nanghingi pa siya sakin! 🤣`,
        type: "letter"
    },
    {
        title: "The Proposal",
        subtitle: "A Promise Kept",
        content: `First month palang namin in a relationship sinasabi niya na sakin na at the age of 27 papakasalan niya na ko. He was 23 by that time.

But then in September last year narealize niya malapit na siya mag 27. It was a simple night and it's just us having a great time talking about how we started and how it was going.

Out of nowhere, he proposed without a ring... only love, honesty and commitment, and I have no reason to say no.

Just like what Taylor Swift said "I like shiny things, but I'd marry you with paper rings" 💍

But I still received a simple yet elegant ring from him a few weeks later. And for me, that is perfect.`,
        type: "letter"
    },
];

export function StorySection() {
    const [isBookOpen, setIsBookOpen] = useState(false);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const nextStory = () => {
        setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
    };

    const prevStory = () => {
        setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    return (
        <>
            <section id="story" className="bg-wedding-jet py-16 md:py-24 lg:py-32">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16 px-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p
                        className="text-wedding-burgundy text-xs tracking-[0.3em] mb-4"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        OUR JOURNEY
                    </p>
                    <h2
                        id="story-title"
                        className="text-wedding-gold text-4xl md:text-5xl lg:text-6xl mb-8"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Our Love Story
                    </h2>
                    <div className="w-16 h-[1px] bg-wedding-burgundy mx-auto" />
                </motion.div>

                {/* Heart-Shaped Gallery Grid - Proper connected heart */}
                <motion.div
                    className="max-w-lg mx-auto px-6 mb-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        {/* Heart shape using CSS clip-path */}
                        <div
                            className="grid grid-cols-4 gap-1 p-4"
                            style={{
                                clipPath: "path('M 100 30 C 100 10, 130 0, 150 0 C 180 0, 200 25, 200 50 C 200 90, 150 130, 100 170 C 50 130, 0 90, 0 50 C 0 25, 20 0, 50 0 C 70 0, 100 10, 100 30')",
                                transform: "scale(2.5)",
                                transformOrigin: "center",
                                width: "200px",
                                height: "180px",
                                margin: "0 auto",
                            }}
                        >
                            {Array.from({ length: 12 }).map((_, index) => (
                                <motion.div
                                    key={index}
                                    className="relative aspect-square rounded overflow-hidden border border-wedding-burgundy/50 hover:border-wedding-gold transition-all duration-300 group"
                                    whileHover={{ scale: 1.1, zIndex: 10 }}
                                >
                                    <PlaceholderImage
                                        className="w-full h-full"
                                        label={`${index + 1}`}
                                        variant="story"
                                    />
                                    <div className="absolute inset-0 bg-wedding-gold/0 group-hover:bg-wedding-gold/20 transition-colors duration-300" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Alternative: Simple heart grid layout */}
                        <div className="grid gap-2 mt-8" style={{ display: 'none' }}>
                            {/* Row 1: 2 images on left lobe, gap, 2 images on right lobe */}
                            <div className="flex justify-center gap-12">
                                <div className="flex gap-2">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50">
                                        <PlaceholderImage className="w-full h-full" label="1" variant="story" />
                                    </div>
                                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50">
                                        <PlaceholderImage className="w-full h-full" label="2" variant="story" />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50">
                                        <PlaceholderImage className="w-full h-full" label="3" variant="story" />
                                    </div>
                                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50">
                                        <PlaceholderImage className="w-full h-full" label="4" variant="story" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Simpler Heart Layout using positioned grid */}
                    <div className="relative w-[280px] h-[250px] mx-auto mt-4">
                        {/* Row 1 - Top of lobes */}
                        <div className="absolute left-[45px] top-0 w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="1" variant="story" />
                        </div>
                        <div className="absolute right-[45px] top-0 w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="2" variant="story" />
                        </div>

                        {/* Row 2 - Wide part of lobes */}
                        <div className="absolute left-0 top-[40px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="3" variant="story" />
                        </div>
                        <div className="absolute left-[52px] top-[40px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="4" variant="story" />
                        </div>
                        <div className="absolute right-[52px] top-[40px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="5" variant="story" />
                        </div>
                        <div className="absolute right-0 top-[40px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="6" variant="story" />
                        </div>

                        {/* Row 3 - Middle connecting part */}
                        <div className="absolute left-[26px] top-[92px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="7" variant="story" />
                        </div>
                        <div className="absolute left-[78px] top-[92px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="8" variant="story" />
                        </div>
                        <div className="absolute right-[78px] top-[92px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="9" variant="story" />
                        </div>
                        <div className="absolute right-[26px] top-[92px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="10" variant="story" />
                        </div>

                        {/* Row 4 - Narrowing */}
                        <div className="absolute left-[65px] top-[144px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="11" variant="story" />
                        </div>
                        <div className="absolute right-[65px] top-[144px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-burgundy/50 hover:border-wedding-gold transition-colors">
                            <PlaceholderImage className="w-full h-full" label="12" variant="story" />
                        </div>

                        {/* Row 5 - Bottom tip */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[196px] w-12 h-12 rounded-lg overflow-hidden border-2 border-wedding-gold hover:scale-110 transition-all">
                            <div className="w-full h-full bg-wedding-burgundy/20 flex items-center justify-center">
                                <Heart className="text-wedding-burgundy" size={24} fill="currentColor" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Witness Our Story Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.button
                        onClick={() => setIsBookOpen(true)}
                        className="inline-flex items-center gap-3 bg-wedding-burgundy text-wedding-gold px-12 py-4 text-lg tracking-[0.15em] uppercase font-medium rounded-lg shadow-xl hover:bg-wedding-burgundy-dark transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <BookOpen size={22} />
                        Read Our Story
                    </motion.button>
                </motion.div>
            </section>

            {/* Book Modal */}
            <AnimatePresence>
                {isBookOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-wedding-black/95 flex items-center justify-center p-4 md:p-8"
                        onClick={() => setIsBookOpen(false)}
                    >
                        {/* Book Container */}
                        <motion.div
                            initial={{ scale: 0.8, rotateY: -90, opacity: 0 }}
                            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                            exit={{ scale: 0.8, rotateY: -90, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative w-full max-w-4xl bg-wedding-cream rounded-lg shadow-2xl overflow-hidden border border-wedding-gold/30"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsBookOpen(false)}
                                className="absolute top-4 right-4 z-20 text-wedding-burgundy hover:text-wedding-burgundy-dark p-2 transition-colors"
                                aria-label="Close book"
                            >
                                <X size={28} />
                            </button>

                            {/* Letter/Message Layout */}
                            <div className="min-h-[60vh] md:min-h-[70vh] p-6 md:p-12">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`content-${currentStoryIndex}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="max-w-2xl mx-auto"
                                    >
                                        {/* Letter Header */}
                                        <div className="text-center mb-8">
                                            <Heart className="text-wedding-burgundy mx-auto mb-4" size={32} fill="currentColor" />
                                            <h3
                                                className="text-wedding-burgundy text-2xl md:text-4xl mb-2"
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                {stories[currentStoryIndex].title}
                                            </h3>
                                            <p
                                                className="text-wedding-gold text-sm md:text-base tracking-wide"
                                                style={{ fontFamily: "var(--font-body)" }}
                                            >
                                                {stories[currentStoryIndex].subtitle}
                                            </p>
                                        </div>

                                        {/* Decorative Divider */}
                                        <div className="flex items-center justify-center gap-4 mb-8">
                                            <div className="w-16 h-[1px] bg-wedding-gold/50" />
                                            <Heart className="text-wedding-gold/50" size={12} />
                                            <div className="w-16 h-[1px] bg-wedding-gold/50" />
                                        </div>

                                        {/* Letter Content */}
                                        <div
                                            className="bg-wedding-pearl/50 rounded-lg p-6 md:p-8 border border-wedding-gold/20 shadow-inner"
                                            style={{
                                                background: "linear-gradient(135deg, rgba(245,245,240,0.8) 0%, rgba(250,247,242,0.9) 100%)",
                                            }}
                                        >
                                            {stories[currentStoryIndex].content.split("\n\n").map((paragraph, idx) => (
                                                <p
                                                    key={idx}
                                                    className="text-wedding-charcoal leading-relaxed mb-4 last:mb-0 text-sm md:text-base"
                                                    style={{ fontFamily: "var(--font-body)" }}
                                                >
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Page Number */}
                                        <p className="text-center text-wedding-gold/50 text-sm mt-6" style={{ fontFamily: "var(--font-body)" }}>
                                            {currentStoryIndex + 1} of {stories.length}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Controls */}
                                <div className="flex items-center justify-between pt-6 mt-8 border-t border-wedding-gold/20">
                                    {/* Previous Button */}
                                    <button
                                        onClick={prevStory}
                                        disabled={currentStoryIndex === 0}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${currentStoryIndex === 0
                                                ? "opacity-30 cursor-not-allowed"
                                                : "bg-wedding-burgundy/10 hover:bg-wedding-burgundy/20 text-wedding-burgundy"
                                            }`}
                                    >
                                        <ChevronLeft size={20} />
                                        <span className="hidden sm:inline text-sm" style={{ fontFamily: "var(--font-body)" }}>
                                            Previous
                                        </span>
                                    </button>

                                    {/* Page Indicators */}
                                    <div className="flex gap-2">
                                        {stories.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentStoryIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentStoryIndex
                                                        ? "bg-wedding-burgundy w-6"
                                                        : "bg-wedding-gold/30 hover:bg-wedding-gold/60"
                                                    }`}
                                                aria-label={`Go to story ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        onClick={nextStory}
                                        disabled={currentStoryIndex === stories.length - 1}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${currentStoryIndex === stories.length - 1
                                                ? "opacity-30 cursor-not-allowed"
                                                : "bg-wedding-burgundy/10 hover:bg-wedding-burgundy/20 text-wedding-burgundy"
                                            }`}
                                    >
                                        <span className="hidden sm:inline text-sm" style={{ fontFamily: "var(--font-body)" }}>
                                            Next
                                        </span>
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
