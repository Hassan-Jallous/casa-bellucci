import type { Metadata } from "next";
import { playfair, cormorant } from "@/lib/fonts";
import { generateRestaurantSchema, generateLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://casabellucci.de"),
  title: "Casa Bellucci",
  description:
    "Casa Bellucci, authentische italienische Kueche am Kurfuerstendamm in Berlin. Handgemachte Pasta, erstklassige Weine und mediterranes Ambiente.",
  openGraph: {
    title: "Casa Bellucci | Italienisches Restaurant Berlin Kudamm",
    description:
      "Authentische italienische Kueche am Kurfuerstendamm. Handgemachte Pasta, Sommerterrasse, Events und DJ.",
    url: "https://casabellucci.de",
    siteName: "Casa Bellucci",
    locale: "de_DE",
    alternateLocale: ["en_US", "it_IT"],
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Casa Bellucci, Italienisches Restaurant Berlin Kudamm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa Bellucci | Italienisches Restaurant Berlin Kudamm",
    description:
      "Authentische italienische Kueche am Kurfuerstendamm. Handgemachte Pasta, Sommerterrasse, Events und DJ.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "https://casabellucci.de",
    languages: {
      de: "https://casabellucci.de",
      en: "https://casabellucci.de/en",
      it: "https://casabellucci.de/it",
    },
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const restaurantSchema = generateRestaurantSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html
      lang="de"
      className={`${playfair.variable} ${cormorant.variable} h-full overflow-x-hidden antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-cream text-charcoal">
        <main className="flex-1">{children}</main>
        <div className="film-grain" aria-hidden="true" />
      </body>
    </html>
  );
}
