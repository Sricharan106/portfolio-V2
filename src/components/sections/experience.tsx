import { ArrowUpRight } from "lucide-react";
import { extractDomain } from "../../lib/utils";

interface IRoleData {
  POSITION: string;
  DURATION: string;
  LOCATION?: string;
  DESCRIPTION: string[];
  TECH_STACK: string[];
}

interface IExperienceData {
  WEBSITE: string;
  COMPANY: string;
  LOCATION: string;
  DURATION: string;
  ROLES: IRoleData[];
}

function CompanyAvatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div className="flex justify-center items-center bg-secondary dark:bg-[#333] shrink-0 rounded-md w-12 h-12 font-semibold text-black dark:text-white text-lg">
      {initial}
    </div>
  );
}

export default function Experience({
  data,
}: {
  data: Record<string, IExperienceData>;
}) {
  if (Object.keys(data).length === 0) return null;

  return (
    <div id="experience" className="w-full">
      <h2 className="font-medium text-primary/90 text-base">experience.</h2>

      <ul className="flex flex-col gap-10 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => {
          const hasMultipleRoles = value.ROLES.length > 1;
          return (
            <li
              key={key}
              className="cursor-target flex gap-2 pl-2 border-l border-black hover:border-[#666] dark:border-[#2f2f31] dark:hover:border-white transition-all duration-300"
            >
              {/* Company avatar */}
              <div className="flex flex-col items-center shrink-0">
                <CompanyAvatar name={value.COMPANY} />
              </div>

              {/* Company content */}
              <div className="flex-1 min-w-0">
                {/* Company Header */}
                <div className="w-full">
                  {/* Company Name */}
                  <p className="dark:text-white text-base text-black leading-tight">
                    {value.COMPANY}

                    <span className="inline-block dark:text-white text-black bg-secondary max-sm:mb-2 ml-2 px-2 py-0.5 rounded text-xs dark:bg-[#333] bg-[#eeebe8]">
                      {value.LOCATION}
                    </span>
                  </p>

                  {/* Website + Duration */}
                  <div className="flex items-center justify-between gap-2 mt-0.5 w-full text-[#71717a] dark:text-[#a1a1aa] text-sm">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
                      href={value.WEBSITE}
                    >
                      {extractDomain(value.WEBSITE)}
                      <ArrowUpRight size={14} />
                    </a>

                    <span className="shrink-0">{value.DURATION}</span>
                  </div>
                </div>

                {/* Roles Timeline */}
                <div className="relative mt-5">
                  <div className="flex flex-col gap-6">
                    {value.ROLES.map((role, roleIndex) => {
                      const isLastRole = roleIndex === value.ROLES.length - 1;

                      return (
                        <div key={roleIndex} className="relative pl-6">
                          {/* Timeline dot */}
                          {hasMultipleRoles && (
                            <div className="-top-[12px] left-0 absolute bg-black dark:bg-white border-2 border-white dark:border-[#161618] rounded-full w-[20px] h-[20px] z-10" />
                          )}

                          {/* Connecting line - only between roles */}
                          {hasMultipleRoles && !isLastRole && (
                            <span className="top-[17px] bottom-[-24px] left-[5px] absolute bg-black/20 dark:bg-white/20 w-px" />
                          )}

                          {/* Role Header */}
                          <div className="flex sm:flex-row flex-col justify-between items-start gap-1">
                            <p className="font-medium text-black dark:text-white text-base">
                              {role.POSITION}
                            </p>

                            <p className="text-[#71717a] dark:text-[#a1a1aa] text-sm shrink-0">
                              {role.DURATION}
                            </p>
                          </div>

                          {/* Optional Role Location */}
                          {role.LOCATION && (
                            <p className="mt-0.5 text-[#71717a] dark:text-[#a1a1aa] text-xs">
                              {role.LOCATION}
                            </p>
                          )}

                          {/* Description */}
                          <ul className="space-y-1 mt-2 pl-3 text-muted-foreground text-sm text-justify list-disc">
                            {role.DESCRIPTION.map((desc, index) => (
                              <li
                                key={index}
                                className="text-[#71717a] dark:text-[#a1a1aa]"
                              >
                                {desc}
                              </li>
                            ))}
                          </ul>

                          {/* Tech Stack */}
                          <ul className="flex flex-wrap items-center gap-2 mt-3 pl-3">
                            {role.TECH_STACK.map((tech, index) => (
                              <li
                                key={index}
                                className="dark:bg-[#333] bg-[#eeebe8] dark:text-white text-black px-2 py-1 rounded text-xs"
                              >
                                {tech}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
