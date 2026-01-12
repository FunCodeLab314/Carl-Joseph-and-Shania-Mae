"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send } from "lucide-react";

export function PaperPlane() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLanded, setHasLanded] = useState(false);
    const { scrollYProgress } = useScroll();

    // Transform scroll progress to position
    const x = useTransform(scrollYProgress, [0.3, 0.85], ["-100px", "0px"]);
    const y = useTransform(scrollYProgress, [0.3, 0.85], ["0vh", "0vh"]);
    const rotate = useTransform(scrollYProgress, [0.3, 0.5, 0.85], [-20, 10, 0]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.8, 0.9], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0.3, 0.85], [0.8, 1.2]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) => {
            setIsVisible(value > 0.25 && value < 0.9);
            setHasLanded(value > 0.85);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed right-8 md:right-16 z-40 pointer-events-none"
            style={{
                x,
                rotate,
                opacity,
                scale,
                top: "50%",
                translateY: "-50%",
            }}
        >
            <motion.div
                animate={hasLanded ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0]
                } : {}}
                transition={{ duration: 0.5 }}
            >
                <Send
                    size={32}
                    className={`text-wedding-gold drop-shadow-lg transition-colors duration-300 ${hasLanded ? "text-wedding-antique" : "text-wedding-gold"
                        }`}
                    style={{
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
                        transform: "rotate(-45deg)"
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
