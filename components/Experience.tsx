"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        role: "Planning Technologist",
        company: "ZZap Planning + Architecture Consultants",
        period: "March 2025 - Present",
        details: [
            "Specializing in spatial systems and technical drafting for complex urban projects.",
            "Creating high-yield massing feasibility studies with future-editable models and parametric workflows.",
            "Developed Standard Operating Procedures (SOPs) for standardized CAD and 3D modeling environments.",
            "Automating GIS workflows via AI-driven scripts to accelerate development applications.",
            "Collaborating across multidisciplinary teams for accurate site plan development and technical drafting."
        ]
    },
    {
        id: 2,
        role: "Honours Bachelor of Environmental Design and Planning",
        company: "Fanshawe College",
        period: "Graduated 2024",
        details: [
            "Intensive four-year degree integrating environmental design, urban planning, and GIS.",
            "Developed expertise in advanced CAD communication and visualization principles for landscape design.",
            "Highly skilled in creating professional documentation and design panels for complex planning processes.",
            "Actively participated in multidisciplinary student competitions for resilient urban solutions.",
            "Focus on sustainable planning principles and high-fidelity drafting."
        ],
        link: "https://www.linkedin.com/in/keyurghinaiya/overlay/1726510969396/single-media-viewer/?profileId=ACoAAC27P4UBAhrJthGmyycoNvAqQtUpUPXicFE"
    }
];

export default function Experience() {
    return (
        <section className="relative z-10 min-h-screen bg-[#121212] px-6 py-24 md:px-20 text-white overflow-hidden">
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

                            <div className="text-lg text-gray-400 mb-6 font-medium">
                                {exp.company}
                            </div>

                            <ul className="space-y-3 mb-8">
                                {exp.details.map((detail, dIndex) => (
                                    <li key={dIndex} className="text-gray-500 leading-relaxed max-w-2xl flex items-start">
                                        <span className="w-1.5 h-1.5 bg-blue-500/40 rounded-full mt-2.5 mr-3 shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {exp.link && (
                                <a
                                    href={exp.link}
                                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Portfolio: Urban Oasis
                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
