import React from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SchemaMarkupProps {
  applicationName?: string;
  applicationDescription?: string;
  url?: string;
  featureList?: string[];
  faqs?: FaqItem[];
  type?: "WebApplication" | "Article" | "WebPage";
}

const defaultFaqs: FaqItem[] = [
  {
    question: "How many blocks are on a standard structural pallet?",
    answer: "A standard pallet of 8\"x8\"x16\" concrete masonry units (CMUs) typically contains 90 to 120 blocks, depending on the manufacturer and the weight of the blocks. Slimmer 4\" blocks can have up to 180 blocks per pallet, whereas heavy structural 12\" blocks might only have 60 to 75 blocks per pallet to stay within shipping weight limits."
  },
  {
    question: "How do you handle door and window cutouts in block wall calculations?",
    answer: "To calculate blocks when doors and windows are present, calculate the total wall area, then subtract the area of the window and door openings before dividing by the block's surface area. It's safe to add a slightly higher waste margin to account for pieces cut around these openings."
  },
  {
    question: "What is the standard mortar coverage per 100 concrete blocks?",
    answer: "Typically, you will need about 3 to 4 bags of mortar mix (80 lbs each) per 100 standard 8\"x8\"x16\" blocks, assuming a standard 3/8\" mortar joint."
  },
  {
    question: "How much concrete or grout is required to fill a standard 8x8x16 concrete block?",
    answer: "A standard 8\"x8\"x16\" CMU has a core volume of approximately 0.25 cubic feet. For solid-grouted walls, you will need approximately 1 to 1.1 cubic yards of grout per 100 blocks. If vertical cores are filled at 16\" on-center spacing, you will need about half that amount (~0.5 to 0.55 cubic yards per 100 blocks). Always add a 10% to 15% waste margin to cover spills."
  },
  {
    question: "How do you estimate the cost of a concrete block wall?",
    answer: "Estimating block wall costs requires summing materials (blocks, mortar, core fill grout, and reinforcement steel) and labor. Standard 8\" blocks typically cost $2.00 to $3.50 each. Mortar bags cost around $7.00 to $10.00 each. Labor cost represents the largest variable, usually ranging from $10.00 to $18.00 per square foot depending on height and region."
  },
  {
    question: "Can I save or download my block wall estimation results?",
    answer: "Yes! You can instantly copy the text summary to your clipboard or download a fully styled PDF contractor report of your block, mortar, grout, and cost estimates."
  }
];

export default function SchemaMarkup({
  applicationName = "Block Wall Calculator",
  applicationDescription = "Calculate required CMU, cinder, or concrete blocks for walls instantly. Estimate grout fill volumes, material costs, and export a professional PDF report.",
  url = "https://blockwallcalculator.com",
  featureList = [
    "Block Count Estimator",
    "Grout & Core Fill Spacing Calculator",
    "Materials Cost Budgeting",
    "Print-to-PDF Report Export"
  ],
  faqs = defaultFaqs,
  type = "WebApplication"
}: SchemaMarkupProps) {
  const schemaData: Record<string, unknown>[] = [];

  if (type === "WebApplication") {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": applicationName,
      "description": applicationDescription,
      "url": url,
      "operatingSystem": "All",
      "applicationCategory": "UtilityApplication",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "featureList": featureList,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    });
  } else {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": applicationName,
      "description": applicationDescription,
      "url": url,
      "mainEntityOfPage": url,
      "publisher": {
        "@type": "Organization",
        "name": "Block Wall Calculator",
        "url": "https://blockwallcalculator.com"
      }
    });
  }

  if (faqs && faqs.length > 0) {
    schemaData.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
