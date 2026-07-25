"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate sending message to static edge function
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-8 shadow-lg text-center space-y-6 max-w-lg mx-auto transition-all animate-fade-in">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-950/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center font-bold text-3xl mx-auto shadow-inner">
          ✓
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-zinc-50">Message Sent!</h2>
          <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
            Thank you for reaching out. We have received your inquiry and will review it shortly. A team member will follow up at the email provided.
          </p>
        </div>
        <button
          type="button"
          onClick={resetForm}
          className="px-6 py-2.5 bg-utility-action hover:bg-blue-600 text-white font-semibold rounded-xl text-sm transition-all shadow-md active:scale-95 cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 max-w-xl mx-auto transition-all">
      <div className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
            Your Name <span className="text-masonry-brick">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full h-11 px-4 bg-slate-50 dark:bg-zinc-800/50 border rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-utility-action transition-all dark:text-zinc-50 ${
              errors.name ? "border-red-500 focus:ring-red-400" : "border-slate-200 dark:border-zinc-700"
            }`}
          />
          {errors.name && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
            Email Address <span className="text-masonry-brick">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full h-11 px-4 bg-slate-50 dark:bg-zinc-800/50 border rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-utility-action transition-all dark:text-zinc-50 ${
              errors.email ? "border-red-500 focus:ring-red-400" : "border-slate-200 dark:border-zinc-700"
            }`}
          />
          {errors.email && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.email}</span>}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Calculator feedback, structural question, business, etc."
            className="w-full h-11 px-4 bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-utility-action transition-all dark:text-zinc-50"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
            Message <span className="text-masonry-brick">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            className={`w-full p-4 bg-slate-50 dark:bg-zinc-800/50 border rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-utility-action transition-all dark:text-zinc-50 resize-y ${
              errors.message ? "border-red-500 focus:ring-red-400" : "border-slate-200 dark:border-zinc-700"
            }`}
          />
          {errors.message && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.message}</span>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3.5 px-6 rounded-xl font-bold transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer ${
          isSubmitting
            ? "bg-slate-300 dark:bg-zinc-700 text-slate-500 dark:text-zinc-400 cursor-not-allowed"
            : "bg-masonry-brick hover:bg-[#c24f38] text-white"
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending message...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
