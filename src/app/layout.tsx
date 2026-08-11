import type { Metadata, Viewport } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeScript from "@/components/ThemeScript";
import WhatsAppButton from "@/components/WhatsAppButton";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${montserrat.variable} h-full scroll-smooth scroll-pt-24`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/icon-48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM site summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM full reference" />
      </head>
      <body className="flex min-h-full flex-col bg-background pb-20 font-sans text-foreground antialiased md:pb-0">
        <Analytics />
        <ScrollToTop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
