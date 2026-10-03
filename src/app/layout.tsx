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
  title: "Concrete Block Wall Calculator (2026) | How Many Blocks Do I Need?",
  description: "Free concrete block, cinder block, CMU, and retaining wall calculator. Instantly estimate blocks, mortar bags, core fill grout, pallets, and project costs.",
  openGraph: {
    title: "Concrete Block Wall Calculator | Professional Masonry Estimator",
    description: "Instantly calculate concrete blocks, cinder blocks, retaining walls, mortar bags, and core fill required for any construction wall.",
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
                {/* Inline SVG block icon */}
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
              <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-zinc-300" aria-label="Main Navigation">
                <Link href="/" className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  Wall Calc
                </Link>
                <Link href="/cinder-block-calculator" className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  Cinder Block
                </Link>
                <Link href="/retaining-wall-block-calculator" className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  Retaining Wall
                </Link>
                <Link href="/mortar-calculator" className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  Mortar Mix
                </Link>
                <Link href="/concrete-block-fill-calculator" className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  Block Fill
                </Link>
                <Link href="/breeze-block-calculator" className="px-2.5 py-1.5 rounded-lg hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors">
                  UK Breeze Block
                </Link>
                <Link href="/concrete-block-sizes" className="px-2.5 py-1.5 rounded-lg font-semibold text-masonry-brick dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                  Sizes &amp; Weights
                </Link>
              </nav>

              <div className="hidden sm:block text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-zinc-800 dark:text-zinc-400 px-3 py-1 rounded-full border border-slate-200/50 dark:border-zinc-700/50 select-none">
                2026 Pro Edition
              </div>
            </div>

            {/* Mobile Horizontal Scrollable Navigation */}
            <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2.5 border-t border-slate-100 dark:border-zinc-800/80 scrollbar-none text-xs font-semibold whitespace-nowrap">
              <Link href="/" className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200">
                Wall Calc
              </Link>
              <Link href="/cinder-block-calculator" className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200">
                Cinder Block
              </Link>
              <Link href="/retaining-wall-block-calculator" className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200">
                Retaining Wall
              </Link>
              <Link href="/mortar-calculator" className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200">
                Mortar Calc
              </Link>
              <Link href="/concrete-block-fill-calculator" className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-200 hover:bg-slate-200">
                Block Fill
              </Link>
              <Link href="/breeze-block-calculator" className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300">
                UK Breeze Block
              </Link>
              <Link href="/concrete-block-sizes" className="px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/40 text-masonry-brick dark:text-red-400 border border-red-200/50">
                Sizes &amp; Weights
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
                    <Link href="/retaining-wall-block-calculator" className="hover:text-white transition-colors">Retaining Wall Block Calculator</Link>
                  </li>
                  <li>
                    <Link href="/mortar-calculator" className="hover:text-white transition-colors">Mortar &amp; Mix Bags Calculator</Link>
                  </li>
                  <li>
                    <Link href="/concrete-block-fill-calculator" className="hover:text-white transition-colors">Concrete Block Fill &amp; Core Grout</Link>
                  </li>
                  <li>
                    <Link href="/cmu-block-calculator" className="hover:text-white transition-colors">CMU Block Wall Estimator</Link>
                  </li>
                  <li>
                    <Link href="/breeze-block-calculator" className="hover:text-white transition-colors">UK Breeze Block (m²) Calculator</Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Dimensions & Technical Guides */}
              <div className="space-y-3">
                <h3 className="text-white font-bold tracking-wide uppercase text-xs">Dimensions &amp; Specifications</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/concrete-block-sizes" className="hover:text-white transition-colors">Concrete &amp; Cinder Block Sizes Chart</Link>
                  </li>
                  <li>
                    <Link href="/concrete-block-sizes#nominal-vs-actual" className="hover:text-white transition-colors">Nominal vs. Actual Block Dimensions</Link>
                  </li>
                  <li>
                    <Link href="/concrete-block-sizes#weights" className="hover:text-white transition-colors">Cinder &amp; CMU Block Weight Chart (lbs/kg)</Link>
                  </li>
                  <li>
                    <Link href="/concrete-block-sizes#pallets" className="hover:text-white transition-colors">Pallet Quantities &amp; Coverage Rates</Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Company & Policies */}
              <div className="space-y-3">
                <h3 className="text-white font-bold tracking-wide uppercase text-xs">Company &amp; Support</h3>
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
                    <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-6 text-center space-y-3">
              <p className="text-sm font-medium text-slate-400">
                © {new Date().getFullYear()} blockwallcalculator.com. All rights reserved.
              </p>
              <p className="text-xs text-slate-500 max-w-xl mx-auto leading-relaxed">
                Estimates provided are for planning and ordering reference. Always verify regional building codes, ASTM C90 / BS EN 771-3 masonry standards, and structural engineering requirements before ordering construction materials.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
