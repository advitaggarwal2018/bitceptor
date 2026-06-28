import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bitceptor.com"),
  title: {
    default: "Bitceptor Systems | Engineering Intelligent AI & IT Systems",
    template: "%s | Bitceptor Systems",
  },
  description:
    "Bitceptor Systems delivers enterprise-grade IT services, cloud infrastructure, custom software development, machine learning, and automation solutions.",
  keywords: [
    "Bitceptor",
    "Bitceptor Systems",
    "IT Services",
    "AI Solutions",
    "Cloud Infrastructure",
    "DevOps Engineering",
    "Custom Software Development",
    "Machine Learning",
    "Enterprise Automation",
    "Cybersecurity Solutions",
  ],
  authors: [{ name: "Bitceptor Systems", url: "https://bitceptor.com" }],
  creator: "Bitceptor Systems",
  publisher: "Bitceptor Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitceptor.com",
    title: "Bitceptor Systems | Engineering Intelligent Systems for the Future",
    description:
      "Transforming enterprises with scalable cloud architecture, custom software engineering, and innovative AI solutions.",
    siteName: "Bitceptor Systems",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bitceptor Systems - Engineering Intelligent Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitceptor Systems | Engineering Intelligent AI & IT Systems",
    description:
      "Enterprise IT services, cloud infrastructure, custom software, and cutting-edge AI solutions.",
    images: ["/og-image.png"],
    creator: "@bitceptor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bitceptor.com/#organization",
        name: "Bitceptor Systems",
        url: "https://bitceptor.com",
        logo: "https://bitceptor.com/logo.jpeg",
        description:
          "Bitceptor delivers innovative IT services and cutting-edge AI solutions specializing in cloud infrastructure, custom software, machine learning, and automation.",
      },
      {
        "@type": "WebSite",
        "@id": "https://bitceptor.com/#website",
        url: "https://bitceptor.com",
        name: "Bitceptor Systems",
        publisher: {
          "@id": "https://bitceptor.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}>
        <Navbar />
        <main className="w-full">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
