import type { Metadata } from "next";
import { Montserrat, Libre_Franklin } from "next/font/google";
import "./globals.css";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const SITE_URL = "https://www.berdikariraya.com";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "700", "800"],
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Berdikari Raya Service | Jasa Karoseri Truck Bekasi & JABODETABEK",
    template: "%s | Berdikari Raya Service",
  },
  description:
    "Berdikari Raya Service — jasa karoseri truck terpercaya di Bekasi, JABODETABEK, dan Bandung. Melayani pembuatan fuel truck, dump truck, box aluminium, wing box, water sprayer, truck tangki, repair body, and service hydraulic system sejak 2012.",
  keywords: [
    "karoseri truck Bekasi",
    "jasa karoseri JABODETABEK",
    "karoseri dump truck",
    "karoseri fuel truck",
    "karoseri box aluminium",
    "karoseri wing box",
    "karoseri water sprayer",
    "truck tangki",
    "repair body truck",
    "service hydraulic system",
    "Berdikari Raya Service",
    "karoseri Bandung",
  ],
  authors: [{ name: "Berdikari Raya Service", url: SITE_URL }],
  creator: "Berdikari Raya Service",
  publisher: "Berdikari Raya Service",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Berdikari Raya Service",
    title: "Berdikari Raya Service | Jasa Karoseri Truck Bekasi & JABODETABEK",
    description:
      "Jasa karoseri truck profesional di Bekasi & JABODETABEK: fuel truck, dump truck, box aluminium, wing box, repair body, dan service hydraulic system. Pengalaman 10+ tahun, 500+ unit selesai.",
    images: [{ url: "/logo/berdikariraya.png", width: 1200, height: 630, alt: "Berdikari Raya Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berdikari Raya Service | Jasa Karoseri Truck",
    description: "Spesialis karoseri kendaraan niaga di Bekasi, JABODETABEK & Bandung.",
    images: ["/logo/berdikariraya.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Berdikari Raya Service",
  description:
    "Jasa karoseri truck dan repair body kendaraan niaga di Bekasi, JABODETABEK, dan Bandung. Melayani pembuatan fuel truck, dump truck, box aluminium, wing box, water sprayer, truck tangki, dan service hydraulic system.",
  url: SITE_URL,
  telephone: "+6281291578404",
  email: "slamet.mulyono@berdikariraya.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Macem No. 27, RT 002/001, Cikiwul",
    addressLocality: "Bantar Gebang",
    addressRegion: "Bekasi",
    postalCode: "17152",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.3093224,
    longitude: 106.9818833,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "15:00" },
  ],
  priceRange: "$$",
  image: `${SITE_URL}/logo/berdikariraya.png`,
  sameAs: [],
  areaServed: ["Bekasi", "Jakarta", "Bogor", "Depok", "Tangerang", "Bandung"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Karoseri",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Karoseri Fuel Truck" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Karoseri Dump Truck" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Karoseri Box Aluminium" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Karoseri Wing Box" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Repair Body Custom" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Service Hydraulic System" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${libreFranklin.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-secondary-container selection:text-primary font-body-md overflow-x-hidden min-h-screen flex flex-col">
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}
