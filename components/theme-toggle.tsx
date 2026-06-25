"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark) ? "dark" : "light";
    setTheme(activeTheme);
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-[9999] flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-800 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-slate-100 focus:outline-none cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <div className="relative h-6 w-6">
        <Sun className={`absolute inset-0 h-6 w-6 transform transition-all duration-500 ease-out ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`} />
        <Moon className={`absolute inset-0 h-6 w-6 transform transition-all duration-500 ease-out ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`} />
      </div>
    </button>
  );
}
