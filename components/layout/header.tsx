import Link from "next/link";
import { MobileNav } from "./mobile-nav";

// Inline SVG logo — works on both dark and light backgrounds
function BitceptorLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Hexagon outline */}
      <polygon
        points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
        stroke="url(#hex-stroke)"
        strokeWidth="4"
        fill="url(#hex-fill)"
      />

      {/* Circuit vertical spine */}
      <line x1="36" y1="22" x2="36" y2="78" stroke="url(#line-grad)" strokeWidth="3.5" strokeLinecap="round" />

      {/* Circuit nodes on spine */}
      <circle cx="36" cy="28" r="5" fill="url(#node-grad)" />
      <circle cx="36" cy="50" r="5" fill="url(#node-grad)" />
      <circle cx="36" cy="72" r="5" fill="url(#node-grad)" />

      {/* Horizontal branches */}
      <line x1="36" y1="35" x2="58" y2="35" stroke="url(#line-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="58" cy="35" r="3.5" fill="none" stroke="url(#node-grad)" strokeWidth="2.5" />

      <line x1="36" y1="50" x2="62" y2="50" stroke="url(#line-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="62" cy="50" r="3.5" fill="none" stroke="url(#node-grad)" strokeWidth="2.5" />

      <line x1="36" y1="65" x2="54" y2="65" stroke="url(#line-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="54" cy="65" r="3.5" fill="none" stroke="url(#node-grad)" strokeWidth="2.5" />

      {/* Right bold "B" arc strokes mimicking the logo */}
      <path
        d="M58 28 Q80 38 58 50"
        stroke="url(#b-grad)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M58 50 Q82 62 56 74"
        stroke="url(#b-grad)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Gradient defs */}
      <defs>
        <linearGradient id="hex-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f1e3a" />
          <stop offset="100%" stopColor="#0a0f1e" />
        </linearGradient>
        <linearGradient id="hex-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <radialGradient id="node-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#3b82f6" />
        </radialGradient>
        <linearGradient id="b-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#offerings", label: "Offerings" },
  { href: "#ai-solutions", label: "AI Solutions" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">

        {/* LEFT — Logo + wordmark */}
        <Link
          href="#home"
          className="flex items-center gap-2.5 flex-shrink-0 group"
        >
          <BitceptorLogo size={36} />
          <span className="flex flex-col leading-none">
            <span className="text-[1.05rem] font-bold tracking-[0.12em] uppercase text-foreground group-hover:text-blue-500 transition-colors duration-200">
              Bitceptor
            </span>
            <span className="text-[0.55rem] font-medium tracking-[0.22em] uppercase text-muted-foreground">
              Systems
            </span>
          </span>
        </Link>

        {/* CENTER — Desktop nav (absolutely centered) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground
                         after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-blue-500
                         after:transition-all after:duration-200 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* RIGHT — Contact button + mobile toggle */}
        <div className="ml-auto flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm
                       hover:bg-blue-500 active:bg-blue-700 transition-colors duration-150 focus-visible:outline focus-visible:outline-2
                       focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Contact Us
          </Link>
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>

      </div>
    </header>
  );
}