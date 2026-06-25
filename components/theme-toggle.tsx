"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const active = saved === "dark" || (!saved && prefersDark) ? "dark" : "light";
    setTheme(active);
    document.documentElement.classList.toggle("dark", active === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="
        fixed bottom-6 left-6 z-[9999]
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-slate-200 dark:border-slate-700/60
        bg-white/90 dark:bg-slate-900/90
        text-slate-600 dark:text-slate-300
        shadow-md dark:shadow-slate-900/60
        backdrop-blur-md
        transition-all duration-300
        hover:scale-110 hover:shadow-lg
        hover:border-blue-300 dark:hover:border-blue-600/60
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
        cursor-pointer
      "
    >
      <div className="relative h-5 w-5">
        <Sun className={`absolute inset-0 h-5 w-5 transition-all duration-500 ease-out ${theme === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 text-amber-500"
          }`} />
        <Moon className={`absolute inset-0 h-5 w-5 transition-all duration-500 ease-out ${theme === "dark"
            ? "rotate-0 scale-100 opacity-100 text-blue-400"
            : "-rotate-90 scale-0 opacity-0"
          }`} />
      </div>
    </button>
  );
}