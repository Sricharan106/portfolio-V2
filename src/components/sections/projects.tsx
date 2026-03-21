import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ButtonAnimation from "../navbar/moving-element";

interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
}

export default function Projects({
  data,
  isNeed,
}: {
  data: Record<string, IProjectData>;
  isNeed?: boolean;
}) {
  const navigate = useNavigate();
  if (Object.keys(data).length === 0)
    return (
      <>
        <div id="projects" className="w-full">
          <h2 className="font-medium text-primary/90 text-base">projects.</h2>
          <h2 className="text-center">Working on it</h2>
        </div>
      </>
    );

  return (
    <div id="projects" className="w-full">
      <h2 className="font-medium text-primary/90 text-base">projects.</h2>
      {isNeed ? (
        " "
      ) : (
        <p className="text-[#71717a] dark:text-[#a1a1aa] mt-3">
          Passionate about building high-performance and scalable web
          applications. I thrive on solving complex problems, optimizing
          performance, and creating intuitive user experiences. My expertise
          lies in Next.js, TypeScript, and Cloud technologies, with a strong
          focus on delivering quality solutions.
        </p>
      )}
      <ul className="flex flex-col gap-12 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="cursor-target">
            <div className="pl-4 border-black hover:border-[#666] dark:border-[#2f2f31] dark:hover:border-white border-l size-full transition-all duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-primary/90 text-lg">{key}</p>

                  <p className="flex items-center gap-1 text-sm">
                    {value.LIVE_PREVIEW && (
                      <a
                        className="flex items-center gap-1"
                        href={value.LIVE_PREVIEW}
                      >
                        live preview <ArrowUpRight size={18} />
                      </a>
                    )}
                    {value.GITHUB && (
                      <a
                        className="flex items-center gap-1"
                        href={value.GITHUB}
                      >
                        github <ArrowUpRight size={18} />
                      </a>
                    )}
                  </p>
                </div>
              </div>

              <ul className="space-y-1 mt-1 pl-3 text-muted-foreground text-sm text-justify list-disc">
                {value.DESCRIPTION.map((desc, index) => (
                  <li
                    key={index}
                    className="text-[#71717a] dark:text-[#a1a1aa]"
                  >
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              <ul className="flex flex-wrap items-center  gap-2 mt-2 pl-3">
                {value.TECH_STACK.map((tech, index) => (
                  <li
                    key={index}
                    className="dark:bg-[#333] bg-[#eeebe8] dark:text-white text-black   px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      {isNeed && (
        <div className="flex justify-center mt-8">
          <ButtonAnimation
            onClick={() => {
              navigate("/projects");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex justify-center items-center bg-background hover:bg-accent disabled:opacity-50 shadow-xs px-4 py-2 border border-input rounded-md focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-muted-foreground text-sm whitespace-nowrap transition-colors hover:text-accent-foreground cursor-target disabled:pointer-events-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b]"
          >
            View all projects
          </ButtonAnimation>
        </div>
      )}
    </div>
  );
}
