import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "slideInLeft";
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [ref, isInView] = useInView({ threshold });

  const animationClasses = {
    fadeInUp: "animate-fade-in-up",
    fadeInLeft: "animate-fade-in-left",
    fadeInRight: "animate-fade-in-right",
    slideInLeft: "animate-slide-in-left",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView
          ? `opacity-100 ${animationClasses[animation]}`
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{
        animationDelay: isInView ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
