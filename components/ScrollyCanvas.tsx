"use client";

import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";
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

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Add Spring physics for buttery-smooth gliding
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 40,
        restDelta: 0.001
    });

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
    }, [isLoaded, smoothProgress, imageUrls.length, renderFrame]); // Added dependencies

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


    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full object-cover"
                />
                <Overlay scrollYProgress={smoothProgress} />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">
                        Loading Sequence...
                    </div>
                )}
            </div>
        </div>
    );
}
