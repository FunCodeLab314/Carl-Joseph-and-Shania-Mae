"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronLeft, ChevronRight, X, Heart } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

// Story data
const stories = [
    {
        title: "How We Met",
        subtitle: "Shania's POV",
        content: `Parehas kaming working sa SM Store, first duty ko non after my prolonged leave due to unforeseen circumstances, I wasn't on myself by that time and wala akong pakealam to anyone and I was just making myself busy as much as possible, but then one of my colleague called me and said "Tingnan mo si uratex diser kanina ko pa nakikitang nakatingin sayo" and I replied "so? wala akong pake" pero makulit si colleague at pinakilala pa din ako sa kanya.

Carl Joseph said "Hi po" while blushing, and I was trying to be nice and said "Hi" too in a nonchalant way. After that, our colleague teased us and said mag shake hands kami pero etong si Carl Joseph ay hiyang-hiya at kulang nalang lumubog na sa floor, that's when I said "Ayoko ng shake hands gusto ko kiss agad" while grinning.`,
    },
    {
        title: "The First Date",
        subtitle: "Plaza Lucero, Cabanatuan City",
        content: `Our first date was at Plaza Lucero in front of St. Nicholas of Tolentine Cathedral, Cabanatuan City. Nagtatanong siya that time ng gusto kong kainin dahil maraming choices of street foods sa location, pero ang gusto ko lang non is cotton candy and then sabi niya bibili siya but here's the thing kulang ng piso yung pambili niya at hiyang hiya siya sabihin saken dahil walang gcash si manong vendor hahaha kaya ang ending nanghingi pa siya saken 🤣`,
    },
    {
        title: "The Proposal",
        subtitle: "A Promise Kept",
        content: `First month palang namin in a relationship sinasabi niya na sakin na at the age of 27 papakasalan niya na ko, he was 23 by that time. But then in September last year narealize niya malapit na siya mag 27. It was a simple night and it's just us having a great time talking about how we started and how it was going.

Out of nowhere, he proposed without a ring.. only love, honesty and commitment, and I have no reason to say no and just like what Taylor Swift said "I like shiny things, but I'd marry you with paper rings" but I still received a simple yet elegant ring from him a few weeks later. And for me, that is perfect. 💍`,
    },
];

// Photo grid - 12 photos for mobile (3x4), 20 for desktop (5x4)
const photoGridItems = [
    { rotation: -8, scale: 1 },
    { rotation: 5, scale: 0.95 },
    { rotation: -3, scale: 1.05 },
    { rotation: 7, scale: 0.9 },
    { rotation: -5, scale: 1 },
    { rotation: 4, scale: 0.95 },
    { rotation: -6, scale: 1 },
    { rotation: 2, scale: 1.05 },
    { rotation: -4, scale: 0.95 },
    { rotation: 6, scale: 1 },
    { rotation: -5, scale: 1 },
    { rotation: 8, scale: 0.9 },
    // Desktop additional photos (hidden on mobile)
    { rotation: -2, scale: 1 },
    { rotation: 5, scale: 1.05 },
    { rotation: -7, scale: 0.95 },
    { rotation: 3, scale: 1.05 },
    { rotation: -4, scale: 1 },
    { rotation: 6, scale: 0.95 },
    { rotation: -3, scale: 1 },
    { rotation: 4, scale: 0.9 },
];

// Split content into pages
const CHARS_PER_PAGE = 450;

function splitContentIntoPages(content: string): string[] {
    const words = content.split(' ');
    const pages: string[] = [];
    let currentPage = '';

    for (const word of words) {
        const testPage = currentPage ? `${currentPage} ${word}` : word;
        if (testPage.length > CHARS_PER_PAGE && currentPage) {
            pages.push(currentPage.trim());
            currentPage = word;
        } else {
            currentPage = testPage;
        }
    }

    if (currentPage.trim()) {
        pages.push(currentPage.trim());
    }

    return pages;
}

interface PageData {
    storyIndex: number;
    title: string;
    subtitle: string;
    content: string;
    pageOfStory: number;
    totalPagesInStory: number;
}

