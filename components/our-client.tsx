"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const clients = [
    { id: "halosis", name: "HALOSIS", text: "HALOSIS" },
    { id: "ltimindtree", name: "LTIMindtree", text: "LTIMindtree" },
    { id: "capitalone", name: "Capital One", text: "CapitalOne" },
    { id: "ameriprise", name: "Ameriprise Financial", text: "Ameriprise Financial" },
    { id: "bounteous", name: "bounteous × Accolite", text: "bounteous×Accolite" },
    { id: "clinicalconnect", name: "ClinicalConnect", text: "ClinicalConnect™" },
    { id: "saavi", name: "SAAVI", text: "SAAVI™" },
    { id: "ikea", name: "IKEA", text: "IKEA" },
    { id: "visuallearning", name: "Visual Learning Kids", text: "Visual Learning Kids" },
    { id: "secureauth", name: "SecureAuth", text: "SECUREAUTH" },
    { id: "seecole", name: "seeCOLe", text: "seeCOLe" },
    { id: "hamilton", name: "Hamilton Health Sciences", text: "Hamilton Health Sciences" },
    { id: "fujitsu", name: "Fujitsu", text: "FUJITSU" },
    { id: "noon", name: "Noon Academy", text: "noon Academy" },
    { id: "harman", name: "HARMAN", text: "HARMAN" },
    { id: "credgenics", name: "Credgenics", text: "Credgenics" },
    { id: "imagesbazaar", name: "imagesbazaar", text: "imagesbazaar" },
    { id: "maxintl", name: "Max International", text: "MAX INTERNATIONAL" },
    { id: "virginplus", name: "Virgin Plus", text: "Virgin plus" },
    { id: "medanta", name: "Medanta", text: "medanta" },
];

/* Split into two rows for the dual-marquee layout */
const row1 = clients.slice(0, 10);
const row2 = clients.slice(10, 20);

/* ─── Logo card ─────────────────────────────────────────────── */
function LogoCard({ name, text }: { name: string; text: string }) {
    return (
        <div
            className="
        flex-none w-[168px] h-[80px]
        flex items-center justify-center
        rounded-xl
        border border-slate-200/80 dark:border-slate-700/50
        bg-white dark:bg-slate-800/60
        shadow-sm dark:shadow-none
        px-5
        transition-all duration-200
        hover:border-blue-300/70 dark:hover:border-blue-600/50
        hover:shadow-md dark:hover:shadow-slate-900/40
        hover:-translate-y-0.5
        group
      "
            title={name}
        >
            <span className="
        text-[13px] font-semibold text-center leading-tight
        text-slate-500 dark:text-slate-400
        group-hover:text-slate-700 dark:group-hover:text-slate-200
        transition-colors duration-200
        select-none
      ">
                {text}
            </span>
        </div>
    );
}

/* ─── Marquee row ────────────────────────────────────────────── */
function MarqueeRow({
    items,
    reverse = false,
    paused,
}: {
    items: typeof clients;
    reverse?: boolean;
    paused: boolean;
}) {
    /* Duplicate for seamless loop */
    const doubled = [...items, ...items];

    return (
        <div className="relative overflow-hidden">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10
        bg-gradient-to-r from-[#F7F7FA] dark:from-slate-900 to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10
        bg-gradient-to-l from-[#F7F7FA] dark:from-slate-900 to-transparent" />

            <div
                className="flex gap-4"
                style={{
                    animation: `marquee${reverse ? "Reverse" : ""} 40s linear infinite`,
                    animationPlayState: paused ? "paused" : "running",
                    width: "max-content",
                }}
            >
                {doubled.map((c, i) => (
                    <LogoCard key={`${c.id}-${i}`} name={c.name} text={c.text} />
                ))}
            </div>
        </div>
    );
}

/* ─── Main section ───────────────────────────────────────────── */
export function ClientsSection() {
    const [paused, setPaused] = useState(false);

    return (
        <>
            {/* Keyframes injected once */}
            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="marquee"] { animation: none !important; }
        }
      `}</style>

            <section
                id="clients"
                className="
          w-full py-16 md:py-24
          bg-[#F7F7FA] dark:bg-slate-900
          transition-colors duration-300
          overflow-hidden
        "
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ── Heading ── */}
                    <ScrollReveal
                        animation="fade-up"
                        delay={50}
                        duration={600}
                        className="text-center mb-14"
                    >
                        <div className="w-10 h-1 rounded-full bg-blue-600 mx-auto mb-6" />
                        <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-normal leading-snug">
                            Trusted by
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                            Industry Leaders
                        </h2>
                        <p className="mt-4 text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
                            From global enterprises to fast-growing startups, we've helped 50+ organisations
                            build, scale, and modernise their digital infrastructure.
                        </p>
                    </ScrollReveal>

                </div>

                {/* ── Marquee rows ── */}
                <ScrollReveal
                    animation="fade-up"
                    delay={150}
                    duration={650}
                    className="flex flex-col gap-4"
                >
                    <MarqueeRow items={row1} paused={paused} />
                    <MarqueeRow items={row2} reverse paused={paused} />
                </ScrollReveal>

                {/* ── Static count strip ── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal
                        animation="fade-up"
                        delay={250}
                        duration={650}
                        className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
                    >
                        {[
                            { value: "50+", label: "Client Integrations" },
                            { value: "5+", label: "Industries Served" },
                            { value: "2024", label: "Founded" },
                            { value: "100%", label: "Commitment" },
                        ].map((stat) => (
                            <div key={stat.label} className="flex items-center gap-3">
                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                                    {stat.value}
                                </span>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                    {stat.label}
                                </span>
                                <span className="hidden sm:block w-px h-5 bg-slate-200 dark:bg-slate-700 last:hidden" />
                            </div>
                        ))}
                    </ScrollReveal>
                </div>

            </section>
        </>
    );
}