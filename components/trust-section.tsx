"use client";

import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";

export function TrustSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — text content */}
          <div className="space-y-6">
            {/* Accent bar */}
            <div className="w-10 h-1 rounded-full bg-blue-600" />

            <div className="space-y-2">
              <p className="text-2xl md:text-3xl text-slate-700 font-normal leading-snug">
                Leading companies trust us
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
                to build intelligent systems
              </h2>
            </div>

            <p className="text-slate-500 leading-relaxed max-w-md">
              We{" "}
              <span className="text-blue-600 font-medium">
                add technology capacity
              </span>{" "}
              to business and enterprise teams. Our value isn't limited to
              building software but is equally distributed across the project
              lifecycle — from strategy and architecture to deployment and
              support.
            </p>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
            >
              See more information
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* RIGHT — image / video panel */}
          <div className="relative">
            {/* Main image container */}
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* Placeholder image — replace src with real team photo */}
              <div
                className="w-full aspect-[4/3] bg-gradient-to-br from-slate-200 via-slate-100 to-blue-50 flex items-center justify-center"
                style={{ minHeight: "280px" }}
              >
                {/* Replace the div below with <Image src="..." ... /> when you have a real photo */}
                <div className="text-center space-y-2 opacity-40 select-none">
                  <div className="w-16 h-16 rounded-full bg-slate-300 mx-auto" />
                  <div className="w-32 h-2 rounded bg-slate-300 mx-auto" />
                  <div className="w-24 h-2 rounded bg-slate-200 mx-auto" />
                </div>
              </div>

              {/* Overlay on hover */}
              <div
                className="absolute inset-0 bg-slate-900/10 transition-opacity duration-300"
                style={{ opacity: hovered ? 1 : 0 }}
              />

              {/* Play button */}
              <button
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
                aria-label="Play video"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200"
                  style={{
                    background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                    transform: hovered ? "scale(1.10)" : "scale(1)",
                  }}
                >
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </button>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-lg border border-slate-100">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">5+</span>
              </div>
              <div className="leading-none">
                <p className="text-xs text-slate-400 font-medium">Years of</p>
                <p className="text-sm font-semibold text-slate-800 mt-0.5">
                  Industry Experience
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}