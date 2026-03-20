import { ArrowUpRight } from "lucide-react";
import { extractDomain } from "../../lib/utils";

interface IExperienceData {
  WEBSITE: string;
  POSITION: string;
  LOCATION: string;
  DURATION: string;
  DESCRIPTION: string[];
  TECH_STACK: string[];
}

export default function Experience({
  data,
}: {
  data: Record<string, IExperienceData>;
}) {
  if (Object.keys(data).length === 0) return null;

  return (
    <div id="experience" className="w-full ">
      <h2 className="font-medium text-primary/90 text-base">experience.</h2>

      <ul className="flex flex-col gap-12 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="cursor-target ">
            <div className="pl-4 border-black hover:border-[#666] dark:border-[#2f2f31] dark:hover:border-white border-l size-full transition-all duration-300">
              <div className="flex sm:flex-row flex-col justify-between items-start">
                <div>
                  <p className="dark:text-white text-lg text-black">
                    {value.POSITION}{" "}
                    <span className="inline-block dark:text-white text-black bg-secondary max-sm:mb-2 ml-2 px-2 py-1 rounded text-xs dark:bg-[#333] bg-[#eeebe8]">
                      {value.LOCATION}
                    </span>
                  </p>
                  <p className="flex items-center text-sm">
                    at,{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 ml-1"
                      href={value.WEBSITE}
                    >
                      {extractDomain(value.WEBSITE)} <ArrowUpRight size={18} />
                    </a>
                  </p>
                </div>
                <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm">
                  {value.DURATION}
                </p>
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

              <ul className="flex flex-wrap items-center gap-2 mt-2 pl-3">
                {value.TECH_STACK.map((tech, index) => (
                  <li
                    key={index}
                    className="dark:bg-[#333] bg-[#eeebe8] dark:text-white text-black  px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
