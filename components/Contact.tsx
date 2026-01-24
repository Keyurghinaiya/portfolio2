"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative z-10 py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
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
            <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready to shape the future?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Whether you need a digital twin strategy, spatial analysis, or a custom urban visualization, I'm ready to collaborate.
                    </p>

                    <a
                        href="mailto:hello@keyurghinaiya.com"
                        className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                    >
                        Get in Touch
                    </a>
                </motion.div>

                <div className="mt-24 flex justify-center flex-wrap gap-8 md:gap-12 text-gray-500">
                    <a href="https://www.linkedin.com/in/keyurghinaiya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://github.com/Keyurghinaiya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                    <a href="https://www.instagram.com/keyur_819/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                </div>

                <div className="mt-12 text-sm text-gray-600">
                    © 2026 Keyur Ghinaiya. All rights reserved.
                </div>
            </div>
        </section>
    );
}
