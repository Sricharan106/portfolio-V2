import { Github, Linkedin, Mail } from "lucide-react";
import ButtonAnimation from "../navbar/moving-element";

export default function Hero({ data }: { data: Record<string, string> }) {
  const handleChange = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full mt-4">
      <div className="space-y-2">
        <p className="font-normal text-muted-foreground text-base text-[#71717a] dark:text-[#a1a1aa]">
          hi there👋, I&apos;m
        </p>

        <div>
          <h1 className="font-bold dark:text-[#e1e1e1] text-[#2f2f31] text-4xl tracking-tight">
            {data.NAME}
          </h1>
          <h2 className="flex flex-col gap-0 font-normal dark:text-[#e1e1e1] text-[#2f2f31]text-base">
            <p>
              {data.AGE}, {data.PRONOUN}
            </p>
            <p>{data.HEADLINE}</p>
          </h2>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <ButtonAnimation
            className="cursor-target inline-flex justify-center items-center px-4 py-2 h-9 rounded-md shadow-sm font-medium text-sm whitespace-nowrap transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring bg-black text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-[#e1e1e1] border-none shadow-none hover:bg-[#2f2f31]"
            onClick={() => handleChange(data.RESUME)}
          >
            Resume
          </ButtonAnimation>
          <div className="flex gap-2 ">
            <ButtonAnimation
              onClick={() => handleChange(data.EMAIL)}
              className="cursor-target shadow-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] "
            >
              <Mail />
            </ButtonAnimation>
            <ButtonAnimation
              onClick={() => handleChange(data.LEETCODE)}
              className="cursor-target dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] shadow-none dark:text-[#e1e1e1] text-[#2f2f31] border-none"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LeetCode</title>
                <path
                  fill="currentColor"
                  d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
                />
              </svg>
            </ButtonAnimation>
            <ButtonAnimation
              onClick={() => handleChange(data.GITHUB)}
              className="cursor-target dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] shadow-none  border-none"
            >
              <Github />
            </ButtonAnimation>
            <ButtonAnimation
              onClick={() => handleChange(data.LINKEDIN)}
              className="cursor-target dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] shadow-none  border-none"
            >
              <Linkedin />
            </ButtonAnimation>
          </div>
        </div>
      </div>

      <h2 className="mt-6 font-semibold dark:text-[#e1e1e1] text-[#2f2f31] text-base">
        about me.
      </h2>
      <p className="flex flex-col gap-2 mt-4 font-normal text-muted-foreground text-base text-justify text-[#71717a] dark:text-[#a1a1aa]">
        <span>
          {data.INTRO}{" "}
          <span className="hidden sm:inline">{data.EXPERTISE}</span>
        </span>
      </p>
    </div>
  );
}
