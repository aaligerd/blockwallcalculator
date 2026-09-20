import React from "react";
import Link from "next/link";

export default function BlockFillSeoContent() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none mt-16 space-y-12">
      {/* Section A: Grout and Core Fill */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          What is Concrete Block Fill & Core Grouting?
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Structural concrete masonry walls often require their hollow cores to be filled with high-slump concrete grout. The purpose of <strong>concrete block fill</strong> is to lock vertical and horizontal steel reinforcing bars (rebar) securely to the block shell, transforming hollow cinder blocks or CMUs into a solid, reinforced masonry wall capable of resisting high seismic, wind, and soil pressure loads.
        </p>
        <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
          Grouting can be <strong>solid-grouted</strong> (every block core filled with concrete) or <strong>partially grouted</strong> (filling only reinforced cores spaced at 16", 24", 32", or 48" on-center).
        </p>
      </section>

      {/* Section B: Quick Reference Table */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 flex items-center gap-2">
            <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
            Concrete Block Core Fill Reference Table
          </h2>
          <Link
            href="/concrete-block-sizes"
            className="text-xs font-bold text-masonry-brick dark:text-red-400 hover:underline shrink-0"
          >
            Block Dimensions Guide →
          </Link>
        </div>
        <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
          Grout volume requirements depend on nominal block width. Use this contractor reference table to estimate cubic yards and ready-mix 80-lb bags per 100 blocks:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-zinc-800">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border-b border-slate-200 dark:border-zinc-700 font-semibold">
                <th className="p-4">Block Size (W × H × L)</th>
                <th className="p-4">Core Volume / Block</th>
                <th className="p-4">Solid Fill (cu yd / 100 blocks)</th>
                <th className="p-4">16" O.C. Spacing (cu yd / 100)</th>
                <th className="p-4">80-lb Bags (Solid / 100 blocks)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-slate-700 dark:text-zinc-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">6" × 8" × 16"</td>
                <td className="p-4 font-mono">0.17 cu ft</td>
                <td className="p-4 font-mono">~0.69 cu yd</td>
                <td className="p-4 font-mono">~0.35 cu yd</td>
                <td className="p-4 font-mono">~31 bags</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">8" × 8" × 16" (Standard)</td>
                <td className="p-4 font-mono">0.25 cu ft</td>
                <td className="p-4 font-mono">~1.02 cu yd</td>
                <td className="p-4 font-mono">~0.51 cu yd</td>
                <td className="p-4 font-mono">~46 bags</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">10" × 8" × 16"</td>
                <td className="p-4 font-mono">0.32 cu ft</td>
                <td className="p-4 font-mono">~1.30 cu yd</td>
                <td className="p-4 font-mono">~0.65 cu yd</td>
                <td className="p-4 font-mono">~59 bags</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">12" × 8" × 16"</td>
                <td className="p-4 font-mono">0.39 cu ft</td>
                <td className="p-4 font-mono">~1.59 cu yd</td>
                <td className="p-4 font-mono">~0.80 cu yd</td>
                <td className="p-4 font-mono">~72 bags</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cross-Link Callout Banner */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-900 dark:to-zinc-800/80 border border-blue-200/70 dark:border-zinc-700 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
            Need to calculate total wall blocks and mortar bags first?
          </h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400">
            Determine total block count, square footage, pallet counts, and mortar bags using our main block wall estimator.
          </p>
        </div>
        <Link
          href="/"
          className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 shadow-md shrink-0 transition-all"
        >
          Open Wall Calculator →
        </Link>
      </section>

      {/* Section C: Calculation Guide & Ready-Mix Bags */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          How to Calculate Concrete Block Core Fill Volume
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
          To calculate how many cubic yards of concrete grout or ready-mix bags are required for a hollow block wall:
        </p>

        <ol className="list-decimal pl-5 space-y-3 text-slate-600 dark:text-zinc-400">
          <li className="pl-1">
            <strong>Determine Net Block Count:</strong> Estimate the total number of blocks in the wall structure.
          </li>
          <li className="pl-1">
            <strong>Select Core Spacing:</strong> Solid fill (all cores, factor 1.0), 16" on-center (every other core, factor 0.50), 24" on-center (factor 0.33), 32" on-center (factor 0.25), or 48" on-center (factor 0.17).
          </li>
          <li className="pl-1">
            <strong>Multiply by Internal Core Volume:</strong> Multiply the active blocks by the block core volume (0.25 cu ft for standard 8" blocks).
          </li>
          <li className="pl-1">
            <strong>Convert to Cubic Yards:</strong> Divide total cubic feet by 27 to get cubic yards, then multiply by a 10% to 15% safety buffer for spills and hose prime loss.
          </li>
          <li className="pl-1">
            <strong>Converting to Ready-Mix Bags:</strong> One 80-lb bag of ready-mix concrete yields <strong>0.60 cu ft</strong> of wet mix. It takes <strong>45 bags (80 lb)</strong> or <strong>60 bags (60 lb)</strong> to make 1 cubic yard.
          </li>
        </ol>
      </section>

      {/* Section D: FAQs */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          Concrete Block Fill & Grout FAQs
        </h2>
        <div className="space-y-6 divide-y divide-slate-100 dark:divide-zinc-800">
          <div className="pt-0">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How many yards of concrete grout are needed per 100 blocks?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              For standard 8"x8"x16" blocks, a solid grout pour requires about <strong>1.0 to 1.1 cubic yards</strong> of concrete/grout per 100 blocks. If vertical cores are filled at 16" on-center (every 2nd core), you will need approximately <strong>0.51 to 0.55 cubic yards</strong> per 100 blocks.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How many 80lb bags of concrete to fill a cinder block?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A standard 8"x8"x16" cinder block has an internal core volume of 0.25 cubic feet. One 80lb ready-mix concrete bag yields approximately 0.60 cubic feet. Therefore, one 80lb bag fills approximately <strong>2.4 hollow cores</strong> (approximately 1.2 whole standard two-core cinder blocks).
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              Can I use regular concrete mix to fill cinder blocks?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              Regular concrete contains coarse gravel that can jam in narrow block cores and create air pockets around reinforcing steel. Masons recommend using <strong>coarse or fine masonry grout</strong> (ASTM C476), which features high slump (8–11 inches) and smaller aggregate (pea gravel or sand) designed to flow smoothly through block cavities.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              Why must I add a 10% to 15% waste margin for block fill?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              Fluid grout inevitably overflows block tops and leaks through occasional imperfect mortar head joints. Additionally, pumping equipment requires a minimum volume left in pump hoppers and hoses. A <strong>10% to 15% safety buffer</strong> prevents expensive short-pour pump truck recalls.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
