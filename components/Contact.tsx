"use client";

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative z-10 min-h-screen flex items-center py-24 border-t border-white/5 overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready to Collaborate?
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Want to collaborate on a side project
                    </p>

                    <a
                        href="mailto:kghinaiya4@gmail.com"
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
