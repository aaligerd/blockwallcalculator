import React from "react";
import Link from "next/link";

export default function MortarSeoContent() {
  return (
    <div className="space-y-12 text-slate-700 dark:text-zinc-300 leading-relaxed max-w-5xl mx-auto pt-6">
      {/* Quick Snippet Box (Featured Snippet Targeting) */}
      <section className="bg-slate-50 dark:bg-zinc-900 border-l-4 border-amber-500 p-6 rounded-r-2xl space-y-3 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
          <span>⚡</span> Quick Answer: How Many Bags of Mortar Do I Need for 100 Blocks?
        </h2>
        <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
          For standard 8&quot; × 8&quot; × 16&quot; concrete blocks with 3/8-inch mortar joints, you need approximately <strong>3.5 bags (80 lb)</strong> or <strong>4.5 bags (60 lb)</strong> of premixed masonry mortar per <strong>100 blocks</strong>. When mixing from scratch (1:3 cement-to-sand ratio), 100 blocks require <strong>1 bag of Portland cement (94 lb)</strong> and approximately <strong>300 to 350 lbs (0.13 cu yds) of masonry sand</strong>.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs font-semibold">
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">50 Blocks</span>
            <span className="text-base font-bold text-amber-500">~2 Bags (80 lb)</span>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">100 Blocks</span>
            <span className="text-base font-bold text-amber-500">~3.5 to 4 Bags</span>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">250 Blocks</span>
            <span className="text-base font-bold text-amber-500">~9 Bags (80 lb)</span>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-2.5 rounded-lg border border-slate-200 dark:border-zinc-700">
            <span className="text-slate-500 block">500 Blocks</span>
            <span className="text-base font-bold text-amber-500">~18 Bags (80 lb)</span>
          </div>
        </div>
      </section>

      {/* Mortar Types & ASTM C270 Standards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
          Choosing the Right Mortar Type (ASTM C270 Standard)
        </h2>
        <p>
          Selecting the appropriate mortar type is critical to structural integrity, water resistance, and building code compliance:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-utility-action">Most Common</div>
            <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-lg">Type S Mortar (1,800 PSI)</h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              High compressive &amp; flexural bond strength. Ideal for exterior structural block walls, foundations, retaining walls, below-grade masonry, and high-wind or seismic zones.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">Above-Grade / General</div>
            <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-lg">Type N Mortar (750 PSI)</h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Medium compressive strength with optimal workability and weather resistance. Recommended for exterior above-grade walls, chimneys, veneers, and interior partitions.
            </p>
          </div>

          <div className="p-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-masonry-brick">Heavy Loadbearing</div>
            <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-lg">Type M Mortar (2,500 PSI)</h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400">
              Maximum compressive strength for heavy loadbearing structures, retaining walls with extreme lateral earth pressure, deep foundations, and sewer manholes.
            </p>
          </div>
        </div>
      </section>

      {/* Mortar Mix Ratio Guide (Site Mixed vs Premix) */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
          Mortar Mix Ratios for Site-Mixed Mortar (By Volume)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-slate-200 dark:border-zinc-800 text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-zinc-100">
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Mortar Type</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Portland Cement</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Hydrated Lime</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Masonry Sand</th>
                <th className="p-3.5 border border-slate-200 dark:border-zinc-700">Minimum 28-Day Strength</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-zinc-800 font-mono text-xs">
              <tr>
                <td className="p-3.5 font-sans font-bold text-sm">Type M</td>
                <td className="p-3.5">1 Part</td>
                <td className="p-3.5">1/4 Part</td>
                <td className="p-3.5">3 to 3-3/4 Parts</td>
                <td className="p-3.5 font-sans font-bold text-slate-900 dark:text-zinc-100 text-sm">2,500 PSI (17.2 MPa)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-sans font-bold text-sm">Type S</td>
                <td className="p-3.5">1 Part</td>
                <td className="p-3.5">1/2 Part</td>
                <td className="p-3.5">4 to 4-1/2 Parts</td>
                <td className="p-3.5 font-sans font-bold text-slate-900 dark:text-zinc-100 text-sm">1,800 PSI (12.4 MPa)</td>
              </tr>
              <tr>
                <td className="p-3.5 font-sans font-bold text-sm">Type N</td>
                <td className="p-3.5">1 Part</td>
                <td className="p-3.5">1 Part</td>
                <td className="p-3.5">5 to 6 Parts</td>
                <td className="p-3.5 font-sans font-bold text-slate-900 dark:text-zinc-100 text-sm">750 PSI (5.2 MPa)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cross-linking to related calculators */}
      <section className="pt-6 border-t border-slate-200 dark:border-zinc-800">
        <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-100 mb-3">
          Explore Related Estimators
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <Link href="/" className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick bg-white dark:bg-zinc-900 font-semibold text-slate-800 dark:text-zinc-200 block transition-colors">
            🧱 Block Wall Calculator →
          </Link>
          <Link href="/concrete-block-fill-calculator" className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick bg-white dark:bg-zinc-900 font-semibold text-slate-800 dark:text-zinc-200 block transition-colors">
            🧪 Core Grout Fill Calculator →
          </Link>
          <Link href="/retaining-wall-block-calculator" className="p-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-masonry-brick bg-white dark:bg-zinc-900 font-semibold text-slate-800 dark:text-zinc-200 block transition-colors">
            ⛰️ Retaining Wall Block Calculator →
          </Link>
        </div>
      </section>
    </div>
  );
}
