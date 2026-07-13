import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const SITE_URL = "https://karoseriberdikariraya.com";
const GTM_ID = "GTM-WQS3J6SP";

// Self-hosted fonts (via @fontsource) so the build never depends on a
// network fetch to Google Fonts at build time.
const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [
    { path: "../fonts/montserrat-200.woff2", weight: "200", style: "normal" },
    { path: "../fonts/montserrat-300.woff2", weight: "300", style: "normal" },
    { path: "../fonts/montserrat-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/montserrat-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/montserrat-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/montserrat-800.woff2", weight: "800", style: "normal" },
  ],
});

const libreFranklin = localFont({
  variable: "--font-libre-franklin",
  display: "swap",
  src: [
    { path: "../fonts/libre-franklin-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/libre-franklin-500.woff2", weight: "500", style: "normal" },
  ],
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Karoseri Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Body Custom" } },
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
      className={`${montserrat.variable} ${libreFranklin.variable} antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="bg-background text-on-surface selection:bg-secondary-container selection:text-primary font-body-md overflow-x-hidden min-h-screen flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}
