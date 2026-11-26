import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | blockwallcalculator.com",
  description: "Read the Privacy Policy of blockwallcalculator.com. Find out how we respect your privacy, secure your browser-based calculations, and handle telemetry.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 dark:text-zinc-50 tracking-tight">
          Privacy <span className="text-masonry-brick">Policy</span>
        </h1>
          <div className="flex justify-center pt-2">
            <a href="https://launchbuff.com/products/block-wall-calculator-rn3p6a" target="_blank" rel="noopener noreferrer" title="Featured on LaunchBuff">
              <img src="https://launchbuff.com/badge-featured-dark.svg" alt="Featured on LaunchBuff" width="256" height="80" />
            </a>
          </div>
        <p className="text-sm text-slate-500 dark:text-zinc-500">
          Last Updated: July 2026
        </p>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8 text-slate-650 dark:text-zinc-400 leading-relaxed">
        
        {/* Intro */}
        <section className="space-y-3">
          <p>
            At <strong>blockwallcalculator.com</strong>, we are committed to protecting your privacy. This Privacy Policy details our practices regarding information collection, storage, and telemetry for our online calculation tools.
          </p>
        </section>

        {/* 1. Client-Side Processing Guarantee */}
        <section className="space-y-3 border-t border-slate-100 dark:border-zinc-800 pt-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-zinc-100">1. Client-Side Calculation Guarantee</h2>
          <p>
            The calculations performed on our platform are processed entirely in your local browser environment. We do <strong>not</strong> collect, transmit, store, or monitor the inputs you enter (such as wall length, height, block size, or margins). Your dimensions remain secure and private on your local device.
          </p>
        </section>

        {/* 2. Information We Collect */}
        <section className="space-y-3 border-t border-slate-100 dark:border-zinc-800 pt-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-zinc-100">2. Information We Collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Contact Form Data:</strong> If you voluntarily reach out to us using our contact form, we collect your name, email address, subject, and message content to reply to your inquiry. This data is never used for marketing campaigns without your explicit consent.
            </li>
            <li>
              <strong>General Usage Telemetry:</strong> We may use privacy-first analytics platforms (such as Cloudflare Analytics) to compile anonymous website traffic statistics (e.g., pageviews, browser type, referral site). This telemetry contains no personal identifiers or IP tracking.
            </li>
          </ul>
        </section>

        {/* 3. Cookies and Local Storage */}
        <section className="space-y-3 border-t border-slate-100 dark:border-zinc-800 pt-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-zinc-100">3. Cookies and Local Storage</h2>
          <p>
            Our site does not serve tracking or behavioral advertising cookies. We may utilize your browser's local storage or technical cookies solely to persist your calculator layout selections (such as preserving preferred unit scales or default CMU selections) between visits for a seamless experience.
          </p>
        </section>

        {/* 4. Data Security */}
        <section className="space-y-3 border-t border-slate-100 dark:border-zinc-800 pt-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-zinc-100">4. Third-Party Links</h2>
          <p>
            Our website does not show ad banners or affiliate banners that trigger third-party tracker networks. We are committed to a clean, layout-shift-free, and privacy-respecting user interface.
          </p>
        </section>

        {/* 5. Policy Updates */}
        <section className="space-y-3 border-t border-slate-100 dark:border-zinc-800 pt-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-zinc-100">5. Changes to this Policy</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Any changes will be posted immediately on this page with an updated modification date.
          </p>
        </section>

        {/* 6. Contact Information */}
        <section className="space-y-3 border-t border-slate-100 dark:border-zinc-800 pt-6">
          <h2 className="text-xl font-bold text-slate-950 dark:text-zinc-100">6. Contact Us</h2>
          <p>
            If you have questions about our Privacy Policy or data safety rules, please contact us through our website's <a href="/contact" className="text-utility-action hover:underline">Contact Us page</a> or by emailing <span className="font-semibold text-slate-800 dark:text-zinc-200">privacy@blockwallcalculator.com</span>.
          </p>
        </section>

      </div>
    </div>
  );
}
