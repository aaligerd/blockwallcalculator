import React from "react";

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
              A 10x10 wall covers 100 square feet. Standard 8"x8"x16" blocks cover 0.8888 sq ft each. Dividing 100 by 0.8888 yields exactly **112.5 blocks**. Factoring in a standard 10% waste buffer, you will need **124 blocks** in total.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              What is the standard weight of a cinder block?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A standard 8"x8"x16" concrete block made with lightweight aggregates (coal cinders or shale) weighs about **26 to 28 lbs**, whereas a heavy gravel aggregate block weighs between **35 and 40 lbs**.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
