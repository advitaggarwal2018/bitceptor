import {
  Layers,
  Users,
  BarChart2,
  ShieldCheck,
  Code2,
  CheckSquare,
} from "lucide-react";

const approaches = [
  {
    id: "ux-driven",
    icon: Layers,
    iconBg: "linear-gradient(135deg,#1e1e2e,#374151)",
    iconColor: "#f9fafb",
    title: "UX Driven Engineering",
    description:
      "We are a UX-first development company. Projects are driven by designers and they make sure design and experiences translate seamlessly to code.",
  },
  {
    id: "shared-understanding",
    icon: Users,
    iconBg: "linear-gradient(135deg,#3b82f6,#2563eb)",
    iconColor: "#fff",
    title: "Developing Shared Understanding",
    description:
      "We invest in deep collaboration and alignment with your team so every engineer understands the 'why' behind what we build.",
  },
  {
    id: "proven-experience",
    icon: BarChart2,
    iconBg: "linear-gradient(135deg,#ec4899,#f97316)",
    iconColor: "#fff",
    title: "Proven Experience and Expertise",
    description:
      "Our engineers bring seasoned expertise across cloud, AI, and enterprise software — ensuring quality and reliability at every stage.",
  },
  {
    id: "security-ip",
    icon: ShieldCheck,
    iconBg: "linear-gradient(135deg,#06b6d4,#059669)",
    iconColor: "#fff",
    title: "Security & Intellectual Property",
    description:
      "We follow strict security protocols and ensure full IP ownership transfer to you — your code, your assets, your competitive advantage.",
  },
  {
    id: "code-reviews",
    icon: Code2,
    iconBg: "linear-gradient(135deg,#f59e0b,#84cc16)",
    iconColor: "#fff",
    title: "Rigorous Code Reviews",
    description:
      "Every line of code goes through structured peer review cycles to maintain quality, consistency, and long-term maintainability.",
  },
  {
    id: "qa-testing",
    icon: CheckSquare,
    iconBg: "linear-gradient(135deg,#7c3aed,#db2777)",
    iconColor: "#fff",
    title: "Quality Assurance & Testing",
    description:
      "Automated and manual testing is baked into our process — so you ship with confidence, not crossed fingers.",
  },
];

export function ApproachSection() {
  return (
    <section
      className="w-full py-16 md:py-24 bg-[#F7F7FA] dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered heading */}
        <div className="text-center mb-14">
          <div className="w-10 h-1 rounded-full bg-blue-600 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-normal leading-snug">
            Our design and
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
            development approach
          </p>
        </div>

        {/* 2-col card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {approaches.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex items-start gap-5 bg-white dark:bg-slate-900/60 rounded-2xl border border-slate-100 dark:border-slate-800/80 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Icon box */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: item.iconBg }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: item.iconColor }}
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}