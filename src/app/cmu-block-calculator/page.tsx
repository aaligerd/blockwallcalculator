import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import CmuBlockSeoContent from "@/components/CmuBlockSeoContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "CMU Block Calculator | Concrete Masonry Unit Wall Estimator",
  description: "Professional CMU block calculator for structural and foundation walls. Estimate standard 8x8x16, 6-inch, and 12-inch CMUs, mortar bags, core fill, and export PDF reports.",
  openGraph: {
    title: "CMU Block Calculator | Concrete Masonry Unit Wall Estimator",
    description: "Professional CMU block calculator for structural and foundation walls. Estimate standard 8x8x16, 6-inch, and 12-inch CMUs, mortar bags, core fill, and export PDF reports.",
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
      <SchemaMarkup
        applicationName="CMU Block Calculator"
        applicationDescription="Professional Concrete Masonry Unit (CMU) calculator for estimating block quantities, mortar bags, and core fill."
        url="https://blockwallcalculator.com/cmu-block-calculator"
        faqs={[
          {
            question: "What does CMU stand for in construction?",
            answer: "CMU stands for Concrete Masonry Unit, a standard rectangular concrete block manufactured to strict ASTM C90 specifications for load-bearing and non-load-bearing walls."
          },
          {
            question: "What is the standard size of a CMU block?",
            answer: "The most common CMU is nominal 8\"x8\"x16\". Its actual manufactured dimensions are 7-5/8\" width, 7-5/8\" height, and 15-5/8\" length, allowing exactly 3/8\" for mortar joints."
          },
          {
            question: "How much does a standard 8x8x16 CMU block weigh?",
            answer: "Under ASTM C90 specifications, a hollow 8x8x16 CMU block weighs 28 to 33 lbs in lightweight mix, 33 to 38 lbs in medium-weight mix, and 38 to 44 lbs in normal-weight gravel mix."
          }
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            CMU Block <span className="text-masonry-brick">Wall</span> Calculator & Estimator
          </h1>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Estimate structural Concrete Masonry Units (CMUs) for load-bearing and foundation walls. Supports ASTM standard sizes, core spacing, mortar bags, and contractor material lists.
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
