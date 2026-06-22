"use client";

import { useRef, useState, useEffect } from "react";
import {
  Cloud,
  Code,
  Database,
  Shield,
  Lightbulb,
  Settings,
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Cloud,
  Code,
  Database,
  Shield,
  Lightbulb,
  Settings,
};

const accentPalette = [
  { accent: "#2563eb", accentBg: "rgba(37,99,235,0.08)" },
  { accent: "#7c3aed", accentBg: "rgba(124,58,237,0.08)" },
  { accent: "#d97706", accentBg: "rgba(217,119,6,0.08)" },
  { accent: "#059669", accentBg: "rgba(5,150,105,0.08)" },
  { accent: "#0891b2", accentBg: "rgba(8,145,178,0.08)" },
  { accent: "#db2777", accentBg: "rgba(219,39,119,0.08)" },
];

import { offerings } from "@/lib/data/offerings";

export function ServiceOverview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const total = offerings.length;

  const services = offerings.map((s, i) => ({
    ...s,
    IconComp: iconMap[s.icon] ?? Cloud,
    ...accentPalette[i % accentPalette.length],
    href: "#offerings",
  }));

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    const gap = 20;
    const cardWidth = 288 + gap; // card w-72 = 288px + gap
    const idx = Math.round(track.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(idx, 0), total - 1));
    const maxScroll = track.scrollWidth - track.clientWidth;
    setProgress(maxScroll > 0 ? track.scrollLeft / maxScroll : 0);
  }

  function scrollToIndex(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const gap = 20;
    const cardWidth = 288 + gap;
    track.scrollTo({ left: cardWidth * index, behavior: "smooth" });
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = 0;
    onScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="py-16 md:py-24 overflow-hidden"
      style={{ background: "#F9F9FF" }}
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">
          What We Do
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Services we offer
            </h2>
            <p className="mt-3 text-base text-slate-500 max-w-xl">
              We deliver enterprise-grade IT solutions that empower businesses to
              innovate, scale, and succeed in the digital landscape.
            </p>
          </div>
          <a
            href="#offerings"
            className="flex-shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
          >
            View all services →
          </a>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex gap-5 overflow-x-auto px-4 sm:px-6 lg:px-8"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          paddingBottom: "6px",
          maxWidth: "100vw",
        }}
      >
        {services.map((svc, i) => {
          const Icon = svc.IconComp;
          const isActive = i === activeIndex;
          return (
            <a
              key={svc.id}
              href={svc.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToIndex(i);
              }}
              className="group flex-none w-72 rounded-2xl border bg-white transition-all duration-300 focus:outline-none cursor-pointer"
              style={{
                borderColor: isActive ? svc.accent : "#e2e8f0",
                boxShadow: isActive
                  ? `0 12px 36px rgba(0,0,0,0.10), 0 0 0 1.5px ${svc.accent}30`
                  : "0 1px 4px rgba(0,0,0,0.05)",
                transform: isActive ? "translateY(-8px)" : "translateY(0)",
              }}
            >
              <div className="p-7 flex flex-col h-full min-h-[280px]">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200"
                  style={{ background: isActive ? svc.accentBg : "#f1f5f9" }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-200"
                    style={{ color: isActive ? svc.accent : "#94a3b8" }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-semibold mb-2 leading-snug transition-colors duration-200"
                  style={{ color: isActive ? svc.accent : "#1e293b" }}
                >
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {svc.description}
                </p>

                {/* Detail bullets */}
                <ul className="mt-auto space-y-2">
                  {svc.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-xs text-slate-500"
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 transition-colors duration-200"
                        style={{ color: isActive ? svc.accent : "#cbd5e1" }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          );
        })}
        {/* Right padding */}
        <div className="flex-none w-4 lg:w-8" />
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex items-center justify-between">
        {/* Dot indicators */}
        <div className="flex gap-2 items-center">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className="rounded-full transition-all duration-200 focus:outline-none"
              style={{
                width: i === activeIndex ? "20px" : "8px",
                height: "8px",
                background:
                  i === activeIndex ? "#2563eb" : "rgba(37,99,235,0.2)",
              }}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress counter + bar */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tabular-nums text-slate-400">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="w-24 h-[3px] rounded-full bg-slate-200 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <span className="text-xs font-semibold tabular-nums text-slate-400">
            {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>

      <style>{`div::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}