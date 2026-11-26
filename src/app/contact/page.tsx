import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { sponsorConfig } from "@/config/sponsorConfig";

export const metadata: Metadata = {
  title: "Contact Us | blockwallcalculator.com",
  description: "Get in touch with the team at blockwallcalculator.com. Send feedback, feature suggestions, or structural masonry questions securely via our Google Form or direct email.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 w-full flex-1">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 dark:text-zinc-50 tracking-tight">
          Contact <span className="text-masonry-brick">Us</span>
        </h1>
          <div className="flex justify-center pt-2">
            <a href="https://launchbuff.com/products/block-wall-calculator-rn3p6a" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
              <img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="256" height="80" />
            </a>
          </div>
        <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed text-center">
          Have questions about calculations, structural specs, or suggestions to improve our calculator? We&apos;d love to hear from you.
        </p>
      </div>

      {/* Google Form Contact Box */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 max-w-xl mx-auto">
        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/50 text-utility-action rounded-3xl flex items-center justify-center font-bold text-3xl mx-auto">
          ✉️
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-50">
            Submit a Message via Google Form
          </h2>
          <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">
            Click below to open our secure Google Form. Your response will be delivered directly to our support team without executing scripts on this page.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={sponsorConfig.contactGoogleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3.5 px-8 bg-masonry-brick hover:bg-[#b84a35] text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Open Contact Google Form ↗</span>
          </a>

          <a
            href={`mailto:${sponsorConfig.contactEmail}?subject=Block%20Wall%20Calculator%20Inquiry`}
            className="py-3.5 px-6 border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 font-bold rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Send Direct Email
          </a>
        </div>
      </div>

      {/* Direct Support Email */}
      <div className="text-center text-xs text-slate-500 dark:text-zinc-500 pt-4">
        Direct email: <a href={`mailto:${sponsorConfig.contactEmail}`} className="font-semibold text-slate-700 dark:text-zinc-300 underline">{sponsorConfig.contactEmail}</a>
      </div>

      {/* Back Link */}
      <div className="text-center">
        <Link href="/" className="text-xs font-semibold text-slate-500 hover:text-masonry-brick transition-colors">
          ← Back to Calculator
        </Link>
      </div>
    </div>
  );
}
