export const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Technical Arsenal", id: "skills" },
    { name: "Selected Works", id: "projects" },
    { name: "Contact", id: "contact" },
];

export const experiences = [
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
        role: "Honours Bachelor of Environmental Studies",
        company: "Fanshawe College",
        period: "Graduated 2024",
        details: [
            "Intensive four-year degree integrating environmental design, urban planning, and GIS.",
            "Developed expertise in advanced CAD communication and visualization principles for landscape design.",
            "Highly skilled in creating professional documentation and design panels for complex planning processes.",
            "Actively participated in multidisciplinary student competitions for resilient urban solutions.",
            "Focus on sustainable planning principles and high-fidelity drafting."
        ],
        links: [
            { label: "View my Portfolio", type: "portfolio" }
        ]
    }
];

export const skillCategories = [
    {
        title: "Core Drafting",
        skills: ["Civil3D", "AutoCAD", "SketchUp", "Trimble Layout"],
    },
    {
        title: "Planning",
        skills: ["Policy Review", "Red Book", "Building Code (exploring)"],
    },
    {
        title: "GIS",
        skills: ["QGIS", "ArcGIS Pro", "ArcGIS Online", "Model Builder/Model Designer", "Postgre SQL (PostGIS)"],
    },
    {
        title: "Visualization",
        skills: ["Enscape", "Photoshop", "Illustrator", "InDesign", "AI (Generative Rendering)"],
    },
    {
        title: "Development",
        skills: ["Antigravity", "Python (Automations)", "Google AI Studio (Whisk)"],
    },
];

export const macroProjects = [
    {
        id: "macro-1",
        title: "The 150-Acre Strategy",
        category: "Macro Node / Urban Strategy",
        description: "Navigating dense contours and sensitive wetlands to maximize development yield via a strategically organized phasing plan.",
    },
    {
        id: "macro-2",
        title: "HA Zone Massing Study",
        category: "Macro Node / Feasibility",
        description: "Developing data-backed construction options for a steep corner lot under strict Heritage Area (HA) zoning constraints.",
    },
];

export const microNodes = [
    {
        id: "micro-4",
        title: "Personal Portfolio",
        category: "Micro Node / Web",
        description: "A high-performance scrollytelling experience built with Next.js, Framer Motion, and Antigravity. Deployed on Vercel with automated GitHub CI/CD workflows.",
    },
    {
        id: "micro-1",
        title: "GIS SOP Automation",
        category: "Micro Node / Lab",
        description: "Developed small models to automate repeating GIS tasks and speed up development applications.",
    },
    {
        id: "micro-2",
        title: "Vibe Coding Platforms",
        category: "Micro Node / Web",
        description: "Built functional web platforms for Solar Energy and Agriculture Machinery sectors using fluid AI-driven workflows.",
    },
    {
        id: "micro-3",
        title: "Spatial API Integration",
        category: "Micro Node / Systems",
        description: "Integrated web map servers to create live-updating geospatial datasets for internal planning workflows.",
    },
    {
        id: "micro-5",
        title: "ZoneAI",
        category: "Micro Node / Lab",
        description: "A lightweight zoning finder built to explore Python, geospatial workflows, and rapid app development.",
    },
];
