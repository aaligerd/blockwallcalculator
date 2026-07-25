import React from "react";

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
          Estimating block walls manually is a critical skill for contractors and DIYers alike to double-check calculator estimates. Use this straightforward formula to calculate standard 8x8x16 concrete block requirements:
        </p>

        {/* Plain text code block for crawlers */}
        <pre className="bg-slate-900 text-slate-100 rounded-2xl p-5 overflow-x-auto font-mono text-sm leading-6 border border-slate-800 shadow-inner mb-6">
          {`Total Blocks = (Wall Length × Wall Height) ÷ 0.8888 × Waste Buffer Margin`}
        </pre>

        <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-200 mb-3">Step-by-Step Calculation Guide</h3>
        <ol className="list-decimal pl-5 space-y-3 text-slate-600 dark:text-zinc-400">
          <li className="pl-1">
            <strong>Calculate the Total Surface Area:</strong> Multiply the wall length (in feet) by the wall height (in feet). For example, a 20-foot long wall that is 8 feet high equals a surface area of <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">160 sq ft</code>.
          </li>
          <li className="pl-1">
            <strong>Determine Block Surface Area Coverage:</strong> Standard nominal 8x8x16 concrete masonry units (CMUs) cover exactly <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">0.8888 sq ft</code> of wall face area (including the standard 3/8" mortar joint).
          </li>
          <li className="pl-1">
            <strong>Divide Total Area by Coverage:</strong> Divide the total wall area by the block coverage. In this case, <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">160 ÷ 0.8888 = 180 blocks</code>. This is the exact (net) block count required.
          </li>
          <li className="pl-1">
            <strong>Factor in Waste & Cuts:</strong> Multiply the net block count by a safety margin. A <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">10% buffer margin</code> is standard and recommended. Multiply net blocks by <code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">1.10</code> (<code className="bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded font-mono text-slate-800 dark:text-zinc-200">180 × 1.10 = 198 blocks</code>). Round up to the nearest whole block.
          </li>
        </ol>
      </section>

      {/* Section B: CMU Size Chart */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-7 bg-masonry-brick rounded-full block"></span>
          Standard Concrete Masonry Unit (CMU) Attributes
        </h2>
        <p className="text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">
          Concrete blocks come in various widths depending on structural requirements. Use our comprehensive reference table below to see dimensions, coverage metrics, and estimated weights:
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-zinc-800">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-zinc-800/80 text-slate-800 dark:text-zinc-200 border-b border-slate-200 dark:border-zinc-700 font-semibold">
                <th className="p-4">Nominal Block Size (W × H × L)</th>
                <th className="p-4">Actual Dimensions (Inches)</th>
                <th className="p-4">Face Area Coverage</th>
                <th className="p-4">Average Weight (Light / Heavy)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-slate-700 dark:text-zinc-300">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">4" × 8" × 16" (Slim)</td>
                <td className="p-4">3-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4 font-mono">0.4444 sq ft</td>
                <td className="p-4">~18 lbs / ~24 lbs</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">6" × 8" × 16" (Medium)</td>
                <td className="p-4">5-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4 font-mono">0.6666 sq ft</td>
                <td className="p-4">~22 lbs / ~30 lbs</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">8" × 8" × 16" (Standard)</td>
                <td className="p-4">7-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4 font-mono">0.8888 sq ft</td>
                <td className="p-4">~28 lbs / ~38 lbs</td>
              </tr>
              <tr className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20">
                <td className="p-4 font-semibold text-slate-900 dark:text-zinc-100">12" × 8" × 16" (Heavy)</td>
                <td className="p-4">11-5/8" × 7-5/8" × 15-5/8"</td>
                <td className="p-4 font-mono">1.3333 sq ft</td>
                <td className="p-4">~38 lbs / ~52 lbs</td>
              </tr>
            </tbody>
          </table>
        </div>
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
              How many blocks are on a standard structural pallet?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              A standard pallet of 8"x8"x16" concrete masonry units (CMUs) typically contains 90 to 120 blocks, depending on the manufacturer and the weight of the blocks. Slimmer 4" blocks can have up to 180 blocks per pallet, whereas heavy structural 12" blocks might only have 60 to 75 blocks per pallet to stay within shipping weight limits.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              How do you handle door and window cutouts in block wall calculations?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              To calculate blocks when doors and windows are present, calculate the total wall area, then subtract the area of the window and door openings before dividing by the block's surface area. It's safe to add a slightly higher waste margin to account for pieces cut around these openings.
            </p>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-2">
              What is the standard mortar coverage per 100 concrete blocks?
            </h3>
            <p className="text-slate-600 dark:text-zinc-400 leading-relaxed">
              Typically, you will need about 3 to 4 bags of mortar mix (80 lbs each) per 100 standard 8"x8"x16" blocks, assuming a standard 3/8" mortar joint.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
