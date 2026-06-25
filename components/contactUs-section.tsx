import { aboutInfo } from "@/lib/data/about";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Us",
    value: aboutInfo.contact.email,
    href: `mailto:${aboutInfo.contact.email}`,
    accent: "#2563eb",
    bg: "rgba(37,99,235,0.08)",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: aboutInfo.contact.phone,
    href: `tel:${aboutInfo.contact.phone}`,
    accent: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri, 9 AM – 6 PM IST",
    href: null,
    accent: "#d97706",
    bg: "rgba(217,119,6,0.08)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India (Remote-first)",
    href: null,
    accent: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 bg-[#F7F7FA] dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <div className="mb-12">
          <div className="w-10 h-1 rounded-full bg-blue-600 mb-6" />
          <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 font-normal">Get in</p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Touch with Us
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
            We&apos;re here to help with your IT services and AI solutions needs.
            Reach out to discuss how we can support your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT — contact info + cards */}
          <div className="space-y-4">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.accent }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-semibold text-slate-800 dark:text-white mt-0.5"
                      style={item.href ? { color: item.accent } : {}}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 px-5 py-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 focus:outline-none"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 px-5 py-4"
                >
                  {inner}
                </div>
              );
            })}

            {/* Response time note */}
            <div className="rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-950/20 px-5 py-4">
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                Response Time
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We typically respond within{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">24 hours</span>. For
                urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* RIGHT — contact form */}
          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-sm p-7 md:p-8">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send us a message</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Fill out the form and we&apos;ll get back to you shortly.
              </p>
            </div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}