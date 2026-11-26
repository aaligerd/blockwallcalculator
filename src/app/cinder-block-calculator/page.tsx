import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import CinderBlockSeoContent from "@/components/CinderBlockSeoContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Cinder Block Calculator | Estimate Wall Blocks, Pallets & Cost",
  description: "Calculate how many cinder blocks you need for walls, raised beds, or retaining structures. Includes pallet counts, block weights, mortar bags, and cost estimates.",
  openGraph: {
    title: "Cinder Block Calculator | Estimate Wall Blocks, Pallets & Cost",
    description: "Calculate how many cinder blocks you need for walls, raised beds, or retaining structures. Includes pallet counts, block weights, mortar bags, and cost estimates.",
    url: "https://blockwallcalculator.com/cinder-block-calculator",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "Cinder Block Wall Calculator Estimator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CinderBlockCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        applicationName="Cinder Block Calculator"
        applicationDescription="Calculate required cinder blocks for walls and landscaping projects. Estimate pallet counts, mortar, and material costs."
        url="https://blockwallcalculator.com/cinder-block-calculator"
        faqs={[
          {
            question: "How many cinder blocks do I need for a 10x10 wall?",
            answer: "A 10x10 wall covers 100 square feet. Standard 8x8x16 blocks cover 0.8888 sq ft each (1.125 blocks per sq ft). You will need 113 blocks net, or 124 blocks with a recommended 10% waste buffer."
          },
          {
            question: "How much does a cinder block weigh?",
            answer: "A standard hollow 8x8x16 cinder block made with fly ash or lightweight aggregate weighs about 28 to 34 lbs. Solid blocks weigh around 45 to 50 lbs."
          },
          {
            question: "How many cinder blocks are on a pallet?",
            answer: "A standard pallet typically contains 90 to 120 cinder blocks of 8x8x16 size, with a total freight shipping weight of 2,800 to 3,800 lbs."
          },
          {
            question: "How much does a cinder block cost?",
            answer: "Standard 8x8x16 cinder blocks typically cost between $2.00 and $3.25 each at retail stores like Home Depot or Lowe's, with contractor pallet volume pricing around $1.80 to $2.50 per block."
          }
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            Cinder Block <span className="text-masonry-brick">Wall</span> Calculator & Estimator
          </h1>
          <div className="flex justify-center pt-2">
            <a href="https://launchbuff.com/products/block-wall-calculator-rn3p6a" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
              <img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="256" height="80" />
            </a>
          </div>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Quickly estimate cinder blocks for garden retaining walls, raised beds, foundations, and fire pits. Includes custom waste buffers, pallet counts, and mortar mix indicators.
          </p>
        </div>

        {/* Calculator Engine (Defaults to standard standard block) */}
        <BlockCalculatorEngine defaultBlock="8x8x16" defaultCoreSpacing="none" />

        {/* SEO Text Content */}
        <CinderBlockSeoContent />
      </div>
    </>
  );
}
