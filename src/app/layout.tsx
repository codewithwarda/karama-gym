import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fitness District — Karama's Biggest 24/7 Warehouse Gym, Dubai",
  description:
    "Fitness District Gym in Karama, Dubai. 100+ premium machines, sauna, ice bath, no slot system. Train anytime, 24/7. Near Karama Post Office.",
  keywords: [
    "gym Karama Dubai",
    "24/7 gym Dubai",
    "warehouse gym Dubai",
    "Fitness District",
    "gym near Karama Post Office",
    "sauna ice bath gym Dubai",
    "personal trainer Dubai",
    "no slot gym Dubai",
  ],
  openGraph: {
    title: "Fitness District — Karama's Biggest 24/7 Warehouse Gym",
    description:
      "Train on 100+ premium machines, recover with sauna and ice bath. Open 24/7, no slot system. Karama, Dubai.",
    url: "https://fitnessdistrict.ae",
    siteName: "Fitness District",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitness District — Karama's Biggest 24/7 Warehouse Gym",
    description:
      "Train on 100+ premium machines, recover with sauna and ice bath. Open 24/7, no slot system. Karama, Dubai.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://fitnessdistrict.ae" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-brand-black text-brand-off-white font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
