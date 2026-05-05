import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Toiture, façade, nettoyage drone & étanchéité`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    locale: "fr_FR",
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Expertise familiale depuis plus de 20 ans`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${inter.variable}`}>
      <body className="noise-bg min-h-dvh font-sans">
        <JsonLd />
        <a href="#contenu" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
