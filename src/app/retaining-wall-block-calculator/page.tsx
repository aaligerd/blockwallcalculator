import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import RetainingWallSeoContent from "@/components/RetainingWallSeoContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Retaining Wall Block Calculator (2026) | Estimate Blocks, Caps & Gravel Cost",
  description: "Calculate how many retaining wall blocks, cap stones, and drainage gravel backfill you need for any retaining wall. Includes cost estimation and instant contractor PDF export.",
  openGraph: {
    title: "Retaining Wall Block Calculator & Estimator | Free Project Estimator",
    description: "Calculate required retaining wall blocks, cap stones, gravel drainage backfill, and material costs instantly.",
    url: "https://blockwallcalculator.com/retaining-wall-block-calculator",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "Retaining Wall Block Calculator Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RetainingWallBlockCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        applicationName="Retaining Wall Block Calculator"
        applicationDescription="Calculate required retaining wall blocks, wall cap stones, and drainage gravel backfill."
        url="https://blockwallcalculator.com/retaining-wall-block-calculator"
        faqs={[
          {
            question: "How do I calculate how many retaining wall blocks I need?",
            answer: "Multiply your wall length by the wall height to find total square footage. For standard 16\" × 6\" retaining blocks, multiply the total square feet by 1.5, then add 10% for cutting waste and slope stepping."
          },
          {
            question: "How many retaining wall blocks are in a pallet?",
            answer: "A standard pallet holds 75 to 100 segmental retaining wall blocks (approx 16\"x6\"x12\"), weighing between 2,800 and 3,500 lbs."
          },
          {
            question: "How much gravel do I need behind a retaining wall?",
            answer: "You need a 12-inch wide trench of 3/4-inch angular crushed stone directly behind the wall for drainage. Multiply wall length × wall height × 1 ft depth and divide by 27 to get cubic yards."
          }
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            Retaining Wall <span className="text-masonry-brick">Block</span> Calculator & Estimator
          </h1>
          <div className="flex justify-center pt-2">
            <a href="https://launchbuff.com/products/block-wall-calculator-rn3p6a" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
              <img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="256" height="80" />
            </a>
          </div>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Instantly calculate segmental blocks, cap stones, and gravel drainage backfill for garden and heavy-duty structural retaining walls. Supports both Imperial (Feet) and Metric (Meters).
          </p>
        </div>

        {/* Retaining Wall Calculator Engine */}
        <BlockCalculatorEngine
          isRetainingWall={true}
          defaultBlock="retaining-16x6x12"
          defaultCoreSpacing="none"
        />

        {/* SEO Technical Guide */}
        <RetainingWallSeoContent />
      </div>
    </>
  );
}
