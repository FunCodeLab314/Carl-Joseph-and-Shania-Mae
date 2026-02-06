"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ImageIcon, Grid3X3, Layers } from "lucide-react";

export function GallerySection() {
    // Gallery images - curated selection from wedding photoshoot (16 images)
    const galleryImages = [
        // Formal photoshoot (image0 folder)
        { id: 1, src: "/photos/image0/IMG_2316.webp", isPlaceholder: false },
        { id: 2, src: "/photos/image0/IMG_2198.webp", isPlaceholder: false },
        { id: 3, src: "/photos/image0/IMG_2254.webp", isPlaceholder: false },
        { id: 4, src: "/photos/image0/IMG_2265.webp", isPlaceholder: false },
        { id: 5, src: "/photos/image0/IMG_2330.webp", isPlaceholder: false },
        { id: 6, src: "/photos/image0/IMG_2549.webp", isPlaceholder: false },
        { id: 7, src: "/photos/image0/IMG_2651.webp", isPlaceholder: false },
        { id: 8, src: "/photos/image0/IMG_2728.webp", isPlaceholder: false },
        // Pre-nuptial session (image1 folder - updated high quality)
        { id: 9, src: "/photos/image1/DSC00001.webp", isPlaceholder: false },
        { id: 10, src: "/photos/image1/DSC00023.webp", isPlaceholder: false },
        { id: 11, src: "/photos/image1/DSC00067.webp", isPlaceholder: false },
        { id: 12, src: "/photos/image1/DSC00107.webp", isPlaceholder: false },
        { id: 13, src: "/photos/image1/DSC00155.webp", isPlaceholder: false },
        { id: 14, src: "/photos/image1/DSC00219.webp", isPlaceholder: false },
        { id: 15, src: "/photos/image1/DSC00268.webp", isPlaceholder: false },
        { id: 16, src: "/photos/image1/DSC01288.webp", isPlaceholder: false },
    ];

    const [isExpanded, setIsExpanded] = useState(false);
    const [isScattering, setIsScattering] = useState(false);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleExpand = () => {
        setIsScattering(true);
        setTimeout(() => {
            setIsExpanded(true);
            setIsScattering(false);
        }, 600);
    };

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    // Scatter positions for each card (16 positions for 16 images)
    const scatterPositions = [
        { x: -150, y: -100, rotate: -25, scale: 0.8 },
        { x: 180, y: -80, rotate: 30, scale: 0.75 },
        { x: -120, y: 120, rotate: 20, scale: 0.7 },
        { x: 160, y: 100, rotate: -35, scale: 0.8 },
        { x: -200, y: 0, rotate: 15, scale: 0.6 },
        { x: 220, y: -20, rotate: -20, scale: 0.65 },
        { x: 0, y: -150, rotate: 10, scale: 0.7 },
        { x: 0, y: 180, rotate: -15, scale: 0.75 },
        { x: -80, y: -140, rotate: 25, scale: 0.6 },
        { x: 100, y: 150, rotate: -30, scale: 0.65 },
        { x: -180, y: 80, rotate: -10, scale: 0.7 },
        { x: 140, y: -120, rotate: 35, scale: 0.6 },
        { x: -60, y: 100, rotate: 18, scale: 0.72 },
        { x: 80, y: -100, rotate: -22, scale: 0.68 },
        { x: -140, y: -60, rotate: 12, scale: 0.66 },
        { x: 120, y: 80, rotate: -18, scale: 0.74 },
    ];

    return (
        <>
            <section id="gallery" className="bg-wedding-black py-12 md:py-24 lg:py-32 overflow-hidden">
                {/* Header - Mobile First */}
                <motion.div
                    className="text-center mb-8 md:mb-16 px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p
                        className="text-wedding-burgundy text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4 uppercase"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        MOMENTS
                    </p>
                    <h2
                        id="gallery-title"
                        className="text-wedding-gold text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Our Gallery
                    </h2>
                    <div className="w-12 md:w-16 h-[1px] bg-wedding-burgundy mx-auto" />
                </motion.div>

                {/* Gallery Container */}
                <motion.div
                    className="max-w-6xl mx-auto px-4 md:px-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Stacked View with Scatter Animation */}
                    <AnimatePresence mode="wait">
                        {!isExpanded ? (
                            <motion.div
                                key="stacked"
                                className="relative cursor-pointer"
                                onClick={handleExpand}
                                whileTap={{ scale: 0.98 }}
                                whileHover={{ scale: 1.02 }}
                                exit={{ opacity: 0 }}
                            >
                                {/* Stacked Cards Container */}
                                <div className="relative w-full max-w-[280px] md:max-w-[400px] mx-auto h-[350px] md:h-[500px]">
                                    {/* Scattering Cards */}
                                    {galleryImages.slice(0, 12).map((image, index) => (
                                        <motion.div
                                            key={image.id}
                                            className="absolute left-1/2 top-1/2 w-[200px] md:w-[280px] aspect-[4/5] bg-wedding-jet border border-wedding-gold/20 rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
                                            initial={{
                                                x: "-50%",
                                                y: "-50%",
                                                rotate: (index % 5 - 2) * 3,
                                                scale: 1 - index * 0.02,
                                                zIndex: 12 - index,
                                            }}
                                            animate={isScattering ? {
                                                x: scatterPositions[index].x,
                                                y: scatterPositions[index].y,
                                                rotate: scatterPositions[index].rotate,
                                                scale: scatterPositions[index].scale,
                                                opacity: 0,
                                            } : {
                                                x: "-50%",
                                                y: "-50%",
                                                rotate: (index % 5 - 2) * 3,
                                                scale: 1 - index * 0.02,
                                                zIndex: 12 - index,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: isScattering ? index * 0.03 : 0,
                                                ease: "easeOut",
                                            }}
                                            style={{
                                                transformOrigin: "center center",
                                            }}
                                        >
                                            {/* Card Content */}
                                            {index === 0 ? (
                                                <>
                                                    {/* Top card shows actual photo */}
                                                    <img
                                                        src={galleryImages[0].src}
                                                        alt="Gallery Preview"
                                                        className="w-full h-full object-cover"
                                                    />

                                                    {/* Click to expand overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-wedding-black/90 via-wedding-black/30 to-transparent flex flex-col items-center justify-end pb-6 md:pb-10">
                                                        <p className="text-wedding-gold/80 text-sm md:text-lg mb-3" style={{ fontFamily: "var(--font-body)" }}>
                                                            {galleryImages.length} Photos
                                                        </p>
                                                        <div className="flex items-center gap-2 bg-wedding-burgundy/90 hover:bg-wedding-burgundy text-wedding-gold px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base transition-colors">
                                                            <Grid3X3 size={16} className="md:w-5 md:h-5" />
                                                            <span style={{ fontFamily: "var(--font-body)" }}>
                                                                <span className="md:hidden">Tap to View</span>
                                                                <span className="hidden md:inline">Click to View All</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                /* Background cards show photos too for a nicer stacked look */
                                                <img
                                                    src={galleryImages[index]?.src || galleryImages[0].src}
                                                    alt={`Gallery ${index + 1}`}
                                                    className="w-full h-full object-cover opacity-80"
                                                />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            /* Expanded Grid */
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Collapse Button */}
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="flex items-center gap-2 mx-auto mb-4 md:mb-6 bg-wedding-burgundy/20 hover:bg-wedding-burgundy/30 text-wedding-gold px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base transition-colors"
                                >
                                    <Layers size={16} className="md:w-5 md:h-5" />
                                    <span style={{ fontFamily: "var(--font-body)" }}>Collapse</span>
                                </button>

                                {/* Grid */}
                                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
                                    {galleryImages.map((image, index) => (
                                        <motion.div
                                            key={image.id}
                                            className="aspect-square rounded-lg md:rounded-xl overflow-hidden bg-wedding-jet border border-wedding-gold/20 cursor-pointer hover:border-wedding-gold/50 transition-colors"
                                            initial={{
                                                opacity: 0,
                                                scale: 0.5,
                                                x: scatterPositions[index].x / 3,
                                                y: scatterPositions[index].y / 3,
                                                rotate: scatterPositions[index].rotate,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                x: 0,
                                                y: 0,
                                                rotate: 0,
                                            }}
                                            transition={{
                                                delay: index * 0.04,
                                                duration: 0.4,
                                                type: "spring",
                                                stiffness: 100,
                                            }}
                                            whileHover={{ scale: 1.05, zIndex: 10 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => openLightbox(index)}
                                        >
                                            {image.isPlaceholder ? (
                                                <div className="w-full h-full flex flex-col items-center justify-center">
                                                    <ImageIcon className="text-wedding-burgundy/30 md:mb-2" size={24} />
                                                    <p className="hidden md:block text-wedding-gold/40 text-xs" style={{ fontFamily: "var(--font-body)" }}>
                                                        Photo {index + 1}
                                                    </p>
                                                </div>
                                            ) : (
                                                <img
                                                    src={image.src!}
                                                    alt={`Gallery ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Photo count */}
                    <p className="text-center text-wedding-gold/50 text-xs md:text-sm mt-6 md:mt-8" style={{ fontFamily: "var(--font-body)" }}>
                        {galleryImages.length} moments captured
                    </p>
                </motion.div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                        style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
                        onClick={closeLightbox}
                    >
                        <div className="absolute inset-0 bg-wedding-black/90" />

                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-20 text-wedding-gold/80 hover:text-wedding-gold p-2 bg-wedding-black/50 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative z-10 w-full max-w-3xl max-h-[80vh] aspect-[4/3] rounded-xl overflow-hidden bg-wedding-jet border border-wedding-gold/30"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {galleryImages[selectedImage].isPlaceholder ? (
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <ImageIcon className="text-wedding-burgundy/30 mb-4" size={64} />
                                    <p className="text-wedding-gold/60 text-lg" style={{ fontFamily: "var(--font-display)" }}>
                                        Photo {selectedImage + 1}
                                    </p>
                                    <p className="text-wedding-gold/40 text-sm mt-2" style={{ fontFamily: "var(--font-body)" }}>
                                        Coming soon...
                                    </p>
                                </div>
                            ) : (
                                <img
                                    src={galleryImages[selectedImage].src!}
                                    alt={`Gallery ${selectedImage + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            )}
                        </motion.div>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-wedding-black/70 text-wedding-gold px-4 py-2 rounded-full text-sm">
                            {selectedImage + 1} / {galleryImages.length}
                        </div>

                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2 max-w-[90vw] overflow-x-auto pb-2 px-4">
                            {galleryImages.map((image, index) => (
                                <button
                                    key={image.id}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(index);
                                    }}
                                    className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden border-2 transition-all ${index === selectedImage
                                        ? "border-wedding-gold"
                                        : "border-transparent opacity-50 hover:opacity-100"
                                        }`}
                                >
                                    {image.isPlaceholder ? (
                                        <div className="w-full h-full bg-wedding-jet flex items-center justify-center">
                                            <ImageIcon className="text-wedding-burgundy/30" size={16} />
                                        </div>
                                    ) : (
                                        <img
                                            src={image.src!}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
