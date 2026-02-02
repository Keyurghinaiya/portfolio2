"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function FlipBookOverlay({ onClose, pdfUrl }: { onClose: () => void; pdfUrl: string }) {

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full max-w-7xl mx-auto mt-8 bg-zinc-900/50 border border-white/10 rounded-xl overflow-hidden relative"
        >
            {/* Header controls */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-4">
                    <h3 className="text-sm font-mark tracking-widest text-white/70 uppercase">Portfolio Viewer</h3>
                </div>
                <div className="flex items-center gap-2">
                    <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-white transition-colors hover:bg-white/10 rounded-lg"
                        title="Open in New Tab"
                    >
                        <ExternalLink size={36} />
                    </a>
                    <button
                        onClick={onClose}
                        className="p-2 text-zinc-400 hover:text-red-400 transition-colors hover:bg-white/10 rounded-lg flex items-center gap-2 text-sm"
                    >
                        <span className="hidden sm:inline">Close</span>
                        <X size={18} />
                    </button>
                </div>
            </div>


            {/* Iframe Container */}
            <div className="relative w-full aspect-[16/9] min-h-[600px] bg-black">
                <iframe
                    src={pdfUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    title="Portfolio Flipbook"
                />
            </div>
        </motion.div>
    );
}
