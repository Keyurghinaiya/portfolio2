"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Core Drafting",
        skills: ["Civil3D", "AutoCAD", "SketchUp", "Trimble Layout"],
    },
    {
        title: "Planning",
        skills: ["Policy Review", "Red Book", "Building Code (exploring)"],
    },
    {
        title: "GIS",
        skills: ["QGIS", "ArcGIS Pro", "ArcGIS Online", "Model Builder/Model Designer", "Postgre SQL (PostGIS)"],
    },
    {
        title: "Visualization",
        skills: ["Enscape", "Photoshop", "Illustrator", "InDesign", "AI (Generative Rendering)"],
    },
    {
        title: "Development",
        skills: ["Antigravity", "Python (Automations)", "Google AI Studio (Whisk)"],
    },
];

export default function Skills() {
    return (
        <section className="relative z-10 min-h-[50vh] px-6 py-24 md:px-20 overflow-hidden">
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
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-20 tracking-tight"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="text-xl font-semibold text-blue-400 mb-6 border-b border-white/10 pb-2">
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="text-gray-400 hover:text-white transition-colors flex items-center">
                                        <span className="w-1.5 h-1.5 bg-white/20 rounded-full mr-3" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
