"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Heart,
    ChevronLeft,
    ChevronRight,
    Play,
    Pause,
} from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

// Story data structure
interface Story {
    id: number;
    title: string;
    date: string;
    content: string;
    imageCount: number;
}

// Story content based on the questionnaire
const stories: Story[] = [
    {
        id: 1,
        title: "How We Met",
        date: "",
        content:
            "Parehas kaming working sa SM Store, first duty ko non after my prolonged leave due to unforeseen circumstances. I wasn't on myself by that time and wala akong pakealam to anyone and I was just making myself busy as much as possible, but then one of my colleague called me and said \"Tingnan mo si uratex diser kanina ko pa nakikitang nakatingin sayo\" and I replied \"so? wala akong pake\" pero makulit si colleague at pinakilala pa din ako sa kanya. Carl Joseph said \"Hi po\" while blushing, and I was trying to be nice and said \"Hi\" too in a nonchalant way. After that, our colleague teased us and said mag shake hands kami pero etong si Carl Joseph ay hiyang-hiya at kulang nalang lumubog na sa floor, that's when I said \"Ayoko ng shake hands gusto ko kiss agad\" while grinning.",
        imageCount: 1,
    },
    {
        id: 2,
        title: "Our First Date",
        date: "",
        content:
            "Our first date was at Plaza Lucero in front of St. Nicholas of Tolentine Cathedral, Cabanatuan City. Nagtatanong siya that time ng gusto kong kainin dahil maraming choices of street foods sa location, pero ang gusto ko lang non is cotton candy and then sabi niya bibili siya but here's the thing kulang ng piso yung pambili niya at hiyang hiya siya sabihin saken dahil walang gcash si manong vendor hahaha kaya ang ending nanghingi pa siya saken 🤣",
        imageCount: 1,
    },
    {
        id: 3,
        title: "The Proposal",
        date: "",
        content:
            "First month palang namin in a relationship sinasabi niya na sakin na at the age of 27 papakasalan niya na ko, he was 23 by that time. But then in September last year narealize niya malapit na siya mag 27. It was a simple night and it's just us having a great time talking about how we started and how it was going. Out of nowhere, he proposed without a ring... only love, honesty and commitment, and I have no reason to say no and just like what Taylor Swift said \"I like shiny things, but I'd marry you with paper rings\" but I still received a simple yet elegant ring from him a few weeks later. And for me, that is perfect.",
        imageCount: 1,
    },
];

// Animation duration in seconds
const AUTO_ADVANCE_DURATION = 5;

