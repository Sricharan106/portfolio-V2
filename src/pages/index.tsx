import NavBar from "../components/sections/nav-bar";
import Hero from "../components/sections/hero";
import { DATA } from "../app/data";
import Experience from "../components/sections/experience";
import Projects from "../components/sections/projects";
import Blogs from "../components/sections/blog";
import Skills from "../components/sections/skills";
import Contact from "../components/sections/contact";
import Footer from "../components/sections/footer";
import GridPattern from "../components/ui/grid-pattern";
import Dsa from "../components/sections/dsa";

export default function Page() {
  return (
    <>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
      />
      <NavBar isNeed={true} />
      <div className="flex flex-col items-center gap-12 p-8 w-">
        <Hero data={DATA.HEADER} />

        <Experience data={DATA.EXPERIENCE} />

        <Projects data={DATA.PROJECTS} isNeed={true} />
        <Blogs data={DATA.BLOGS} isNeed={true}></Blogs>
        <Skills data={DATA.SKILLS}></Skills>
        <Dsa data={DATA.DSA}></Dsa>
        <Contact data={DATA.HEADER} />
        <Footer />
      </div>
    </>
  );
}
