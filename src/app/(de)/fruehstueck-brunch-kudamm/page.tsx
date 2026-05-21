import type { Metadata } from "next";
import Image from "next/image";
import Reservation from "@/components/sections/Reservation";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { basePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fruehstueck & Brunch am Kudamm",
  description:
    "Italienisches Fruehstueck und Brunch am Kurfuerstendamm in Berlin. Frische Cornetti, Eggs Benedict alla Siciliana, hausgemachtes Granita und mehr bei Casa Bellucci.",
  openGraph: {
    title: "Fruehstueck & Brunch am Kudamm | Casa Bellucci",
    description:
      "Italienisches Fruehstueck und Brunch taeglich ab 09:00 Uhr. Cornetti, Eggs Benedict alla Siciliana und aromatischer Espresso.",
    url: "https://casabellucci.de/fruehstueck-brunch-kudamm",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://casabellucci.de/fruehstueck-brunch-kudamm",
    languages: {
      de: "https://casabellucci.de/fruehstueck-brunch-kudamm",
      en: "https://casabellucci.de/en/breakfast-brunch",
      it: "https://casabellucci.de/it/colazione-brunch",
    },
  },
};

export default function FruehstueckPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://casabellucci.de" },
    { name: "Fruehstueck & Brunch", url: "https://casabellucci.de/fruehstueck-brunch-kudamm" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <section className="relative pt-32 pb-20 bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <span className="font-cormorant text-sm uppercase tracking-[0.3em] text-terracotta">
              Taeglich ab 09:00 Uhr
            </span>
            <h1 className="mt-4 font-playfair text-5xl font-bold tracking-tight text-charcoal sm:text-6xl">
              Fruehstueck &amp; Brunch am Kudamm
            </h1>
            <div className="mt-4 h-px w-16 bg-terracotta/40" />
            <p className="mt-6 max-w-lg font-cormorant text-xl font-light leading-relaxed tracking-wide text-charcoal/70">
              Starten Sie den Tag mit einem italienischen Fruehstueck am
              Kurfuerstendamm. Frische Cornetti, Eggs Benedict alla Siciliana,
              hausgemachtes Granita und aromatischer Espresso.
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
                className="inline-block rounded-sm border border-charcoal/20 px-8 py-3 font-cormorant text-base font-medium tracking-wider text-charcoal uppercase transition-colors duration-300 hover:border-charcoal/40"
              >
                Fruehstueckskarte
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm">
            <Image
              src={`${basePath}/images/menu-breakfast.jpg`}
              alt="Italienisches Fruehstueck bei Casa Bellucci"
              width={800}
              height={600}
              unoptimized
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Unsere Fruehstueckskarte
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-terracotta/40" />
          <p className="mx-auto mt-6 max-w-2xl font-cormorant text-lg font-light leading-relaxed text-cream/70">
            Von klassisch italienisch bis kreativ interpretiert. Unsere
            Fruehstueckskarte verbindet sizilianische Traditionen mit frischen,
            saisonalen Zutaten.
          </p>
          <a
            href="/speisekarte"
            className="mt-8 inline-block rounded-sm bg-terracotta px-8 py-3 font-cormorant text-base font-medium tracking-wider text-cream uppercase transition-colors duration-300 hover:bg-terracotta/90"
          >
            Karte ansehen
          </a>
        </div>
      </section>

      <Reservation locale="de" />
    </>
  );
}
