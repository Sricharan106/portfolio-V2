import NavBar from "../components/sections/nav-bar";
import Projects from "../components/sections/projects";
import { DATA } from "../app/data";
import Contact from "../components/sections/contact";
import Footer from "../components/sections/footer";
import GridPattern from "../components/ui/grid-pattern";

export default function ProjectsRoute() {
  return (
    <>
      <NavBar></NavBar>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
      />
      <div className="flex flex-col items-center gap-12 p-8">
        
        <Projects data={DATA.OTHER_PROJECTS} />
        <Contact data={DATA.HEADER} />
        <Footer />
      </div>
    </>
  );
}