function createAllPages(): PageData[] {
    const allPages: PageData[] = [];

    stories.forEach((story, storyIndex) => {
        const contentPages = splitContentIntoPages(story.content);
        contentPages.forEach((content, pageIndex) => {
            allPages.push({
                storyIndex,
                title: story.title,
                subtitle: story.subtitle,
                content,
                pageOfStory: pageIndex + 1,
                totalPagesInStory: contentPages.length,
            });
        });
    });

    return allPages;
}

export function StorySection() {
    const [isBookOpen, setIsBookOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
    const [isFlipping, setIsFlipping] = useState(false);

    const allPages = useMemo(() => createAllPages(), []);
    const totalPages = allPages.length;

    const nextPage = () => {
        if (currentPage < totalPages - 1 && !isFlipping) {
            setFlipDirection("next");
            setIsFlipping(true);
            setTimeout(() => {
                setCurrentPage((prev) => prev + 1);
                setIsFlipping(false);
            }, 400);
        }
    };

    const prevPage = () => {
        if (currentPage > 0 && !isFlipping) {
            setFlipDirection("prev");
            setIsFlipping(true);
            setTimeout(() => {
                setCurrentPage((prev) => prev - 1);
                setIsFlipping(false);
            }, 400);
        }
    };

    const currentPageData = allPages[currentPage];

    return (
        <>
            <section id="story" className="bg-wedding-jet py-12 md:py-24 lg:py-32 overflow-hidden">
                {/* Header - Mobile First */}
                <motion.div
                    className="text-center mb-8 md:mb-16 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-wedding-burgundy text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 uppercase" style={{ fontFamily: "var(--font-body)" }}>
                        OUR JOURNEY
                    </p>
                    <h2 id="story-title" className="text-wedding-gold text-2xl md:text-5xl lg:text-6xl mb-4 md:mb-8" style={{ fontFamily: "var(--font-display)" }}>
                        Our Love Story
                    </h2>
                    <div className="w-12 md:w-16 h-[1px] bg-wedding-burgundy mx-auto" />
                </motion.div>

                {/* Pinterest-Style Photo Grid Wall - Mobile First */}
                <motion.div
                    className="max-w-6xl mx-auto px-3 md:px-8 mb-8 md:mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Wire Grid Container */}
                    <div className="relative py-4 md:py-8">
                        {/* Wire Grid Background Lines */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Horizontal Lines */}
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={`h-${i}`}
                                    className="absolute left-0 right-0 h-[1px] md:h-[2px] bg-wedding-gold/15 md:bg-wedding-gold/20"
                                    style={{ top: `${(i + 1) * 20}%` }}
                                />
                            ))}
                            {/* Vertical Lines */}
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={`v-${i}`}
                                    className="absolute top-0 bottom-0 w-[1px] md:w-[2px] bg-wedding-gold/15 md:bg-wedding-gold/20"
                                    style={{ left: `${(i + 1) * 25}%` }}
                                />
                            ))}
                        </div>

                        {/* Fairy Lights - Fixed positions to avoid hydration mismatch */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden">
                            {[
                                { left: 18, top: 20, duration: 3, delay: 0 },
                                { left: 38, top: 25, duration: 3.5, delay: 0.5 },
                                { left: 58, top: 18, duration: 2.8, delay: 1 },
                                { left: 78, top: 28, duration: 3.2, delay: 1.5 },
                                { left: 22, top: 70, duration: 3.8, delay: 0.3 },
                                { left: 42, top: 75, duration: 2.6, delay: 0.8 },
                                { left: 62, top: 68, duration: 3.4, delay: 1.2 },
                                { left: 82, top: 72, duration: 3, delay: 0.6 },
                            ].map((light, i) => (
                                <motion.div
                                    key={`light-${i}`}
                                    className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-wedding-gold/50 md:bg-wedding-gold/60"
                                    style={{
                                        left: `${light.left}%`,
                                        top: `${light.top}%`,
                                    }}
                                    animate={{
                                        opacity: [0.3, 0.7, 0.3],
                                        scale: [1, 1.3, 1],
                                    }}
                                    transition={{
                                        duration: light.duration,
                                        repeat: Infinity,
                                        delay: light.delay,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Photo Grid - Mobile: 3 cols, Desktop: 5 cols */}
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 relative z-10">
                            {photoGridItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative ${index >= 12 ? 'hidden md:block' : ''}`}
                                    initial={{ opacity: 0, y: 20, rotate: -15 }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        rotate: item.rotation,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.03,
                                        duration: 0.4,
                                        type: "spring",
                                        stiffness: 120,
                                    }}
                                    whileHover={{
                                        scale: 1.12,
                                        rotate: 0,
                                        zIndex: 20,
                                        transition: { duration: 0.2 }
                                    }}
                                    style={{
                                        transform: `rotate(${item.rotation}deg) scale(${item.scale})`,
                                    }}
                                >
                                    {/* Clip/Pin */}
                                    <div className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 z-10">
                                        <div className="w-2.5 h-3 md:w-4 md:h-5 bg-gradient-to-b from-wedding-charcoal to-wedding-jet rounded-sm shadow-md" />
                                    </div>

                                    {/* Polaroid Frame */}
                                    <div className="bg-white p-1 pb-3 md:p-2 md:pb-6 rounded-sm shadow-lg md:shadow-xl hover:shadow-2xl transition-shadow">
                                        <div className="aspect-square overflow-hidden rounded-sm">
                                            <PlaceholderImage
                                                className="w-full h-full"
                                                variant="story"
                                                label={`${index + 1}`}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Read Our Story Button - Mobile First */}
                <motion.div
                    className="text-center px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.button
                        onClick={() => { setIsBookOpen(true); setCurrentPage(0); }}
                        className="inline-flex items-center gap-2 md:gap-3 bg-wedding-burgundy text-wedding-gold px-6 md:px-12 py-3 md:py-4 text-sm md:text-lg tracking-[0.1em] md:tracking-[0.15em] uppercase font-medium rounded-lg shadow-lg md:shadow-xl hover:bg-wedding-burgundy-dark hover:shadow-2xl transition-all duration-300"
                        style={{ fontFamily: "var(--font-display)" }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <BookOpen size={18} className="md:w-[22px] md:h-[22px]" />
                        Read Our Story
                    </motion.button>
                </motion.div>
            </section>

            {/* Flipbook Modal - Mobile First */}
            <AnimatePresence>
                {isBookOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
                        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                    >
                        <div
                            className="absolute inset-0 bg-wedding-black/80"
                            onClick={() => setIsBookOpen(false)}
                        />

                        <motion.div
                            initial={{ scale: 0.5, rotateY: -180 }}
                            animate={{ scale: 1, rotateY: 0 }}
                            exit={{ scale: 0.5, rotateY: 180 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="relative z-10 w-full max-w-5xl mx-3 md:mx-4"
                            onClick={(e) => e.stopPropagation()}
                            style={{ perspective: "2000px" }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsBookOpen(false)}
                                className="absolute top-1 right-1 md:-top-10 md:right-0 z-30 text-wedding-gold/80 hover:text-wedding-gold p-1.5 md:p-2 transition-colors bg-wedding-black/60 md:bg-transparent rounded-full"
                                aria-label="Close book"
                            >
                                <X size={24} className="md:w-7 md:h-7" />
                            </button>

                            <div className="relative" style={{ transformStyle: "preserve-3d" }}>
                                {/* Book Pages - Mobile: Stack, Desktop: Side by side */}
                                <div className="flex flex-col md:grid md:grid-cols-2 gap-0 bg-wedding-cream rounded-lg overflow-hidden shadow-2xl border border-wedding-gold/20">

                                    {/* Left Page - Photo */}
                                    <div className="relative bg-gradient-to-br from-wedding-pearl to-wedding-cream h-[32vh] md:h-[70vh] p-3 md:p-6 border-b md:border-b-0 md:border-r border-wedding-gold/20 flex flex-col">
                                        <div className="flex-1 flex items-center justify-center p-1 md:p-4">
                                            <div className="w-full max-w-[140px] md:max-w-[280px] aspect-[3/4] rounded-lg overflow-hidden border-2 md:border-4 border-white shadow-lg">
                                                <PlaceholderImage
                                                    className="w-full h-full"
                                                    variant="story"
                                                    label={`Story ${currentPageData.storyIndex + 1}`}
                                                />
                                            </div>
                                        </div>
                                        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/20 to-transparent" />
                                    </div>

                                    {/* Right Page - Story */}
                                    <motion.div
                                        className="relative bg-gradient-to-bl from-wedding-pearl to-wedding-cream h-[42vh] md:h-[70vh] p-4 md:p-8 flex flex-col"
                                        style={{ transformStyle: "preserve-3d" }}
                                        key={currentPage}
                                        initial={{ rotateY: flipDirection === "next" ? 90 : -90, opacity: 0 }}
                                        animate={{ rotateY: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/10 to-transparent" />

                                        <div className="flex-1 md:pl-4 flex flex-col">
                                            {currentPageData.pageOfStory === 1 && (
                                                <div className="text-center mb-2 md:mb-4">
                                                    <Heart className="text-wedding-burgundy mx-auto mb-1 md:mb-2" size={16} fill="currentColor" />
                                                    <h3 className="text-wedding-burgundy text-base md:text-2xl mb-0.5 md:mb-1" style={{ fontFamily: "var(--font-display)" }}>
                                                        {currentPageData.title}
                                                    </h3>
                                                    <p className="text-wedding-gold text-[10px] md:text-xs tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
                                                        {currentPageData.subtitle}
                                                    </p>
                                                    <div className="flex items-center justify-center gap-2 mt-2">
                                                        <div className="w-6 md:w-8 h-[1px] bg-wedding-gold/50" />
                                                        <div className="w-1 h-1 rounded-full bg-wedding-burgundy/50" />
                                                        <div className="w-6 md:w-8 h-[1px] bg-wedding-gold/50" />
                                                    </div>
                                                </div>
                                            )}

                                            {currentPageData.pageOfStory > 1 && (
                                                <p className="text-wedding-gold/60 text-[10px] md:text-xs mb-1 md:mb-2 italic text-center" style={{ fontFamily: "var(--font-body)" }}>
                                                    ...continued
                                                </p>
                                            )}

                                            <div className="flex-1 flex items-center">
                                                <p className="text-wedding-charcoal leading-relaxed text-xs md:text-base" style={{ fontFamily: "var(--font-body)" }}>
                                                    {currentPageData.content}
                                                    {currentPageData.pageOfStory < currentPageData.totalPagesInStory && (
                                                        <span className="text-wedding-gold/60">...</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="text-center text-wedding-gold/40 text-[10px] md:text-xs mt-1 md:mt-2" style={{ fontFamily: "var(--font-body)" }}>
                                            {currentPage + 1} / {totalPages}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Navigation - Mobile First */}
                                <div className="flex justify-between items-center mt-3 md:mt-4 md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 px-1 md:px-0">
                                    <button
                                        onClick={prevPage}
                                        disabled={currentPage === 0 || isFlipping}
                                        className={`p-2 md:p-3 rounded-full transition-all ${currentPage === 0 || isFlipping
                                            ? "opacity-20 cursor-not-allowed bg-wedding-charcoal/20"
                                            : "bg-wedding-burgundy hover:bg-wedding-burgundy-dark text-wedding-gold shadow-lg"
                                            } md:-translate-x-[calc(100%+1rem)]`}
                                    >
                                        <ChevronLeft size={20} className="md:w-6 md:h-6" />
                                    </button>

                                    {/* Page Dots */}
                                    <div className="flex gap-1 md:hidden">
                                        {allPages.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`h-1 rounded-full transition-all duration-300 ${index === currentPage ? "bg-wedding-burgundy w-3" : "bg-wedding-gold/30 w-1"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        onClick={nextPage}
                                        disabled={currentPage === totalPages - 1 || isFlipping}
                                        className={`p-2 md:p-3 rounded-full transition-all ${currentPage === totalPages - 1 || isFlipping
                                            ? "opacity-20 cursor-not-allowed bg-wedding-charcoal/20"
                                            : "bg-wedding-burgundy hover:bg-wedding-burgundy-dark text-wedding-gold shadow-lg"
                                            } md:translate-x-[calc(100%+1rem)]`}
                                    >
                                        <ChevronRight size={20} className="md:w-6 md:h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Desktop Page Dots */}
                            <div className="hidden md:flex justify-center gap-2 mt-6">
                                {allPages.map((page, index) => (
                                    <div
                                        key={index}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === currentPage
                                            ? "bg-wedding-gold w-6"
                                            : page.pageOfStory === 1 ? "bg-wedding-burgundy/50 w-2" : "bg-wedding-gold/20 w-2"
                                            }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
