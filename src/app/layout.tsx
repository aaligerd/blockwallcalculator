import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Professional Concrete Block Wall Calculator & Estimator",
  description: "Calculate required CMU, cinder, or concrete blocks for walls instantly. Reactive input layout optimized for modern construction and DIY projects.",
  openGraph: {
    title: "Concrete Block Wall Calculator | Professional CMU Estimator",
    description: "Instantly calculate the number of concrete blocks, surface area, and safety buffer required for structural masonry walls.",
    url: "https://blockwallcalculator.com",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "Block Wall Calculator & Estimator Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "SAPM1vGtoPvyHy-tDhf4QtCgeyfNKW2HwB_VVykS9Xw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H42D34Y8XE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H42D34Y8XE');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-masonry-light dark:bg-zinc-950 text-slate-800 dark:text-zinc-200 transition-colors">
        {/* Brand Header */}
        <header className="bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-zinc-900/95 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center justify-between gap-4">
              <Link href="/" className="flex items-center gap-2.5 shrink-0 hover:opacity-90 transition-opacity">
                {/* Inline SVG block icon representing concrete block structure */}
                <svg className="w-8 h-8 text-masonry-brick shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 15H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M15 15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-xl font-black tracking-tight text-slate-800 dark:text-zinc-50 select-none">
                  BlockWall<span className="text-masonry-brick">Calculator</span>
                </span>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-zinc-300" aria-label="Main Navigation">
                <Link href="/" className="px-3 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  Wall Calculator
                </Link>
                <Link href="/cinder-block-calculator" className="px-3 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  Cinder Block
                </Link>
                <Link href="/concrete-block-fill-calculator" className="px-3 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  Block Fill & Grout
                </Link>
                <Link href="/cmu-block-calculator" className="px-3 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  CMU Block
                </Link>
                <Link href="/concrete-block-sizes" className="px-3 py-1.5 rounded-lg font-semibold text-masonry-brick dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                  Sizes & Weights Guide
                </Link>
              </nav>

              <div className="hidden sm:block text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-zinc-800 dark:text-zinc-400 px-3 py-1 rounded-full border border-slate-200/50 dark:border-zinc-700/50 select-none">
                v1.0 (Static Edge)
              </div>
            </div>

            {/* Mobile Horizontal Scrollable Navigation */}
            <div className="md:hidden flex items-center gap-2 overflow-x-auto py-2.5 border-t border-slate-100 dark:border-zinc-800/80 scrollbar-none text-xs font-semibold whitespace-nowrap">
              <Link href="/" className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200">
                Wall Calc
              </Link>
              <Link href="/cinder-block-calculator" className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200">
                Cinder Block
              </Link>
              <Link href="/concrete-block-fill-calculator" className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200">
                Block Fill & Grout
              </Link>
              <Link href="/cmu-block-calculator" className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200">
                CMU Block
              </Link>
              <Link href="/concrete-block-sizes" className="px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 text-masonry-brick dark:text-red-400 border border-red-200/50">
                Sizes & Dimensions
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 flex flex-col">{children}</div>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* 3-Column Footer Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
              {/* Column 1: Calculators */}
              <div className="space-y-3">
                <h3 className="text-white font-bold tracking-wide uppercase text-xs">Masonry Calculators</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">Concrete Block Wall Calculator</Link>
                  </li>
                  <li>
                    <Link href="/cinder-block-calculator" className="hover:text-white transition-colors">Cinder Block Calculator</Link>
                  </li>
                  <li>
                    <Link href="/concrete-block-fill-calculator" className="hover:text-white transition-colors">Concrete Block Fill & Core Grout Calculator</Link>
                  </li>
                  <li>
                    <Link href="/cmu-block-calculator" className="hover:text-white transition-colors">CMU Block Wall Estimator</Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Dimensions & Technical Guides */}
              <div className="space-y-3">
                <h3 className="text-white font-bold tracking-wide uppercase text-xs">Dimensions & Specifications</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/concrete-block-sizes" className="hover:text-white transition-colors">Concrete & Cinder Block Sizes Chart</Link>
                  </li>
                  <li>
                    <Link href="/concrete-block-sizes#nominal-vs-actual" className="hover:text-white transition-colors">Nominal vs. Actual Block Dimensions</Link>
                  </li>
                  <li>
                    <Link href="/concrete-block-sizes#weights" className="hover:text-white transition-colors">Cinder & CMU Block Weight Chart (lbs/kg)</Link>
                  </li>
                  <li>
                    <Link href="/concrete-block-sizes#pallets" className="hover:text-white transition-colors">Pallet Quantities & Coverage Rates</Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Company & Policies */}
              <div className="space-y-3">
                <h3 className="text-white font-bold tracking-wide uppercase text-xs">Company & Support</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-6 text-center space-y-3">
              <p className="text-sm font-medium text-slate-400">
                © 2026 blockwallcalculator.com. All rights reserved.
              </p>
              <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
                Estimates provided are for planning and ordering reference. Always verify regional building codes, ASTM C90 masonry standards, and structural engineering requirements before ordering construction materials.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
