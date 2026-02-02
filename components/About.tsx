"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./MapComponent"), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-[#1a1a1a] animate-pulse" />
});

export default function About() {
    return (
        <section className="relative z-10 min-h-[50vh] px-6 py-24 md:px-20 flex items-center overflow-hidden">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Systems Thinking. <br />
                        <span className="text-blue-500">Spatial Reality.</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
                        As an <span className="text-white">Urban Planning Technologist</span>, I build tools that translate rigid physical constraints into fluid digital workflows.
                    </p>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
                        Whether it&apos;s optimizing a 150-acre master plan or automating GIS workflows via AI, my focus is always on high-yield, data-backed solutions.
                    </p>

                    <div className="border-t border-white/10 pt-8 mt-8">
                        <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Personal Node</h4>
                        <div className="flex flex-wrap gap-4">
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Advanced Drafting & Site Planning</span>
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Massing Feasibility Studies</span>
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">GIS</span>
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">3D Renderings & Animations</span>
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Zoning Analysis</span>
                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">AI Prompt Engineering</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/5"
                >
                    <LeafletMap />
                    {/* Overlay gradient for seamless integration */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-900/10 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
