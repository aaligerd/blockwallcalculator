import React from "react";
import Link from "next/link";

export default function RetainingWallSeoContent() {
  return (
    <div className="space-y-12 text-slate-700 dark:text-zinc-300 leading-relaxed max-w-5xl mx-auto pt-6">
      {/* Quick Snippet Answer Box (Targets Position 0 & AI Overviews) */}
      <section className="bg-slate-50 dark:bg-zinc-900 border-l-4 border-masonry-brick p-6 rounded-r-2xl space-y-3 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <span>⚡</span> Quick Answer: How to Calculate Retaining Wall Blocks
        </h2>
        <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
          To calculate how many retaining wall blocks you need, multiply wall length by height to get total wall face square footage. Divide the total wall area by the square footage of one block (a standard <strong>16&quot; × 6&quot; × 12&quot; block covers 0.67 sq ft</strong>, meaning you need <strong>1.5 blocks per square foot</strong>). Always add <strong>10% for cutting, corners, and stepped slope margins</strong>.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs font-semibold">
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">10&apos; × 3&apos; Wall (30 sq ft)</span>
            <span className="text-base font-bold text-masonry-brick">~50 Blocks</span>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">20&apos; × 3&apos; Wall (60 sq ft)</span>
            <span className="text-base font-bold text-masonry-brick">~99 Blocks</span>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">30&apos; × 4&apos; Wall (120 sq ft)</span>
            <span className="text-base font-bold text-masonry-brick">~198 Blocks</span>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">50&apos; × 4&apos; Wall (200 sq ft)</span>
            <span className="text-base font-bold text-masonry-brick">~330 Blocks</span>
          </div>
        </div>
      </section>

      {/* Retaining Wall Block Calculation Formulas */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
          Retaining Wall Block Calculation Formulas & Mathematics
        </h2>
        <p>
          Calculating retaining wall materials requires accounting for buried base courses, wall setbacks, cap stones, and drainage backfill:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-lg">1. Block Quantity Formula</h3>
            <p className="font-mono text-sm bg-slate-100 dark:bg-zinc-800 p-3 rounded-lg text-utility-action">
              Blocks = (Wall Length (ft) × Exposed Height (ft) ÷ Block Face Sq Ft) × 1.10
            </p>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Add 1 extra buried base block per linear foot for every 8 inches of wall height to prevent toe kickout.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-lg">2. Drainage Gravel Backfill</h3>
            <p className="font-mono text-sm bg-slate-100 dark:bg-zinc-800 p-3 rounded-lg text-emerald-600 dark:text-emerald-400">
              Gravel (cu yds) = (Length × Height × 1 ft trench) ÷ 27
            </p>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Proper 3/4-inch crushed gravel drainage behind retaining blocks is essential to eliminate hydrostatic water pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Common Retaining Wall Block Sizes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
          Common Retaining Wall Block Sizes & Face Coverage
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-zinc-800 text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-zinc-100">
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Block Type</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Dimensions (L × H × D)</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Face Coverage</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Blocks per Sq Ft</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Max Gravity Height</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-zinc-800">
              <tr>
                <td className="p-3.5 font-bold">Standard Segmental Block</td>
                <td className="p-3.5 font-mono">16&quot; × 6&quot; × 12&quot;</td>
                <td className="p-3.5">0.667 sq ft</td>
                <td className="p-3.5 font-semibold">1.50 blocks</td>
                <td className="p-3.5 text-emerald-600 font-semibold">4.0 ft (without geogrid)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Large Structural Block (Keystone/Allan)</td>
                <td className="p-3.5 font-mono">18&quot; × 8&quot; × 12&quot;</td>
                <td className="p-3.5">1.000 sq ft</td>
                <td className="p-3.5 font-semibold">1.00 block</td>
                <td className="p-3.5 text-emerald-600 font-semibold">6.0 ft (with pin system)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Garden / Landscape Mini Block</td>
                <td className="p-3.5 font-mono">12&quot; × 4&quot; × 8&quot;</td>
                <td className="p-3.5">0.333 sq ft</td>
                <td className="p-3.5 font-semibold">3.00 blocks</td>
                <td className="p-3.5 text-amber-600 font-semibold">2.0 ft</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Standard 8x8x16 CMU (Mortared)</td>
                <td className="p-3.5 font-mono">16&quot; × 8&quot; × 8&quot;</td>
                <td className="p-3.5">0.889 sq ft</td>
                <td className="p-3.5 font-semibold">1.125 blocks</td>
                <td className="p-3.5 text-emerald-600 font-semibold">Requires concrete footing &amp; rebar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Retaining Wall Cost Estimator Breakdown */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
          Retaining Wall Cost Calculator Breakdown (Materials &amp; Labor)
        </h2>
        <p>
          Building a retaining wall typically costs between <strong>$20 and $55 per square foot</strong> for DIY installations, and <strong>$45 to $90 per square foot</strong> for professionally installed segmental or reinforced block walls:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-zinc-400">
          <li><strong>Segmental Retaining Blocks:</strong> $4.50 – $9.50 per block ($7 to $15 per sq ft).</li>
          <li><strong>Cap Stones:</strong> $3.50 – $6.00 per linear foot.</li>
          <li><strong>Crushed Gravel Drainage &amp; Base:</strong> $35 – $55 per cubic yard delivered.</li>
          <li><strong>Perforated Drain Pipe (4-inch):</strong> $0.85 – $1.50 per linear foot.</li>
          <li><strong>Geogrid Soil Reinforcement (for walls &gt; 3.5 ft):</strong> $0.70 – $1.20 per sq ft.</li>
        </ul>
      </section>

      {/* Cross-linking to related calculators */}
      <section className="pt-6 border-t border-slate-200 dark:border-zinc-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-3">
          Explore Related Masonry Tools
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <Link href="/" className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick bg-white dark:bg-zinc-900 font-semibold text-slate-800 dark:text-zinc-200 block transition-colors">
            🧱 Standard Block Wall Calculator →
          </Link>
          <Link href="/concrete-block-fill-calculator" className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick bg-white dark:bg-zinc-900 font-semibold text-slate-800 dark:text-zinc-200 block transition-colors">
            🧪 Core Grout &amp; Fill Estimator →
          </Link>
          <Link href="/concrete-block-sizes" className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick bg-white dark:bg-zinc-900 font-semibold text-slate-800 dark:text-zinc-200 block transition-colors">
            📋 Block Sizes &amp; Weight Chart →
          </Link>
        </div>
      </section>
    </div>
  );
}
