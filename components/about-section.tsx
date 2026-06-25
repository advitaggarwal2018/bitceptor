import { aboutInfo } from "@/lib/data/about";
import { Users, Target, Lightbulb, Award, Handshake, ShieldCheck } from "lucide-react";

const valueIcons: Record<string, React.ElementType> = {
  Innovation: Lightbulb,
  Excellence: Award,
  Partnership: Handshake,
  Integrity: ShieldCheck,
};

const valueAccents: Record<string, { accent: string; bg: string }> = {
  Innovation: { accent: "#2563eb", bg: "rgba(37,99,235,0.08)" },
  Excellence: { accent: "#d97706", bg: "rgba(217,119,6,0.08)" },
  Partnership: { accent: "#059669", bg: "rgba(5,150,105,0.08)" },
  Integrity: { accent: "#7c3aed", bg: "rgba(124,58,237,0.08)" },
};

const stats = [
  { value: "2024", label: "Founded" },
  { value: "50+", label: "Client Integrations" },
  { value: "5+", label: "Industries Served" },
  { value: "100%", label: "Commitment" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ── Heading ── */}
        <div className="text-center">
          <div className="w-10 h-1 rounded-full bg-blue-600 mx-auto mb-6" />
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-normal">About</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Bitceptor Systems
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Learn about our mission, values, and commitment to delivering innovative
            IT and AI solutions.
          </p>
        </div>

        {/* ── Our Story ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-950/30 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              <Users className="w-3.5 h-3.5" />
              Our Story
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
              From a small consultancy to a{" "}
              <span className="text-blue-600 dark:text-blue-400">leading IT & AI provider</span>
            </h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">
              {aboutInfo.background}
            </p>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mission ── */}
        <div
          className="relative rounded-2xl overflow-hidden p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg,#0f172a 0%,#1e3a5f 50%,#0f172a 100%)",
          }}
        >
          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-blue-400" />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400 mb-3">
                Our Mission
              </p>
              <p className="text-lg md:text-xl font-medium text-white leading-relaxed">
                {aboutInfo.mission}
              </p>
            </div>
          </div>
        </div>

        {/* ── Values ── */}
        <div>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-2">
              What Drives Us
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aboutInfo.values.map((value) => {
              const [title, description] = value.split(": ");
              const Icon = valueIcons[title] ?? Lightbulb;
              const colors = valueAccents[title] ?? { accent: "#2563eb", bg: "rgba(37,99,235,0.08)" };
              return (
                <div
                  key={title}
                  className="group flex items-start gap-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ background: colors.bg }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: colors.accent }}
                    />
                  </div>
                  <div>
                    <h4
                      className="text-sm font-semibold mb-2"
                      style={{ color: colors.accent }}
                    >
                      {title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}