import { ArrowUpRight } from "lucide-react";
import ButtonAnimation from "../navbar/moving-element";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../navbar/animated-text";

interface IBlogData {
  DATE: string;
  TIME: string;
  LINK: string;
  DESCRIPTION: string;
}

export default function Blogs({
  data,
  isNeed,
}: {
  data: Record<string, IBlogData>;
  isNeed: boolean;
}) {
  const navigate = useNavigate();
  if (Object.keys(data).length === 0)
    return (
      <>
        <div id="blog" className="w-full">
          <h2 className="font-medium text-primary/90 text-base">
            technical blogs.
          </h2>
          <h2 className="text-center">
            <AnimatedText text="Working on it"></AnimatedText>
          </h2>
        </div>
      </>
    );

  return (
    <div id="blog" className="w-full">
      <h2 className="font-medium text-primary/90 text-base">
        technical blogs.
      </h2>

      {isNeed ? (
        " "
      ) : (
        <p className="text-[#71717a] dark:text-[#a1a1aa] mt-3">
          I write about web development, TypeScript, and best practices I
          discover while building apps. Here are some of my technical posts —
          feel free to read more on the original links.
        </p>
      )}
      <ul className="flex flex-col gap-12 mt-4 font-normal text-primary/90 text-base">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="cursor-target">
            <div className="pl-4 border-black hover:border-[#666] dark:border-[#2f2f31] dark:hover:border-white border-l size-full transition-all duration-300">
              <p className="text-primary/90 text-lg">
                {key}{" "}
                <span className="inline-block bg-secondary text-[#71717a] dark:text-[#a1a1aa]  max-sm:mb-2 ml-2 px-2 py-1 rounded text-xs dark:bg-[#333] bg-[#eeebe8] ">
                  {value.DATE}
                </span>
              </p>

              <p className="flex items-center gap-1 text-sm">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                  href={value.LINK}
                >
                  Read more{" "}
                  <ArrowUpRight
                    size={18}
                    className="text-[#71717a] dark:text-[#a1a1aa]"
                  />
                </a>
                <span className="px-1 py-px text-xs">
                  {value.TIME} min read
                </span>
              </p>

              <p className="mt-1 text-[#71717a] dark:text-[#a1a1aa] text-sm text-justify line-clamp-3">
                {value.DESCRIPTION}
              </p>
            </div>
          </li>
        ))}
      </ul>
      {isNeed && (
        <div className="flex justify-center mt-8">
          <ButtonAnimation
            onClick={() => {
              navigate("/blogs");
            }}
            className="inline-flex justify-center items-center bg-background hover:bg-accent disabled:opacity-50 shadow-xs px-4 py-2 border border-input rounded-md focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-muted-foreground text-sm whitespace-nowrap transition-colors hover:text-accent-foreground cursor-target disabled:pointer-events-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b]"
          >
            View all blogs
          </ButtonAnimation>
        </div>
      )}
    </div>
  );
}
