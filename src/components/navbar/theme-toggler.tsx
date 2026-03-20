import { motion } from "motion/react";
import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import ButtonAnimation from "./moving-element";
import { useTheme } from "next-themes";

interface RippleProps {
  x: number;
  y: number;
  show: boolean;
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [ripple, setRipple] = useState<RippleProps>({
    x: 0,
    y: 0,
    show: false,
  });
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x: number = e.clientX;
    const y: number = e.clientY;

    setRipple({ x, y, show: true });

    const newTheme = !isDark;
    setIsDark(newTheme);
    setTheme(theme === "dark" ? "light" : "dark");
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    setTimeout(() => {
      setRipple((r) => ({ ...r, show: false }));
    }, 600);
  };

  return (
    <>
      {ripple.show && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: ripple.y,
            left: ripple.x,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: isDark ? "#000" : "#fff",
            color: isDark ? "#000" : "#fff",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        ></motion.div>
      )}
      <ButtonAnimation
        className="bg-transparent theme-btn text-black dark:text-white shadow-none dark:hover:bg-[#ffffff3b] hover:bg-[#0000003b] rounded-[50%] w-2"
        onClick={toggleTheme}
        style={{ fontSize: "25px" }}
      >
        {isDark ? <Moon /> : <Sun />}
      </ButtonAnimation>
    </>
  );
}
