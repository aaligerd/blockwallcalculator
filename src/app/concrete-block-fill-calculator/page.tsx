import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import BlockFillSeoContent from "@/components/BlockFillSeoContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Concrete Block Fill Calculator | Cinder Block Core & Grout Estimator",
  description: "Calculate concrete or grout volume to fill hollow core CMU and cinder blocks. Accurately estimate cubic yards and 80lb ready-mix bags with vertical spacing.",
  openGraph: {
    title: "Concrete Block Fill Calculator | Cinder Block Core & Grout Estimator",
    description: "Calculate concrete or grout volume to fill hollow core CMU and cinder blocks. Accurately estimate cubic yards and 80lb ready-mix bags with vertical spacing.",
    url: "https://blockwallcalculator.com/concrete-block-fill-calculator",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "Concrete Block Fill & Grout Volume Calculator Estimator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ConcreteBlockFillCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        applicationName="Concrete Block Fill Calculator"
        applicationDescription="Calculate concrete or grout volume to fill hollow core CMU and cinder blocks in cubic yards and 80lb bags."
        url="https://blockwallcalculator.com/concrete-block-fill-calculator"
        faqs={[
          {
            question: "How many cubic yards of concrete or grout are needed per 100 blocks?",
            answer: "For standard 8x8x16 concrete blocks, a solid grout pour requires about 1.0 to 1.1 cubic yards per 100 blocks. If filling cores at 16 inches on-center (every other core), you will need about 0.50 to 0.55 cubic yards per 100 blocks."
          },
          {
            question: "How many 80lb bags of ready-mix concrete does it take to fill a block?",
            answer: "A standard 8x8x16 block has a core volume of ~0.25 cubic feet. One 80lb bag of concrete yields ~0.60 cubic feet. Therefore, one 80lb bag fills approximately 2.4 hollow cores (roughly 1.2 whole blocks). Approximately 45 bags of 80lb ready-mix yield 1 cubic yard."
          },
          {
            question: "What is the difference between concrete and grout for block fill?",
            answer: "Masonry grout has higher slump (8 to 11 inches) and smaller aggregates (pea gravel) than standard structural concrete. This fluidity allows grout to flow around vertical and horizontal rebar without leaving voids or honeycombs inside the block cores."
          }
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            Concrete Block Fill & <span className="text-masonry-brick">Core Grout</span> Calculator
          </h1>
          <div className="flex justify-center pt-2">
            <a href="https://launchbuff.com/products/block-wall-calculator-rn3p6a" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
              <img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="256" height="80" />
            </a>
          </div>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Calculate the exact volume of concrete grout required to fill hollow cells in concrete and cinder blocks. Accurately estimates cubic yards and 80lb ready-mix bags with vertical spacing parameters.
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
