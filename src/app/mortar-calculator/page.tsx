import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import MortarSeoContent from "@/components/MortarSeoContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Mortar Calculator (2026) | How Many Bags of Mortar for Blocks & Bricks?",
  description: "Calculate how many 80 lb or 60 lb bags of mortar mix you need for laying concrete blocks, CMU, and brick walls. Supports Type S, Type N, and Type M mortar mixes.",
  openGraph: {
    title: "Mortar Calculator & Bag Estimator | Professional Masonry Tool",
    description: "Calculate required mortar bags, cement, sand ratios, and material costs for concrete block and brick construction.",
    url: "https://blockwallcalculator.com/mortar-calculator",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "Mortar Calculator and Bag Estimator Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function MortarCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        applicationName="Mortar Calculator & Bag Estimator"
        applicationDescription="Calculate required bags of premixed mortar, Portland cement, and masonry sand for concrete block and CMU masonry walls."
        url="https://blockwallcalculator.com/mortar-calculator"
        faqs={[
          {
            question: "How many bags of mortar do I need for 100 concrete blocks?",
            answer: "You need approximately 3.5 bags of 80 lb mortar mix (or 4.5 bags of 60 lb mix) per 100 standard 8x8x16 concrete blocks with standard 3/8-inch joints."
          },
          {
            question: "What is the difference between Type S and Type N mortar?",
            answer: "Type S mortar has a higher compressive strength (1,800 PSI) and is required for structural, below-grade, and retaining walls. Type N mortar (750 PSI) is used for above-grade exterior and interior non-structural walls."
          },
          {
            question: "How many 80lb bags of mortar are in a pallet?",
            answer: "A standard pallet contains 42 to 48 bags of 80 lb mortar mix, with a total pallet weight of 3,360 to 3,840 lbs."
          }
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            Mortar <span className="text-masonry-brick">Mix</span> Calculator & Bag Estimator
          </h1>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Quickly estimate required 80 lb and 60 lb bags of premixed mortar, Portland cement, and sand for any concrete block, CMU, or brick wall. Includes ASTM C270 Type S, N, and M guidance.
          </p>
        </div>

        {/* Calculator Engine (Mortar-Focused Setup) */}
        <BlockCalculatorEngine
          isMortarFocused={true}
          defaultBlock="8x8x16"
          defaultCoreSpacing="none"
        />

        {/* SEO Technical Guide */}
        <MortarSeoContent />
      </div>
    </>
  );
}
