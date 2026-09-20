import React from "react";
import Link from "next/link";

export default function SeoContentSection() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none mt-16 space-y-12">
      {/* Section A: Manual Estimation Logic */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          How to Manually Calculate Concrete Blocks for a Wall
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
          Estimating block walls manually is a critical skill for contractors and DIYers alike to verify material orders. Use this straightforward formula to calculate standard 8x8x16 concrete block requirements:
        </p>

        {/* Plain text code block for crawlers */}
        <pre className="bg-slate-900 text-slate-100 rounded-2xl p-5 overflow-x-auto font-mono text-sm leading-6 border border-slate-800 shadow-inner mb-6">
          {`Total Blocks = (Wall Length in ft × Wall Height in ft) ÷ 0.8888 × Waste Buffer Margin`}
        </pre>

        <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-200 mb-3">Step-by-Step Calculation Guide</h3>
        <ol className="list-decimal pl-5 space-y-3 text-slate-600 dark:text-zinc-400">
          <li className="pl-1">
            <strong>Calculate the Total Surface Area:</strong> Multiply the wall length (in feet) by the wall height (in feet). For example, a 20-foot long wall that is 8 feet high equals a surface area of <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">160 sq ft</code>.
          </li>
          <li className="pl-1">
            <strong>Determine Block Surface Area Coverage:</strong> Standard nominal 8x8x16 concrete masonry units (CMUs) cover exactly <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">0.8888 sq ft</code> of wall face area (including the standard 3/8" mortar joint). It takes approximately <strong>1.125 blocks per square foot</strong>.
          </li>
          <li className="pl-1">
            <strong>Divide Total Area by Coverage:</strong> Divide the total wall area by the block coverage. In this case, <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">160 ÷ 0.8888 = 180 blocks</code>. This is the exact net block count required.
          </li>
          <li className="pl-1">
            <strong>Factor in Waste & Cuts:</strong> Multiply the net block count by a safety margin. A <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">10% buffer margin</code> is standard and recommended. Multiply net blocks by <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">1.10</code> (<code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">180 × 1.10 = 198 blocks</code>). Round up to the nearest whole block.
          </li>
        </ol>
      </section>

      {/* Section B: CMU Size Chart */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 flex items-center gap-2">
            <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
            Standard Concrete Block Dimensions & Attributes
          </h2>
          <Link
            href="/concrete-block-sizes"
            className="text-xs font-bold text-masonry-brick dark:text-red-400 hover:underline shrink-0"
          >
            View Full Sizes & Weight Guide →
          </Link>
        </div>
        <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
          While standard concrete blocks share the same 8" height and 16" length face dimension (covering 0.8888 sq ft), their wall thickness (width) varies from 4" to 12" to suit structural loads:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-zinc-800">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border-b border-slate-200 dark:border-zinc-700 font-semibold">
                <th className="p-4">Nominal Block Size (W × H × L)</th>
                <th className="p-4">Actual Dimensions (Inches)</th>
                <th className="p-4">Face Area Coverage</th>
                <th className="p-4">Average Weight (Hollow / Solid)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-slate-700 dark:text-zinc-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">4" × 8" × 16" (Slim Partition)</td>
                <td className="p-4">3-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4 font-mono">0.8888 sq ft</td>
                <td className="p-4">~18 lbs / ~28 lbs</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">6" × 8" × 16" (Light Structural)</td>
                <td className="p-4">5-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4 font-mono">0.8888 sq ft</td>
                <td className="p-4">~24 lbs / ~38 lbs</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">8" × 8" × 16" (Standard Structural)</td>
                <td className="p-4">7-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4 font-mono">0.8888 sq ft</td>
                <td className="p-4">~28 lbs / ~48 lbs</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">10" × 8" × 16" (Heavy Retaining)</td>
                <td className="p-4">9-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4 font-mono">0.8888 sq ft</td>
                <td className="p-4">~34 lbs / ~58 lbs</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">12" × 8" × 16" (Deep Foundation)</td>
                <td className="p-4">11-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4 font-mono">0.8888 sq ft</td>
                <td className="p-4">~38 lbs / ~68 lbs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cross-Link Callout Banner */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-800/80 border border-amber-200/70 dark:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
            Need to fill hollow block cells with concrete grout?
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400">
            Calculate exact grout volume in cubic yards and ready-mix 80lb bag counts for solid or partial core fill.
          </p>
        </div>
        <Link
          href="/concrete-block-fill-calculator"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-masonry-brick text-white font-semibold text-sm hover:bg-opacity-95 shadow-md shadow-red-900/10 shrink-0 transition-all"
        >
          Open Fill Calculator →
        </Link>
      </section>

      {/* Section C: Structural FAQ Real Estate */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-6 divide-y divide-slate-100 dark:divide-zinc-800">
          <div className="pt-0">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How many cement blocks are in a pallet?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A standard manufacturer pallet of 8"x8"x16" concrete masonry units typically contains <strong>90 to 120 blocks</strong>, weighing between 2,800 and 4,000 lbs. Slimmer 4" blocks contain <strong>150 to 180 blocks</strong> per pallet, while 12" structural foundation blocks typically contain <strong>60 to 72 blocks</strong> per pallet to stay within flatbed truck freight weight limits.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How much does a concrete block weigh?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A standard hollow 8"x8"x16" concrete block weighs between <strong>28 and 38 pounds</strong>, depending on aggregate density (lightweight vs. heavyweight ASTM C90 mix). Solid concrete blocks of the same dimensions weigh approximately <strong>48 to 52 pounds</strong>. Lightweight cinder blocks made with fly ash or pumice typically weigh <strong>26 to 30 pounds</strong>.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How many concrete blocks do I need for a 100-foot wall?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              For a 100-foot long wall that is 6 feet high (600 sq ft), standard 8"x8"x16" CMUs require 1.125 blocks per square foot. Multiplying 600 sq ft × 1.125 = <strong>675 blocks net</strong>. Adding a recommended 10% waste buffer (675 × 1.10) requires ordering <strong>743 blocks</strong> (approximately 7 to 8 pallets).
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              What is the standard mortar coverage per 100 concrete blocks?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              Typically, you will need about <strong>3 to 4 bags of mortar mix (80 lbs each)</strong> per 100 standard 8"x8"x16" blocks, assuming a standard 3/8" horizontal and head mortar joint. For 500 blocks, plan for 16 to 20 bags of Type S or Type N masonry mortar.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How much concrete or grout is required to fill a standard 8x8x16 concrete block?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A standard 8"x8"x16" CMU has an internal hollow core volume of approximately <strong>0.25 cubic feet</strong>. For solid-grouted walls, you will need approximately <strong>1.0 to 1.1 cubic yards</strong> of fine or coarse grout per 100 blocks (or roughly 45 to 50 ready-mix 80lb bags).
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How much do concrete blocks cost?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              In the United States, standard 8x8x16 concrete blocks cost between <strong>$2.25 and $3.50 per block</strong> at retail home improvement stores (such as Home Depot or Lowe's), with bulk pallet supplier discounts averaging 10–20% lower. Total installed cost for a block wall typically ranges from <strong>$12 to $25 per square foot</strong> including mortar, rebar, core fill, and mason labor.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
