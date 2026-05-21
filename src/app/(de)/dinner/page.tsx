import type { Metadata } from "next";
import Image from "next/image";
import Events from "@/components/sections/Events";
import Reservation from "@/components/sections/Reservation";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dinner & Abendessen",
  description:
    "Italienisches Dinner am Kurfuerstendamm in Berlin. Handgemachte Pasta, fangfrischer Fisch, erlesene Weine und DJ am Abend bei Casa Bellucci.",
  openGraph: {
    title: "Dinner & Abendessen | Casa Bellucci",
    description:
      "Abendessen ab 18 Uhr mit handgemachter Pasta, fangfrischem Fisch und sizilianischen Weinen. Freitags und samstags mit DJ.",
    url: "https://casabellucci.de/dinner",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://casabellucci.de/dinner",
    languages: {
      de: "https://casabellucci.de/dinner",
      en: "https://casabellucci.de/en/dinner",
      it: "https://casabellucci.de/it/cena",
    },
  },
};

export default function DinnerPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://casabellucci.de" },
    { name: "Dinner & Abendessen", url: "https://casabellucci.de/dinner" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <span className="font-cormorant text-sm uppercase tracking-[0.3em] text-terracotta">
              Ab 18:00 Uhr
            </span>
            <h1 className="mt-4 font-playfair text-5xl font-bold tracking-tight text-cream sm:text-6xl">
              Dinner &amp; Abendessen
            </h1>
            <div className="mt-4 h-px w-16 bg-terracotta/40" />
            <p className="mt-6 max-w-lg font-cormorant text-xl font-light leading-relaxed tracking-wide text-cream/70">
              Ein Abend bei Casa Bellucci beginnt mit handgemachter Pasta und
              fangfrischem Fisch, begleitet von erlesenen sizilianischen Weinen.
              Freitags und samstags sorgen unsere DJs fuer die passende
              Atmosphaere.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#reservieren"
                className="inline-block rounded-sm bg-terracotta px-8 py-3 font-cormorant text-base font-medium tracking-wider text-cream uppercase transition-colors duration-300 hover:bg-terracotta/90"
              >
                Tisch reservieren
              </a>
              <a
                href="/speisekarte"
                className="inline-block rounded-sm border border-cream/20 px-8 py-3 font-cormorant text-base font-medium tracking-wider text-cream uppercase transition-colors duration-300 hover:border-cream/40"
              >
                Abendkarte
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm">
            <Image
              src="/images/menu-dinner.jpg"
              alt="Dinner Atmosphaere bei Casa Bellucci"
              width={800}
              height={600}
              unoptimized
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Unsere Abendkarte
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-terracotta/40" />
          <p className="mx-auto mt-6 max-w-2xl font-cormorant text-lg font-light leading-relaxed text-charcoal/70">
            Saisonale Gerichte, inspiriert von der sizilianischen Kueche.
            Frischer Fisch, handgemachte Pasta und eine erlesene Auswahl
            italienischer Weine.
          </p>
          <a
            href="/speisekarte"
            className="mt-8 inline-block rounded-sm bg-terracotta px-8 py-3 font-cormorant text-base font-medium tracking-wider text-cream uppercase transition-colors duration-300 hover:bg-terracotta/90"
          >
            Karte ansehen
          </a>
        </div>
      </section>

      <Events locale="de" />
      <Reservation locale="de" />
    </>
  );
}
