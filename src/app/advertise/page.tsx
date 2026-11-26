import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { sponsorConfig, getSponsorInquiryMailto } from "@/config/sponsorConfig";

export const metadata: Metadata = {
  title: "Advertise on BlockWallCalculator.com | Top Banner Sponsorship ($3/day)",
  description: "Promote your masonry supplies, tools, cement, or contractor services directly to active DIYers and commercial builders. Top banner sponsorship for $3/day with verified UTM tracking.",
};

export default function AdvertisePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 w-full flex-1">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/40">
          <span>✦</span> Direct Publisher Sponsorship
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-zinc-50 tracking-tight leading-tight">
          Advertise to Ready-To-Buy <span className="text-masonry-brick">Masonry Customers</span>
        </h1>
          <div className="flex justify-center pt-2">
            <a href="https://launchbuff.com/products/block-wall-calculator-rn3p6a" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
              <img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="256" height="80" />
            </a>
          </div>
        <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Put your business directly in front of homeowners, masons, landscapers, and contractors at the exact moment they are calculating blocks, mortar, and materials for their next project.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-700 dark:text-zinc-300">
          <span className="flex items-center gap-1.5">
            <span className="text-green-500">✓</span> $3 / Day Flat Rate
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-500">✓</span> 100% Site-Wide Visibility
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-500">✓</span> Verified UTM Attribution
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-500">✓</span> Zero Ad-Blocker Suppression
          </span>
        </div>
      </div>

      {/* Why Sponsor Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/50 text-masonry-brick flex items-center justify-center font-bold text-xl">
            🎯
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-zinc-50">Unmatched Purchase Intent</h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Visitors are not passively reading blogs. They are typing wall dimensions and counting pallets of concrete blocks, mortar mix, and core grout right before buying materials.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/50 text-utility-action flex items-center justify-center font-bold text-xl">
            📈
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-zinc-50">Verified UTM Tracking</h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Every click sends full UTM parameters to your destination website (<code className="text-xs bg-slate-100 dark:bg-zinc-800 px-1 py-0.5 rounded">utm_source=blockwallcalculator</code>). You can verify every session and conversion in your own Google Analytics.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-3 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-xl">
            ⚡
          </div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-zinc-50">High Return on Ad Spend (ROAS)</h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            A single client ordering two pallets of blocks or hiring a retaining wall crew can easily yield hundreds or thousands in gross revenue. A $3/day placement pays for itself many times over.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900 dark:text-zinc-50 tracking-tight">
            Transparent, Predictable Pricing
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400">
            No bidding wars, no unpredictable pay-per-click charges. Just pure above-the-fold visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Daily Test Plan */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Starter Test Drive</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-zinc-50">$3</span>
                  <span className="text-sm font-semibold text-slate-500">/ day</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                Ideal for testing copy, running weekend flash sales, or trying out the channel.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                <li className="flex items-center gap-2">✓ Minimum 7-day run ($21)</li>
                <li className="flex items-center gap-2">✓ Top banner placement</li>
                <li className="flex items-center gap-2">✓ Custom destination URL + UTMs</li>
                <li className="flex items-center gap-2">✓ Desktop &amp; mobile responsive</li>
              </ul>
            </div>
            <a
              href={sponsorConfig.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 dark:border-zinc-700 font-bold text-xs text-center hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Book Daily Slot ↗
            </a>
          </div>

          {/* Monthly Package (Popular) */}
          <div className="bg-white dark:bg-zinc-900 border-2 border-masonry-brick rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl relative">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-masonry-brick text-white text-[11px] font-black rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-masonry-brick">30-Day Growth Pass</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-zinc-50">$79</span>
                  <span className="text-sm font-semibold text-slate-500">/ month</span>
                </div>
                <span className="text-[11px] text-green-600 dark:text-green-400 font-semibold">Save 15% vs daily rate</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                Full 30-day continuous branding across all calculator pages and dimensional tables.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                <li className="flex items-center gap-2">✓ 100% site-wide top visibility</li>
                <li className="flex items-center gap-2">✓ 1 Mid-campaign creative swap</li>
                <li className="flex items-center gap-2">✓ Priority slot renewal guarantee</li>
                <li className="flex items-center gap-2">✓ Verified UTM analytics tracking</li>
              </ul>
            </div>
            <a
              href={sponsorConfig.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-masonry-brick hover:bg-[#b84a35] text-white font-bold text-xs text-center shadow-md transition-colors cursor-pointer"
            >
              Reserve Monthly Slot ($79) ↗
            </a>
          </div>

          {/* Quarterly Package */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Quarterly Pass</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-zinc-50">$199</span>
                  <span className="text-sm font-semibold text-slate-500">/ 3 months</span>
                </div>
                <span className="text-[11px] text-green-600 dark:text-green-400 font-semibold">Save 26% vs daily rate</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                Lock in your brand as the premier masonry supplier for an entire quarter.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                <li className="flex items-center gap-2">✓ Guaranteed placement lock</li>
                <li className="flex items-center gap-2">✓ Up to 3 creative swaps</li>
                <li className="flex items-center gap-2">✓ Publisher monthly click report</li>
                <li className="flex items-center gap-2">✓ Direct founder support</li>
              </ul>
            </div>
            <a
              href={sponsorConfig.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 dark:border-zinc-700 font-bold text-xs text-center hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Book Quarterly ($199) ↗
            </a>
          </div>
        </div>
      </div>

      {/* Specifications & Process */}
      <div className="bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-black text-slate-900 dark:text-zinc-50 tracking-tight">
            Creative Specs &amp; Simple Onboarding
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
            Getting your ad live takes less than 24 hours once creatives are provided.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
          {/* Ad Specs */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wide text-xs">
              Banner Specifications
            </h3>
            <ul className="space-y-2 text-slate-600 dark:text-zinc-400">
              <li>• <strong>Desktop Size:</strong> Standard Leaderboard (728 × 90 pixels) or Branded Card</li>
              <li>• <strong>Mobile Size:</strong> Responsive Strip (320 × 100 or 300 × 100 pixels)</li>
              <li>• <strong>Formats:</strong> JPG, PNG, WebP, or static GIF (&lt; 150 KB)</li>
              <li>• <strong>Native Alternative:</strong> Don&apos;t have an image? Send your logo, 1-line hook, and button text — we format it cleanly.</li>
              <li>• <strong>Destination URL:</strong> Any valid website or sales page. We automatically append verified UTM tracking tags.</li>
            </ul>
          </div>

          {/* 4 Steps */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wide text-xs">
              4-Step Launch Process
            </h3>
            <ol className="space-y-2 text-slate-600 dark:text-zinc-400 list-decimal list-inside">
              <li><strong>Inquire:</strong> Fill out our quick Google Form or send an email.</li>
              <li><strong>Confirm Slot:</strong> We verify the dates and send simple invoice/payment details.</li>
              <li><strong>Send Creative:</strong> Send your banner file and destination link.</li>
              <li><strong>Go Live:</strong> We inject your campaign with tracking and deploy within 24 hours.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Google Form Application Box (Zero on-page form execution) */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-3xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-3xl mx-auto">
          📋
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-slate-900 dark:text-zinc-50 tracking-tight">
            Apply for Sponsorship via Google Form
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            Fill out our brief Google Form with your business details, target link, and preferred dates. Submissions are processed securely and we respond within 24 hours.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <a
            href={sponsorConfig.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 rounded-xl bg-masonry-brick hover:bg-[#b84a35] text-white font-bold text-sm shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Open Google Form ↗</span>
          </a>
          <a
            href={getSponsorInquiryMailto()}
            className="py-3.5 px-6 rounded-xl border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Or Email Directly
          </a>
        </div>
      </div>

      {/* Back Link */}
      <div className="text-center pt-4">
        <Link href="/" className="text-xs font-semibold text-slate-500 hover:text-masonry-brick transition-colors">
          ← Back to Block Wall Calculator
        </Link>
      </div>
    </div>
  );
}
