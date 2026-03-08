import Link from "next/link";
import {MobileNav } from "./mobile-nav";

export function Header() {
    return(
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Company Logo/Name */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Bitceptor</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/offerings"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Offerings
          </Link>
          <Link
            href="/ai-solutions"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            AI Solutions
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
     </header>
    );
}