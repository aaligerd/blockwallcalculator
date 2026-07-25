import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | blockwallcalculator.com",
  description: "Get in touch with the team at blockwallcalculator.com. Send us your feedback, bug reports, feature suggestions, or structural masonry questions.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-10 w-full flex-1">
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 dark:text-zinc-50 tracking-tight">
          Contact <span className="text-masonry-brick">Us</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-zinc-400 max-w-lg mx-auto leading-relaxed text-center">
          Have questions about calculations, structural specs, or suggestions to improve our calculator? Drop us a message below.
        </p>
      </div>

      {/* Contact Form Component */}
      <ContactForm />
      
      {/* Direct support email detail for crawlers/direct users */}
      <div className="text-center text-xs text-slate-500 dark:text-zinc-500 pt-4">
        Or reach out directly via email at <span className="font-semibold text-slate-650 dark:text-zinc-400">support@blockwallcalculator.com</span>
      </div>
    </div>
  );
}
