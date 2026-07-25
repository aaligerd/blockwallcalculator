import React from "react";

export default function SchemaMarkup() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Block Wall Calculator",
      "operatingSystem": "All",
      "applicationCategory": "UtilityApplication",
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
