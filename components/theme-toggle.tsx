"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    // Check localStorage or system preferences on mount
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark) ? "dark" : "light";

    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Wrap state update in setTimeout to defer rendering to the next tick,
    // avoiding cascading synchronous renders in the mount effect.
    setTimeout(() => {
      setTheme(activeTheme);
    }, 0);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  // Prevent rendering before hydration completes to avoid mismatch
  if (theme === null) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-800 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-950/80 dark:text-slate-100 focus:outline-none cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <div className="relative h-6 w-6">
        <Sun className={`absolute inset-0 h-6 w-6 transform transition-all duration-500 ease-out ${
          theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`} />
        <Moon className={`absolute inset-0 h-6 w-6 transform transition-all duration-500 ease-out ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`} />
      </div>
    </button>
  );
}
