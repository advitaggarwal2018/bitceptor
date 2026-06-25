import Link from "next/link";
import { ArrowRight, Cpu, Cloud, BrainCircuit } from "lucide-react";
import { HeroIllustration } from "@/public/Assets/HeroIllustration";



export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/20 dark:from-slate-950 dark:via-slate-900/60 dark:to-blue-950/20 pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 w-full transition-all duration-300">
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 text-slate-400 dark:text-slate-500 opacity-[0.06] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-8">

          {/* LEFT — text content */}
          <div className="flex-1 space-y-7 text-center lg:text-left">
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 text-blue-600 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest">
              <Cpu className="h-3.5 w-3.5" />
              Empowering Digital Innovation
            </span>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
              Engineering{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Intelligent
              </span>{" "}
              Systems for the Future
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 lg:max-w-none">
              Expert Strategies, Scalable Architecture, and enterprise automation solutions designed
              to scale your business for the future connected world.
            </p>

            {/* CTA row */}
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/10 dark:shadow-blue-900/30 transition-all hover:bg-blue-500 active:bg-blue-700 hover:scale-105 duration-150"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-all duration-150 hover:scale-105"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 lg:justify-start">
              {["Cloud & DevOps", "Custom Software", "AI & ML", "Cybersecurity"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — illustration */}
          <div className="relative w-full max-w-sm flex-shrink-0 lg:max-w-md xl:max-w-lg">
            <HeroIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}