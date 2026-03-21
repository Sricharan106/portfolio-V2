import { motion } from "motion/react";
import "./AnimatedText.css";
import { useNavigate } from "react-router-dom";

interface AnimationTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
}
export default function AnimatedText({ text, href }: AnimationTextProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (href?.startsWith("#")) {
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else if (href?.includes("/#")) {
      const id = href.split("/#")[1];
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(href ?? "/");
    }
  };
  return (
    <>
      <motion.a
        // href={href}
        onClick={handleClick}
        className="link"
        initial="initial"
        whileHover="hovered"
      >
        {text?.split("").map((l: string, i: number) => (
          <span key={i} className="letterWrapper">
            <motion.span
              className="letter"
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>

            <motion.span
              className="letter absolute"
              variants={{
                initial: { y: "100%" },
                hovered: { y: "0%" },
              }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          </span>
        ))}
      </motion.a>
    </>
  );
}
