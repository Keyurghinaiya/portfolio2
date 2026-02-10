"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { navItems } from "@/data/portfolio";

export default function Header() {
    const [activeTab, setActiveTab] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth"
            });
            setActiveTab(id);
        } else if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveTab("home");
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"}`}
            role="banner"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
                <nav className="hidden md:flex space-x-1 relative bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm" aria-label="Main Navigation">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors z-10 ${activeTab === item.id ? "text-black" : "text-gray-400 hover:text-white"}`}
                            aria-current={activeTab === item.id ? "page" : undefined}
                            aria-label={`Scroll to ${item.name}`}
                        >
                            {activeTab === item.id && (
                                <motion.div
                                    layoutId="active-tab"
                                    className="absolute inset-0 bg-white rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu */}
                <nav className="md:hidden w-full overflow-x-auto no-scrollbar flex space-x-4 px-2" aria-label="Mobile Navigation">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`whitespace-nowrap px-3 py-1 text-xs font-medium rounded-full border transition-colors ${activeTab === item.id ? "bg-white text-black border-white" : "bg-black/50 text-gray-400 border-white/20"}`}
                            aria-current={activeTab === item.id ? "page" : undefined}
                            aria-label={`Scroll to ${item.name}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
