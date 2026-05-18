import type { Metadata } from "next";
import { Inter, Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://www.berdikariraya.com";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Berdikari Raya Service | Jasa Karoseri Truck Bekasi & JABODETABEK",
    template: "%s | Berdikari Raya Service",
  },
  description:
    "Berdikari Raya Service — jasa karoseri truck terpercaya di Bekasi, JABODETABEK, dan Bandung. Melayani pembuatan fuel truck, dump truck, box aluminium, wing box, water sprayer, truck tangki, repair body, dan service hydraulic system sejak 2012.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} dark antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-surface selection:bg-secondary-container selection:text-white font-body-md overflow-x-hidden min-h-screen flex flex-col">
        {children}
        {/* Sticky WhatsApp Button */}
        <a
          href="https://wa.me/6281291578404"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat WhatsApp Berdikari Raya Service"
          className="wa-fab"
        >
          {/* Pulse ring */}
          <span className="wa-fab-pulse" />
          <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
