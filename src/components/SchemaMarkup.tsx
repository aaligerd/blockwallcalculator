import React from "react";

export default function SchemaMarkup() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Block Wall Calculator",
      "operatingSystem": "All",
      "applicationCategory": "UtilityApplication",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "featureList": [
        "Block Count Estimator",
        "Grout & Core Fill Spacing Calculator",
        "Materials Cost Budgeting",
        "Print-to-PDF Report Export"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How many blocks are on a standard structural pallet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard pallet of 8\"x8\"x16\" concrete masonry units (CMUs) typically contains 90 to 120 blocks, depending on the manufacturer and the weight of the blocks. Slimmer 4\" blocks can have up to 180 blocks per pallet, whereas heavy structural 12\" blocks might only have 60 to 75 blocks per pallet to stay within shipping weight limits."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle door and window cutouts in block wall calculations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate blocks when doors and windows are present, calculate the total wall area, then subtract the area of the window and door openings before dividing by the block's surface area. It's safe to add a slightly higher waste margin to account for pieces cut around these openings."
          }
        },
        {
          "@type": "Question",
          "name": "What is the standard mortar coverage per 100 concrete blocks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typically, you will need about 3 to 4 bags of mortar mix (80 lbs each) per 100 standard 8\"x8\"x16\" blocks, assuming a standard 3/8\" mortar joint."
          }
        },
        {
          "@type": "Question",
          "name": "How much concrete or grout is required to fill a standard 8x8x16 concrete block?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard 8\"x8\"x16\" CMU has a core volume of approximately 0.25 cubic feet. For solid-grouted walls, you will need approximately 1 to 1.1 cubic yards of grout per 100 blocks. If vertical cores are filled at 16\" on-center spacing, you will need about half that amount (~0.5 to 0.55 cubic yards per 100 blocks). Always add a 10% to 15% waste margin to cover spills."
          }
        },
        {
          "@type": "Question",
          "name": "How do you estimate the cost of a concrete block wall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Estimating block wall costs requires summing materials (blocks, mortar, core fill grout, and reinforcement steel) and labor. Standard 8\" blocks typically cost $2.00 to $3.50 each. Mortar bags cost around $7.00 to $10.00 each. Labor cost represents the largest variable, usually ranging from $10.00 to $18.00 per square foot depending on height and region."
          }
        },
        {
          "@type": "Question",
          "name": "Can I save or download my block wall estimation results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! You can instantly copy the text summary to your clipboard or download a fully styled PDF contractor report of your block, mortar, grout, and cost estimates."
          }
        }
      ]
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
