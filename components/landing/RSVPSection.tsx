"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { submitRSVP } from "@/app/actions";
import { ConfirmationModal } from "./ConfirmationModal";

export function RSVPSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        guests: "1",
        attending: "",
        message: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const data = new FormData();
            data.append("fullName", formData.name);
            data.append("email", formData.email);
            data.append("guestCount", formData.guests);
            data.append("attending", formData.attending);
            data.append("message", formData.message);

            const result = await submitRSVP(data);

            if (result.success) {
                if (formData.attending === "yes") {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 4000);
                }
                setShowModal(true);
            } else {
                setError(result.message);
            }
        } catch {
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <ConfirmationModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                formData={formData}
                showConfetti={showConfetti}
            />

            <section
                id="rsvp"
                className="relative min-h-screen flex items-center justify-center py-16 md:py-24"
            >
                {/* Background Placeholder */}
                <PlaceholderImage
                    className="absolute inset-0 w-full h-full"
                    label="RSVP Background"
                    variant="rsvp"
                />
                <div className="absolute inset-0 bg-wedding-charcoal/85" />

                {/* Form Card */}
                <motion.div
                    className="relative z-10 w-full max-w-2xl mx-6 bg-wedding-pearl/10 backdrop-blur-md border border-wedding-gold/30 rounded-xl p-8 md:p-12 lg:p-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Header */}
                    <div className="text-center mb-10 md:mb-12">
                        <h2
                            className="text-wedding-ivory text-5xl md:text-6xl lg:text-7xl mb-4"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            RSVP
                        </h2>
                        <p
                            className="text-wedding-champagne/80 text-sm md:text-base"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            Please respond by January 15, 2026
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Full Name */}
                        <div>
                            <label
                                className="block text-wedding-gold text-xs tracking-[0.2em] uppercase mb-2"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Your Full Name <span className="text-wedding-gold">*</span>
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-transparent border-b-2 border-wedding-champagne/40 text-wedding-ivory py-3 focus:border-wedding-gold focus:outline-none transition-all duration-300 placeholder:text-wedding-champagne/50"
                                style={{ fontFamily: "var(--font-body)" }}
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                className="block text-wedding-gold text-xs tracking-[0.2em] uppercase mb-2"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Email Address <span className="text-wedding-gold">*</span>
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-transparent border-b-2 border-wedding-champagne/40 text-wedding-ivory py-3 focus:border-wedding-gold focus:outline-none transition-all duration-300 placeholder:text-wedding-champagne/50"
                                style={{ fontFamily: "var(--font-body)" }}
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Number of Guests */}
                        <div>
                            <label
                                className="block text-wedding-gold text-xs tracking-[0.2em] uppercase mb-2"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Number of Guests
                            </label>
                            <select
                                value={formData.guests}
                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                className="w-full bg-transparent border-b-2 border-wedding-champagne/40 text-wedding-ivory py-3 focus:border-wedding-gold focus:outline-none transition-all duration-300 cursor-pointer"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                <option value="1" className="bg-wedding-charcoal">
                                    1 Guest (Just me)
                                </option>
                                <option value="2" className="bg-wedding-charcoal">
                                    2 Guests (Me + 1)
                                </option>
                            </select>
                        </div>

                        {/* Attendance - Radio Buttons */}
                        <div>
                            <label
                                className="block text-wedding-gold text-xs tracking-[0.2em] uppercase mb-4"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Will You Attend? <span className="text-wedding-gold">*</span>
                            </label>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <label
                                    className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${formData.attending === "yes"
                                        ? "border-wedding-gold bg-wedding-gold/20"
                                        : "border-wedding-champagne/30 hover:border-wedding-champagne/60"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="yes"
                                        checked={formData.attending === "yes"}
                                        onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                                        className="sr-only"
                                        required
                                    />
                                    <Heart
                                        className={`${formData.attending === "yes" ? "text-wedding-gold" : "text-wedding-champagne/50"}`}
                                        size={20}
                                        fill={formData.attending === "yes" ? "currentColor" : "none"}
                                    />
                                    <span
                                        className={`text-sm ${formData.attending === "yes" ? "text-wedding-ivory" : "text-wedding-champagne/70"}`}
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        Joyfully Accepting
                                    </span>
                                </label>

                                <label
                                    className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${formData.attending === "no"
                                        ? "border-wedding-dove bg-wedding-dove/20"
                                        : "border-wedding-champagne/30 hover:border-wedding-champagne/60"
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="attending"
                                        value="no"
                                        checked={formData.attending === "no"}
                                        onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                                        className="sr-only"
                                    />
                                    <X
                                        className={`${formData.attending === "no" ? "text-wedding-dove" : "text-wedding-champagne/50"}`}
                                        size={20}
                                    />
                                    <span
                                        className={`text-sm ${formData.attending === "no" ? "text-wedding-ivory" : "text-wedding-champagne/70"}`}
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        Regretfully Declining
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                className="block text-wedding-gold text-xs tracking-[0.2em] uppercase mb-2"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Message for the Couple (Optional)
                            </label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full bg-transparent border-b-2 border-wedding-champagne/40 text-wedding-ivory py-3 focus:border-wedding-gold focus:outline-none transition-all duration-300 resize-none placeholder:text-wedding-champagne/50"
                                style={{ fontFamily: "var(--font-body)" }}
                                placeholder="Share your wishes..."
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            {/* Error Message */}
                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mb-4"
                                >
                                    <p
                                        className="text-red-300 text-sm text-center"
                                        style={{ fontFamily: "var(--font-body)" }}
                                    >
                                        {error}
                                    </p>
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={!isSubmitting ? { scale: 1.03 } : {}}
                                whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                                animate={!isSubmitting ? { boxShadow: ["0 0 0 0 rgba(212, 175, 111, 0)", "0 0 0 15px rgba(212, 175, 111, 0)"] } : {}}
                                transition={!isSubmitting ? { repeat: Infinity, duration: 1.5 } : {}}
                                className={`w-full bg-wedding-gold text-wedding-charcoal px-16 md:px-20 py-5 md:py-6 text-sm md:text-base tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-3 rounded-lg shadow-xl ${isSubmitting
                                    ? "opacity-70 cursor-not-allowed"
                                    : "hover:bg-wedding-antique hover:shadow-2xl"
                                    }`}
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    "Send RSVP"
                                )}
                            </motion.button>
                        </div>
                    </form>

                    {/* Wedding Gifts Message */}
                    <motion.div
                        className="text-center mt-10 max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p
                            className="text-wedding-champagne/60 text-xs md:text-sm leading-relaxed italic"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            &ldquo;We are blessed with everything we need for our home. Your presence is already a gift, but if you wish to give, a monetary contribution will help us as we start our new chapter together.&rdquo;
                        </p>
                    </motion.div>

                    {/* Heart Icon */}
                    <div className="flex justify-center mt-8">
                        <Heart className="text-wedding-gold/50" size={24} fill="currentColor" />
                    </div>
                </motion.div>
            </section>
        </>
    );
}
