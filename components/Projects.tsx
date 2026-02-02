"use client";

import { motion } from "framer-motion";

const macroProjects = [
    {
        id: "macro-1",
        title: "The 150-Acre Strategy",
        category: "Macro Node / Urban Strategy",
        description: "Navigating dense contours and sensitive wetlands to maximize development yield via a strategically organized phasing plan.",
    },
    {
        id: "macro-2",
        title: "HA Zone Massing Study",
        category: "Macro Node / Feasibility",
        description: "Developing data-backed construction options for a steep corner lot under strict Heritage Area (HA) zoning constraints.",
    },
];

const microNodes = [
    {
        id: "micro-4",
        title: "Personal Portfolio",
        category: "Micro Node / Web",
        description: "A high-performance scrollytelling experience built with Next.js, Framer Motion, and Antigravity. Deployed on Vercel with automated GitHub CI/CD workflows.",
    },
    {
        id: "micro-1",
        title: "GIS SOP Automation",
        category: "Micro Node / Lab",
        description: "Developed small models to automate repeating GIS tasks and speed up development applications.",
    },
    {
        id: "micro-2",
        title: "Vibe Coding Platforms",
        category: "Micro Node / Web",
        description: "Built functional web platforms for Solar Energy and Agriculture Machinery sectors using fluid AI-driven workflows.",
    },
    {
        id: "micro-3",
        title: "Spatial API Integration",
        category: "Micro Node / Systems",
        description: "Integrated web map servers to create live-updating geospatial datasets for internal planning workflows.",
    },
    {
        id: "micro-5",
        title: "ZoneAI",
        category: "Micro Node / Lab",
        description: "A lightweight zoning finder built to explore Python, geospatial workflows, and rapid app development.",
    },
];

export default function Projects() {
    return (
        <section className="relative z-10 min-h-screen px-6 py-24 md:px-20 overflow-hidden">
            {/* Isometric Building Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(30deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6),
                        linear-gradient(150deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6),
                        linear-gradient(30deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6),
                        linear-gradient(150deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6),
                        linear-gradient(60deg, #60a5fa 25%, transparent 25.5%, transparent 75%, #60a5fa 75%, #60a5fa),
                        linear-gradient(60deg, #60a5fa 25%, transparent 25.5%, transparent 75%, #60a5fa 75%, #60a5fa)
                    `,
                    backgroundSize: '80px 140px',
                    backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
                }} />
            </div>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        Selected Works
                    </h2>
                    <p className="text-gray-400 font-mono italic">Macro Nodes</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {macroProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 transition-colors"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <span className="text-xs font-mono text-blue-400 mb-2 block tracking-wider uppercase">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-sans">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        The Lab
                    </h2>
                    <p className="text-gray-400 font-mono italic">Micro Nodes & Digital Garden</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {microNodes.map((node) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all"
                        >
                            <span className="text-[10px] font-mono text-gray-500 mb-2 block uppercase tracking-widest">
                                {node.category}
                            </span>
                            <h4 className="text-lg font-semibold text-white mb-2">
                                {node.title}
                            </h4>
                            <p className="text-sm text-gray-400 leading-relaxed font-sans">
                                {node.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
