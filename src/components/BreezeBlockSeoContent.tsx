import React from "react";
import Link from "next/link";

export default function BreezeBlockSeoContent() {
  return (
    <div className="space-y-12 text-slate-700 dark:text-zinc-300 leading-relaxed max-w-5xl mx-auto pt-6">
      {/* Quick Snippet Box (Featured Snippet Targeting for UK / Global) */}
      <section className="bg-slate-50 dark:bg-zinc-900 border-l-4 border-blue-600 p-6 rounded-r-2xl space-y-3 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <span>🇬🇧</span> Quick Answer: How Many Breeze Blocks per Square Metre (m²)?
        </h2>
        <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
          In the UK and Europe, standard dense and lightweight breeze blocks measure <strong>440mm × 215mm × 100mm</strong>. Including a standard 10mm mortar joint, exactly <strong>10 breeze blocks cover 1 square metre (1 m²)</strong>. Always allow a <strong>10% buffer for cutting, wastage, and corners</strong> (11 blocks per m²).
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs font-semibold">
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">5 m² Wall</span>
            <span className="text-base font-bold text-blue-600">~55 Blocks</span>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">10 m² Wall</span>
            <span className="text-base font-bold text-blue-600">~110 Blocks</span>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">25 m² Wall</span>
            <span className="text-base font-bold text-blue-600">~275 Blocks</span>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">50 m² Wall</span>
            <span className="text-base font-bold text-blue-600">~550 Blocks</span>
          </div>
        </div>
      </section>

      {/* Standard UK Breeze Block Sizes Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
          Standard UK Breeze Block Dimensions &amp; Types (BS EN 771-3)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-zinc-800 text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-zinc-100">
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Block Type</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Dimensions (L × H × W)</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Coverage per m²</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Average Weight</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Typical Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-zinc-800">
              <tr>
                <td className="p-3.5 font-bold">Standard Lightweight (Aerated/Thermalite)</td>
                <td className="p-3.5 font-mono">440 × 215 × 100 mm</td>
                <td className="p-3.5 font-semibold">10 blocks / m²</td>
                <td className="p-3.5">7.5 – 9.0 kg</td>
                <td className="p-3.5">Internal partitions, cavity inner leaf, insulation</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Dense Concrete Block</td>
                <td className="p-3.5 font-mono">440 × 215 × 100 mm</td>
                <td className="p-3.5 font-semibold">10 blocks / m²</td>
                <td className="p-3.5">17.0 – 20.0 kg</td>
                <td className="p-3.5">Loadbearing walls, foundations below DPC, acoustics</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Medium Dense 140mm Block</td>
                <td className="p-3.5 font-mono">440 × 215 × 140 mm</td>
                <td className="p-3.5 font-semibold">10 blocks / m²</td>
                <td className="p-3.5">22.0 – 26.0 kg</td>
                <td className="p-3.5">Retaining garden walls, party separating walls</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold">Hollow Concrete Block (Core Fill)</td>
                <td className="p-3.5 font-mono">440 × 215 × 215 mm</td>
                <td className="p-3.5 font-semibold">10 blocks / m²</td>
                <td className="p-3.5">18.5 – 22.0 kg</td>
                <td className="p-3.5">Reinforced retaining walls &amp; high structural loads</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How to Work Out Square Metres (m²) for Brickwork & Blockwork */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
          How to Calculate Blockwork and Mortar per Square Metre
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-lg">1. Block Quantity Rule</h3>
            <p className="font-mono text-sm bg-slate-100 dark:bg-zinc-800 p-3 rounded-lg text-utility-action">
              Total Blocks = Wall Length (m) × Wall Height (m) × 10 × 1.10
            </p>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Subtract window and door openings from total m² before multiplying by 10.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-lg">2. Mortar per Square Metre</h3>
            <p className="font-mono text-sm bg-slate-100 dark:bg-zinc-800 p-3 rounded-lg text-amber-600 dark:text-amber-400">
              Mortar = 1 × 25kg bag cement + 300kg building sand per 10 m²
            </p>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Standard UK laying mortar mix is 1:4 (1 part cement to 4 parts building sand with plasticiser).
            </p>
          </div>
        </div>
      </section>

      {/* Cross-linking to related calculators */}
      <section className="pt-6 border-t border-slate-200 dark:border-zinc-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-3">
          Related Masonry Estimators
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <Link href="/" className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick bg-white dark:bg-zinc-900 font-semibold text-slate-800 dark:text-zinc-200 block transition-colors">
            🧱 Concrete Block Wall Calculator →
          </Link>
          <Link href="/mortar-calculator" className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick bg-white dark:bg-zinc-900 font-semibold text-slate-800 dark:text-zinc-200 block transition-colors">
            🧪 Mortar Mix &amp; Bags Estimator →
          </Link>
          <Link href="/concrete-block-sizes" className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick bg-white dark:bg-zinc-900 font-semibold text-slate-800 dark:text-zinc-200 block transition-colors">
            📋 Block Sizes, Weight &amp; Pallet Chart →
          </Link>
        </div>
      </section>
    </div>
  );
}
