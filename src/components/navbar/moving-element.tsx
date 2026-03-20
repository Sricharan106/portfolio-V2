import React, { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";

const MotionButton = motion(Button as any);

interface ButtonAnimationProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
}

export default function ButtonAnimation({
  text,
  children,
  ...props
}: ButtonAnimationProps) {
  const [xpos, setXpos] = useState<number>(0);
  const [ypos, setYpos] = useState<number>(0);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect: DOMRect = e.currentTarget.getBoundingClientRect();
    const x: number = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y: number = (e.clientY - rect.top - rect.height / 2) * 0.4;
    setXpos(x);
    setYpos(y);
  };

  return (
    <>
      <MotionButton
        {...props}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setXpos(0);
          setYpos(0);
        }}
        
      >
        <motion.div
          animate={isHovered ? { x: xpos, y: ypos } : { x: 0, y: 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 15 }}
        >
          {text ?? children}
        </motion.div>
      </MotionButton>
    </>
  );
}
