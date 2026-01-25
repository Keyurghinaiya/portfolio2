"use client";

import dynamic from "next/dynamic";

const ScrollyCanvas = dynamic(() => import("./ScrollyCanvas"), {
    ssr: false,
    loading: () => <div className="relative h-[250vh] w-full bg-[#121212]" />,
});

export default ScrollyCanvas;
