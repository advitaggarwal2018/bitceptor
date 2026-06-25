"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, ArrowRight, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// ── Inline SVG logo (same as header) ──────────────────────────────────────
function BitceptorLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" stroke="#3b82f6" strokeWidth="4" fill="rgba(37,99,235,0.15)" />
      <line x1="36" y1="22" x2="36" y2="78" stroke="#60a5fa" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="36" cy="28" r="5" fill="#60a5fa" />
      <circle cx="36" cy="50" r="5" fill="#60a5fa" />
      <circle cx="36" cy="72" r="5" fill="#60a5fa" />
      <line x1="36" y1="35" x2="58" y2="35" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="58" cy="35" r="3.5" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="36" y1="50" x2="62" y2="50" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="62" cy="50" r="3.5" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
      <line x1="36" y1="65" x2="54" y2="65" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="54" cy="65" r="3.5" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
      <path d="M58 28 Q80 38 58 50" stroke="#93c5fd" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M58 50 Q82 62 56 74" stroke="#93c5fd" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "AI Solutions", href: "#ai-solutions" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="w-full">

      {/* ── CTA Banner ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className="relative rounded-2xl overflow-hidden px-8 md:px-12 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border bg-gradient-to-br from-blue-50 to-green-50 border-blue-200 dark:from-slate-950 dark:via-slate-900/60 dark:to-blue-950/20 dark:border-slate-800 transition-all duration-300"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-snug max-w-sm">
              Ready to build something{" "}
              <span className="text-blue-600 dark:text-blue-400">intelligent</span> together?
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Let&apos;s talk about how Bitceptor can help transform your business with technology.
            </p>
          </div>

          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-500 transition-colors duration-150"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── Main footer body ───────────────────────────────────────────── */}
      <div className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Col 1 — Brand */}
            <div className="space-y-5">
              <Link href="#home" className="flex items-center gap-2.5">
                <BitceptorLogo size={34} />
                <div className="flex flex-col leading-none">
                  <span className="text-[0.95rem] font-bold tracking-[0.12em] uppercase text-white">
                    Bitceptor
                  </span>
                  <span className="text-[0.55rem] font-medium tracking-[0.22em] uppercase text-slate-400 mt-0.5">
                    Systems
                  </span>
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed max-w-[220px]">
                Engineering intelligent systems for the future — your trusted partner in IT and AI innovation.
              </p>
              {/* Social icons */}
              <div className="flex gap-2.5 pt-1">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition-all duration-150"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 — Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-5">
                Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-5">
                Contact Us
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-[220px]">
                Have a project in mind? Reach out and we&apos;ll get back to you within 24 hours.
              </p>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:advit.aggarwal@bitceptor.com"
                    className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-150 group"
                  >
                    <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500 group-hover:bg-blue-600/20 transition-all">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    advit.aggarwal@bitceptor.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919837003093"
                    className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-150 group"
                  >
                    <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500 group-hover:bg-blue-600/20 transition-all">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    +91-9837003093
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              &copy; {currentYear} Bitceptor Systems. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Sheet open={privacyOpen} onOpenChange={setPrivacyOpen}>
                <SheetTrigger asChild>
                  <button className="text-xs text-slate-500 hover:text-slate-300 transition-colors focus:outline-none cursor-pointer bg-transparent border-0 p-0">
                    Privacy Policy
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:max-w-lg overflow-y-auto bg-background p-6 shadow-2xl border-l border-border"
                >
                  <SheetHeader className="pb-6 border-b border-border">
                    <SheetTitle className="text-2xl font-bold text-foreground text-left">
                      Privacy Policy
                    </SheetTitle>
                    <p className="text-xs text-muted-foreground text-left mt-1">
                      Last updated: February 2026
                    </p>
                  </SheetHeader>
                  <div className="space-y-6 pt-6 text-sm text-muted-foreground leading-relaxed text-left">
                    {[
                      {
                        title: "1. Information We Collect",
                        body: "We collect information that you voluntarily provide to us when you fill out the contact form on our website. This includes your name, email address, company name, and the content of your message. We may also collect certain diagnostic, performance, and usage data automatically through cookies and website analytics.",
                      },
                      {
                        title: "2. How We Use Your Information",
                        body: "We use the information we collect to respond to your inquiries and support requests, improve the functionality and performance of our website, detect and prevent spam or security issues, and analyze how visitors interact with our services.",
                      },
                      {
                        title: "3. Data Protection and Security",
                        body: "We implement industry-standard administrative, physical, and technical security measures designed to protect your personal data from unauthorized access, modification, or disclosure. We retain your information only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal requirements.",
                      },
                      {
                        title: "4. Your Rights (GDPR & Data Protection)",
                        body: "Depending on your location, you may have rights regarding your personal data under applicable data protection laws. These include the right to access the data we store about you, correct inaccuracies, request erasure of your details, restrict processing, and request data portability.",
                      },
                      {
                        title: "5. Cookies and Tracking",
                        body: "We use cookies to analyze web traffic and optimize your browsing experience. You can choose to accept or decline cookies through your browser settings. Declining cookies may prevent you from taking full advantage of some features on our site.",
                      },
                    ].map((section) => (
                      <section key={section.title}>
                        <h4 className="font-semibold text-foreground mb-2 text-base">
                          {section.title}
                        </h4>
                        <p>{section.body}</p>
                      </section>
                    ))}
                    <section className="pb-8">
                      <h4 className="font-semibold text-foreground mb-2 text-base">
                        6. Contact Us
                      </h4>
                      <p>
                        For any questions, concerns, or requests regarding this Privacy
                        Policy or how we handle your personal data, please reach out to us at:
                      </p>
                      <a
                        href="mailto:advit.aggarwal@bitceptor.com"
                        className="inline-block mt-2 font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        advit.aggarwal@bitceptor.com
                      </a>
                    </section>
                  </div>
                </SheetContent>
              </Sheet>

              <span className="text-slate-700 text-xs">|</span>
              <span className="text-xs text-slate-500">
                Made with ♥ in India
              </span>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}