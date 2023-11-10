import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import SectionDivider from "@/components/sectionDivider";
import Skills from "@/components/skills";
// 06:21:23
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Hero />
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  );
}
