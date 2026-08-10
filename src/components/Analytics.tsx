import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const gtmId = (process.env.NEXT_PUBLIC_GTM_ID || "GTM-MWM3G2H9").trim();
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

/**
 * Prefer GTM only (add GA4 as a tag inside GTM).
 * If GTM is not set yet, fall back to direct GA4.
 * Do not load both at once — that double-counts pageviews.
 */
export default function Analytics() {
  if (gtmId) {
    return <GoogleTagManager gtmId={gtmId} />;
  }

  if (gaId) {
    return <GoogleAnalytics gaId={gaId} />;
  }

  return null;
}