export function StorySection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

    const currentStory = stories[currentIndex];

    // Clear all timers
    const clearTimers = useCallback(() => {
        if (progressIntervalRef.current) {
            clearInterval(progressIntervalRef.current);
            progressIntervalRef.current = null;
        }
        if (autoAdvanceRef.current) {
            clearTimeout(autoAdvanceRef.current);
            autoAdvanceRef.current = null;
        }
    }, []);

    // Go to next story
    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
        setCurrentImageIndex(0);
        setProgress(0);
    }, []);

    // Go to previous story
    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
        setCurrentImageIndex(0);
        setProgress(0);
    }, []);

    // Go to specific story
    const goToStory = useCallback((index: number) => {
        setCurrentIndex(index);
        setCurrentImageIndex(0);
        setProgress(0);
    }, []);

    // Toggle play/pause
    const togglePlayPause = useCallback(() => {
        setIsPlaying((prev) => {
            if (!prev) {
                // When resuming play, reset progress for clean timer
                setProgress(0);
            }
            return !prev;
        });
    }, []);

    // Auto-advance logic - cycles through all images in a story before moving to next
    useEffect(() => {
        if (!isPlaying) {
            clearTimers();
            return;
        }

        // Progress bar update (every 50ms for smooth animation)
        const progressIncrement = 100 / (AUTO_ADVANCE_DURATION * 20); // 20 updates per second
        progressIntervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) return 100;
                return prev + progressIncrement;
            });
        }, 50);

        // Auto-advance: either to next image in story, or to next story
        autoAdvanceRef.current = setTimeout(() => {
            const totalImages = currentStory.imageCount;

            if (currentImageIndex < totalImages - 1) {
                // More images in current story - go to next image
                setCurrentImageIndex((prev) => prev + 1);
                setProgress(0);
            } else {
                // Last image in story - go to next story
                goToNext();
            }
        }, AUTO_ADVANCE_DURATION * 1000);

        return () => clearTimers();
    }, [isPlaying, currentIndex, currentImageIndex, currentStory.imageCount, goToNext, clearTimers]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Don't handle keyboard shortcuts when user is typing in form fields
            const activeElement = document.activeElement;
            const isInputFocused = activeElement instanceof HTMLInputElement ||
                activeElement instanceof HTMLTextAreaElement ||
                activeElement instanceof HTMLSelectElement ||
                activeElement?.getAttribute('contenteditable') === 'true';

            if (isInputFocused) {
                return; // Let the input handle the keypress normally
            }

            if (e.key === "ArrowLeft") {
                goToPrevious();
                setIsPlaying(false);
            } else if (e.key === "ArrowRight") {
                goToNext();
                setIsPlaying(false);
            } else if (e.key === " ") {
                e.preventDefault();
                togglePlayPause();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToNext, goToPrevious, togglePlayPause]);

    return (
        <section
            id="story"
            className="relative bg-wedding-ivory min-h-screen overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-wedding-red) 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Section Header */}
            <motion.div
                className="relative z-10 text-center pt-16 md:pt-24 pb-8 md:pb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p
                    className="text-wedding-red text-xs tracking-[0.3em] mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    OUR STORY
                </p>
                <h2
                    id="story-title"
                    className="text-wedding-charcoal text-4xl md:text-5xl lg:text-6xl mb-6"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    How We Met
                </h2>
                <div className="w-16 h-[1px] bg-wedding-red mx-auto" />
            </motion.div>

            {/* Story Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-8">
                <div className="relative">
                    {/* Main Story Card */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 items-center min-h-[60vh]">
                        {/* Image Side */}
                        <div className="relative order-1 md:order-1">
                            <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                                {/* Image Placeholder */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${currentIndex}-${currentImageIndex}`}
                                        initial={{ opacity: 0, scale: 1.05 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <PlaceholderImage
                                            className="w-full h-full"
                                            label={`Story ${currentIndex + 1} Photo`}
                                            variant="story"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-wedding-charcoal/40 via-transparent to-transparent" />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Image Indicators (if multiple images) */}
                                {currentStory.imageCount > 1 && (
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                        {Array.from({ length: currentStory.imageCount }).map((_, imgIdx) => (
                                            <div
                                                key={imgIdx}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${imgIdx === currentImageIndex
                                                    ? "w-6 bg-white"
                                                    : "w-1.5 bg-white/50"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )}

                                {/* Date Badge - Only show if date exists */}
                                {currentStory.date && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="absolute top-4 left-4 md:top-6 md:left-6 z-20"
                                    >
                                        <div className="bg-wedding-red/90 backdrop-blur-sm px-4 py-2 rounded-full">
                                            <span
                                                className="text-wedding-charcoal text-xs md:text-sm font-semibold tracking-wider"
                                                style={{ fontFamily: "var(--font-body)" }}
                                            >
                                                {currentStory.date}
                                            </span>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Story Number */}
                                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                                    <div className="bg-wedding-charcoal/70 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span
                                            className="text-wedding-ivory text-xs font-medium"
                                            style={{ fontFamily: "var(--font-body)" }}
                                        >
                                            {currentIndex + 1} / {stories.length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="order-2 md:order-2 text-center md:text-left">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Story Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.5 }}
                                        className="text-wedding-charcoal text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6"
                                        style={{ fontFamily: "var(--font-display)" }}
                                    >
                                        {currentStory.title}
                                    </motion.h3>

                                    {/* Decorative Line */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="w-20 h-[2px] bg-wedding-red mx-auto md:mx-0 mb-6 md:mb-8 origin-left"
                                    />

                                    {/* Story Content */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="text-wedding-dove text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto md:mx-0"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        {currentStory.content}
                                    </motion.p>

                                    {/* Heart Icon */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5, duration: 0.3 }}
                                        className="mt-8 md:mt-10"
                                    >
                                        <Heart
                                            className="text-wedding-red/60 mx-auto md:mx-0"
                                            size={24}
                                            fill="currentColor"
                                        />
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Pagination & Controls */}
                <div className="mt-8 md:mt-12 flex flex-col items-center gap-6">
                    {/* Progress Bar */}
                    <div className="w-full max-w-md">
                        <div className="h-1 bg-wedding-champagne/40 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-wedding-red rounded-full"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.05 }}
                            />
                        </div>
                    </div>

                    {/* Video Player Style Controls */}
                    <div className="flex items-center justify-center gap-2">
                        {/* Previous Button */}
                        <button
                            onClick={() => {
                                goToPrevious();
                                setIsPlaying(false);
                            }}
                            className="p-3 rounded-full bg-wedding-charcoal/5 hover:bg-wedding-red/20 border border-wedding-red/30 text-wedding-charcoal hover:text-wedding-red transition-all duration-300 group"
                            aria-label="Previous story"
                        >
                            <ChevronLeft
                                size={20}
                                className="transform group-hover:-translate-x-0.5 transition-transform"
                            />
                        </button>

                        {/* Play/Pause Button - Center & Larger */}
                        <button
                            onClick={togglePlayPause}
                            className="p-4 rounded-full bg-wedding-red hover:bg-wedding-darkred text-wedding-charcoal transition-all duration-300 shadow-lg group"
                            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                        >
                            {isPlaying ? (
                                <Pause size={24} />
                            ) : (
                                <Play size={24} className="ml-0.5" />
                            )}
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={() => {
                                goToNext();
                                setIsPlaying(false);
                            }}
                            className="p-3 rounded-full bg-wedding-charcoal/5 hover:bg-wedding-red/20 border border-wedding-red/30 text-wedding-charcoal hover:text-wedding-red transition-all duration-300 group"
                            aria-label="Next story"
                        >
                            <ChevronRight
                                size={20}
                                className="transform group-hover:translate-x-0.5 transition-transform"
                            />
                        </button>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex items-center gap-3">
                        {stories.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    goToStory(index);
                                    setIsPlaying(false);
                                }}
                                className={`relative transition-all duration-300 ${index === currentIndex
                                    ? "w-8 h-3"
                                    : "w-3 h-3 hover:scale-110"
                                    }`}
                                aria-label={`Go to story ${index + 1}`}
                                aria-current={index === currentIndex ? "true" : "false"}
                            >
                                <span
                                    className={`absolute inset-0 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-wedding-red"
                                        : "bg-wedding-champagne hover:bg-wedding-red/60"
                                        }`}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Keyboard Hint */}
                    <p
                        className="text-wedding-dove/50 text-xs"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        Press Space to {isPlaying ? "pause" : "play"} • Arrow keys to navigate
                    </p>
                </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="relative z-10 pt-8 pb-16 md:pb-24">
                <div className="flex justify-center items-center gap-4">
                    <div className="w-12 h-[1px] bg-wedding-red/40" />
                    <Heart
                        className="text-wedding-red/40"
                        size={16}
                        fill="currentColor"
                    />
                    <div className="w-12 h-[1px] bg-wedding-red/40" />
                </div>
            </div>
        </section>
    );
}
