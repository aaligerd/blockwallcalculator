import React from "react";
import Link from "next/link";

export default function CmuBlockSeoContent() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none mt-16 space-y-12">
      {/* Section A: What is a CMU? */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          What is a CMU (Concrete Masonry Unit)?
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed">
          In professional construction and architectural engineering, concrete blocks are formally specified as <strong>Concrete Masonry Units (CMUs)</strong>. These are precision-engineered, modular building blocks manufactured in compliance with strict <strong>ASTM C90</strong> standard specifications for load-bearing masonry walls.
        </p>
        <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
          Standard structural CMUs feature hollow cores designed to accommodate vertical steel reinforcement (rebar). When filled with concrete grout, CMUs create an exceptionally durable composite shear wall capable of resisting heavy axial loads, lateral wind pressures, and seismic forces.
        </p>
      </section>

      {/* Section B: CMU Specifications */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 flex items-center gap-2">
            <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
            Standard CMU Dimensions & ASTM Classifications
          </h2>
          <Link
            href="/concrete-block-sizes"
            className="text-xs font-bold text-masonry-brick dark:text-red-400 hover:underline shrink-0"
          >
            Full Dimensions Chart →
          </Link>
        </div>
        <p className="text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Under ASTM C90 guidelines, load-bearing CMUs are manufactured in three density classifications: <strong>Lightweight</strong> (under 105 lb/cu ft), <strong>Medium Weight</strong> (105 to 125 lb/cu ft), and <strong>Normal Weight</strong> (over 125 lb/cu ft). Nominal sizes include an allowance of exactly 3/8" for standard mortar joints:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-zinc-800 mt-6">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border-b border-slate-200 dark:border-zinc-700 font-semibold">
                <th className="p-4">Nominal Size</th>
                <th className="p-4">Actual Size (W × H × L)</th>
                <th className="p-4">ASTM Weight (Light / Normal)</th>
                <th className="p-4">Primary Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-slate-700 dark:text-zinc-300">
              <tr>
                <td className="p-4 font-semibold">4" × 8" × 16" CMU</td>
                <td className="p-4">3-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4">~18 lbs / ~24 lbs</td>
                <td className="p-4">Interior partitions, curtain walls</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">6" × 8" × 16" CMU</td>
                <td className="p-4">5-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4">~22 lbs / ~31 lbs</td>
                <td className="p-4">Single-story structures, privacy walls</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">8" × 8" × 16" CMU</td>
                <td className="p-4">7-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4">~28 lbs / ~38 lbs</td>
                <td className="p-4">Standard commercial structural walls</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">12" × 8" × 16" CMU</td>
                <td className="p-4">11-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4">~38 lbs / ~52 lbs</td>
                <td className="p-4">Basement foundations, tall retaining walls</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cross-Link Callout Banner */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-zinc-900 dark:to-zinc-800/80 border border-amber-200/70 dark:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
            Estimating grout fill for vertical CMU rebar cores?
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400">
            Calculate core fill grout volume in cubic yards and ready-mix 80lb bags at standard 16", 24", 32", or 48" rebar spacing.
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
          Structural CMU FAQs
        </h2>
        <div className="space-y-6 divide-y divide-slate-100 dark:divide-zinc-800">
          <div className="pt-0">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              What does CMU stand for in building plans?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              CMU stands for <strong>Concrete Masonry Unit</strong>. In architectural blueprints and structural engineering drawings, it denotes standard precast modular concrete blocks rather than cast-in-place concrete or brick masonry veneer.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How much does an 8x8x16 CMU block weigh?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              Under ASTM C90 standards, a standard hollow 8"x8"x16" CMU weighs <strong>28 to 33 lbs</strong> in lightweight mix, <strong>33 to 38 lbs</strong> in medium-weight mix, and <strong>38 to 44 lbs</strong> in heavyweight (normal stone aggregate) mix.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              What type of mortar is used for load-bearing CMU walls?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              <strong>Type S mortar</strong> is the standard specification for exterior and load-bearing CMU walls. Formulated with a compressive strength of 1,800 psi, Type S mortar offers superior flexural bond strength and resistance to high lateral wind and seismic pressures.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How many CMU blocks are on a standard pallet?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A standard factory pallet contains <strong>90 to 120 units</strong> of 8x8x16 CMUs (approx. 3,200 to 4,000 lbs). Narrow 4" CMUs come packed <strong>150 to 180 blocks</strong> per pallet, while 12" foundation CMUs come <strong>60 to 72 blocks</strong> per pallet.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
