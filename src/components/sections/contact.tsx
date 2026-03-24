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
              className="cursor-target inline-flex justify-center items-center px-4 py-2 h-9 rounded-md font-medium text-sm whitespace-nowrap transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring bg-black text-white hover:bg-[#2f2f31] dark:bg-white dark:text-black dark:hover:bg-[#e1e1e1]"
              onClick={() => handleChange(data.EMAIL)}
            >
              <Mail className="mr-2 w-4 h-4" />
              Get in touch
            </button>
            <button
              className="cursor-target inline-flex justify-center items-center hover:bg-primary/10 disabled:opacity-50 shadow-sm px-4 border border-primary rounded-md focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring h-9 font-medium text-primary text-sm whitespace-nowrap transition-colors cursor-target disabled:pointer-events-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] "
              onClick={() => handleChange(data.RESUME)}
            >
              <FileText className="mr-2 w-4 h-4" />
              Download Resume
            </button>
          </div>
          <div className="flex justify-center items-center">
            <ButtonAnimation
              onClick={() => handleChange(data.GITHUB)}
              className="cursor-target shadow-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] "
            >
              <Github />
            </ButtonAnimation>
            <ButtonAnimation
              onClick={() => handleChange(data.LINKEDIN)}
              className="cursor-target shadow-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] "
            >
              <Linkedin />
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
