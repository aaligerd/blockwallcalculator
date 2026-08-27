import React from "react";

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
          In professional construction and structural engineering, concrete blocks are formally referred to as <strong>Concrete Masonry Units (CMUs)</strong>. These are standardized, load-bearing building blocks manufactured under strict ASTM requirements.
        </p>
        <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
          Standard structural CMUs are typically hollow, allowing for vertical steel reinforcement (rebar) to be placed inside the block cells, which are then filled with grout (concrete) to achieve high load-bearing capacity and resistance to seismic forces.
        </p>
      </section>

      {/* Section B: CMU Specifications */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          Standard CMU Design Specifications
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-4 leading-relaxed">
          Under ASTM C90 guidelines, load-bearing CMUs are classified into light-weight, medium-weight, and normal-weight categories. Commercial projects usually specify dimensions in nominal sizes, which are exactly 3/8" larger than their actual physical dimensions to account for standard mortar joint layers.
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-zinc-800 mt-6">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-850 text-slate-800 dark:text-zinc-200 border-b border-slate-200 dark:border-zinc-700 font-semibold">
                <th className="p-4">Nominal Size</th>
                <th className="p-4">Actual Size (W x H x L)</th>
                <th className="p-4">ASTM Classification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-slate-700 dark:text-zinc-300">
              <tr>
                <td className="p-4 font-semibold">8"x8"x16" CMU</td>
                <td className="p-4">7-5/8" x 7-5/8" x 15-5/8"</td>
                <td className="p-4">ASTM C90 Load-Bearing</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">6"x8"x16" CMU</td>
                <td className="p-4">5-5/8" x 7-5/8" x 15-5/8"</td>
                <td className="p-4">ASTM C90 Load-Bearing</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">12"x8"x16" CMU</td>
                <td className="p-4">11-5/8" x 7-5/8" x 15-5/8"</td>
                <td className="p-4">ASTM C90 Heavy Structural</td>
              </tr>
            </tbody>
          </table>
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
              CMU stands for **Concrete Masonry Unit**. In structural drawings, it specifies the use of precast concrete blocks rather than poured concrete or brick masonry layers.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              What type of mortar is used for load-bearing CMU walls?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              **Type S** mortar is the standard recommendation for load-bearing CMU walls, especially for below-grade applications and exterior walls exposed to high winds or soil pressures. It provides a compressive strength of around 1,800 psi.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
