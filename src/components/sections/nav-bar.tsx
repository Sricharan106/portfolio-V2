import AnimatedText from "../navbar/animated-text";
import { useNavigate } from "react-router-dom";
import ButtonAnimation from "../navbar/moving-element";
import ThemeToggle from "../navbar/theme-toggler";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function NavBar({ isNeed }: { isNeed?: boolean }) {
  const navigate = useNavigate();
  const prefix = isNeed ? "#" : "/";
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const baseColor = isDark ? "#ffffff" : "#000000";
  return (
    <header className="flex justify-between items-center bg-transparent">
      <ButtonAnimation
        className="cursor-target bg-transparent border-none shadow-none ml-4 dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b]"
        onClick={() => navigate("/")}
      >
        <span className="font-bold relative -top-1.5 text-xl tracking-tighter">
          Sricharan
          <motion.span
            className="rounded-[50rem]"
            animate={{ color: [baseColor, "red", baseColor] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              fontSize: "2rem",
              position: "relative",
              bottom: "0.8rem",
            }}
          >
            .
          </motion.span>
        </span>
      </ButtonAnimation>
      <nav className="flex text-white gap-2">
        {isNeed ? (
          <ul className="flex relative top-0.5 text-black dark:text-white items-center sm:gap-0">
            {["experience", "projects", "blog"].map((link, index) => (
              <li key={index} className="pl-2">
                <AnimatedText href={`${prefix}${link}`} text={link} />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="flex relative top-0.5 text-black dark:text-white items-center sm:gap-0">
            {["experience", "projects", "blog"].map((link, index) => (
              <li key={index} className="pl-2">
                <AnimatedText href={`/#${link}`} text={link} />
              </li>
            ))}
          </ul>
        )}

        <ThemeToggle></ThemeToggle>
      </nav>
    </header>
  );
}
