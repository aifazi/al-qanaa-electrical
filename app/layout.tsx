import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://alqanaa-electrical.ae";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Al Qanaa Electrical Repairing Workshop | Electrical & Appliance Repair Al Ain",
    template: "%s | Al Qanaa Electrical Repairing Workshop",
  },
  description:
    "Trusted electrical & appliance repair in Al Ain & Abu Dhabi. AC repair, circuit breakers, wiring fixes and more. Free diagnostic check. Rated 4.9★ on Google — call +971 52 327 6374.",
  keywords: [
    "electrical repair Al Ain",
    "appliance repair Abu Dhabi",
    "AC repair Al Ain",
    "circuit breaker repair",
    "wiring fix Abu Dhabi",
    "emergency electrician Al Ain",
    "Al Qanaa Electrical",
  ],
  authors: [{ name: "Al Qanaa Electrical Repairing Workshop" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteUrl,
    siteName: "Al Qanaa Electrical Repairing Workshop",
    title:
      "Al Qanaa Electrical Repairing Workshop | Electrical & Appliance Repair Al Ain",
    description:
      "Free diagnostic check on all appliances. AC repair, circuit breakers, wiring fixes. Rated 4.9★ on Google. Serving Al Ain & Abu Dhabi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Qanaa Electrical Repairing Workshop — Al Ain",
    description:
      "Free diagnostic check on all appliances. Rated 4.9★ on Google. Call +971 52 327 6374.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1b33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-bronze focus:px-4 focus:py-2 focus:text-navy-900"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
