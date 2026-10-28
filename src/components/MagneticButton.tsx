"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef, ReactNode } from "react";

/**
 * MagneticButton — a restrained pointer-follow affordance.
 *
 * The pull is deliberately small (0.28 of the pointer offset, halved again on
 * the inner layer) so it reads as responsiveness rather than a cursor effect.
 * Disabled entirely when the OS asks for reduced motion.
 */
export default function MagneticButton({ children, className = "" }: { children: ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const STRENGTH = 0.28;
  const spring = { type: "spring" as const, stiffness: 200, damping: 22, mass: 0.3 };

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    setPosition({
      x: (clientX - (left + width / 2)) * STRENGTH,
      y: (clientY - (top + height / 2)) * STRENGTH,
    });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={spring}
      className={`inline-block ${className}`}
    >
      <motion.div animate={{ x: position.x * 0.5, y: position.y * 0.5 }} transition={spring}>
        {children}
      </motion.div>
    </motion.div>
  );
}
