"use client";

import Link from "next/link";
import { ArrowRight, Cpu } from "lucide-react";
import { HeroIllustration } from "@/public/Assets/HeroIllustration";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
  return (
    <section className="
      relative overflow-hidden
      bg-white dark:bg-slate-950
      pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28
      w-full transition-colors duration-300
    ">
      {/* Subtle dot grid — light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-0"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Subtle line grid — dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow accent — dark only */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl opacity-0 dark:opacity-100 transition-opacity duration-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-8">

          {/* LEFT */}
          <div className="flex-1 space-y-7 text-center lg:text-left">
            <ScrollReveal animation="fade-up" delay={0} duration={500}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 dark:border-blue-500/20 dark:bg-blue-500/[0.07] text-blue-600 dark:text-blue-400 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest">
                <Cpu className="h-3.5 w-3.5" />
                Empowering Digital Innovation
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={100} duration={600}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
                Engineering{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                  Intelligent
                </span>{" "}
                Systems for the Future
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200} duration={600}>
              <p className="max-w-xl text-lg leading-relaxed text-slate-500 dark:text-slate-400 lg:max-w-none">
                Expert Strategies, Scalable Architecture, and enterprise automation solutions designed
                to scale your business for the future connected world.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300} duration={600}>
              <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start justify-center lg:justify-start">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 dark:bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10 transition-all hover:bg-blue-500 dark:hover:bg-blue-400 hover:scale-105 active:scale-100 duration-200"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-100"
                >
                  Explore Services
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400} duration={650}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 lg:justify-start">
                {["Cloud & DevOps", "Custom Software", "AI & ML", "Cybersecurity"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT */}
          <ScrollReveal animation="zoom-in" delay={150} duration={700} className="relative w-full max-w-sm flex-shrink-0 lg:max-w-md xl:max-w-lg">
            <HeroIllustration />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}