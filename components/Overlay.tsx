"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Section 1: 0% - 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2: 25% - 45%
    const opacity2 = useTransform(
        scrollYProgress,
        [0.2, 0.25, 0.4, 0.45],
        [0, 1, 1, 0]
    );
    const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

    // Section 3: 50% - 70%
    const opacity3 = useTransform(
        scrollYProgress,
        [0.45, 0.5, 0.65, 0.7],
        [0, 1, 1, 0]
    );
    const y3 = useTransform(scrollYProgress, [0.45, 0.7], [50, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center">
            {/* Section 1: Right 20% */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute top-1/2 right-[5%] md:right-[10%] -translate-y-1/2 text-right"
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                    Keyur Ghinaiya
                </h1>
                <p className="text-xl md:text-2xl text-blue-500 font-light mb-6">
                    Urban Planning Technologist
                </p>
                <div className="space-y-1 text-base md:text-lg text-blue-500/80 font-mono italic">
                    <p>A strategic systems-thinker</p>
                    <p>shaping the future of urban environments.</p>
                </div>
            </motion.div>

            {/* Section 2: Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 max-w-lg"
            >
                <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                    "Designing Spatial Systems <br />
                    with <span className="text-blue-500 font-mono">Infinite Imagination."</span>
                </h2>
            </motion.div>

            {/* Section 3: Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute top-1/2 right-10 md:right-20 -translate-y-1/2 max-w-lg text-right"
            >
                <h2 className="text-3xl md:text-5xl font-medium text-white leading-relaxed">
                    Bridging the gap between <br />
                    <span className="text-gray-400">rigid urban constraints</span> <br />
                    and <span className="text-blue-500">fluid AI-driven workflows.</span>
                </h2>
            </motion.div>
        </div>
    );
}
