"use client";

import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [open, setOpen] = useState(false);

  return (
    <footer className="border-t border-border bg-background/95 text-foreground backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="space-y-1">
            <h3 className="font-bold text-lg">Bitceptor Systems</h3>
            <p className="text-sm text-muted-foreground">
              Engineering Intelligent Systems for the future
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="mailto:advit.aggarwal@bitceptor.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              advit.aggarwal@bitceptor.com
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={16} />
              +91-9837003093
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-2">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Bitceptor Systems. All rights reserved.
            </p>
            <span className="hidden sm:inline text-slate-300">|</span>
            
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors focus:outline-none bg-transparent border-0 cursor-pointer p-0">
                  Privacy Policy
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto bg-background p-6 shadow-2xl border-l border-border">
                <SheetHeader className="pb-6 border-b border-border">
                  <SheetTitle className="text-2xl font-bold text-foreground text-left">Privacy Policy</SheetTitle>
                  <p className="text-xs text-muted-foreground text-left mt-1">
                    Last updated: February 2026
                  </p>
                </SheetHeader>
                <div className="space-y-6 pt-6 text-sm text-muted-foreground leading-relaxed text-left">
                  <section>
                    <h4 className="font-semibold text-foreground mb-2 text-base">1. Information We Collect</h4>
                    <p>
                      We collect information that you voluntarily provide to us when you fill out the contact form on our website. This includes your name, email address, company name, and the content of your message. We may also collect certain diagnostic, performance, and usage data automatically through cookies and website analytics.
                    </p>
                  </section>
                  <section>
                    <h4 className="font-semibold text-foreground mb-2 text-base">2. How We Use Your Information</h4>
                    <p>
                      We use the information we collect to respond to your inquiries and support requests, improve the functionality and performance of our website, detect and prevent spam or security issues, and analyze how visitors interact with our services.
                    </p>
                  </section>
                  <section>
                    <h4 className="font-semibold text-foreground mb-2 text-base">3. Data Protection and Security</h4>
                    <p>
                      We implement industry-standard administrative, physical, and technical security measures designed to protect your personal data from unauthorized access, modification, or disclosure. We retain your information only as long as necessary to fulfill the purposes outlined in this policy or to comply with legal requirements.
                    </p>
                  </section>
                  <section>
                    <h4 className="font-semibold text-foreground mb-2 text-base">4. Your Rights (GDPR & Data Protection)</h4>
                    <p>
                      Depending on your location, you may have rights regarding your personal data under applicable data protection laws. These include the right to access the data we store about you, correct inaccuracies, request erasure of your details, restrict processing, and request data portability.
                    </p>
                  </section>
                  <section>
                    <h4 className="font-semibold text-foreground mb-2 text-base">5. Cookies and Tracking</h4>
                    <p>
                      We use cookies to analyze web traffic and optimize your browsing experience. You can choose to accept or decline cookies through your browser settings. Declining cookies may prevent you from taking full advantage of some features on our site.
                    </p>
                  </section>
                  <section className="pb-8">
                    <h4 className="font-semibold text-foreground mb-2 text-base">6. Contact Us</h4>
                    <p>
                      For any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please reach out to us at:
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
          </div>
        </div>
      </div>
    </footer>
  );
}
