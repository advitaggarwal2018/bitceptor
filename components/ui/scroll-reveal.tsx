"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out";
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  duration = 600,
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Define style offsets based on state and animation type
  const getAnimationStyles = () => {
    const isShowing = isVisible;
    switch (animation) {
      case "fade-up":
        return {
          transform: isShowing ? "translateY(0)" : "translateY(24px)",
          opacity: isShowing ? 1 : 0,
        };
      case "fade-down":
        return {
          transform: isShowing ? "translateY(0)" : "translateY(-24px)",
          opacity: isShowing ? 1 : 0,
        };
      case "fade-left":
        return {
          transform: isShowing ? "translateX(0)" : "translateX(-24px)",
          opacity: isShowing ? 1 : 0,
        };
      case "fade-right":
        return {
          transform: isShowing ? "translateX(0)" : "translateX(24px)",
          opacity: isShowing ? 1 : 0,
        };
      case "zoom-in":
        return {
          transform: isShowing ? "scale(1)" : "scale(0.96)",
          opacity: isShowing ? 1 : 0,
        };
      case "zoom-out":
        return {
          transform: isShowing ? "scale(1)" : "scale(1.04)",
          opacity: isShowing ? 1 : 0,
        };
      default:
        return {};
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getAnimationStyles(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)", // easeOutCubic
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
