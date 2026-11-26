import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import BreezeBlockSeoContent from "@/components/BreezeBlockSeoContent";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Breeze Block Calculator (2026) | Blocks per Square Metre (m²) & Mortar",
  description: "Calculate standard 440mm × 215mm × 100mm UK breeze blocks, dense concrete blocks, mortar, and pallets required per square metre (m²). Instant contractor estimates.",
  openGraph: {
    title: "Breeze Block Calculator (UK & Metric) | Blocks per m² Estimator",
    description: "Calculate UK breeze blocks, lightweight thermalite blocks, dense concrete blocks, and mortar mix per square metre.",
    url: "https://blockwallcalculator.com/breeze-block-calculator",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "UK Breeze Block Wall Calculator Tool",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function BreezeBlockCalculatorPage() {
  return (
    <>
      <SchemaMarkup
        applicationName="Breeze Block Calculator (UK & Metric)"
        applicationDescription="Calculate required UK breeze blocks, dense concrete blocks, and mortar bags per square metre (m²)."
        url="https://blockwallcalculator.com/breeze-block-calculator"
        faqs={[
          {
            question: "How many breeze blocks do I need per square metre (m²)?",
            answer: "For standard UK breeze blocks measuring 440mm × 215mm × 100mm, exactly 10 blocks cover 1 square metre (1 m²). With a 10% wastage allowance, estimate 11 blocks per m²."
          },
          {
            question: "How much does a standard UK breeze block weigh?",
            answer: "A lightweight aerated (Thermalite) breeze block weighs approximately 7.5 to 9.0 kg, while a standard dense concrete block weighs 17.0 to 20.0 kg."
          },
          {
            question: "How many breeze blocks are on a standard UK pallet / pack?",
            answer: "A typical UK manufacturer pallet contains 72 standard 100mm breeze blocks (covering 7.2 m²), weighing approximately 1.3 to 1.4 tonnes."
          }
        ]}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-xs font-bold border border-blue-200/60 dark:border-blue-800/40">
            <span>🇬🇧</span> UK &amp; International Metric Standards (BS EN 771-3)
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            Breeze Block <span className="text-masonry-brick">Wall</span> Calculator &amp; Estimator
          </h1>
          <div className="flex justify-center pt-2">
            <a href="https://launchbuff.com/products/block-wall-calculator-rn3p6a" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
              <img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="256" height="80" />
            </a>
          </div>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Calculate standard 440mm × 215mm breeze blocks, dense aggregate blocks, mortar mix, and packs per square metre (m²). Supports UK metric sizing with instant printable PDF reports.
          </p>
        </div>

        {/* Calculator Engine (Defaults to Metric UK Breeze Block) */}
        <BlockCalculatorEngine
          isBreezeBlock={true}
          defaultUnit="metric"
          defaultBlock="uk-440x215x100"
          defaultCoreSpacing="none"
        />

        {/* SEO Technical Guide */}
        <BreezeBlockSeoContent />
      </div>
    </>
  );
}
