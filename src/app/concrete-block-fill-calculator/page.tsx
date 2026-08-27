import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import BlockFillSeoContent from "@/components/BlockFillSeoContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "CMU Grout & Core Fill Calculator (with PDF Report)",
  description: "Calculate concrete or grout volume to fill hollow core CMU block cells. Supports vertical spacing options, cost estimation, and PDF downloads.",
  openGraph: {
    title: "CMU Grout & Core Fill Calculator (with PDF Report)",
    description: "Calculate concrete or grout volume to fill hollow core CMU block cells. Supports vertical spacing options, cost estimation, and PDF downloads.",
    url: "https://blockwallcalculator.com/concrete-block-fill-calculator",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "Block Fill Grout Volume Calculator Estimator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ConcreteBlockFillCalculatorPage() {
  return (
    <>
      <SchemaMarkup />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            CMU Grout & <span className="text-masonry-brick">Core Fill</span> Calculator
          </h1>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Calculate the exact volume of concrete grout required to fill your concrete block wall cores. Includes spacing parameters and 80lb ready-mix bag counts.
          </p>
        </div>

        {/* Calculator Engine (Defaults to standard standard block with Solid core spacing enabled) */}
        <BlockCalculatorEngine defaultBlock="8x8x16" defaultCoreSpacing="solid" />

        {/* SEO Text Content */}
        <BlockFillSeoContent />
      </div>
    </>
  );
}
