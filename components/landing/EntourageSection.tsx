"use client";

import { motion } from "framer-motion";

export function EntourageSection() {
    const principalSponsors = [
        { male: "Mr. Ulysiss Tundag", female: "Ms. Kristine Amin Yu Darlucio" },
        { male: "Mr. John Rojas", female: "Mrs. Loida Rojas" },
        { male: "Mr. Jerry Battung", female: "Mrs. Mary Ann Battung" },
        { male: "Mr. Ryan Ondoy", female: "Mrs. Kitchie Ondoy" },
        { male: "Mr. Jaypee Sacdal", female: "Mrs. Vicky Sacdal" },
        { male: "Mr. Luis Deytiquez", female: "Mrs. Cynthia Matias" },
        { male: "Mr. Ogie Cando", female: "Mrs. Amy Cando" },
        { male: "Mr. Julius Tiquia", female: "Mrs. Fredizminda Tiquia" },
        { male: "Mr. Froilan Patelo", female: "Mrs. Jenny Patelo" },
        { male: "Mr. Oscar Gestiada", female: "Ms. Jenny Galves" },
        { male: "Mr. Ferdinand Patelo", female: "Ms. Sally Belmonte" },
    ];

    const bestMenMaidsOfHonor = [
        { male: "John Patrick Deytiquez", female: "" },
        { male: "Jan Carl Dampil", female: "Irish Racel Tundag" },
        { male: "Justin Henry Abrina", female: "Joyce Ann Capulong" },
    ];

    const bridesmaidsGroomsmen = [
        { male: "Emmanuel Tundag", female: "Elleria Faye Tundag" },
        { male: "Socrates Tundag Jr.", female: "Josephine Gacita" },
        { male: "Willmar Niño", female: "Jimin Toribio" },
        { male: "Darwin Deytiquez", female: "Nerliza Quintana" },
        { male: "Mark Kevin Deytiquez", female: "Ara Bhela Dungca" },
    ];

    return (
        <section id="entourage" className="bg-wedding-blush">
            <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 lg:py-32">
                {/* Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p
                        className="text-wedding-red text-xs tracking-[0.3em] mb-4"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        OUR ENTOURAGE
                    </p>
                    <h2
                        id="entourage-title"
                        className="text-wedding-charcoal text-4xl md:text-5xl lg:text-6xl mb-8"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Those Who Stand With Us
                    </h2>
                    <div className="w-16 h-[1px] bg-wedding-red mx-auto" />
                </motion.div>

                {/* Parents */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Bride's Parents */}
                        <div className="text-center bg-wedding-ivory/50 rounded-xl p-6">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-4"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Bride&apos;s Parents
                            </p>
                            <p
                                className="text-wedding-charcoal text-base md:text-lg"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Mr. Socrates Tundag
                            </p>
                            <p
                                className="text-wedding-slate text-sm"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                &
                            </p>
                            <p
                                className="text-wedding-charcoal text-base md:text-lg"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Mrs. Ma. Cecilia Patelo Tundag
                            </p>
                        </div>
                        {/* Groom's Parents */}
                        <div className="text-center bg-wedding-ivory/50 rounded-xl p-6">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-4"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Groom&apos;s Parents
                            </p>
                            <p
                                className="text-wedding-charcoal text-base md:text-lg"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Mr. Rogelio Deytiquez
                            </p>
                            <p
                                className="text-wedding-slate text-sm"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                &
                            </p>
                            <p
                                className="text-wedding-charcoal text-base md:text-lg"
                                style={{ fontFamily: "var(--font-heading)" }}
                            >
                                Mrs. Marichu Cuevas Deytiquez
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Principal Sponsors */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3
                        className="text-wedding-charcoal text-2xl md:text-3xl text-center mb-8"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Principal Sponsors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {principalSponsors.map((pair, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center gap-3 text-center py-2"
                            >
                                <p
                                    className="text-wedding-slate text-sm md:text-base"
                                    style={{ fontFamily: "var(--font-body)" }}
                                >
                                    {pair.male}
                                </p>
                                <span className="text-wedding-red">&</span>
                                <p
                                    className="text-wedding-slate text-sm md:text-base"
                                    style={{ fontFamily: "var(--font-body)" }}
                                >
                                    {pair.female}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Best Men & Maids of Honor */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3
                        className="text-wedding-charcoal text-xl md:text-2xl text-center mb-8"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Best Men & Maids of Honor
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <div className="text-center">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-3"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Best Men
                            </p>
                            <div className="space-y-2">
                                {bestMenMaidsOfHonor.map((pair, index) => (
                                    <p key={index} className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>
                                        {pair.male}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="text-center">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-3"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Maids of Honor
                            </p>
                            <div className="space-y-2">
                                {bestMenMaidsOfHonor.filter(p => p.female).map((pair, index) => (
                                    <p key={index} className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>
                                        {pair.female}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Secondary Sponsors - Candle, Veil, Cord */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h3
                        className="text-wedding-charcoal text-xl md:text-2xl text-center mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                    >
                        Secondary Sponsors
                    </h3>
                    <p
                        className="text-wedding-dove text-sm italic text-center mb-8"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        Candle, Veil & Cord
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="text-center">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-3"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Candle
                            </p>
                            <p
                                className="text-wedding-slate text-sm"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Charlie Magne Lucero
                            </p>
                            <p
                                className="text-wedding-slate text-sm"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Marvilyn Torres
                            </p>
                        </div>
                        <div className="text-center">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-3"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Veil
                            </p>
                            <p
                                className="text-wedding-slate text-sm"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Arnaldo Sodario
                            </p>
                            <p
                                className="text-wedding-slate text-sm"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Tricia Mae Datus
                            </p>
                        </div>
                        <div className="text-center">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-3"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Cord
                            </p>
                            <p
                                className="text-wedding-slate text-sm"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Leonard Bobadilla
                            </p>
                            <p
                                className="text-wedding-slate text-sm"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Marjorie Xina Baltazar
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Bridesmaids & Groomsmen */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="text-center">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-4"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Bridesmaids
                            </p>
                            <div className="space-y-2">
                                {bridesmaidsGroomsmen.map((pair, index) => (
                                    <p key={index} className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>{pair.female}</p>
                                ))}
                            </div>
                        </div>
                        <div className="text-center">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-4"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Groomsmen
                            </p>
                            <div className="space-y-2">
                                {bridesmaidsGroomsmen.map((pair, index) => (
                                    <p key={index} className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>{pair.male}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Flower Girls & Bearers */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {/* Flower Girls */}
                        <div className="text-center">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-4"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Flower Girls & Little Bride
                            </p>
                            <div className="space-y-2">
                                <p className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>
                                    <span className="text-wedding-dove">Little Bride:</span> Maeve Kai&apos;sa Deytiquez
                                </p>
                                <p className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>Erica Cando</p>
                                <p className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>Roma De Guzman</p>
                                <p className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>Jen-jen Dimla</p>
                            </div>
                        </div>
                        {/* Bearers */}
                        <div className="text-center">
                            <p
                                className="text-wedding-red text-xs tracking-[0.2em] uppercase mb-4"
                                style={{ fontFamily: "var(--font-body)" }}
                            >
                                Bearers & Little Groom
                            </p>
                            <div className="space-y-2">
                                <p className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>
                                    <span className="text-wedding-dove">Little Groom:</span> Shanlee Ezekiel Tundag
                                </p>
                                <p className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>
                                    <span className="text-wedding-dove">Ring:</span> Chester Carvajal
                                </p>
                                <p className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>
                                    <span className="text-wedding-dove">Bible:</span> Marco Cholo De Leon
                                </p>
                                <p className="text-wedding-slate text-sm" style={{ fontFamily: "var(--font-body)" }}>
                                    <span className="text-wedding-dove">Coin:</span> Sonny Fajardo
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
