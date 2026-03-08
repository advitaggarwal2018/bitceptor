"use client";
import Link from "next/link";
import {Menu} from "lucide-react";
import {useState} from "react";
import{
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
    const [open, setOpen ] = useState(false);

    const navigationLinks = [
        {href: "/", label: "Home" },
        {href: "/offerings", label: "Offerings"},
        {href: "/ai-solutions", label: "AI Solutions"},
        {href: "/about", label: "About"},
        {href: "/contact", label: "Contact"},
    ];
    return(
        <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>

    );
}