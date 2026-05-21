import type { Metadata } from "next";
import MenuSection from "@/components/sections/MenuSection";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Speisekarte",
  description:
    "Unsere Speisekarte mit handgemachter Pasta, fangfrischem Fisch, erstklassigen Weinen und saisonalen Spezialitaeten. Fruehstueck, Mittag- und Abendkarte.",
  openGraph: {
    title: "Speisekarte | Casa Bellucci",
    description:
      "Handgemachte Pasta, fangfrischer Fisch und saisonale Spezialitaeten am Kurfuerstendamm.",
    url: "https://casabellucci.de/speisekarte",
    locale: "de_DE",
  },
  alternates: {
    canonical: "https://casabellucci.de/speisekarte",
    languages: {
      de: "https://casabellucci.de/speisekarte",
      en: "https://casabellucci.de/en/menu",
      it: "https://casabellucci.de/it/menu",
    },
  },
};

export default function SpeisekartePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://casabellucci.de" },
    { name: "Speisekarte", url: "https://casabellucci.de/speisekarte" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <section className="bg-charcoal pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="font-playfair text-5xl font-bold tracking-tight text-cream sm:text-6xl">
            Unsere Karte
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-terracotta/60" />
          <p className="mx-auto mt-6 max-w-2xl font-cormorant text-xl font-light leading-relaxed tracking-wide text-cream/70">
            Saisonale Gerichte, handgemachte Pasta und fangfrischer Fisch.
            Entdecken Sie die Aromen Siziliens.
          </p>
        </div>
      </section>

      <MenuSection locale="de" />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-cormorant text-base leading-relaxed text-charcoal/60">
            Alle Preise in Euro inkl. MwSt. Preisaenderungen vorbehalten.
            Bei Allergien oder Unvertraeglichkeiten sprechen Sie uns bitte an.
            Wir informieren Sie gerne ueber Inhaltsstoffe und Allergene.
          </p>
        </div>
      </section>
    </>
  );
}
