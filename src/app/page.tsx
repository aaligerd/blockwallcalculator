import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import SeoContentSection from "@/components/SeoContentSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Concrete Block Wall Calculator (with PDF Report)",
  description: "Calculate required CMU, cinder, or concrete blocks for walls instantly. Estimate grout fill volumes, material costs, and export a professional PDF report.",
  openGraph: {
    title: "Concrete Block Wall Calculator (with PDF Report)",
    description: "Calculate required CMU, cinder, or concrete blocks for walls instantly. Estimate grout fill volumes, material costs, and export a professional PDF report.",
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
};

export default function Home() {
  return (
    <>
      <SchemaMarkup />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            Professional Concrete <span className="text-masonry-brick">Block Wall</span> Calculator
          </h1>
          <p className="text-lg text-slate-655 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Instantly calculate required CMU, cinder, or concrete blocks for walls. Real-time reactive estimations with precision buffers for professional contractors and DIY builds.
          </p>
        </div>

        {/* Reactive Calculator Engine */}
        <BlockCalculatorEngine />

        {/* SEO Text Content */}
        <SeoContentSection />
      </div>
    </>
  );
}
