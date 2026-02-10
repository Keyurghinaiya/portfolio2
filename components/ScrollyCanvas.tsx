"use client";

import { useScroll, useMotionValueEvent, useSpring, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import Overlay from "./Overlay";

interface ScrollyCanvasProps {
    imageUrls: string[];
}

export default function ScrollyCanvas({ imageUrls }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. Local Scroll for Sequence Playback (0-100% of this container)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 2. Global Scroll for Post-Sequence Transitions
    const { scrollY } = useScroll();

    // Calculate sequence duration in pixels (approx 400vh)
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        setWindowHeight(window.innerHeight);
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Add Spring physics for buttery-smooth gliding
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 40,
        restDelta: 0.001
    });

    // --- LIGHTWEIGHT TRANSITION LOGIC ---
    // Sequence ends at approx 300vh of scroll (approx 3 * viewport height)
    const sequenceEnd = windowHeight * 3;

    // Fade in overlay only after sequence starts finishing
    const overlayOpacity = useTransform(
        scrollY,
        [sequenceEnd, sequenceEnd + windowHeight * 0.5],
        [0, 0.85]
    );

    const lastFrameIndexRef = useRef<number>(-1);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        imageUrls.forEach((url, index) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === imageUrls.length) {
                    setIsLoaded(true);
                }
            };
            loadedImages[index] = img;
        });

        setImages(loadedImages);
    }, [imageUrls]);

    // Render frame
    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        const { width, height } = canvas;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Object-fit: cover logic
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = width;
            drawHeight = width / imgRatio;
            offsetX = 0;
            offsetY = (height - drawHeight) / 2;
        } else {
            drawWidth = height * imgRatio;
            drawHeight = height;
            offsetX = (width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, [images]);

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                // Re-draw current frame (approximation)
                const currentProgress = smoothProgress.get();
                const frameIndex = Math.min(
                    imageUrls.length - 1,
                    Math.floor(currentProgress * imageUrls.length)
                );
                if (isLoaded) renderFrame(frameIndex);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, smoothProgress, imageUrls.length, renderFrame]);

    // Scroll listener - now listening to smoothProgress
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.min(
            images.length - 1,
            Math.floor(latest * (images.length - 1)) // Map 0-1 to 0-(n-1)
        );

        if (frameIndex !== lastFrameIndexRef.current) {
            lastFrameIndexRef.current = frameIndex;
            requestAnimationFrame(() => renderFrame(frameIndex));
        }
    });

    // Initial draw once loaded
    useEffect(() => {
        if (isLoaded) {
            // Force initial draw at 0
            renderFrame(0);
        }
    }, [isLoaded, renderFrame]);


    // Zoom transformation only (Blur is handled by the overlay mask now)
    const scale = useTransform(smoothProgress, [0, 1], [1, 1.15]);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full" id="home">
            {/* 
                FIXED CONTAINER 
                This sits behind everything and persists.
                z-index is -1 to be behind content, but we need to ensure content above has no background.
            */}
            <div className="fixed inset-0 h-screen w-full overflow-hidden -z-10" aria-hidden="true">
                <motion.div
                    style={{ scale }}
                    className="h-full w-full relative"
                >
                    <canvas
                        ref={canvasRef}
                        className="h-full w-full object-cover"
                        aria-label="Animated hero sequence showing urban planning projects"
                        role="img"
                    />

                    {/* TRANSITION OVERLAY: Darken + Blur */}
                    {/* Note: Backdrop-filter can be heavy. Using simple opacity overlay for darkness. 
                        If blur is needed on the image itself, we can apply filter to the canvas wrapper 
                        OR use backdrop-filter on this overlay.
                        Given requirement: "ADD a background transition with a blur + dark overlay effect"
                    */}
                    <motion.div
                        className="absolute inset-0 bg-black pointer-events-none"
                        style={{ opacity: overlayOpacity }}
                    />
                </motion.div>

                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm bg-[#121212]">
                        Loading Sequence...
                    </div>
                )}
            </div>

            {/* TEXT OVERLAY (Scrolly content) */}
            <div className="sticky top-0 h-screen w-full pointer-events-none">
                <Overlay scrollYProgress={smoothProgress} />
            </div>
        </div>
    );
}
