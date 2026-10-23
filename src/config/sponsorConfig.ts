/**
 * Sponsor Ad Configuration for BlockWallCalculator.com
 * 
 * Manage top-banner sponsorship slots, pricing, tracking parameters,
 * and Google Form links from this single file.
 */

export interface SponsorUtmParams {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

export interface ActiveSponsor {
  name: string;
  tagline?: string;
  badgeText?: string; // e.g. "Featured Sponsor", "Partner", "Ad"
  destinationUrl: string; // Target landing page
  desktopBannerUrl?: string; // 728x90 or wide banner image
  mobileBannerUrl?: string; // 320x100 or 300x100 banner image
  altText?: string;
  startDate?: string;
  endDate?: string;
  utmParams?: SponsorUtmParams;
}

export interface SponsorConfig {
  /**
   * Set to `true` when a sponsor is active.
   * Set to `false` to display the high-converting self-serve "$3/day Claim this Slot" CTA.
   */
  isActive: boolean;
  
  /**
   * Google Form URL for $3/day Ad Slot reservations.
   * Paste your Google Form link here (e.g., https://forms.gle/... or https://docs.google.com/forms/d/e/.../viewform).
   * All responses are securely collected directly into your Google Sheet!
   */
  googleFormUrl: string;

  /**
   * Google Form URL for general site inquiries and feedback.
   */
  contactGoogleFormUrl: string;

  /**
   * Contact email for direct mail inquiries
   */
  contactEmail: string;

  /**
   * Pricing tiers for the banner slot
   */
  pricing: {
    dailyRate: number; // $3/day
    monthlyRate: number; // $79/month discounted
    quarterlyRate: number; // $199/3-months
  };

  /**
   * Active sponsor details (rendered when isActive is true)
   */
  activeSponsor?: ActiveSponsor;
}

export const sponsorConfig: SponsorConfig = {
  // Set to true once an advertiser books and provides creatives
  isActive: false,

  // Google Form URL for inquiries & reservations (responses go to Google Sheet)
  googleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc60V2Wro6QQTgTdn66tglVjPJBZ8A4aVcycKA8OqditEeMAg/viewform",

  // General Contact Google Form URL
  contactGoogleFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc60V2Wro6QQTgTdn66tglVjPJBZ8A4aVcycKA8OqditEeMAg/viewform",

  contactEmail: "workingsubhro@gmail.com",

  pricing: {
    dailyRate: 3,
    monthlyRate: 79,
    quarterlyRate: 199,
  },

  // Active sponsor campaign details (Active when isActive: true)
  activeSponsor: {
    name: "Apex Masonry & Tool Supply",
    tagline: "Commercial Grade CMU Blocks, Mortar Mix & Trowels — Ship Direct to Jobsite",
    badgeText: "Featured Masonry Partner",
    destinationUrl: "https://example.com/masonry-deals",
    desktopBannerUrl: "", // Provide 728x90 image URL or leave empty for branded card format
    mobileBannerUrl: "", // Optional 320x100 mobile image URL
    altText: "Apex Masonry & Tool Supply - Commercial Masonry Materials",
    utmParams: {
      source: "blockwallcalculator.com",
      medium: "banner",
      campaign: "top_header_sponsor",
      content: "apex_masonry",
    },
  },
};

/**
 * Helper to construct an outbound destination URL with clean UTM tracking parameters.
 * Guarantees that the advertiser can verify and attribute every click in their own Google Analytics!
 */
export function buildSponsorUrl(
  destinationUrl: string,
  customUtm?: SponsorUtmParams,
  sponsorName?: string
): string {
  if (!destinationUrl) return "#";

  const defaultSource = "blockwallcalculator.com";
  const defaultMedium = "banner";
  const defaultCampaign = "top_header_sponsor";
  const defaultContent = (sponsorName || "direct_sponsor").toLowerCase().replace(/[^a-z0-9_-]/g, "_");

  const source = customUtm?.source || defaultSource;
  const medium = customUtm?.medium || defaultMedium;
  const campaign = customUtm?.campaign || defaultCampaign;
  const content = customUtm?.content || defaultContent;
  const term = customUtm?.term;

  try {
    const url = new URL(destinationUrl);
    url.searchParams.set("utm_source", source);
    url.searchParams.set("utm_medium", medium);
    url.searchParams.set("utm_campaign", campaign);
    url.searchParams.set("utm_content", content);
    if (term) url.searchParams.set("utm_term", term);
    return url.toString();
  } catch {
    // If not a full absolute URL, manually append query parameters
    const separator = destinationUrl.includes("?") ? "&" : "?";
    const params = new URLSearchParams({
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
      utm_content: content,
    });
    if (term) params.set("utm_term", term);
    return `${destinationUrl}${separator}${params.toString()}`;
  }
}

/**
 * Pre-filled email mailto generator for sponsors
 */
export function getSponsorInquiryMailto(): string {
  const email = sponsorConfig.contactEmail;
  const subject = encodeURIComponent("Inquiry: Top Banner Ad Slot ($3/Day) on BlockWallCalculator.com");
  const body = encodeURIComponent(
    `Hi BlockWallCalculator Team,\n\nI am interested in advertising on your top banner ad slot ($3/day).\n\n` +
    `Company Name:\n` +
    `Website URL:\n` +
    `Target Duration (e.g. 7 Days, 30 Days, or Monthly):\n` +
    `Preferred Start Date:\n` +
    `Additional Questions:\n\n` +
    `Looking forward to hearing from you!`
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
}
