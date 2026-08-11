import Script from "next/script";

const gtmId = (process.env.NEXT_PUBLIC_GTM_ID || "GTM-MWM3G2H9").trim();
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

/**
 * Prefer GTM only (add GA4 as a tag inside GTM).
 * If GTM is not set yet, fall back to direct GA4.
 * Do not load both at once — that double-counts pageviews.
 * Uses lazyOnload so the GTM container loads after the page is fully
 * interactive and the browser is idle, reducing TBT on mobile.
 */
export default function Analytics() {
  if (gtmId) {
    return (
      <>
        <Script
          id="gtm-loader"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </>
    );
  }

  if (gaId) {
    return (
      <>
        <Script
          id="ga-script"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
        <Script
          id="ga-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
          }}
        />
      </>
    );
  }

  return null;
}
