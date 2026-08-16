import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* Education temporarily hidden — restore <Education /> when ready */}
      {/* Hackathons folded into Projects → Competitions — restore <Hackathons /> if needed */}
      <Contact />
    </main>
  );
}
