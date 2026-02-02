"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Technical Arsenal", id: "skills" },
    { name: "Selected Works", id: "projects" },
    { name: "Contact", id: "contact" },
];

export default function Header() {
    const [activeTab, setActiveTab] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Update Scrolled State
                    setIsScrolled(window.scrollY > 50);

                    // Update Active Tab (Scroll Spy)
                    const scrollPosition = window.scrollY + 100; // Offset

                    // Optimization: Get elements only once or assume IDs exist. 
                    // For safety in dynamic dynamic app, we get them here but we could optimize further if needed.
                    // Doing a reverse loop is efficient for "current section" logic.
                    for (let i = navItems.length - 1; i >= 0; i--) {
                        const item = navItems[i];
                        const section = document.getElementById(item.id);
                        if (section) {
                            if (section.offsetTop <= scrollPosition) {
                                setActiveTab(item.id);
                                break;
                            }
                        }
                    }

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
                <div className="hidden md:flex space-x-1 relative bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors z-10 ${activeTab === item.id ? "text-black" : "text-gray-400 hover:text-white"}`}
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
                </div>

                {/* Mobile Menu (simplified for now, strictly sticky header requirement focused on desktop tabs as per description "Sliding Tabs effect") */}
                <div className="md:hidden w-full overflow-x-auto no-scrollbar flex space-x-4 px-2">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`whitespace-nowrap px-3 py-1 text-xs font-medium rounded-full border transition-colors ${activeTab === item.id ? "bg-white text-black border-white" : "bg-black/50 text-gray-400 border-white/20"}`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}
