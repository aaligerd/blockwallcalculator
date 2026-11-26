import React from "react";
import { Metadata } from "next";
import BlockCalculatorEngine from "@/components/BlockCalculatorEngine";
import SeoContentSection from "@/components/SeoContentSection";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Concrete Block Wall Calculator & Estimator | How Many Blocks Do I Need?",
  description: "Calculate required concrete blocks, cinder blocks, or CMUs for walls instantly. Estimate mortar bags, pallet counts, grout fill, and download a free PDF contractor report.",
  openGraph: {
    title: "Concrete Block Wall Calculator & Estimator | Professional CMU Tool",
    description: "Calculate required concrete blocks, cinder blocks, or CMUs for walls instantly. Estimate mortar bags, pallet counts, grout fill, and download a free PDF contractor report.",
    url: "https://blockwallcalculator.com",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "Concrete Block Wall Calculator & Estimator Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <SchemaMarkup
        applicationName="Concrete Block Wall Calculator"
        applicationDescription="Calculate required concrete blocks, cinder blocks, or CMUs for walls instantly. Estimate mortar bags, pallet counts, and grout fill."
        url="https://blockwallcalculator.com"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-none">
            Concrete Block <span className="text-masonry-brick">Wall Calculator</span> & Estimator
          </h1>
          <div className="flex justify-center pt-2">
            <a href="https://launchbuff.com/products/block-wall-calculator-rn3p6a" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
              <img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="256" height="80" />
            </a>
          </div>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Instantly calculate how many concrete blocks you need for any wall, retaining structure, or foundation. Includes precision waste margins, mortar bags, pallet counts, and core grout estimation.
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
