import fs from "fs";
import path from "path";
import ClientScrollyCanvas from "@/components/ClientScrollyCanvas";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

function getImageSequence() {
  const sequenceDir = path.join(process.cwd(), "public", "sequence");
  try {
    const files = fs.readdirSync(sequenceDir);
    // Filter for png/webp and sort naturally
    return files
      .filter((file) => /\.(png|webp|jpg)$/.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
      .map((file) => `/sequence/${file}`);
  } catch (error) {
    console.error("Error reading sequence directory:", error);
    return [];
  }
}

export default function Home() {
  const imageUrls = getImageSequence();

  return (
    <main>
      <ClientScrollyCanvas imageUrls={imageUrls} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
