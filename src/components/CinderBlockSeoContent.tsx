import React from "react";
import Link from "next/link";

export default function CinderBlockSeoContent() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none mt-16 space-y-12">
      {/* Section A: Cinder vs Concrete */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          What is a Cinder Block?
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Although the terms <strong>cinder block</strong> and <strong>concrete block</strong> are often used interchangeably today, they are technically different materials. Historical cinder blocks were made using coal cinders (fly ash) as an aggregate, which made them significantly lighter and less dense than standard concrete masonry units (CMUs).
        </p>
        <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
          Modern cinder blocks are primarily composed of Portland cement and aggregate stone, which makes them structural concrete blocks, but they are still referred to as "cinder blocks" by DIYers and homeowners. Cinder blocks are ideal for lightweight structural projects, garden retaining walls, and fire pits.
        </p>
      </section>

      {/* Section B: How to Calculate Cinder Blocks */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          How to Calculate Cinder Blocks for a Retaining Wall
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
          Estimating cinder blocks for standard home projects is a straightforward process. Use these steps to determine the material needs for your next block wall:
        </p>

        <ol className="list-decimal pl-5 space-y-3 text-slate-600 dark:text-zinc-400">
          <li className="pl-1">
            <strong>Measure the Length and Height:</strong> Multiply your cinder block wall's length by its height (in feet) to find the total wall surface area. E.g., a 30-foot long retaining wall that is 4 feet high is <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">120 sq ft</code>.
          </li>
          <li className="pl-1">
            <strong>Determine Block Coverage:</strong> A standard 8x8x16 cinder block covers exactly <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">0.8888 sq ft</code> of face area (nominal dimensions account for the 3/8" mortar joints on each side).
          </li>
          <li className="pl-1">
            <strong>Calculate the Net Blocks:</strong> Divide the total wall area by the block coverage factor. In our case, <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">120 ÷ 0.8888 = 135 blocks</code>.
          </li>
          <li className="pl-1">
            <strong>Add a Waste Margin:</strong> A safety margin of **10%** is highly recommended to cover cuts, broken blocks, and layout changes. Multiply net blocks by <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">1.10</code> (<code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">135 × 1.1 = 149 blocks</code>).
          </li>
        </ol>
      </section>

      {/* Cross-Link Callout Banner */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-800/80 border border-amber-200/70 dark:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
            Filling your cinder block wall cores with concrete grout?
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400">
            Calculate exact grout volume in cubic yards and 80lb ready-mix bags for retaining walls and foundations.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/concrete-block-sizes"
            className="px-4 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 font-semibold text-sm hover:bg-slate-50 transition-all"
          >
            Sizes Guide
          </Link>
          <Link
            href="/concrete-block-fill-calculator"
            className="px-5 py-2 rounded-xl bg-masonry-brick text-white font-semibold text-sm hover:bg-opacity-95 shadow-md shadow-red-900/10 transition-all"
          >
            Fill Calculator →
          </Link>
        </div>
      </section>

      {/* Section C: FAQs */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          Cinder Block Estimator FAQs
        </h2>
        <div className="space-y-6 divide-y divide-slate-100 dark:divide-zinc-800">
          <div className="pt-0">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How many cinder blocks do I need for a 10x10 wall?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A 10x10 wall covers 100 square feet. Standard 8"x8"x16" blocks cover 0.8888 sq ft each (1.125 blocks per sq ft). Dividing 100 by 0.8888 yields exactly **112.5 blocks**. Factoring in a standard 10% waste buffer, you will need **124 blocks** in total.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How much does a cinder block weigh?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A standard hollow 8"x8"x16" cinder block made with fly ash or lightweight aggregates weighs approximately **28 to 34 lbs**. In contrast, heavy gravel concrete blocks (CMUs) weigh between **35 and 40 lbs**, and solid cinder blocks weigh approximately **45 to 50 lbs**.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How many cinder blocks are on a pallet?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A standard manufacturer pallet of 8"x8"x16" cinder blocks holds **90 to 120 blocks**. A full pallet weighs between **2,800 and 3,800 lbs**, requiring a forklift or flatbed truck with crane delivery.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How much does a cinder block cost?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              In 2026, individual 8"x8"x16" cinder blocks typically cost between **$2.00 and $3.25 each** at big-box hardware stores. Buying in bulk pallet quantities directly from masonry supply yards reduces costs to approximately **$1.80 to $2.40 per block**.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
