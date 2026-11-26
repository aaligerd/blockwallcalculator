"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sponsorConfig, buildSponsorUrl } from "@/config/sponsorConfig";

// Extend window for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TopSponsorBanner() {
  const active = sponsorConfig.isActive && sponsorConfig.activeSponsor;
  const sponsor = sponsorConfig.activeSponsor;

  // Toggle state when there is no active ad (shows the sponsored ad slot preview)
  const [showSponsoredSlot, setShowSponsoredSlot] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Track sponsor banner clicks for publisher reporting
  const handleSponsorClick = (destinationUrl: string) => {
    if (typeof window !== "undefined" && window.gtag && sponsor) {
      window.gtag("event", "sponsor_banner_click", {
        sponsor_name: sponsor.name,
        destination_url: destinationUrl,
        location: "top_header_banner",
      });
    }
  };

  // State 1: Active Sponsor Ad (Toggle option is NOT visible here)
  if (active && sponsor) {
    const finalUrl = buildSponsorUrl(sponsor.destinationUrl, sponsor.utmParams, sponsor.name);

    return (
      <div className="bg-slate-900 text-white dark:bg-zinc-900 border-b border-slate-800 dark:border-zinc-800 transition-colors relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Creative Image or Branded Card */}
            <a
              href={finalUrl}
              target="_blank"
              rel="noopener sponsored"
              onClick={() => handleSponsorClick(finalUrl)}
              className="group flex-1 flex items-center justify-center sm:justify-start gap-4 hover:opacity-95 transition-opacity w-full overflow-hidden"
              title={`Visit ${sponsor.name}`}
            >
              {sponsor.desktopBannerUrl ? (
                /* Standard Image Creative (728x90 desktop / mobile responsive) */
                <div className="w-full flex items-center justify-center max-h-[90px] overflow-hidden rounded-lg">
                  <img
                    src={sponsor.desktopBannerUrl}
                    alt={sponsor.altText || sponsor.name}
                    className="max-h-[80px] sm:max-h-[90px] w-auto object-contain mx-auto"
                    loading="eager"
                  />
                </div>
              ) : (
                /* High-Impact Native Text/Branded Creative */
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 py-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                      {sponsor.badgeText || "Partner"}
                    </span>
                    <strong className="text-sm sm:text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {sponsor.name}
                    </strong>
                  </div>
                  {sponsor.tagline && (
                    <span className="text-xs text-slate-300 dark:text-zinc-400 font-medium line-clamp-1">
                      — {sponsor.tagline}
                    </span>
                  )}
                </div>
              )}
            </a>

            {/* Action Button & Direct Form Link (No toggle visible when ad is active) */}
            <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
              <a
                href={finalUrl}
                target="_blank"
                rel="noopener sponsored"
                onClick={() => handleSponsorClick(finalUrl)}
                className="px-3.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                Visit Site →
              </a>

              <a
                href={sponsorConfig.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-slate-400 hover:text-white transition-colors underline cursor-pointer whitespace-nowrap"
                title="Reserve this slot for your business via Google Form ($3/day)"
              >
                Advertise here ($3/day) ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // State 2: Unbooked / No Active Ad (Toggle option IS visible here)
  if (isMinimized) {
    return (
      <div className="bg-slate-900 dark:bg-zinc-950 text-white border-b border-slate-800 text-xs py-1.5 px-4 text-center">
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-semibold transition-colors cursor-pointer"
        >
          <span>✦</span> Top Sponsor Ad Slot Available ($3/Day) — Click to View Slot ▼
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-slate-900 via-neutral-900 to-slate-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-white border-b border-slate-800 dark:border-zinc-800 relative z-40 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        {showSponsoredSlot ? (
          /* View A: Toggled LIVE Sponsored Ad Slot Preview */
          <div className="space-y-2 animate-fade-in">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-1.5 text-[11px] text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300 font-bold uppercase tracking-wider text-[10px]">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Live Sponsored Ad Slot Demo (728×90 / Responsive)
              </span>

              {/* The Toggle Button (active only when no ad is running) */}
              <button
                type="button"
                onClick={() => setShowSponsoredSlot(false)}
                className="px-2.5 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
              >
                ✕ Toggle Back to $3/Day Offer
              </button>
            </div>

            {/* The Actual Sponsored Ad Slot Mockup */}
            <div className="bg-slate-950/80 border border-amber-400/30 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
                <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 self-center sm:self-auto">
                  Sponsored Partner
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-white">
                    Apex Masonry &amp; Tool Supply
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1">
                    Commercial CMU Blocks, Mortar Bags, Rebar &amp; Trowels — Direct Jobsite Delivery
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={sponsorConfig.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Visit Sponsor Site →
                </a>

                <a
                  href={sponsorConfig.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-masonry-brick hover:bg-[#b84a35] text-white font-bold text-xs shadow-md transition-colors whitespace-nowrap"
                >
                  Buy This Slot ($3/Day) ↗
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* View B: Available Ad Slot Offer with Toggle Button */
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Pitch & Value Proposition */}
            <div className="flex items-center gap-3 text-center md:text-left">
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Sponsor Slot Available
              </span>

              <div className="space-y-0.5">
                <p className="text-xs sm:text-sm font-extrabold text-white tracking-tight">
                  Have a Masonry, Tool or Building Supply Business?{" "}
                  <span className="text-amber-300 underline decoration-amber-400/60">This Top Banner Might Be Yours</span>
                </p>
                <p className="text-[11px] sm:text-xs text-slate-400 dark:text-zinc-400">
                  Reach thousands of active wall builders, landscapers &amp; contractors ordering blocks for only{" "}
                  <strong className="text-white font-bold">$3 / day</strong>.
                </p>
              </div>
            </div>

            {/* Direct CTAs & The Toggle Button */}
            <div className="flex items-center gap-2 shrink-0">
              {/* The Toggle Button to see the sponsored ad slot */}
              <button
                type="button"
                onClick={() => setShowSponsoredSlot(true)}
                className="px-3 py-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-400/40 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                title="Toggle to view what the live sponsored ad slot looks like"
              >
                <span>👁</span> Toggle Ad Slot Preview
              </button>

              <a
                href={sponsorConfig.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-xl bg-masonry-brick hover:bg-[#b84a35] text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap flex items-center gap-1.5"
              >
                <span>✦</span> Buy Slot ($3/Day) ↗
              </a>

              <Link
                href="/advertise"
                className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white text-xs font-semibold transition-colors whitespace-nowrap"
              >
                Specs
              </Link>

              {/* Minimize button */}
              <button
                type="button"
                onClick={() => setIsMinimized(true)}
                className="text-slate-500 hover:text-slate-300 text-xs px-1.5 py-1 transition-colors cursor-pointer"
                title="Minimize banner"
                aria-label="Minimize banner"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
