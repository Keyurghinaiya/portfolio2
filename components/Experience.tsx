"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        role: "Planning Technologist",
        company: "ZZap Planning + Architecture Consultants",
        period: "2024 - Present",
        description: "Specializing in spatial systems and technical drafting to bridge the gap between architectural vision and urban constraints. Developing high-yield massing models and automated GIS workflows.",
    }
];

export default function Experience() {
    return (
        <section className="relative z-10 min-h-screen bg-[#121212] px-6 py-24 md:px-20 text-white overflow-hidden">
            {/* Isometric Building Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]">
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
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-20 tracking-tight"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l border-white/20 hover:border-blue-500 transition-colors duration-300 group"
                        >
                            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white/20 group-hover:bg-blue-500 transition-colors duration-300" />

                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    {exp.role}
                                </h3>
                                <span className="text-sm font-mono text-gray-500">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="text-lg text-gray-400 mb-2 font-medium">
                                {exp.company}
                            </div>

                            <p className="text-gray-500 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
