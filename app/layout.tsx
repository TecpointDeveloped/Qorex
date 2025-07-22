import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qorex Group Inc - Importadora y distribuidora de marcas tecnológicas premium",
  description: "Empresa importadora y distribuidora especializada en marcas y accesorios tecnológicos de alta calidad y alto valor. Ofrecemos productos innovadores y exclusivos para clientes exigentes en el mercado tecnológico. / Importer and distributor specialized in premium technology brands and high-end accessories. We offer innovative and exclusive products for demanding customers in the tech market.",
  keywords: [
    "importadora tecnológica",
    "distribución de accesorios",
    "marcas premium",
    "tecnología de alta calidad",
    "productos innovadores",
    "accesorios electrónicos",
    "Qorex Group",
    "importer",
    "distributor",
    "premium tech brands",
    "high-end accessories",
    "innovative products",
    "exclusive technology",
    "electronics"
  ],
  alternates: {
    canonical: "https://qorexgroup.com"
  },
  category: "business",
  authors: [
    {
      name: "Qorex Group Inc",
      url: "https://qorexgroup.com",
    },
  ],
  creator: "Qorex Group Inc",
  openGraph: {
    title: "Qorex Group Inc - Importadora y distribuidora de marcas tecnológicas premium",
    description: "Empresa importadora y distribuidora especializada en marcas y accesorios tecnológicos de alta calidad y alto valor. Ofrecemos productos innovadores y exclusivos para clientes exigentes en el mercado tecnológico. / Importer and distributor specialized in premium technology brands and high-end accessories. We offer innovative and exclusive products for demanding customers in the tech market.",
    url: "https://qorexgroup.com",
    siteName: "Qorex Group Inc",
    images: [
      {
        url: "https://qorex.vercel.app/qorex_black.png",
        width: 1200,
        height: 630,
        alt: "Qorex Group Inc - Importadora y distribuidora de marcas tecnológicas premium",
      },
    ],
    locale: "es_HN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qorex Group Inc - Importadora y distribuidora de marcas tecnológicas premium",
    description: "Empresa importadora y distribuidora especializada en marcas y accesorios tecnológicos de alta calidad y alto valor. Ofrecemos productos innovadores y exclusivos para clientes exigentes en el mercado tecnológico. / Importer and distributor specialized in premium technology brands and high-end accessories. We offer innovative and exclusive products for demanding customers in the tech market.",
    creator: "@qorexgroup",
    images: ["https://qorex.vercel.app/qorex_black.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noimageindex: false,
    noarchive: false,
    nosnippet: false,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
