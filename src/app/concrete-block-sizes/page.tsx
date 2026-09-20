import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Concrete & Cinder Block Sizes, Dimensions & Weight Guide (Charts)",
  description: "Complete reference chart for cinder block and concrete block dimensions (nominal vs. actual), weights (lbs/kg), pallet quantities, and core volumes for 4, 6, 8, 10, and 12-inch blocks.",
  openGraph: {
    title: "Concrete & Cinder Block Sizes, Dimensions & Weight Guide (Charts)",
    description: "Complete reference chart for cinder block and concrete block dimensions (nominal vs. actual), weights (lbs/kg), pallet quantities, and core volumes for 4, 6, 8, 10, and 12-inch blocks.",
    url: "https://blockwallcalculator.com/concrete-block-sizes",
    siteName: "Block Wall Calculator",
    images: [
      {
        url: "https://d1yr7ysliv0ys4.cloudfront.net/site-content/blockwall_og_image_new.webp",
        width: 1200,
        height: 630,
        alt: "Concrete Block Sizes Dimensions and Weight Chart",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const dimensionData = [
  {
    nominal: "4\" × 8\" × 16\"",
    actualInches: "3-5/8\" × 7-5/8\" × 15-5/8\"",
    actualMetric: "92 × 194 × 397 mm",
    hollowWeight: "18 – 22 lbs (8.2 – 10.0 kg)",
    solidWeight: "26 – 30 lbs (11.8 – 13.6 kg)",
    palletQty: "150 – 180 blocks",
    coreVolume: "0.10 cu ft (0.0028 m³)",
    use: "Non-bearing partitions, veneers, basement liners"
  },
  {
    nominal: "6\" × 8\" × 16\"",
    actualInches: "5-5/8\" × 7-5/8\" × 15-5/8\"",
    actualMetric: "143 × 194 × 397 mm",
    hollowWeight: "22 – 28 lbs (10.0 – 12.7 kg)",
    solidWeight: "36 – 40 lbs (16.3 – 18.1 kg)",
    palletQty: "120 – 140 blocks",
    coreVolume: "0.17 cu ft (0.0048 m³)",
    use: "Light load walls, garage walls, garden retaining"
  },
  {
    nominal: "8\" × 8\" × 16\" (Standard)",
    actualInches: "7-5/8\" × 7-5/8\" × 15-5/8\"",
    actualMetric: "194 × 194 × 397 mm",
    hollowWeight: "28 – 38 lbs (12.7 – 17.2 kg)",
    solidWeight: "48 – 54 lbs (21.8 – 24.5 kg)",
    palletQty: "90 – 120 blocks",
    coreVolume: "0.25 cu ft (0.0071 m³)",
    use: "Standard structural walls, foundations, commercial builds"
  },
  {
    nominal: "10\" × 8\" × 16\"",
    actualInches: "9-5/8\" × 7-5/8\" × 15-5/8\"",
    actualMetric: "244 × 194 × 397 mm",
    hollowWeight: "33 – 44 lbs (15.0 – 20.0 kg)",
    solidWeight: "58 – 65 lbs (26.3 – 29.5 kg)",
    palletQty: "75 – 90 blocks",
    coreVolume: "0.32 cu ft (0.0091 m³)",
    use: "Heavy basement walls, earth retaining, multistory walls"
  },
  {
    nominal: "12\" × 8\" × 16\"",
    actualInches: "11-5/8\" × 7-5/8\" × 15-5/8\"",
    actualMetric: "295 × 194 × 397 mm",
    hollowWeight: "38 – 52 lbs (17.2 – 23.6 kg)",
    solidWeight: "68 – 78 lbs (30.8 – 35.4 kg)",
    palletQty: "60 – 75 blocks",
    coreVolume: "0.39 cu ft (0.0110 m³)",
    use: "Deep structural foundations, seawalls, heavy load pilasters"
  }
];

export default function BlockSizesPage() {
  return (
    <>
      <SchemaMarkup
        type="Article"
        applicationName="Concrete & Cinder Block Sizes, Dimensions & Weight Guide"
        applicationDescription="Complete specifications chart for concrete and cinder block sizes, actual dimensions, weights, and pallet coverage."
        url="https://blockwallcalculator.com/concrete-block-sizes"
        faqs={[
          {
            question: "What are the exact dimensions of a standard cinder block?",
            answer: "A standard 8x8x16 cinder block has a nominal size of 8\" width, 8\" height, and 16\" length. Its actual manufactured size is 7-5/8\" × 7-5/8\" × 15-5/8\" (194 × 194 × 397 mm), which accommodates a standard 3/8-inch mortar joint."
          },
          {
            question: "Why are actual block dimensions 3/8 inch smaller than nominal dimensions?",
            answer: "Concrete masonry units are designed to be laid with a 3/8-inch (9.5 mm) mortar bed and head joint. When you add the 3/8-inch joint to the actual 7-5/8\" dimension, each block occupies precisely 8 inches of height and 16 inches of length in the wall structure, simplifying modular architectural planning."
          },
          {
            question: "How much does a cinder block weigh vs. a concrete block?",
            answer: "A standard hollow 8x8x16 cinder block made with lightweight aggregates (coal cinders, pumice, or expanded shale) weighs between 26 and 32 lbs. A standard concrete block (CMU) made with normal gravel and sand aggregate weighs between 34 and 38 lbs."
          },
          {
            question: "How many concrete blocks are on a standard pallet?",
            answer: "A standard wood pallet holds 90 to 120 blocks of 8x8x16 size. Slimmer 4-inch blocks are packed 150 to 180 per pallet, while 12-inch structural blocks are packed 60 to 75 per pallet to keep total shipping weight under 4,000 lbs."
          },
          {
            question: "How many blocks do I need per square foot of wall?",
            answer: "Standard 8x8x16 blocks provide 128 square inches of face area (0.8888 sq ft). This translates to exactly 1.125 blocks per square foot of wall. For example, a 100 sq ft wall requires 113 blocks net (or 124 blocks with a 10% safety margin)."
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 w-full flex-1">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 dark:bg-red-950/50 text-masonry-brick dark:text-red-400 border border-red-200 dark:border-red-900/50">
            Contractor & Masonry Technical Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-tight">
            Concrete & Cinder Block <span className="text-masonry-brick">Sizes, Dimensions & Weight</span> Guide
          </h1>
          <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Quick-reference engineering tables for standard concrete masonry units (CMU) and cinder blocks. Compare nominal vs. actual dimensions, weights (lbs & kg), core fill volumes, and pallet counts.
          </p>
        </div>

        {/* Quick Calculator Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/"
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick transition-all shadow-sm group"
          >
            <span className="text-xs font-bold text-masonry-brick uppercase tracking-wider block mb-1">Calculator</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-masonry-brick transition-colors">
              Concrete Block Wall Calculator →
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
              Calculate total blocks, area, and waste for any wall length and height.
            </p>
          </Link>

          <Link
            href="/cinder-block-calculator"
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick transition-all shadow-sm group"
          >
            <span className="text-xs font-bold text-masonry-brick uppercase tracking-wider block mb-1">DIY & Garden</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-masonry-brick transition-colors">
              Cinder Block Calculator →
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
              Estimate blocks, pallets, and bags for raised beds and retaining walls.
            </p>
          </Link>

          <Link
            href="/concrete-block-fill-calculator"
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick transition-all shadow-sm group"
          >
            <span className="text-xs font-bold text-masonry-brick uppercase tracking-wider block mb-1">Core Fill</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-masonry-brick transition-colors">
              Block Fill & Grout Calculator →
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
              Estimate cubic yards and 80-lb ready-mix bags to fill block cavities.
            </p>
          </Link>
        </div>

        {/* Master Specifications Table */}
        <section id="nominal-vs-actual" className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 flex items-center gap-2">
                <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
                Standard Concrete Block Dimensions Chart
              </h2>
              <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">
                Comparing Nominal vs. Actual Dimensions with 3/8-inch standard mortar joint.
              </p>
            </div>
            <div className="text-xs font-mono bg-slate-100 dark:bg-zinc-800 px-3 py-1.5 rounded-lg text-slate-700 dark:text-zinc-300 shrink-0">
              Face Coverage: 0.8888 sq ft / block
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-zinc-800">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border-b border-slate-200 dark:border-zinc-700 font-semibold">
                  <th className="p-4">Nominal Size (W × H × L)</th>
                  <th className="p-4">Actual Dimensions (Inches)</th>
                  <th className="p-4">Metric Dimensions (mm)</th>
                  <th className="p-4">Hollow Weight (lbs/kg)</th>
                  <th className="p-4">Pallet Quantity</th>
                  <th className="p-4">Common Structural Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-slate-700 dark:text-zinc-300">
                {dimensionData.map((b, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                    <td className="p-4 font-bold text-slate-900 dark:text-zinc-100">{b.nominal}</td>
                    <td className="p-4 font-mono text-xs">{b.actualInches}</td>
                    <td className="p-4 font-mono text-xs">{b.actualMetric}</td>
                    <td className="p-4">{b.hollowWeight}</td>
                    <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">{b.palletQty}</td>
                    <td className="p-4 text-xs text-slate-600 dark:text-zinc-400">{b.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Weights & ASTM Density Section */}
        <section id="weights" className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 flex items-center gap-2">
            <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
            How Much Does a Cinder Block Weigh? (Weight Breakdown)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600 dark:text-zinc-400">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-zinc-100">Lightweight CMU / Cinder Block</h3>
              <p className="text-xs leading-relaxed">
                Made with expanded shale, slate, clay, or coal cinders. Under ASTM C90, dry density is <strong>less than 105 lb/cu ft</strong>.
              </p>
              <div className="pt-2 text-masonry-brick font-black text-xl">
                ~26 – 32 lbs
              </div>
              <p className="text-xs text-slate-500">Standard 8x8x16 hollow block</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-zinc-100">Medium Weight Concrete Block</h3>
              <p className="text-xs leading-relaxed">
                Blended mix of lightweight aggregates with crushed stone or gravel. Density ranges between <strong>105 and 125 lb/cu ft</strong>.
              </p>
              <div className="pt-2 text-slate-900 dark:text-zinc-100 font-black text-xl">
                ~33 – 38 lbs
              </div>
              <p className="text-xs text-slate-500">Standard 8x8x16 hollow block</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 space-y-2">
              <h3 className="font-bold text-base text-slate-900 dark:text-zinc-100">Normal Weight (Heavy) CMU</h3>
              <p className="text-xs leading-relaxed">
                Manufactured with dense natural sand, gravel, and crushed limestone. Density is <strong>greater than 125 lb/cu ft</strong>.
              </p>
              <div className="pt-2 text-slate-900 dark:text-zinc-100 font-black text-xl">
                ~38 – 45 lbs
              </div>
              <p className="text-xs text-slate-500">Standard 8x8x16 hollow block</p>
            </div>
          </div>
        </section>

        {/* Pallet Quantities & Freight Guide */}
        <section id="pallets" className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 flex items-center gap-2">
            <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
            How Many Cement Blocks Are in a Pallet?
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-sm">
            Due to strict roadway transportation weight limits (typically 48,000 lbs max legal flatbed weight), block manufacturers stack pallets so each unit weighs between <strong>3,000 and 4,000 lbs</strong>. Here is what to expect per pallet:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">
              <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">4" Block Pallet</div>
              <div className="text-2xl font-black text-slate-900 dark:text-zinc-50 mt-1">150 – 180</div>
              <div className="text-xs text-slate-500 mt-1">Blocks / Pallet (~3,500 lbs)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">
              <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">6" Block Pallet</div>
              <div className="text-2xl font-black text-slate-900 dark:text-zinc-50 mt-1">120 – 140</div>
              <div className="text-xs text-slate-500 mt-1">Blocks / Pallet (~3,600 lbs)</div>
            </div>
            <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40">
              <div className="text-xs font-semibold text-masonry-brick dark:text-red-400">8" Standard Pallet</div>
              <div className="text-2xl font-black text-masonry-brick dark:text-red-400 mt-1">90 – 120</div>
              <div className="text-xs text-slate-500 mt-1">Blocks / Pallet (~3,800 lbs)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">
              <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">12" Block Pallet</div>
              <div className="text-2xl font-black text-slate-900 dark:text-zinc-50 mt-1">60 – 75</div>
              <div className="text-xs text-slate-500 mt-1">Blocks / Pallet (~3,700 lbs)</div>
            </div>
          </div>
        </section>

        {/* Detailed FAQs Section */}
        <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
            Frequently Asked Questions: Block Dimensions & Specs
          </h2>
          <div className="space-y-6 divide-y divide-slate-100 dark:divide-zinc-800 text-sm">
            <div className="pt-0">
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 mb-2">
                What are the dimensions of a standard cinder block?
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                The nominal dimension of a standard cinder block is <strong>8" wide × 8" high × 16" long</strong>. Its actual physical dimensions are <strong>7-5/8" × 7-5/8" × 15-5/8"</strong> (194 × 194 × 397 mm). The 3/8-inch difference accounts for the horizontal mortar bed and vertical head joints.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 mb-2">
                How many concrete blocks are needed per square foot of wall?
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                One standard 8x8x16 concrete block covers <strong>0.8888 square feet</strong> of wall face area (including the standard 3/8" mortar joint). To calculate blocks needed, multiply your wall square footage by <strong>1.125 blocks per sq ft</strong>. For example, a 200 sq ft wall requires 225 blocks net (or 248 blocks with 10% safety buffer).
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 mb-2">
                How much does a solid cinder block weigh?
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                A solid 8"×8"×16" concrete block without hollow cavities weighs between <strong>48 and 54 pounds</strong> (21.8 to 24.5 kg). Solid blocks are typically used for capping retaining walls, foundation footings, and bearing concentrated joist loads.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 mb-2">
                How tall is a cinder block wall course?
              </h3>
              <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
                Each horizontal row (course) of standard concrete blocks adds exactly <strong>8 inches (203 mm)</strong> of vertical height to the wall (7-5/8" actual block height plus a 3/8" mortar bed joint). A wall that is 6 feet high requires exactly 9 courses of block.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
