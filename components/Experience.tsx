"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import { experiences } from "@/data/portfolio";

const FlipBookOverlay = dynamic(() => import("./FlipBookOverlay"), {
    ssr: false
});

export default function Experience() {
    const [activePortfolio, setActivePortfolio] = useState<string | null>(null);

    const togglePortfolio = (type: string) => {
        setActivePortfolio(activePortfolio === type ? null : type);
    };

    return (
        <section className="relative z-10 min-h-screen px-6 py-24 md:px-20 text-white overflow-hidden" id="experience">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-bold mb-20 tracking-tight"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.article
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 50,
                                damping: 20
                            }}
                            className="relative pl-8 border-l border-white/20 hover:border-blue-500 transition-colors duration-300 group will-change-transform"
                        >
                            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white/20 group-hover:bg-blue-500 transition-colors duration-300" aria-hidden="true" />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    {exp.role}
                                </h3>
                                <time className="text-sm font-mono text-gray-500">
                                    {exp.period}
                                </time>
                            </div>

                            <div className="text-lg text-gray-400 mb-6 font-medium">
                                {exp.company}
                            </div>

                            <ul className="space-y-3 mb-8" aria-label={`Details for ${exp.role} at ${exp.company}`}>
                                {exp.details.map((detail, dIndex) => (
                                    <li key={dIndex} className="text-gray-500 leading-relaxed max-w-2xl flex items-start">
                                        <span className="w-1.5 h-1.5 bg-blue-500/40 rounded-full mt-2.5 mr-3 shrink-0" aria-hidden="true" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {exp.links ? (
                                <div className="flex flex-wrap gap-6">
                                    {exp.links.map((link, lIndex) => (
                                        <div key={lIndex}>
                                            <button
                                                onClick={() => togglePortfolio(link.type)}
                                                className={`inline-flex items-center transition-colors text-sm font-medium cursor-pointer ${activePortfolio === link.type ? 'text-blue-300' : 'text-blue-400 hover:text-blue-300'
                                                    }`}
                                                aria-expanded={activePortfolio === link.type}
                                                aria-controls={`portfolio-viewer-${exp.id}`}
                                            >
                                                {activePortfolio === link.type ? 'Close Portfolio' : link.label}
                                                <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${activePortfolio === link.type ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : null}

                            {/* Inline Portfolio Viewer */}
                            {exp.links?.some(l => activePortfolio === l.type) && (
                                <div className="mt-8" id={`portfolio-viewer-${exp.id}`}>
                                    <FlipBookOverlay
                                        onClose={() => setActivePortfolio(null)}
                                        pdfUrl="https://flipbookpdf.net/web/site/7dbf4cfe074a7e360d29f5b95c884cd1cd593ebc202602.pdf.html"
                                    />
                                </div>
                            )}
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
