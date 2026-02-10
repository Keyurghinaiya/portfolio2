"use client";

import { motion } from "framer-motion";
import { macroProjects, microNodes } from "@/data/portfolio";

export default function Projects() {
    return (
        <section className="relative z-10 min-h-screen px-6 py-24 md:px-20 overflow-hidden" id="projects">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32" role="list">
                    {macroProjects.map((project) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 transition-colors will-change-transform"
                            role="listitem"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
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
                        </motion.article>
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
                    {microNodes.map((node) => (
                        <motion.article
                            key={node.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all will-change-transform"
                            role="listitem"
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
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
