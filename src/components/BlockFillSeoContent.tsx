import React from "react";

export default function BlockFillSeoContent() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none mt-16 space-y-12">
      {/* Section A: Grout and Core Fill */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          What is CMU Grout Core Filling?
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Structural concrete masonry walls often require their hollow cells to be filled with concrete grout. The purpose of **grout core filling** is to bond structural steel reinforcement (rebar) to the block wall, transforming hollow blocks into a solid, reinforced concrete composite wall.
        </p>
        <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
          Grouting can be **solid** (where every cell is filled) or **partial** (where only the cells containing vertical steel reinforcement are filled, such as every 16", 24", 32", or 48" on-center spacing).
        </p>
      </section>

      {/* Section B: How to Calculate Grout Volume */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          How to Calculate Grout Volume for Block Cores
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed">
          To calculate how many cubic yards of concrete grout are required for a hollow block wall, you need three primary values:
        </p>

        <ol className="list-decimal pl-5 space-y-3 text-slate-600 dark:text-zinc-400">
          <li className="pl-1">
            <strong>Total Block Count:</strong> The total number of blocks in the wall structure.
          </li>
          <li className="pl-1">
            <strong>Internal Core Volume:</strong> The volume of the hollow cells inside each block. For a standard 8"x8"x16" block, this is approximately <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">0.25 cubic feet</code> per block.
          </li>
          <li className="pl-1">
            <strong>Core Spacing Multiplier Factor ($F$):</strong>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Solid-grouted (100% of cores filled): <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">1.0</code></li>
              <li>16" on-center spacing (50% of cores filled): <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">0.50</code></li>
              <li>32" on-center spacing (25% of cores filled): <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">0.25</code></li>
              <li>48" on-center spacing (17% of cores filled): <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">0.17</code></li>
            </ul>
          </li>
        </ol>

        <p className="text-slate-650 dark:text-zinc-450 mt-4 font-semibold text-sm">
          Formula: Grout Volume (cu ft) = Block Count × Core Volume × Spacing Factor × 1.10 (waste buffer margin)
        </p>
      </section>

      {/* Section C: FAQs */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          Block Grout & Core Fill FAQs
        </h2>
        <div className="space-y-6 divide-y divide-slate-100 dark:divide-zinc-800">
          <div className="pt-0">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How many yards of grout are needed per 100 blocks?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              For standard 8"x8"x16" blocks, a solid grout pour requires about **1 to 1.1 cubic yards** of concrete/grout per 100 blocks. If vertical cores are filled at 16" on-center, you will need about **0.55 cubic yards** per 100 blocks.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              Why do you need to add a waste margin for grout?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              Concrete grout is fluid and often spills out of mortar joints or overflows during the pour. Additionally, grout pumps require a "prime" volume that remains in the hoses. A **10% to 15% safety buffer** prevents coming up short during the pour.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
