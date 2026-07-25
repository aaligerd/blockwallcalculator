import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | blockwallcalculator.com",
  description: "Learn more about blockwallcalculator.com, our mission, our dedication to structural precision, and our high-performance tooling for masons and DIYers.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 dark:text-zinc-50 tracking-tight">
          About <span className="text-masonry-brick">Us</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Empowering builders, contractors, and weekend DIY enthusiasts with instant, accurate, and reliable block wall estimations.
        </p>
      </div>

      {/* Core Philosophy Section */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-50 flex items-center gap-2">
          <span className="w-2 h-6 bg-masonry-brick rounded-full block"></span>
          Our Mission
        </h2>
        <p className="text-slate-650 dark:text-zinc-400 leading-relaxed">
          At <strong className="text-slate-800 dark:text-zinc-200">blockwallcalculator.com</strong>, we believe that every successful construction project starts with precise planning. Ordering too few concrete masonry units (CMUs) stalls progress on the job site, while ordering too many leads to unnecessary transport costs and wasted materials. 
        </p>
        <p className="text-slate-650 dark:text-zinc-400 leading-relaxed">
          Our tool was engineered from the ground up to solve this headache. By combining standard masonry engineering specs with customizable waste margins, we provide clear estimates that contractors can trust.
        </p>
      </section>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 bg-blue-50 dark:bg-blue-950/40 text-utility-action rounded-xl flex items-center justify-center font-bold text-lg">
            ✓
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-150">Precision Math</h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Utilizes standard CMU surface coverage values to estimate exact block and buffer counts.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 bg-red-50 dark:bg-red-950/40 text-masonry-brick rounded-xl flex items-center justify-center font-bold text-lg">
            ⚡
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-150">Instant Load</h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Built as a static edge application deployed close to your job site for zero latency.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm space-y-3">
          <div className="w-10 h-10 bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 rounded-xl flex items-center justify-center font-bold text-lg">
            📱
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-zinc-150">Mobile-First</h3>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Clean touch targets and sliders designed for quick adjustments on tablets and phones.
          </p>
        </div>
      </div>

      {/* Target Users Section */}
      <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-50 flex items-center gap-2">
          <span className="w-2 h-6 bg-masonry-brick rounded-full block"></span>
          Who We Serve
        </h2>
        <div className="space-y-4 text-slate-650 dark:text-zinc-400">
          <p className="leading-relaxed">
            Our estimation suites are tailormade to support various professionals in the building cycle:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Masonry Contractors:</strong> Generate rapid, clean estimates and copy-paste results to project files or material orders instantly.</li>
            <li><strong>Architects & Project Estimators:</strong> Determine preliminary material volumes during the layout phase.</li>
            <li><strong>DIY Builders:</strong> Estimate backyard retaining walls, garage extensions, or fire pit surrounds without getting lost in manual formulas.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
