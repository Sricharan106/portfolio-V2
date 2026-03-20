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
            className="inline-flex justify-center items-center px-4 py-2 h-9 rounded-md shadow-sm font-medium text-sm whitespace-nowrap transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring bg-black text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-[#e1e1e1] border-none shadow-none hover:bg-[#2f2f31]"
            onClick={() => handleChange(data.RESUME)}
          >
            Resume
          </ButtonAnimation>
          <div className="flex gap-2 ">
            <ButtonAnimation
              onClick={() => handleChange(data.EMAIL)}
              className="dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] shadow-none  border-none"
            >
              <Mail />
            </ButtonAnimation>
            <ButtonAnimation
              onClick={() => handleChange(data.GITHUB)}
              className="dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] shadow-none  border-none"
            >
              <Github />
            </ButtonAnimation>
            <ButtonAnimation
              onClick={() => handleChange(data.LINKEDIN)}
              className="dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] shadow-none  border-none"
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
