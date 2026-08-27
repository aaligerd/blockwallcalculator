import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import CmuBlockSeoContent from "@/components/CmuBlockSeoContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Commercial CMU Block Calculator (with PDF Report)",
  description: "Professional CMU block wall estimator. Calculate exact Concrete Masonry Units, mortar joints, core filling grout, and export a professional PDF report.",
  openGraph: {
    title: "Commercial CMU Block Calculator (with PDF Report)",
    description: "Professional CMU block wall estimator. Calculate exact Concrete Masonry Units, mortar joints, core filling grout, and export a professional PDF report.",
    url: "https://blockwallcalculator.com/cmu-block-calculator",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "CMU Block Calculator Estimator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CmuBlockCalculatorPage() {
  return (
    <>
      <SchemaMarkup />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            CMU Block <span className="text-masonry-brick">Wall</span> Estimator
          </h1>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Estimate structural concrete masonry units (CMUs) for load-bearing and partition walls. Supports ASTM standard sizing, core spacing, and material lists.
          </p>
        </div>

        {/* Calculator Engine */}
        <BlockCalculatorEngine defaultBlock="8x8x16" defaultCoreSpacing="none" />

        {/* SEO Text Content */}
        <CmuBlockSeoContent />
      </div>
    </>
  );
}
