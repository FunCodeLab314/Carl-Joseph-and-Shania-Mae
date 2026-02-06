"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, ChevronLeft, ChevronRight, X, Heart } from "lucide-react";
import { FloralScroll } from "@/components/ui/OrnateFrame";
import { CandleGlowSpots } from "@/components/ui/CandlelightParticles";

// Story data
const stories = [
    {
        title: "How We Met",
        subtitle: "Carl Joseph's POV",
        content: `First na nakita ko sya nung second week ko na sa work sa SM Mega. Nakita ko sya sa canteen naglalaro ng ML, then gusto ko sya i-approach agad but naiisip ko na baka isipin nya feeling close ako so ayon syempre di nalang ako nag salita. Tapos lumipas ang araw na hinahanap ko sya, madalas ko naman sya nakikita but may time na wala talaga sya sa store kasi nalaman ko naka prolonged leave sya.

And then bumalik siya, at one time inassist ko sya, bibili siya ng wardrobe non then sakin siya nagtanong (pero di nya na maalala ngayon yon). After that nag prolonged leave nanaman sya. And then bumalik nanaman, ngayon noong bumalik siya tinitingnan ko siya, sabi ko pa sa kaibigan kong si Justin "ay bumalik na pala yung baby ko" then nung gabi kasama niya yung colleague niya and tinawag ako, nahalata na pala non na tinitingnan ko si Shania, and yun na yung naging way para makausap ko siya.`,
    },
    {
        title: "How We Met",
        subtitle: "Shania's POV",
        content: `Parehas kaming working sa SM Store, first duty ko non after my prolonged leave due to unforeseen circumstances, I wasn't on myself by that time and wala akong pakialam to anyone and I was just making myself busy as much as possible, but then one of my colleague called me and said "Tingnan mo si uratex diser kanina ko pa nakikitang nakatingin sayo" and I replied "so? wala akong pake" pero makulit si colleague at pinakilala pa din ako sa kanya.

Carl Joseph said "Hi po" while blushing, and I was trying to be nice and said "Hi" too in a nonchalant way. After that, our colleague teased us and said mag shake hands kame pero etong si Carl Joseph ay hiyang-hiya at kulang nalang lumubog na sa floor, that's when I said "Ayoko ng shake hands gusto ko kiss agad" while grinning.`,
    },
    {
        title: "The First Date",
        subtitle: "Plaza Lucero, Cabanatuan City",
        content: `Our first date was at Plaza Lucero in front of St.Nicholas of Tolentine Cathedral, Cabanatuan City. Nagtatanong siya that time ng gusto kong kainin dahil maraming choices of street foods sa location, pero ang gusto ko lang non is cotton candy and then sabi niya bibili siya but here's the thing kulang ng piso yung pambili niya at hiyang hiya siya sabihin saken dahil walang gcash si manong vendor hahaha kaya ang ending nanghingi pa siya saken 🤣`,
    },
    {
        title: "Carl Joseph",
        subtitle: "His Personality",
        content: `Carl Joseph likes mobile games and Gloc-9 Songs, he is jolly and very kind to everyone around him. He would rather stay at home with Shania than go outside and have a good time with others. Sometimes Shania would push her to have a bond with others but he often declined as he wanted to go out with her.`,
    },
    {
        title: "Shania Mae",
        subtitle: "Her Personality",
        content: `Shania Mae likes reading novel books and writing poetry, she is a die hard fan of Taylor Swift and loves singing. She is kind "sometimes" it depends on the person and the situation. Shania is very straight to the point to anyone that makes other people think that she's maldita. She's the one who's nonchalant to their relationship.`,
    },
    {
        title: "Bonding Moments",
        subtitle: "#GodsRemarCARLbleGiftforSHANIA",
        content: `We both love eating samgyupsal and seafood. We also love having a family bonding out of town with our two children yearly.`,
    },
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
            <section id="story" className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
                {/* Victorian Burgundy Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-wedding-burgundy-dark via-wedding-maroon to-wedding-wine" />

                {/* Velvet texture overlay */}
                <div className="absolute inset-0 velvet-texture opacity-20" />

                {/* Candlelight glow spots */}
                <CandleGlowSpots count={10} />

                {/* Chandelier light from top */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse at center top, rgba(212, 175, 55, 0.1) 0%, transparent 40%)"
                    }}
                />

                {/* Header - Mobile First */}
                <motion.div
                    className="relative z-10 text-center mb-8 md:mb-16 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-wedding-champagne text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] mb-3 md:mb-4 uppercase" style={{ fontFamily: "var(--font-ornate)" }}>
                        Our Journey
                    </p>
                    <h2 id="story-title" className="text-wedding-gold text-2xl md:text-5xl lg:text-6xl mb-4 md:mb-6" style={{ fontFamily: "var(--font-display)" }}>
                        Our Love Story
                    </h2>
                    <FloralScroll className="w-32 md:w-48 h-6 mx-auto" />
                </motion.div>


                {/* Read Our Story Button - Mobile First */}
                <motion.div
                    className="relative z-10 text-center px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.button
                        onClick={() => { setIsBookOpen(true); setCurrentPage(0); }}
                        className="relative inline-flex items-center gap-2 md:gap-3 border-2 border-wedding-gold bg-wedding-burgundy-dark/80 text-wedding-gold px-6 md:px-12 py-3 md:py-4 text-sm md:text-lg tracking-[0.1em] md:tracking-[0.15em] uppercase font-medium rounded-lg shadow-lg md:shadow-xl hover:bg-wedding-burgundy hover:shadow-2xl transition-all duration-300 ornate-glow"
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
                                {/* Elegant Gold-Framed Book Page */}
                                <div className="relative bg-gradient-to-br from-wedding-cream via-wedding-pearl to-wedding-cream rounded-lg overflow-hidden shadow-2xl max-w-2xl mx-auto">
                                    {/* Outer Gold Frame */}
                                    <div className="absolute inset-0 border-4 md:border-8 border-wedding-gold/40 rounded-lg pointer-events-none" />
                                    <div className="absolute inset-2 md:inset-4 border-2 md:border-4 border-wedding-gold/25 rounded-md pointer-events-none" />

                                    {/* Corner Flourishes */}
                                    <div className="absolute top-3 left-3 md:top-5 md:left-5 w-8 h-8 md:w-12 md:h-12 border-l-2 border-t-2 border-wedding-gold/50 rounded-tl-lg" />
                                    <div className="absolute top-3 right-3 md:top-5 md:right-5 w-8 h-8 md:w-12 md:h-12 border-r-2 border-t-2 border-wedding-gold/50 rounded-tr-lg" />
                                    <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 w-8 h-8 md:w-12 md:h-12 border-l-2 border-b-2 border-wedding-gold/50 rounded-bl-lg" />
                                    <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 w-8 h-8 md:w-12 md:h-12 border-r-2 border-b-2 border-wedding-gold/50 rounded-br-lg" />

                                    {/* Diamond Accents in Corners */}
                                    <div className="absolute top-6 left-6 md:top-10 md:left-10 w-2 h-2 md:w-3 md:h-3 bg-wedding-gold/30 rotate-45" />
                                    <div className="absolute top-6 right-6 md:top-10 md:right-10 w-2 h-2 md:w-3 md:h-3 bg-wedding-gold/30 rotate-45" />
                                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-2 h-2 md:w-3 md:h-3 bg-wedding-gold/30 rotate-45" />
                                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-2 h-2 md:w-3 md:h-3 bg-wedding-gold/30 rotate-45" />

                                    {/* Book Page Content */}
                                    <motion.div
                                        className="relative h-[65vh] md:h-[70vh] p-8 md:p-12 flex flex-col"
                                        style={{ transformStyle: "preserve-3d" }}
                                        key={currentPage}
                                        initial={{ rotateY: flipDirection === "next" ? 90 : -90, opacity: 0 }}
                                        animate={{ rotateY: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        {/* Top Decorative Divider */}
                                        <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
                                            <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-wedding-gold/50" />
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-wedding-gold/40 rotate-45" />
                                            <div className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-wedding-gold/50" />
                                        </div>

                                        <div className="flex-1 flex flex-col justify-center">
                                            {currentPageData.pageOfStory === 1 && (
                                                <div className="text-center mb-4 md:mb-6">
                                                    <Heart className="text-wedding-burgundy mx-auto mb-2 md:mb-3" size={20} fill="currentColor" />
                                                    <h3 className="text-wedding-burgundy text-xl md:text-3xl mb-1 md:mb-2" style={{ fontFamily: "var(--font-display)" }}>
                                                        {currentPageData.title}
                                                    </h3>
                                                    <p className="text-wedding-gold text-xs md:text-sm tracking-wider uppercase" style={{ fontFamily: "var(--font-ornate)" }}>
                                                        {currentPageData.subtitle}
                                                    </p>
                                                    <div className="flex items-center justify-center gap-3 mt-3 md:mt-4">
                                                        <div className="w-12 md:w-20 h-[1px] bg-wedding-gold/40" />
                                                        <Heart className="text-wedding-gold/50" size={10} fill="currentColor" />
                                                        <div className="w-12 md:w-20 h-[1px] bg-wedding-gold/40" />
                                                    </div>
                                                </div>
                                            )}

                                            {currentPageData.pageOfStory > 1 && (
                                                <p className="text-wedding-gold/50 text-xs md:text-sm mb-3 md:mb-4 italic text-center" style={{ fontFamily: "var(--font-body)" }}>
                                                    ...continued
                                                </p>
                                            )}

                                            <div className="flex-1 flex items-center justify-center px-2 md:px-4">
                                                <p className="text-wedding-charcoal leading-relaxed text-sm md:text-lg text-center" style={{ fontFamily: "var(--font-body)" }}>
                                                    {currentPageData.content}
                                                    {currentPageData.pageOfStory < currentPageData.totalPagesInStory && (
                                                        <span className="text-wedding-gold/50"> ...</span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Decorative Divider */}
                                        <div className="flex items-center justify-center gap-3 mt-4 md:mt-6 mb-2">
                                            <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-wedding-gold/50" />
                                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-wedding-gold/40 rotate-45" />
                                            <div className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-wedding-gold/50" />
                                        </div>

                                        <div className="text-center text-wedding-gold/50 text-xs md:text-sm" style={{ fontFamily: "var(--font-ornate)" }}>
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
