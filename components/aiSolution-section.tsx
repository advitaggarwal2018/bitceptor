import {
    BrainCircuit,
    MessageSquare,
    Eye,
    Plug,
    CheckCircle2,
    Sparkles,
} from "lucide-react";
import { aiSolutions } from "@/lib/data/ai-solutions";

const iconMap: Record<string, React.ElementType> = {
    BrainCircuit,
    MessageSquare,
    Eye,
    Plug,
};

const accentPalette = [
    {
        accent: "#7c3aed",
        accentBg: "rgba(124,58,237,0.08)",
        gradientFrom: "#7c3aed",
        gradientTo: "#2563eb",
    },
    {
        accent: "#0891b2",
        accentBg: "rgba(8,145,178,0.08)",
        gradientFrom: "#0891b2",
        gradientTo: "#7c3aed",
    },
    {
        accent: "#db2777",
        accentBg: "rgba(219,39,119,0.08)",
        gradientFrom: "#db2777",
        gradientTo: "#7c3aed",
    },
    {
        accent: "#059669",
        accentBg: "rgba(5,150,105,0.08)",
        gradientFrom: "#059669",
        gradientTo: "#0891b2",
    },
];

export function AISolutionsSection() {
    const solutions = aiSolutions.map((s, i) => ({
        ...s,
        IconComp: iconMap[s.icon] ?? BrainCircuit,
        ...accentPalette[i % accentPalette.length],
    }));

    return (
        <section
            id="ai-solutions"
            className="w-full py-16 md:py-24"
            style={{ background: "#F7F7FA" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Heading ── */}
                <div className="mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-600 mb-6">
                        <Sparkles className="w-3.5 h-3.5" />
                        Artificial Intelligence
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <p className="text-2xl md:text-3xl text-slate-600 font-normal leading-snug">
                                Harness the power of
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1 leading-snug">
                                AI Solutions
                            </h2>
                            <p className="mt-4 text-base text-slate-500 max-w-xl leading-relaxed">
                                Transform your business operations, unlock new insights, and drive
                                intelligent automation with cutting-edge artificial intelligence.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="flex-shrink-0 text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors"
                        >
                            Discuss a project →
                        </a>
                    </div>
                </div>

                {/* ── Cards grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {solutions.map((sol) => {
                        const Icon = sol.IconComp;
                        return (
                            <div
                                key={sol.id}
                                className="group relative rounded-2xl border border-slate-100 bg-white p-7 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                {/* Subtle top gradient bar */}
                                <div
                                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(90deg, ${sol.gradientFrom}, ${sol.gradientTo})`,
                                    }}
                                />

                                {/* Icon + title row */}
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                                        style={{ background: sol.accentBg }}
                                    >
                                        <Icon
                                            className="w-5 h-5"
                                            style={{ color: sol.accent }}
                                        />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-base font-semibold leading-snug"
                                            style={{ color: sol.accent }}
                                        >
                                            {sol.title}
                                        </h3>
                                        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                                            {sol.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-slate-100" />

                                {/* Detail bullets */}
                                <ul className="space-y-2.5">
                                    {sol.details.map((detail) => (
                                        <li
                                            key={detail}
                                            className="flex items-start gap-2.5 text-xs text-slate-500"
                                        >
                                            <CheckCircle2
                                                className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                                                style={{ color: sol.accent }}
                                            />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* ── Bottom CTA banner ── */}
                <div
                    className="mt-10 relative rounded-2xl overflow-hidden px-8 py-9 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
                    style={{
                        background: "linear-gradient(135deg,#4c1d95 0%,#1e3a5f 60%,#0f172a 100%)",
                    }}
                >
                    {/* Grid texture */}
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-300 mb-2">
                            Ready to get started?
                        </p>
                        <h3 className="text-lg font-bold text-white">
                            Let&apos;s build something intelligent together
                        </h3>
                        <p className="mt-1.5 text-sm text-slate-300 max-w-md">
                            Talk to our AI specialists about how we can solve your specific
                            business challenges.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="relative flex-shrink-0 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-purple-700 shadow hover:bg-purple-50 transition-colors duration-150"
                    >
                        <Sparkles className="w-4 h-4" />
                        Start a Conversation
                    </a>
                </div>

            </div>
        </section>
    );
}