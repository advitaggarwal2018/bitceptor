"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import industryImg from "@/public/Assets/Industry.svg";

export function TrustSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — text content */}
          <div className="space-y-6">
            {/* Accent bar */}
            <div className="w-10 h-1 rounded-full bg-blue-600" />

            <div className="space-y-2">
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-normal leading-snug">
                Leading companies trust us
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                to build intelligent systems
              </h2>
            </div>

            <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              We{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                add technology capacity
              </span>{" "}
              to business and enterprise teams. Our value isn't limited to
              building software but is equally distributed across the project
              lifecycle — from strategy and architecture to deployment and
              support.
            </p>

            <Link
              href="#about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
            >
              See more information
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* RIGHT — image panel */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative w-full aspect-[4/3] overflow-hidden transition-all duration-300">
              <Image
                src={industryImg}
                alt="Industry Experience"
                fill
                priority
                className="object-contain transition-all duration-300 dark:opacity-85 dark:brightness-90 dark:contrast-110"
              />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 bg-white dark:bg-slate-900 rounded-xl px-4 py-3 shadow-lg border border-slate-100 dark:border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">5+</span>
              </div>
              <div className="leading-none">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Years of</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-white mt-0.5">
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