import { FileText, Github, Linkedin, Mail } from "lucide-react";

import ButtonAnimation from "../navbar/moving-element";

export default function Contact({ data }: { data: Record<string, string> }) {
  const handleChange = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section className="w-full">
      <div className="space-y-4 text-center">
        <div className="space-y-4">
          <h2 className="font-bold text-3xl">Let&apos;s work together.</h2>
          <p className="mx-auto max-w-2xl text-[#71717a] dark:text-[#a1a1aa] text-base">
            I&apos;m always interested in new opportunities and exciting
            projects. Whether you have a project in mind or just want to chat
            about tech, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
            <button
              className="inline-flex justify-center items-center px-4 py-2 h-9 rounded-md font-medium text-sm whitespace-nowrap transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring bg-black text-white hover:bg-[#2f2f31] dark:bg-white dark:text-black dark:hover:bg-[#e1e1e1]"
              onClick={() => handleChange(data.EMAIL)}
            >
              <Mail className="mr-2 w-4 h-4" />
              Get in touch
            </button>
            <button
              className="inline-flex justify-center items-center hover:bg-primary/10 disabled:opacity-50 shadow-sm px-4 border border-primary rounded-md focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-primary text-sm whitespace-nowrap transition-colors cursor-target disabled:pointer-events-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] "
              onClick={() => handleChange(data.RESUME)}
            >
              <FileText className="mr-2 w-4 h-4" />
              Download Resume
            </button>
          </div>
          <div className="flex justify-center items-center">
            <ButtonAnimation
              onClick={() => handleChange(data.GITHUB)}
              className="shadow-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] "
            >
              <Github />
            </ButtonAnimation>
            <ButtonAnimation
              onClick={() => handleChange(data.LINKEDIN)}
              className="shadow-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] "
            >
              <Linkedin />
            </ButtonAnimation>
            <ButtonAnimation
              onClick={() => handleChange(data.EMAIL)}
              className="shadow-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] "
            >
              <Mail />
            </ButtonAnimation>
          </div>
        </div>

        <div className="cursor-target">
          <p className="text-gray-400 text-sm">
            Currently available for freelance work and full-time opportunities
          </p>
          <p className="mt-2 text-gray-500 text-xs">
            Response time: Usually within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
