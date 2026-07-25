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
        <header className="bg-white dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              {/* Inline SVG block icon representing concrete block structure */}
              <svg className="w-8 h-8 text-masonry-brick" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
            <div className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-zinc-800 dark:text-zinc-400 px-3 py-1 rounded-full border border-slate-200/50 dark:border-zinc-700/50 select-none">
              v1.0 (Static Edge)
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 flex flex-col">{children}</div>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            
            {/* Footer Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-300" aria-label="Footer Navigation">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </nav>

            <div className="border-t border-slate-800/80 my-6"></div>

            <p className="text-sm font-medium">
              © 2026 blockwallcalculator.com. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              Estimates provided are for instructional and planning use only. Always verify structural engineering and layout requirements on-site before ordering materials.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
